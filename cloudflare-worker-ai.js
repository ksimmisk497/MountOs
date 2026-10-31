// Cloudflare Worker - FREE version using Cloudflare Workers AI (no API key needed).
// Setup: paste this whole file into the Worker editor, then add a Workers AI binding named AI
// (Settings > Bindings > Add > Workers AI, variable name: AI). Then Deploy.

// ---- Settings you can change ----
// Tries these in order until one works.
const MODELS = ["@cf/meta/llama-3.1-8b-instruct", "@cf/meta/llama-3.2-3b-instruct", "@cf/meta/llama-3.1-8b-instruct-fast"];
const SYSTEM = "You are a friendly, helpful AI assistant for students. Keep answers clear and short. Be age-appropriate and respectful. If asked for something unsafe or inappropriate, politely decline and suggest talking to a trusted adult or teacher.";
const MAX_MESSAGES_PER_10_MIN = 15;   // per visitor (best effort)
const MAX_REPLY_TOKENS = 500;

// Picture making (also free, uses the same Workers AI binding)
const IMAGE_MODEL = "@cf/black-forest-labs/flux-1-schnell";
const IMAGE_FALLBACK_MODEL = "@cf/bytedance/stable-diffusion-xl-lightning";
const MAX_IMAGES_PER_10_MIN = 5;      // per visitor (best effort) - pictures use more of the free allowance
// Words that are not allowed in picture requests (not perfect - add more if you like)
const BLOCKED_WORDS = /\b(nude|naked|nsfw|porn\w*|sexual\w*|erotic\w*|gore|gory|beheading|suicide)\b/i;
// ---------------------------------

const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Ask AI</title>
<style>
:root{--text:#f3eeff;--muted:#b9aedd;--accent:#8a5cff;--accent2:#e14fb3;--border:rgba(190,160,255,.28);--glass:rgba(20,10,45,.62);--user:linear-gradient(135deg,#7b4dff,#c84fc0)}
*{box-sizing:border-box}
html,body{height:100%;margin:0}
body{color:var(--text);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;display:flex;flex-direction:column;overflow:hidden;
background:
 radial-gradient(ellipse at 20% 20%,rgba(120,60,220,.55),transparent 55%),
 radial-gradient(ellipse at 85% 25%,rgba(40,110,255,.40),transparent 50%),
 radial-gradient(ellipse at 70% 90%,rgba(230,70,170,.38),transparent 55%),
 radial-gradient(ellipse at 10% 95%,rgba(30,180,220,.28),transparent 50%),
 #05010f}
#stars{position:fixed;inset:0;width:100%;height:100%;z-index:0}
header,main,form{position:relative;z-index:1}
header{padding:8px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:var(--glass);backdrop-filter:blur(6px)}
h1{font-size:15px;margin:0;font-weight:600}
header button{background:none;border:1px solid var(--border);color:var(--muted);border-radius:8px;padding:6px 12px;cursor:pointer;font:inherit;font-size:14px;margin-right:36px}
main{flex:1;min-height:0;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px}
.empty{margin:auto;text-align:center;color:var(--muted)}
.empty h2{color:var(--text);font-size:20px;margin:0 0 6px;text-shadow:0 0 18px rgba(170,120,255,.8)}
.msg{max-width:88%;padding:10px 14px;border-radius:14px;white-space:pre-wrap;word-wrap:break-word}
.msg.user{align-self:flex-end;background:var(--user);color:#fff}
.msg.ai{align-self:flex-start;background:var(--glass);border:1px solid var(--border);backdrop-filter:blur(6px)}
.msg.err{color:#ff9aa8}
form{display:flex;gap:8px;padding:8px 12px 12px}
textarea{flex:1;resize:none;border:1px solid var(--border);background:var(--glass);color:var(--text);border-radius:12px;padding:12px 14px;font:inherit;max-height:140px;backdrop-filter:blur(6px)}
textarea::placeholder{color:var(--muted)}
textarea:focus{outline:2px solid var(--accent);outline-offset:-1px}
#send{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:0;border-radius:12px;padding:0 20px;font:inherit;font-weight:600;cursor:pointer;box-shadow:0 0 16px rgba(160,100,255,.55)}
#send:disabled{opacity:.5;cursor:default}
#imgbtn{background:var(--glass);border:1px solid var(--border);color:var(--text);border-radius:12px;padding:0 14px;font-size:18px;cursor:pointer;backdrop-filter:blur(6px)}
#imgbtn.on{background:linear-gradient(135deg,var(--accent),var(--accent2));box-shadow:0 0 16px rgba(160,100,255,.55)}
.msg img{display:block;width:100%;max-width:420px;border-radius:10px;margin-top:4px}
.msg .tip{font-size:12px;color:var(--muted);margin-top:6px}
</style>
</head>
<body>
<canvas id="stars" aria-hidden="true"></canvas>
<header><h1>Ask AI</h1><button id="clear" type="button">New chat</button></header>
<main id="log"></main>
<form id="f">
  <textarea id="q" rows="1" placeholder="Ask anything…" autofocus></textarea>
  <button id="imgbtn" type="button" title="Make a picture" aria-label="Make a picture">🎨</button>
  <button id="send" type="submit">Send</button>
</form>
<script>
const API_URL = "/api/chat"; // change to a full URL if the server lives on another domain
const log = document.getElementById("log"), q = document.getElementById("q"), send = document.getElementById("send");
let history = [], busy = false;

function showEmpty() {
  log.innerHTML = '<div class="empty"><h2>What can I help with?</h2><div>Type a question below, or tap 🎨 to make a picture. No sign-in needed.</div></div>';
}
function add(role, text, cls) {
  const e = log.querySelector(".empty"); if (e) e.remove();
  const d = document.createElement("div");
  d.className = "msg " + role + (cls ? " " + cls : "");
  d.textContent = text;
  log.appendChild(d); log.scrollTop = log.scrollHeight;
  return d;
}
const IMAGE_URL = "/api/image";
const imgBtn = document.getElementById("imgbtn");
let imageMode = false;
imgBtn.onclick = () => {
  imageMode = !imageMode;
  imgBtn.classList.toggle("on", imageMode);
  q.placeholder = imageMode ? "Describe a picture…" : "Ask anything…";
  q.focus();
};

async function ask() {
  let text = q.value.trim(); if (!text || busy) return;
  const wantImage = imageMode || /^\\/image\\s+/i.test(text);   // 🎨 button on, or type "/image a red dragon"
  if (wantImage) text = text.replace(/^\\/image\\s+/i, "");
  busy = true; send.disabled = true; q.value = ""; q.style.height = "auto";
  add("user", (wantImage ? "🎨 " : "") + text);
  history.push({ role: "user", content: wantImage ? "Make an image: " + text : text });
  setLink(1); // start drawing constellations
  const out = add("ai", wantImage ? "Painting… this can take a few seconds." : "Thinking…");
  try {
    if (wantImage) {
      const r = await fetch(IMAGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Image request failed.");
      out.textContent = "";
      const img = new Image();
      img.alt = text; img.src = data.image;
      img.onload = () => { log.scrollTop = log.scrollHeight; };
      out.appendChild(img);
      const tip = document.createElement("div");
      tip.className = "tip"; tip.textContent = "Press and hold the picture to save it.";
      out.appendChild(tip);
      history.push({ role: "assistant", content: "[I made an image of: " + text + "]" });
    } else {
      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Request failed.");
      out.textContent = data.text;
      history.push({ role: "assistant", content: data.text });
    }
  } catch (e) {
    out.textContent = e.message || "Something went wrong. Please try again.";
    out.classList.add("err"); history.pop();
  }
  busy = false; send.disabled = false; q.focus();
}
document.getElementById("f").addEventListener("submit", e => { e.preventDefault(); ask(); });
q.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } });
q.addEventListener("input", () => { q.style.height = "auto"; q.style.height = Math.min(q.scrollHeight, 140) + "px"; });
document.getElementById("clear").onclick = () => { history = []; showEmpty(); };
showEmpty();

/* ---------- Galaxy stars: when you ask something, several constellations draw themselves, one link at a time each ---------- */
const canvas = document.getElementById("stars"), ctx = canvas.getContext("2d");
const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const NUM_CONSTELLATIONS = 5;  // how many constellations appear per question
const SEG_MS = 1500;           // time to draw ONE link (bigger number = slower)
const MAX_LINKS = 12;          // links in each constellation
const STAGGER_MS = 2500;       // wait between one constellation starting and the next
const HOLD_MS = 4000;          // how long each stays lit after it is finished
const FADE_MS = 2500;          // how long it takes to fade away
let stars = [], chains = [], raf = 0;

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.min(500, Math.floor(innerWidth * innerHeight / 1800));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: Math.random() * 1.4 + 0.5, phase: Math.random() * Math.PI * 2, speed: Math.random() * 0.02 + 0.005,
    hue: Math.random() < 0.2 ? 280 : (Math.random() < 0.5 ? 210 : 0),
  }));
  chains = [];
}

// Build several paths of stars. Each path starts far from the others, then hops to nearby unused stars.
function buildChains() {
  chains = [];
  if (!stars.length) return;
  const used = new Set(), starts = [], now = performance.now();
  for (let c = 0; c < NUM_CONSTELLATIONS; c++) {
    let best = -1, bestD = -1;                       // try a few random stars, keep the one farthest from other starts
    for (let t = 0; t < 12; t++) {
      const i = Math.floor(Math.random() * stars.length);
      if (used.has(i)) continue;
      const d = starts.length ? Math.min(...starts.map(j => Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y))) : 1e9;
      if (d > bestD) { bestD = d; best = i; }
    }
    if (best < 0) break;
    starts.push(best);
    let cur = best; used.add(cur);
    const nodes = [cur];
    while (nodes.length <= MAX_LINKS) {
      const near = [];
      for (let j = 0; j < stars.length; j++) {
        if (used.has(j)) continue;
        const d = Math.hypot(stars[cur].x - stars[j].x, stars[cur].y - stars[j].y);
        if (d < 170) near.push([d, j]);
      }
      if (!near.length) break;
      near.sort((p, q) => p[0] - q[0]);
      cur = near[Math.floor(Math.random() * Math.min(3, near.length))][1];
      used.add(cur); nodes.push(cur);
    }
    if (nodes.length > 1) chains.push({ nodes, startAt: now + c * STAGGER_MS });
  }
}

function draw() {
  raf = 0;
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const now = performance.now(), lit = new Map();    // star index -> how strongly it glows
  ctx.lineWidth = 1.3; ctx.lineCap = "round";
  const pulse = 0.88 + 0.12 * Math.sin(now / 300);

  chains = chains.filter(c => {
    const elapsed = still ? 1e9 : now - c.startAt;
    if (elapsed < 0) return true;                    // not started yet
    const fadeStart = (c.nodes.length - 1) * SEG_MS + HOLD_MS;
    const alpha = still || elapsed < fadeStart ? 1 : 1 - (elapsed - fadeStart) / FADE_MS;
    if (alpha <= 0) return false;                    // finished and faded: remove it
    ctx.strokeStyle = "rgba(210,180,255," + (0.85 * alpha * pulse) + ")";
    for (let k = 0; k < c.nodes.length - 1; k++) {
      const p = Math.min(1, Math.max(0, (elapsed - k * SEG_MS) / SEG_MS));
      if (p <= 0) break;                             // links appear strictly one after another
      const A = stars[c.nodes[k]], B = stars[c.nodes[k + 1]];
      ctx.beginPath(); ctx.moveTo(A.x, A.y);
      ctx.lineTo(A.x + (B.x - A.x) * p, A.y + (B.y - A.y) * p);
      ctx.stroke();
      lit.set(c.nodes[k], alpha);
      if (p >= 1) lit.set(c.nodes[k + 1], alpha);
    }
    return true;
  });

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    if (!still) s.phase += s.speed;
    const on = lit.get(i) || 0;                      // connected stars glow bigger
    const a = Math.min(1, 0.45 + 0.55 * Math.abs(Math.sin(s.phase)) + 0.5 * on);
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r * (1 + 1.2 * on), 0, Math.PI * 2);
    ctx.fillStyle = s.hue ? "hsla(" + s.hue + ",90%,85%," + a + ")" : "rgba(255,255,255," + a + ")";
    ctx.fill();
  }
  if (!still) raf = requestAnimationFrame(draw);
}
function kick() { if (!raf) raf = requestAnimationFrame(draw); }
function setLink(v) {                                // called when a question is sent
  if (v && chains.length === 0) {                    // if a set is already drawing, let it finish
    buildChains();
    if (still) setTimeout(() => { chains = []; kick(); }, HOLD_MS + 1000);
  }
  kick();
}
addEventListener("resize", () => { resize(); kick(); });
resize(); kick();
</script>
</body>
</html>
`;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", ...CORS } });

const hits = new Map();
function limited(key, max) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter(t => now - t < 600000);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > max;
}

function toBase64(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

// Makes a picture and returns it as a data: URL the page can show.
async function makeImage(env, prompt) {
  let lastErr = "";
  try {
    const r = await env.AI.run(IMAGE_MODEL, { prompt, steps: 4 });
    if (r && r.image) return "data:image/jpeg;base64," + r.image;
  } catch (err) { lastErr = String((err && err.message) || err); }
  try {
    const r2 = await env.AI.run(IMAGE_FALLBACK_MODEL, { prompt });
    const bytes = new Uint8Array(await new Response(r2).arrayBuffer());
    if (bytes.length) return "data:image/png;base64," + toBase64(bytes);
  } catch (err) { lastErr = String((err && err.message) || err); }
  throw new Error(lastErr || "no picture");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      return new Response(PAGE, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    if (request.method === "POST" && url.pathname === "/api/chat") {
      if (!env.AI) return json({ error: "Missing the Workers AI binding named AI." }, 500);
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      if (limited("c:" + ip, MAX_MESSAGES_PER_10_MIN)) return json({ error: "Too many messages. Please wait a few minutes." }, 429);
      try {
        const { messages } = await request.json();
        if (!Array.isArray(messages) || !messages.length) return json({ error: "No messages." }, 400);
        const clean = messages.slice(-10).map(m => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: String(m.content).slice(0, 2000),
        }));
        let text = "", lastErr = "";
        for (const model of MODELS) {
          try {
            const result = await env.AI.run(model, {
              messages: [{ role: "system", content: SYSTEM }, ...clean],
              max_tokens: MAX_REPLY_TOKENS,
            });
            text = (result && result.response) ? String(result.response).trim() : "";
            if (text) break;
          } catch (err) {
            lastErr = String((err && err.message) || err);
          }
        }
        if (!text) return json({ error: "AI error: " + (lastErr || "no answer") }, 502);
        return json({ text });
      } catch (e) {
        return json({ error: "Something went wrong: " + String((e && e.message) || e) }, 500);
      }
    }

    if (request.method === "POST" && url.pathname === "/api/image") {
      if (!env.AI) return json({ error: "Missing the Workers AI binding named AI." }, 500);
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      if (limited("i:" + ip, MAX_IMAGES_PER_10_MIN)) return json({ error: "That's a lot of pictures! Please wait a few minutes." }, 429);
      try {
        const body = await request.json();
        const prompt = String((body && body.prompt) || "").trim().slice(0, 500);
        if (!prompt) return json({ error: "Describe the picture you want." }, 400);
        if (BLOCKED_WORDS.test(prompt)) return json({ error: "I can't make that picture here. Try something different!" }, 400);
        const image = await makeImage(env, prompt + ", safe for all ages");
        return json({ image });
      } catch (e) {
        return json({ error: "Couldn't make the picture: " + String((e && e.message) || e) }, 502);
      }
    }

    return new Response("Not found", { status: 404 });
  },
};