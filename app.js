const STORE = "mount_os_v1";
const WALLPAPER_URL = "wallpaper.jpg";
const GEAR_URL = "settings-icon.png";
const USER_ICON = `<svg class="user-icon" viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="#6b6b6b"/><circle cx="24" cy="18" r="8" fill="#e8e8e8"/><path d="M8 42c0-8.8 7.2-14 16-14s16 5.2 16 14" fill="#e8e8e8"/></svg>`;
const APPS = [
  { id: "settings", name: "Settings", icon: "GEAR", pinned: true, desktop: true },
  { id: "browser", name: "Mount", icon: "WEB", pinned: true, desktop: true },
  { id: "games", name: "Games", icon: "GAME", pinned: true, desktop: true },
  { id: "ai", name: "Mount AI", icon: "AI", pinned: true, desktop: true },
  { id: "files", name: "File Explorer", icon: "FILES", pinned: true, desktop: false },
  { id: "notes", name: "Notes", icon: "NOTES", pinned: true, desktop: false },
  { id: "calc", name: "Calculator", icon: "CALC", pinned: true, desktop: false },
  { id: "terminal", name: "Terminal", icon: "TERM", pinned: true, desktop: false }
];



function appIconHTML(icon, size) {
  size = size || 22;


  if (icon === "GEAR") return null; // handled with gearImg
  if (icon === "WEB") return `<div class="ico web-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg></div>`;
  if (icon === "GAME") return `<div class="ico game-ico"><img src="${GAMES_ICON}" alt=""></div>`;
  if (icon === "AI") return `<div class="ico ai-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><path d="M12 3a6 6 0 0 1 6 6v1a4 4 0 0 1 3 4v1H3v-1a4 4 0 0 1 3-4V9a6 6 0 0 1 6-6z"/><path d="M9 18h6M10 21h4"/></svg></div>`;
  if (icon === "FILES") return `<div class="ico files-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg></div>`;
  if (icon === "NOTES") return `<div class="ico notes-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><path d="M5 3h11l3 3v15H5V3z"/><path d="M14 3v4h4M8 12h8M8 16h6"/></svg></div>`;
  if (icon === "CALC") return `<div class="ico calc-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0M8 19h2M12 19h2M16 19h0"/></svg></div>`;
  if (icon === "SPOTIFY") return `<div class="ico spotify-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#fff"><circle cx="12" cy="12" r="10"/><path d="M7 10c4-1 8-.5 10 1M7.5 13c3.5-.8 7-.3 8.5.8M8 16c2.5-.5 5-.2 6.5.5" fill="none" stroke="#1DB954" stroke-width="1.6" stroke-linecap="round"/></svg></div>`;
  if (icon === "DISCORD") return `<div class="ico discord-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#fff"><path d="M8 8c2-1 6-1 8 0l1 4c-1 2-2 3-3 3l-1-1c-1 .3-2 .3-3 0l-1 1c-1 0-2-1-3-3l2-4zm1.5 4a1 1 0 110-2 1 1 0 010 2zm5 0a1 1 0 110-2 1 1 0 010 2z"/></svg></div>`;
  if (icon === "VSCODE") return `<div class="ico vscode-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.6"><path d="M4 6l8-3 8 4v10l-8 4-8-3V6z"/><path d="M12 3v18"/></svg></div>`;
  if (icon === "GFN") return `<div class="ico gfn-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><path d="M4 8h10l6 4-6 4H4V8z"/><path d="M8 12h4"/></svg></div>`;
  if (icon === "YT") return `<div class="ico yt-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#fff"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 10l5 2-5 2V10z" fill="#FF0000"/></svg></div>`;
  if (icon === "GITHUB") return `<div class="ico github-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#fff"><path d="M12 3c-5 0-9 4-9 9 0 4 2.5 7.4 6 8.6.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1-2.9-1-.4-1-1-1.2-1-1.2-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .8-.3 2.5.9a8.5 8.5 0 014.6 0c1.7-1.2 2.5-.9 2.5-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4 3.5-1.2 6-4.6 6-8.6 0-5-4-9-9-9z"/></svg></div>`;
  if (icon === "TERM") return `<div class="ico term-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#4ec9b0" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10l3 2-3 2M12 14h5"/></svg></div>`;
  if (icon === "FLIX") return `<div class="ico flix-ico"><svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="#fff" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg></div>`;
  return `<div class="ico">${icon}</div>`;
}
const MOUNT_AI_URL = "https://blackhole-ai.weswoodland13.workers.dev";

const GAMES_ICON = "games-icon.png";
let GAMES_CATALOG = null;
const GAMES_EMBEDDED = [{"id":"10-minutes-till-dawn","name":"10 Minutes Till Dawn","url":"https://class6x.gitlab.io/10-minutes-till-dawn/"},{"id":"11-11","name":"11 11","url":"https://class6x.gitlab.io/11-11/"},{"id":"12-mini-battles-2","name":"12 Mini Battles 2","url":"https://class6x.gitlab.io/12-mini-battles-2/"},{"id":"12-minibattles","name":"12 Minibattles","url":"https://class6x.gitlab.io/12-minibattles/"},{"id":"18-wheeler-cargo-simulator","name":"18 Wheeler Cargo Simulator","url":"https://class6x.gitlab.io/18-wheeler-cargo-simulator/"},{"id":"1v1-lol","name":"1v1 Lol","url":"https://class6x.gitlab.io/1v1-lol/"},{"id":"1v1-lol-offline","name":"1v1 Lol Offline","url":"https://class6x.gitlab.io/1v1-lol-offline/"},{"id":"2-minute-football","name":"2 Minute Football","url":"https://class6x.gitlab.io/2-minute-football/"},{"id":"2048","name":"2048","url":"https://class6x.gitlab.io/2048/"},{"id":"2048-multitask","name":"2048 Multitask","url":"https://class6x.gitlab.io/2048-multitask/"},{"id":"3d-car-simulator","name":"3d Car Simulator","url":"https://class6x.gitlab.io/3d-car-simulator/"},{"id":"3d-monster-truck-skyroads","name":"3d Monster Truck Skyroads","url":"https://class6x.gitlab.io/3d-monster-truck-skyroads/"},{"id":"3d-moto-simulator-2","name":"3d Moto Simulator 2","url":"https://class6x.gitlab.io/3d-moto-simulator-2/"},{"id":"4th-and-goal-2022","name":"4th And Goal 2022","url":"https://class6x.gitlab.io/4th-and-goal-2022/"},{"id":"4x4-drive-offroad","name":"4x4 Drive Offroad","url":"https://class6x.gitlab.io/4x4-drive-offroad/"},{"id":"8-ball-pool","name":"8 Ball Pool","url":"https://class6x.gitlab.io/8-ball-pool/"},{"id":"8bit-fiesta","name":"8bit Fiesta","url":"https://class6x.gitlab.io/8bit-fiesta/"},{"id":"9-ball-pool","name":"9 Ball Pool","url":"https://class6x.gitlab.io/9-ball-pool/"},{"id":"9-balls-pool","name":"9 Balls Pool","url":"https://class6x.gitlab.io/9-balls-pool/"},{"id":"a-dance-of-fire-and-ice","name":"A Dance Of Fire And Ice","url":"https://class6x.gitlab.io/a-dance-of-fire-and-ice/"},{"id":"a-pretty-odd-bunny","name":"A Pretty Odd Bunny","url":"https://class6x.gitlab.io/a-pretty-odd-bunny/"},{"id":"a-pretty-odd-bunny-roast-it","name":"A Pretty Odd Bunny Roast It","url":"https://class6x.gitlab.io/a-pretty-odd-bunny-roast-it/"},{"id":"a-small-world-cup","name":"A Small World Cup","url":"https://class6x.gitlab.io/a-small-world-cup/"},{"id":"adventure-drivers","name":"Adventure Drivers","url":"https://class6x.gitlab.io/adventure-drivers/"},{"id":"air-hockey-championship-deluxe","name":"Air Hockey Championship Deluxe","url":"https://class6x.gitlab.io/air-hockey-championship-deluxe/"},{"id":"aliens-nest","name":"Aliens Nest","url":"https://class6x.gitlab.io/aliens-nest/"},{"id":"amazing-bubble-breaker","name":"Amazing Bubble Breaker","url":"https://class6x.gitlab.io/amazing-bubble-breaker/"},{"id":"amazing-bubble-connect","name":"Amazing Bubble Connect","url":"https://class6x.gitlab.io/amazing-bubble-connect/"},{"id":"among-us","name":"Among Us","url":"https://class6x.gitlab.io/among-us/"},{"id":"animal-arena","name":"Animal Arena","url":"https://class6x.gitlab.io/animal-arena/"},{"id":"ape-sling","name":"Ape Sling","url":"https://class6x.gitlab.io/ape-sling/"},{"id":"aqua-thrills","name":"Aqua Thrills","url":"https://class6x.gitlab.io/aqua-thrills/"},{"id":"archer-master-3d-castle-defense","name":"Archer Master 3d Castle Defense","url":"https://class6x.gitlab.io/archer-master-3d-castle-defense/"},{"id":"archery-world-tour","name":"Archery World Tour","url":"https://class6x.gitlab.io/archery-world-tour/"},{"id":"arithmetica","name":"Arithmetica","url":"https://class6x.gitlab.io/arithmetica/"},{"id":"arrow-pathway","name":"Arrow Pathway","url":"https://class6x.gitlab.io/arrow-pathway/"},{"id":"athletics-hero","name":"Athletics Hero","url":"https://class6x.gitlab.io/athletics-hero/"},{"id":"avalanche","name":"Avalanche","url":"https://class6x.gitlab.io/avalanche/"},{"id":"b-cubed","name":"B Cubed","url":"https://class6x.gitlab.io/b-cubed/"},{"id":"bacon-may-die","name":"Bacon May Die","url":"https://class6x.gitlab.io/bacon-may-die/"},{"id":"bad-ice-cream-2","name":"Bad Ice Cream 2","url":"https://class6x.gitlab.io/bad-ice-cream-2/"},{"id":"bad-ice-cream-3","name":"Bad Ice Cream 3","url":"https://class6x.gitlab.io/bad-ice-cream-3/"},{"id":"barbershop-inc","name":"Barbershop Inc","url":"https://class6x.gitlab.io/barbershop-inc/"},{"id":"basket-and-ball","name":"Basket And Ball","url":"https://class6x.gitlab.io/basket-and-ball/"},{"id":"basket-bros","name":"Basket Bros","url":"https://class6x.gitlab.io/basket-bros/"},{"id":"basket-champs","name":"Basket Champs","url":"https://class6x.gitlab.io/basket-champs/"},{"id":"basket-random","name":"Basket Random","url":"https://class6x.gitlab.io/basket-random/"},{"id":"basket-swooshes","name":"Basket Swooshes","url":"https://class6x.gitlab.io/basket-swooshes/"},{"id":"basketball-frvr","name":"Basketball Frvr","url":"https://class6x.gitlab.io/basketball-frvr/"},{"id":"basketball-legends","name":"Basketball Legends","url":"https://class6x.gitlab.io/basketball-legends/"},{"id":"basketball-stars","name":"Basketball Stars","url":"https://class6x.gitlab.io/basketball-stars/"},{"id":"battle-golf","name":"Battle Golf","url":"https://class6x.gitlab.io/battle-golf/"},{"id":"battle-wheels","name":"Battle Wheels","url":"https://class6x.gitlab.io/battle-wheels/"},{"id":"bearsus","name":"Bearsus","url":"https://class6x.gitlab.io/bearsus/"},{"id":"become-a-dentist","name":"Become A Dentist","url":"https://class6x.gitlab.io/become-a-dentist/"},{"id":"become-a-puppy-groomer","name":"Become A Puppy Groomer","url":"https://class6x.gitlab.io/become-a-puppy-groomer/"},{"id":"big-shot-boxing","name":"Big Shot Boxing","url":"https://class6x.gitlab.io/big-shot-boxing/"},{"id":"big-tall-small","name":"Big Tall Small","url":"https://class6x.gitlab.io/big-tall-small/"},{"id":"bike-trials-offroad-1","name":"Bike Trials Offroad 1","url":"https://class6x.gitlab.io/bike-trials-offroad-1/"},{"id":"bike-trials-winter-1","name":"Bike Trials Winter 1","url":"https://class6x.gitlab.io/bike-trials-winter-1/"},{"id":"bike-trials-winter-2","name":"Bike Trials Winter 2","url":"https://class6x.gitlab.io/bike-trials-winter-2/"},{"id":"bird-jumper","name":"Bird Jumper","url":"https://class6x.gitlab.io/bird-jumper/"},{"id":"bitlife","name":"Bitlife","url":"https://class6x.gitlab.io/bitlife/"},{"id":"blob-drop","name":"Blob Drop","url":"https://class6x.gitlab.io/blob-drop/"},{"id":"block-the-pig","name":"Block The Pig","url":"https://class6x.gitlab.io/block-the-pig/"},{"id":"blockins","name":"Blockins","url":"https://class6x.gitlab.io/blockins/"},{"id":"blocky-cars","name":"Blocky Cars","url":"https://class6x.gitlab.io/blocky-cars/"},{"id":"blocky-trials","name":"Blocky Trials","url":"https://class6x.gitlab.io/blocky-trials/"},{"id":"blood-drift","name":"Blood Drift","url":"https://class6x.gitlab.io/blood-drift/"},{"id":"bloons-tower-defense-1","name":"Bloons Tower Defense 1","url":"https://class6x.gitlab.io/bloons-tower-defense-1/"},{"id":"blue","name":"Blue","url":"https://class6x.gitlab.io/blue/"},{"id":"blumgi-ball","name":"Blumgi Ball","url":"https://class6x.gitlab.io/blumgi-ball/"},{"id":"blumgi-bloom","name":"Blumgi Bloom","url":"https://class6x.gitlab.io/blumgi-bloom/"},{"id":"blumgi-castle","name":"Blumgi Castle","url":"https://class6x.gitlab.io/blumgi-castle/"},{"id":"blumgi-dragon","name":"Blumgi Dragon","url":"https://class6x.gitlab.io/blumgi-dragon/"},{"id":"blumgi-rocket","name":"Blumgi Rocket","url":"https://class6x.gitlab.io/blumgi-rocket/"},{"id":"blumgi-slime","name":"Blumgi Slime","url":"https://class6x.gitlab.io/blumgi-slime/"},{"id":"bob-the-robber-4","name":"Bob The Robber 4","url":"https://class6x.gitlab.io/bob-the-robber-4/"},{"id":"bomber-royale","name":"Bomber Royale","url":"https://class6x.gitlab.io/bomber-royale/"},{"id":"bottle-flip","name":"Bottle Flip","url":"https://class6x.gitlab.io/bottle-flip/"},{"id":"bouncy-basketball","name":"Bouncy Basketball","url":"https://class6x.gitlab.io/bouncy-basketball/"},{"id":"bowling-stars","name":"Bowling Stars","url":"https://class6x.gitlab.io/bowling-stars/"},{"id":"boxing-physics-2","name":"Boxing Physics 2","url":"https://class6x.gitlab.io/boxing-physics-2/"},{"id":"boxing-random","name":"Boxing Random","url":"https://class6x.gitlab.io/boxing-random/"},{"id":"boxrob","name":"Boxrob","url":"https://class6x.gitlab.io/boxrob/"},{"id":"boxrob-2","name":"Boxrob 2","url":"https://class6x.gitlab.io/boxrob-2/"},{"id":"boxrob-3","name":"Boxrob 3","url":"https://class6x.gitlab.io/boxrob-3/"},{"id":"brain-test-2-tricky-stories","name":"Brain Test 2 Tricky Stories","url":"https://class6x.gitlab.io/brain-test-2-tricky-stories/"},{"id":"brain-test-3-tricky-quests","name":"Brain Test 3 Tricky Quests","url":"https://class6x.gitlab.io/brain-test-3-tricky-quests/"},{"id":"brain-test-4-tricky-friends","name":"Brain Test 4 Tricky Friends","url":"https://class6x.gitlab.io/brain-test-4-tricky-friends/"},{"id":"brain-test-tricky-puzzles","name":"Brain Test Tricky Puzzles","url":"https://class6x.gitlab.io/brain-test-tricky-puzzles/"},{"id":"breaking-the-bank","name":"Breaking The Bank","url":"https://class6x.gitlab.io/breaking-the-bank/"},{"id":"bubble-shooter","name":"Bubble Shooter","url":"https://class6x.gitlab.io/bubble-shooter/"},{"id":"bullet-bro","name":"Bullet Bro","url":"https://class6x.gitlab.io/bullet-bro/"},{"id":"bullet-bros","name":"Bullet Bros","url":"https://class6x.gitlab.io/bullet-bros/"},{"id":"bullet-force","name":"Bullet Force","url":"https://class6x.gitlab.io/bullet-force/"},{"id":"bumper-cars-soccer","name":"Bumper Cars Soccer","url":"https://class6x.gitlab.io/bumper-cars-soccer/"},{"id":"bumpy-jumpy","name":"Bumpy Jumpy","url":"https://class6x.gitlab.io/bumpy-jumpy/"},{"id":"burger-bounty","name":"Burger Bounty","url":"https://class6x.gitlab.io/burger-bounty/"},{"id":"burnin-rubber-5-xs","name":"Burnin Rubber 5 Xs","url":"https://class6x.gitlab.io/burnin-rubber-5-xs/"},{"id":"burnin-rubber-crash-n-burn","name":"Burnin Rubber Crash N Burn","url":"https://class6x.gitlab.io/burnin-rubber-crash-n-burn/"},{"id":"burnout-drift-seaport-max","name":"Burnout Drift Seaport Max","url":"https://class6x.gitlab.io/burnout-drift-seaport-max/"},{"id":"burnout-extreme-drift-2","name":"Burnout Extreme Drift 2","url":"https://class6x.gitlab.io/burnout-extreme-drift-2/"},{"id":"burrito-bison","name":"Burrito Bison","url":"https://class6x.gitlab.io/burrito-bison/"},{"id":"candy-jump","name":"Candy Jump","url":"https://class6x.gitlab.io/candy-jump/"},{"id":"car-climb-racing","name":"Car Climb Racing","url":"https://class6x.gitlab.io/car-climb-racing/"},{"id":"car-drift-racers-2","name":"Car Drift Racers 2","url":"https://class6x.gitlab.io/car-drift-racers-2/"},{"id":"car-eats-car-winter-adventure","name":"Car Eats Car Winter Adventure","url":"https://class6x.gitlab.io/car-eats-car-winter-adventure/"},{"id":"car-simulator-arena","name":"Car Simulator Arena","url":"https://class6x.gitlab.io/car-simulator-arena/"},{"id":"cars-thief","name":"Cars Thief","url":"https://class6x.gitlab.io/cars-thief/"},{"id":"cars-thief-tank-edition","name":"Cars Thief Tank Edition","url":"https://class6x.gitlab.io/cars-thief-tank-edition/"},{"id":"castle-of-chaos","name":"Castle Of Chaos","url":"https://class6x.gitlab.io/castle-of-chaos/"},{"id":"casual-chess","name":"Casual Chess","url":"https://class6x.gitlab.io/casual-chess/"},{"id":"cat-gunner-super-zombie-shoot","name":"Cat Gunner Super Zombie Shoot","url":"https://class6x.gitlab.io/cat-gunner-super-zombie-shoot/"},{"id":"cat-trap","name":"Cat Trap","url":"https://class6x.gitlab.io/cat-trap/"},{"id":"catpad","name":"Catpad","url":"https://class6x.gitlab.io/catpad/"},{"id":"cats","name":"Cats","url":"https://class6x.gitlab.io/cats/"},{"id":"cats-love-cake","name":"Cats Love Cake","url":"https://class6x.gitlab.io/cats-love-cake/"},{"id":"cats-love-cake-2","name":"Cats Love Cake 2","url":"https://class6x.gitlab.io/cats-love-cake-2/"},{"id":"cave-blast","name":"Cave Blast","url":"https://class6x.gitlab.io/cave-blast/"},{"id":"chess-grandmaster","name":"Chess Grandmaster","url":"https://class6x.gitlab.io/chess-grandmaster/"},{"id":"chicken-sword-ninja-master","name":"Chicken Sword Ninja Master","url":"https://class6x.gitlab.io/chicken-sword-ninja-master/"},{"id":"circloo-2","name":"Circloo 2","url":"https://class6x.gitlab.io/circloo-2/"},{"id":"city-bike-stunt-2","name":"City Bike Stunt 2","url":"https://class6x.gitlab.io/city-bike-stunt-2/"},{"id":"city-car-driving-stunt-master","name":"City Car Driving Stunt Master","url":"https://class6x.gitlab.io/city-car-driving-stunt-master/"},{"id":"city-rider","name":"City Rider","url":"https://class6x.gitlab.io/city-rider/"},{"id":"clash-of-tanks","name":"Clash Of Tanks","url":"https://class6x.gitlab.io/clash-of-tanks/"},{"id":"cluster-rush","name":"Cluster Rush","url":"https://class6x.gitlab.io/cluster-rush/"},{"id":"color-switch","name":"Color Switch","url":"https://class6x.gitlab.io/color-switch/"},{"id":"color-tunnel-2","name":"Color Tunnel 2","url":"https://class6x.gitlab.io/color-tunnel-2/"},{"id":"colorup","name":"Colorup","url":"https://class6x.gitlab.io/colorup/"},{"id":"connect-248","name":"Connect 248","url":"https://class6x.gitlab.io/connect-248/"},{"id":"cookie-clicker","name":"Cookie Clicker","url":"https://class6x.gitlab.io/cookie-clicker/"},{"id":"cooking-fast","name":"Cooking Fast","url":"https://class6x.gitlab.io/cooking-fast/"},{"id":"cosmos-lines","name":"Cosmos Lines","url":"https://class6x.gitlab.io/cosmos-lines/"},{"id":"court-kings-3d","name":"Court Kings 3d","url":"https://class6x.gitlab.io/court-kings-3d/"},{"id":"cozy-room-design","name":"Cozy Room Design","url":"https://class6x.gitlab.io/cozy-room-design/"},{"id":"crazy-bikes","name":"Crazy Bikes","url":"https://class6x.gitlab.io/crazy-bikes/"},{"id":"crazy-cars","name":"Crazy Cars","url":"https://class6x.gitlab.io/crazy-cars/"},{"id":"crazy-tunnel-3d","name":"Crazy Tunnel 3d","url":"https://class6x.gitlab.io/crazy-tunnel-3d/"},{"id":"cricket-world-cup","name":"Cricket World Cup","url":"https://class6x.gitlab.io/cricket-world-cup/"},{"id":"crossy-road","name":"Crossy Road","url":"https://class6x.gitlab.io/crossy-road/"},{"id":"crown-guard","name":"Crown Guard","url":"https://class6x.gitlab.io/crown-guard/"},{"id":"cubes-king","name":"Cubes King","url":"https://class6x.gitlab.io/cubes-king/"},{"id":"cubinko","name":"Cubinko","url":"https://class6x.gitlab.io/cubinko/"},{"id":"curve-ball-3d","name":"Curve Ball 3d","url":"https://class6x.gitlab.io/curve-ball-3d/"},{"id":"cyber-cars-punk-racing","name":"Cyber Cars Punk Racing","url":"https://class6x.gitlab.io/cyber-cars-punk-racing/"},{"id":"daddy-long-legs","name":"Daddy Long Legs","url":"https://class6x.gitlab.io/daddy-long-legs/"},{"id":"dadish","name":"Dadish","url":"https://class6x.gitlab.io/dadish/"},{"id":"dadish-3d","name":"Dadish 3d","url":"https://class6x.gitlab.io/dadish-3d/"},{"id":"dana-relics-for-sale","name":"Dana Relics For Sale","url":"https://class6x.gitlab.io/dana-relics-for-sale/"},{"id":"dead-paradise-race-shooter","name":"Dead Paradise Race Shooter","url":"https://class6x.gitlab.io/dead-paradise-race-shooter/"},{"id":"death-chase","name":"Death Chase","url":"https://class6x.gitlab.io/death-chase/"},{"id":"death-run-3d","name":"Death Run 3d","url":"https://class6x.gitlab.io/death-run-3d/"},{"id":"deepest-sword","name":"Deepest Sword","url":"https://class6x.gitlab.io/deepest-sword/"},{"id":"deer-simulator","name":"Deer Simulator","url":"https://class6x.gitlab.io/deer-simulator/"},{"id":"demolition-derby-crash-racing","name":"Demolition Derby Crash Racing","url":"https://class6x.gitlab.io/demolition-derby-crash-racing/"},{"id":"descent","name":"Descent","url":"https://class6x.gitlab.io/descent/"},{"id":"detective-dan","name":"Detective Dan","url":"https://class6x.gitlab.io/detective-dan/"},{"id":"digging-master","name":"Digging Master","url":"https://class6x.gitlab.io/digging-master/"},{"id":"dinosaur-game","name":"Dinosaur Game","url":"https://class6x.gitlab.io/dinosaur-game/"},{"id":"doctor-hero","name":"Doctor Hero","url":"https://class6x.gitlab.io/doctor-hero/"},{"id":"doge-miner","name":"Doge Miner","url":"https://class6x.gitlab.io/doge-miner/"},{"id":"double-panda","name":"Double Panda","url":"https://class6x.gitlab.io/double-panda/"},{"id":"dragon-simulator-3d","name":"Dragon Simulator 3d","url":"https://class6x.gitlab.io/dragon-simulator-3d/"},{"id":"draw-the-hill","name":"Draw The Hill","url":"https://class6x.gitlab.io/draw-the-hill/"},{"id":"dreadhead-parkour","name":"Dreadhead Parkour","url":"https://class6x.gitlab.io/dreadhead-parkour/"},{"id":"drift-boss","name":"Drift Boss","url":"https://class6x.gitlab.io/drift-boss/"},{"id":"drift-hunters","name":"Drift Hunters","url":"https://class6x.gitlab.io/drift-hunters/"},{"id":"driftwave","name":"Driftwave","url":"https://class6x.gitlab.io/driftwave/"},{"id":"drive-mad","name":"Drive Mad","url":"https://class6x.gitlab.io/drive-mad/"},{"id":"drunken-duel","name":"Drunken Duel","url":"https://class6x.gitlab.io/drunken-duel/"},{"id":"dubai-police-parking-2","name":"Dubai Police Parking 2","url":"https://class6x.gitlab.io/dubai-police-parking-2/"},{"id":"ducklingsio","name":"Ducklingsio","url":"https://class6x.gitlab.io/ducklingsio/"},{"id":"dunk-perfect","name":"Dunk Perfect","url":"https://class6x.gitlab.io/dunk-perfect/"},{"id":"dunkbrush","name":"Dunkbrush","url":"https://class6x.gitlab.io/dunkbrush/"},{"id":"dunkers","name":"Dunkers","url":"https://class6x.gitlab.io/dunkers/"},{"id":"duo-survival","name":"Duo Survival","url":"https://class6x.gitlab.io/duo-survival/"},{"id":"duo-survival-3","name":"Duo Survival 3","url":"https://class6x.gitlab.io/duo-survival-3/"},{"id":"duo-vikings-2","name":"Duo Vikings 2","url":"https://class6x.gitlab.io/duo-vikings-2/"},{"id":"duo-vikings-3","name":"Duo Vikings 3","url":"https://class6x.gitlab.io/duo-vikings-3/"},{"id":"dyna-boy","name":"Dyna Boy","url":"https://class6x.gitlab.io/dyna-boy/"},{"id":"earn-to-die","name":"Earn To Die","url":"https://class6x.gitlab.io/earn-to-die/"},{"id":"eggbot-vs-zombies","name":"Eggbot Vs Zombies","url":"https://class6x.gitlab.io/eggbot-vs-zombies/"},{"id":"eggy-car","name":"Eggy Car","url":"https://class6x.gitlab.io/eggy-car/"},{"id":"elastic-man","name":"Elastic Man","url":"https://class6x.gitlab.io/elastic-man/"},{"id":"electron-dash","name":"Electron Dash","url":"https://class6x.gitlab.io/electron-dash/"},{"id":"element-bblocks","name":"Element Bblocks","url":"https://class6x.gitlab.io/element-bblocks/"},{"id":"element-blocks","name":"Element Blocks","url":"https://class6x.gitlab.io/element-blocks/"},{"id":"eliza-mall-mania","name":"Eliza Mall Mania","url":"https://class6x.gitlab.io/eliza-mall-mania/"},{"id":"energy","name":"Energy","url":"https://class6x.gitlab.io/energy/"},{"id":"escaping-the-prison","name":"Escaping The Prison","url":"https://class6x.gitlab.io/escaping-the-prison/"},{"id":"eugenes-life","name":"Eugenes Life","url":"https://class6x.gitlab.io/eugenes-life/"},{"id":"extreme-car-driving-simulator","name":"Extreme Car Driving Simulator","url":"https://class6x.gitlab.io/extreme-car-driving-simulator/"},{"id":"extreme-off-road-cars-3-cargo","name":"Extreme Off Road Cars 3 Cargo","url":"https://class6x.gitlab.io/extreme-off-road-cars-3-cargo/"},{"id":"fairy-dressup","name":"Fairy Dressup","url":"https://class6x.gitlab.io/fairy-dressup/"},{"id":"fancy-pants","name":"Fancy Pants","url":"https://class6x.gitlab.io/fancy-pants/"},{"id":"fancy-pants-2","name":"Fancy Pants 2","url":"https://class6x.gitlab.io/fancy-pants-2/"},{"id":"fancy-pants-3","name":"Fancy Pants 3","url":"https://class6x.gitlab.io/fancy-pants-3/"},{"id":"fast-food-dumpster-adventure","name":"Fast Food Dumpster Adventure","url":"https://class6x.gitlab.io/fast-food-dumpster-adventure/"},{"id":"fireboy-and-watergirl-1-forest-temple","name":"Fireboy And Watergirl 1 Forest Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-1-forest-temple/"},{"id":"fireboy-and-watergirl-2-light-temple","name":"Fireboy And Watergirl 2 Light Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-2-light-temple/"},{"id":"fireboy-and-watergirl-3-ice-temple","name":"Fireboy And Watergirl 3 Ice Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-3-ice-temple/"},{"id":"fireboy-and-watergirl-4-crystal-temple","name":"Fireboy And Watergirl 4 Crystal Temple","url":"https://class6x.gitlab.io/fireboy-and-watergirl-4-crystal-temple/"},{"id":"fireboy-and-watergirl-5-elements","name":"Fireboy And Watergirl 5 Elements","url":"https://class6x.gitlab.io/fireboy-and-watergirl-5-elements/"},{"id":"fireboy-and-watergirl-6-fairy-tales","name":"Fireboy And Watergirl 6 Fairy Tales","url":"https://class6x.gitlab.io/fireboy-and-watergirl-6-fairy-tales/"},{"id":"fireboy-watergirl-6-fairy-tales","name":"Fireboy Watergirl 6 Fairy Tales","url":"https://class6x.gitlab.io/fireboy-watergirl-6-fairy-tales/"},{"id":"fleeing-the-complex","name":"Fleeing The Complex","url":"https://class6x.gitlab.io/fleeing-the-complex/"},{"id":"flip-runner","name":"Flip Runner","url":"https://class6x.gitlab.io/flip-runner/"},{"id":"foot-chinko","name":"Foot Chinko","url":"https://class6x.gitlab.io/foot-chinko/"},{"id":"football-masters","name":"Football Masters","url":"https://class6x.gitlab.io/football-masters/"},{"id":"football-penalty-champions","name":"Football Penalty Champions","url":"https://class6x.gitlab.io/football-penalty-champions/"},{"id":"forgotten-hill-the-wardrobe-3","name":"Forgotten Hill The Wardrobe 3","url":"https://class6x.gitlab.io/forgotten-hill-the-wardrobe-3/"},{"id":"fortride-open-world","name":"Fortride Open World","url":"https://class6x.gitlab.io/fortride-open-world/"},{"id":"fortz","name":"Fortz","url":"https://class6x.gitlab.io/fortz/"},{"id":"four-in-a-row","name":"Four In A Row","url":"https://class6x.gitlab.io/four-in-a-row/"},{"id":"free-kick-screamers","name":"Free Kick Screamers","url":"https://class6x.gitlab.io/free-kick-screamers/"},{"id":"free-kick-shooter","name":"Free Kick Shooter","url":"https://class6x.gitlab.io/free-kick-shooter/"},{"id":"fruit-ninja","name":"Fruit Ninja","url":"https://class6x.gitlab.io/fruit-ninja/"},{"id":"funny-shooter-2","name":"Funny Shooter 2","url":"https://class6x.gitlab.io/funny-shooter-2/"},{"id":"fury-wars","name":"Fury Wars","url":"https://class6x.gitlab.io/fury-wars/"},{"id":"g-switch-3","name":"G Switch 3","url":"https://class6x.gitlab.io/g-switch-3/"},{"id":"g-switch-4","name":"G Switch 4","url":"https://class6x.gitlab.io/g-switch-4/"},{"id":"gangster-contract-mafia-wars","name":"Gangster Contract Mafia Wars","url":"https://class6x.gitlab.io/gangster-contract-mafia-wars/"},{"id":"geometry-dash","name":"Geometry Dash","url":"https://class6x.gitlab.io/geometry-dash/"},{"id":"getaway-shootout","name":"Getaway Shootout","url":"https://class6x.gitlab.io/getaway-shootout/"},{"id":"goat-vs-zombies","name":"Goat Vs Zombies","url":"https://class6x.gitlab.io/goat-vs-zombies/"},{"id":"gobdun","name":"Gobdun","url":"https://class6x.gitlab.io/gobdun/"},{"id":"golf-champions","name":"Golf Champions","url":"https://class6x.gitlab.io/golf-champions/"},{"id":"golfinity","name":"Golfinity","url":"https://class6x.gitlab.io/golfinity/"},{"id":"grand-prix-hero","name":"Grand Prix Hero","url":"https://class6x.gitlab.io/grand-prix-hero/"},{"id":"grindcraft","name":"Grindcraft","url":"https://class6x.gitlab.io/grindcraft/"},{"id":"gun-mayhem-2","name":"Gun Mayhem 2","url":"https://class6x.gitlab.io/gun-mayhem-2/"},{"id":"gunspin","name":"Gunspin","url":"https://class6x.gitlab.io/gunspin/"},{"id":"hammer-2-reloaded","name":"Hammer 2 Reloaded","url":"https://class6x.gitlab.io/hammer-2-reloaded/"},{"id":"head-soccer-2023","name":"Head Soccer 2023","url":"https://class6x.gitlab.io/head-soccer-2023/"},{"id":"heads-arena-soccer-all-stars","name":"Heads Arena Soccer All Stars","url":"https://class6x.gitlab.io/heads-arena-soccer-all-stars/"},{"id":"hide-and-smash","name":"Hide And Smash","url":"https://class6x.gitlab.io/hide-and-smash/"},{"id":"highway-bike-simulator","name":"Highway Bike Simulator","url":"https://class6x.gitlab.io/highway-bike-simulator/"},{"id":"highway-racer-3d","name":"Highway Racer 3d","url":"https://class6x.gitlab.io/highway-racer-3d/"},{"id":"highway-traffic","name":"Highway Traffic","url":"https://class6x.gitlab.io/highway-traffic/"},{"id":"hills-of-steel","name":"Hills Of Steel","url":"https://class6x.gitlab.io/hills-of-steel/"},{"id":"hop-chop","name":"Hop Chop","url":"https://class6x.gitlab.io/hop-chop/"},{"id":"hoppenhelm","name":"Hoppenhelm","url":"https://class6x.gitlab.io/hoppenhelm/"},{"id":"horse-simulator-3d","name":"Horse Simulator 3d","url":"https://class6x.gitlab.io/horse-simulator-3d/"},{"id":"house-of-hazards","name":"House Of Hazards","url":"https://class6x.gitlab.io/house-of-hazards/"},{"id":"hover-racer-drive","name":"Hover Racer Drive","url":"https://class6x.gitlab.io/hover-racer-drive/"},{"id":"idle-ants","name":"Idle Ants","url":"https://class6x.gitlab.io/idle-ants/"},{"id":"idle-digging-tycoon","name":"Idle Digging Tycoon","url":"https://class6x.gitlab.io/idle-digging-tycoon/"},{"id":"idle-startup-tycoon","name":"Idle Startup Tycoon","url":"https://class6x.gitlab.io/idle-startup-tycoon/"},{"id":"infinite-soccer","name":"Infinite Soccer","url":"https://class6x.gitlab.io/infinite-soccer/"},{"id":"into-the-pit","name":"Into The Pit","url":"https://class6x.gitlab.io/into-the-pit/"},{"id":"james-gun","name":"James Gun","url":"https://class6x.gitlab.io/james-gun/"},{"id":"jelly-truck","name":"Jelly Truck","url":"https://class6x.gitlab.io/jelly-truck/"},{"id":"jetpack-joyride","name":"Jetpack Joyride","url":"https://class6x.gitlab.io/jetpack-joyride/"},{"id":"jollyworld","name":"Jollyworld","url":"https://class6x.gitlab.io/jollyworld/"},{"id":"just-park-it-11","name":"Just Park It 11","url":"https://class6x.gitlab.io/just-park-it-11/"},{"id":"kix-dream-soccer","name":"Kix Dream Soccer","url":"https://class6x.gitlab.io/kix-dream-soccer/"},{"id":"lands-of-blight","name":"Lands Of Blight","url":"https://class6x.gitlab.io/lands-of-blight/"},{"id":"last-warriors","name":"Last Warriors","url":"https://class6x.gitlab.io/last-warriors/"},{"id":"leader-strike","name":"Leader Strike","url":"https://class6x.gitlab.io/leader-strike/"},{"id":"ledge-throw","name":"Ledge Throw","url":"https://class6x.gitlab.io/ledge-throw/"},{"id":"lethal-sniper-3d-army-soldier","name":"Lethal Sniper 3d Army Soldier","url":"https://class6x.gitlab.io/lethal-sniper-3d-army-soldier/"},{"id":"level-devil","name":"Level Devil","url":"https://class6x.gitlab.io/level-devil/"},{"id":"little-master-cricket","name":"Little Master Cricket","url":"https://class6x.gitlab.io/little-master-cricket/"},{"id":"mad-day","name":"Mad Day","url":"https://class6x.gitlab.io/mad-day/"},{"id":"madalin-stunt-cars-3","name":"Madalin Stunt Cars 3","url":"https://class6x.gitlab.io/madalin-stunt-cars-3/"},{"id":"madzoong","name":"Madzoong","url":"https://class6x.gitlab.io/madzoong/"},{"id":"make-it-meme","name":"Make It Meme","url":"https://class6x.gitlab.io/make-it-meme/"},{"id":"masked-forces","name":"Masked Forces","url":"https://class6x.gitlab.io/masked-forces/"},{"id":"master-checkers","name":"Master Checkers","url":"https://class6x.gitlab.io/master-checkers/"},{"id":"master-chess","name":"Master Chess","url":"https://class6x.gitlab.io/master-chess/"},{"id":"mimelet","name":"Mimelet","url":"https://class6x.gitlab.io/mimelet/"},{"id":"minecraft-builder","name":"Minecraft Builder","url":"https://class6x.gitlab.io/minecraft-builder/"},{"id":"mob-city","name":"Mob City","url":"https://class6x.gitlab.io/mob-city/"},{"id":"monster-tracks","name":"Monster Tracks","url":"https://class6x.gitlab.io/monster-tracks/"},{"id":"moto-maniac","name":"Moto Maniac","url":"https://class6x.gitlab.io/moto-maniac/"},{"id":"moto-maniac-2","name":"Moto Maniac 2","url":"https://class6x.gitlab.io/moto-maniac-2/"},{"id":"moto-road-rash-3d","name":"Moto Road Rash 3d","url":"https://class6x.gitlab.io/moto-road-rash-3d/"},{"id":"moto-x3m","name":"Moto X3m","url":"https://class6x.gitlab.io/moto-x3m/"},{"id":"moto-x3m-2","name":"Moto X3m 2","url":"https://class6x.gitlab.io/moto-x3m-2/"},{"id":"moto-x3m-pool-party","name":"Moto X3m Pool Party","url":"https://class6x.gitlab.io/moto-x3m-pool-party/"},{"id":"moto-x3m-spooky-land","name":"Moto X3m Spooky Land","url":"https://class6x.gitlab.io/moto-x3m-spooky-land/"},{"id":"moto-x3m-winter","name":"Moto X3m Winter","url":"https://class6x.gitlab.io/moto-x3m-winter/"},{"id":"moving-truck-bounty","name":"Moving Truck Bounty","url":"https://class6x.gitlab.io/moving-truck-bounty/"},{"id":"murder","name":"Murder","url":"https://class6x.gitlab.io/murder/"},{"id":"n-gon","name":"N Gon","url":"https://class6x.gitlab.io/n-gon/"},{"id":"narrow-one","name":"Narrow One","url":"https://class6x.gitlab.io/narrow-one/"},{"id":"nightpoint-io","name":"Nightpoint Io","url":"https://class6x.gitlab.io/nightpoint-io/"},{"id":"noob-drive","name":"Noob Drive","url":"https://class6x.gitlab.io/noob-drive/"},{"id":"noob-hook","name":"Noob Hook","url":"https://class6x.gitlab.io/noob-hook/"},{"id":"odd-bot-out","name":"Odd Bot Out","url":"https://class6x.gitlab.io/odd-bot-out/"},{"id":"offroader-v5","name":"Offroader V5","url":"https://class6x.gitlab.io/offroader-v5/"},{"id":"ooze-odyssey","name":"Ooze Odyssey","url":"https://class6x.gitlab.io/ooze-odyssey/"},{"id":"ovo","name":"Ovo","url":"https://class6x.gitlab.io/ovo/"},{"id":"ovo-dimensions","name":"Ovo Dimensions","url":"https://class6x.gitlab.io/ovo-dimensions/"},{"id":"papas-cheeseria","name":"Papas Cheeseria","url":"https://class6x.gitlab.io/papas-cheeseria/"},{"id":"papas-donuteria","name":"Papas Donuteria","url":"https://class6x.gitlab.io/papas-donuteria/"},{"id":"papas-hotdoggeria","name":"Papas Hotdoggeria","url":"https://class6x.gitlab.io/papas-hotdoggeria/"},{"id":"papas-pancakeria","name":"Papas Pancakeria","url":"https://class6x.gitlab.io/papas-pancakeria/"},{"id":"papas-pizzeria","name":"Papas Pizzeria","url":"https://class6x.gitlab.io/papas-pizzeria/"},{"id":"paper-fighter-3d","name":"Paper Fighter 3d","url":"https://class6x.gitlab.io/paper-fighter-3d/"},{"id":"paper-io-2","name":"Paper Io 2","url":"https://class6x.gitlab.io/paper-io-2/"},{"id":"paper-minecraft","name":"Paper Minecraft","url":"https://class6x.gitlab.io/paper-minecraft/"},{"id":"parking-fury","name":"Parking Fury","url":"https://class6x.gitlab.io/parking-fury/"},{"id":"parking-fury-2","name":"Parking Fury 2","url":"https://class6x.gitlab.io/parking-fury-2/"},{"id":"parkmania","name":"Parkmania","url":"https://class6x.gitlab.io/parkmania/"},{"id":"penalty-rivals","name":"Penalty Rivals","url":"https://class6x.gitlab.io/penalty-rivals/"},{"id":"penalty-shooters-2","name":"Penalty Shooters 2","url":"https://class6x.gitlab.io/penalty-shooters-2/"},{"id":"perfect-peel","name":"Perfect Peel","url":"https://class6x.gitlab.io/perfect-peel/"},{"id":"ping-pong-chaos","name":"Ping Pong Chaos","url":"https://class6x.gitlab.io/ping-pong-chaos/"},{"id":"pixel-gun-survival","name":"Pixel Gun Survival","url":"https://class6x.gitlab.io/pixel-gun-survival/"},{"id":"pixwars-2","name":"Pixwars 2","url":"https://class6x.gitlab.io/pixwars-2/"},{"id":"pizzafall","name":"Pizzafall","url":"https://class6x.gitlab.io/pizzafall/"},{"id":"pool-club","name":"Pool Club","url":"https://class6x.gitlab.io/pool-club/"},{"id":"poor-bunny","name":"Poor Bunny","url":"https://class6x.gitlab.io/poor-bunny/"},{"id":"power-badminton","name":"Power Badminton","url":"https://class6x.gitlab.io/power-badminton/"},{"id":"puppet-master","name":"Puppet Master","url":"https://class6x.gitlab.io/puppet-master/"},{"id":"raft-wars-2","name":"Raft Wars 2","url":"https://class6x.gitlab.io/raft-wars-2/"},{"id":"ragdoll-hit","name":"Ragdoll Hit","url":"https://class6x.gitlab.io/ragdoll-hit/"},{"id":"rally-champion","name":"Rally Champion","url":"https://class6x.gitlab.io/rally-champion/"},{"id":"rally-point","name":"Rally Point","url":"https://class6x.gitlab.io/rally-point/"},{"id":"rally-point-5","name":"Rally Point 5","url":"https://class6x.gitlab.io/rally-point-5/"},{"id":"rebels-clash","name":"Rebels Clash","url":"https://class6x.gitlab.io/rebels-clash/"},{"id":"recoil","name":"Recoil","url":"https://class6x.gitlab.io/recoil/"},{"id":"retro-bowl","name":"Retro Bowl","url":"https://class6x.gitlab.io/retro-bowl/"},{"id":"retro-highway","name":"Retro Highway","url":"https://class6x.gitlab.io/retro-highway/"},{"id":"riddle-school","name":"Riddle School","url":"https://class6x.gitlab.io/riddle-school/"},{"id":"rocket-soccer-derby","name":"Rocket Soccer Derby","url":"https://class6x.gitlab.io/rocket-soccer-derby/"},{"id":"rodeo-stampede-savannah","name":"Rodeo Stampede Savannah","url":"https://class6x.gitlab.io/rodeo-stampede-savannah/"},{"id":"rolling-sky","name":"Rolling Sky","url":"https://class6x.gitlab.io/rolling-sky/"},{"id":"rooftop-snipers","name":"Rooftop Snipers","url":"https://class6x.gitlab.io/rooftop-snipers/"},{"id":"school-bus-demolition-derby","name":"School Bus Demolition Derby","url":"https://class6x.gitlab.io/school-bus-demolition-derby/"},{"id":"shady-bears","name":"Shady Bears","url":"https://class6x.gitlab.io/shady-bears/"},{"id":"shoot-stickman","name":"Shoot Stickman","url":"https://class6x.gitlab.io/shoot-stickman/"},{"id":"shootz","name":"Shootz","url":"https://class6x.gitlab.io/shootz/"},{"id":"short-life","name":"Short Life","url":"https://class6x.gitlab.io/short-life/"},{"id":"short-ride","name":"Short Ride","url":"https://class6x.gitlab.io/short-ride/"},{"id":"shortcut-race","name":"Shortcut Race","url":"https://class6x.gitlab.io/shortcut-race/"},{"id":"skateboard-hero","name":"Skateboard Hero","url":"https://class6x.gitlab.io/skateboard-hero/"},{"id":"slime-laboratory","name":"Slime Laboratory","url":"https://class6x.gitlab.io/slime-laboratory/"},{"id":"slime-laboratory-3","name":"Slime Laboratory 3","url":"https://class6x.gitlab.io/slime-laboratory-3/"},{"id":"sling-drift","name":"Sling Drift","url":"https://class6x.gitlab.io/sling-drift/"},{"id":"slope","name":"Slope","url":"https://class6x.gitlab.io/slope/"},{"id":"slope-2","name":"Slope 2","url":"https://class6x.gitlab.io/slope-2/"},{"id":"slope-2-multiplayer","name":"Slope 2 Multiplayer","url":"https://class6x.gitlab.io/slope-2-multiplayer/"},{"id":"slot-car-racing","name":"Slot Car Racing","url":"https://class6x.gitlab.io/slot-car-racing/"},{"id":"smash-karts","name":"Smash Karts","url":"https://class6x.gitlab.io/smash-karts/"},{"id":"snake","name":"Snake","url":"https://class6x.gitlab.io/snake/"},{"id":"snake-is-mlg-edition","name":"Snake Is Mlg Edition","url":"https://class6x.gitlab.io/snake-is-mlg-edition/"},{"id":"snakeis-mlg-edition","name":"Snakeis Mlg Edition","url":"https://class6x.gitlab.io/snakeis-mlg-edition/"},{"id":"sniper-gun-shooting","name":"Sniper Gun Shooting","url":"https://class6x.gitlab.io/sniper-gun-shooting/"},{"id":"snow-rider-3d","name":"Snow Rider 3d","url":"https://class6x.gitlab.io/snow-rider-3d/"},{"id":"soccar","name":"Soccar","url":"https://class6x.gitlab.io/soccar/"},{"id":"soccer-random","name":"Soccer Random","url":"https://class6x.gitlab.io/soccer-random/"},{"id":"soccer-skills-champions-league","name":"Soccer Skills Champions League","url":"https://class6x.gitlab.io/soccer-skills-champions-league/"},{"id":"soccer-skills-euro-cup","name":"Soccer Skills Euro Cup","url":"https://class6x.gitlab.io/soccer-skills-euro-cup/"},{"id":"soccer-skills-world-cup","name":"Soccer Skills World Cup","url":"https://class6x.gitlab.io/soccer-skills-world-cup/"},{"id":"space-major-miner","name":"Space Major Miner","url":"https://class6x.gitlab.io/space-major-miner/"},{"id":"speed-boat-extreme-racing","name":"Speed Boat Extreme Racing","url":"https://class6x.gitlab.io/speed-boat-extreme-racing/"},{"id":"stack-ball","name":"Stack Ball","url":"https://class6x.gitlab.io/stack-ball/"},{"id":"stacktris","name":"Stacktris","url":"https://class6x.gitlab.io/stacktris/"},{"id":"stealing-the-diamond","name":"Stealing The Diamond","url":"https://class6x.gitlab.io/stealing-the-diamond/"},{"id":"stick-defenders","name":"Stick Defenders","url":"https://class6x.gitlab.io/stick-defenders/"},{"id":"stick-fighter","name":"Stick Fighter","url":"https://class6x.gitlab.io/stick-fighter/"},{"id":"stick-merge","name":"Stick Merge","url":"https://class6x.gitlab.io/stick-merge/"},{"id":"stickman-archero-fight","name":"Stickman Archero Fight","url":"https://class6x.gitlab.io/stickman-archero-fight/"},{"id":"stickman-army-team-battle","name":"Stickman Army Team Battle","url":"https://class6x.gitlab.io/stickman-army-team-battle/"},{"id":"stickman-army-the-resistance","name":"Stickman Army The Resistance","url":"https://class6x.gitlab.io/stickman-army-the-resistance/"},{"id":"stickman-bike","name":"Stickman Bike","url":"https://class6x.gitlab.io/stickman-bike/"},{"id":"stickman-bike-pr","name":"Stickman Bike Pr","url":"https://class6x.gitlab.io/stickman-bike-pr/"},{"id":"stickman-bridge-constructor","name":"Stickman Bridge Constructor","url":"https://class6x.gitlab.io/stickman-bridge-constructor/"},{"id":"stickman-climb-2","name":"Stickman Climb 2","url":"https://class6x.gitlab.io/stickman-climb-2/"},{"id":"stickman-fight-ragdoll","name":"Stickman Fight Ragdoll","url":"https://class6x.gitlab.io/stickman-fight-ragdoll/"},{"id":"stickman-fighter-epic-battle-2","name":"Stickman Fighter Epic Battle 2","url":"https://class6x.gitlab.io/stickman-fighter-epic-battle-2/"},{"id":"stickman-fighter-mega-brawl","name":"Stickman Fighter Mega Brawl","url":"https://class6x.gitlab.io/stickman-fighter-mega-brawl/"},{"id":"stickman-golf","name":"Stickman Golf","url":"https://class6x.gitlab.io/stickman-golf/"},{"id":"stickman-hook","name":"Stickman Hook","url":"https://class6x.gitlab.io/stickman-hook/"},{"id":"stickman-parkour-3","name":"Stickman Parkour 3","url":"https://class6x.gitlab.io/stickman-parkour-3/"},{"id":"stickman-ragdoll-crash-fun","name":"Stickman Ragdoll Crash Fun","url":"https://class6x.gitlab.io/stickman-ragdoll-crash-fun/"},{"id":"stickman-run","name":"Stickman Run","url":"https://class6x.gitlab.io/stickman-run/"},{"id":"stickman-school-run","name":"Stickman School Run","url":"https://class6x.gitlab.io/stickman-school-run/"},{"id":"stock-car-hero","name":"Stock Car Hero","url":"https://class6x.gitlab.io/stock-car-hero/"},{"id":"street-ball-jam","name":"Street Ball Jam","url":"https://class6x.gitlab.io/street-ball-jam/"},{"id":"striker-dummies","name":"Striker Dummies","url":"https://class6x.gitlab.io/striker-dummies/"},{"id":"stupid-zombies","name":"Stupid Zombies","url":"https://class6x.gitlab.io/stupid-zombies/"},{"id":"stupid-zombies-2","name":"Stupid Zombies 2","url":"https://class6x.gitlab.io/stupid-zombies-2/"},{"id":"subway-surfers-beijing","name":"Subway Surfers Beijing","url":"https://class6x.gitlab.io/subway-surfers-beijing/"},{"id":"sumo-party","name":"Sumo Party","url":"https://class6x.gitlab.io/sumo-party/"},{"id":"super-bike-the-champion","name":"Super Bike The Champion","url":"https://class6x.gitlab.io/super-bike-the-champion/"},{"id":"super-hot","name":"Super Hot","url":"https://class6x.gitlab.io/super-hot/"},{"id":"super-liquid-soccer","name":"Super Liquid Soccer","url":"https://class6x.gitlab.io/super-liquid-soccer/"},{"id":"super-racing-gt-drag-pro","name":"Super Racing Gt Drag Pro","url":"https://class6x.gitlab.io/super-racing-gt-drag-pro/"},{"id":"super-star-car","name":"Super Star Car","url":"https://class6x.gitlab.io/super-star-car/"},{"id":"super-tunnel-rush","name":"Super Tunnel Rush","url":"https://class6x.gitlab.io/super-tunnel-rush/"},{"id":"superbattle-2","name":"Superbattle 2","url":"https://class6x.gitlab.io/superbattle-2/"},{"id":"superbike-hero","name":"Superbike Hero","url":"https://class6x.gitlab.io/superbike-hero/"},{"id":"tag","name":"Tag","url":"https://class6x.gitlab.io/tag/"},{"id":"tag-2","name":"Tag 2","url":"https://class6x.gitlab.io/tag-2/"},{"id":"tank-trouble-2","name":"Tank Trouble 2","url":"https://class6x.gitlab.io/tank-trouble-2/"},{"id":"tanuki-sunset","name":"Tanuki Sunset","url":"https://class6x.gitlab.io/tanuki-sunset/"},{"id":"teleport-jumper","name":"Teleport Jumper","url":"https://class6x.gitlab.io/teleport-jumper/"},{"id":"temple-of-boom","name":"Temple Of Boom","url":"https://class6x.gitlab.io/temple-of-boom/"},{"id":"temple-run-2-frozen-shadows","name":"Temple Run 2 Frozen Shadows","url":"https://class6x.gitlab.io/temple-run-2-frozen-shadows/"},{"id":"temple-run-2-holi-festival","name":"Temple Run 2 Holi Festival","url":"https://class6x.gitlab.io/temple-run-2-holi-festival/"},{"id":"tennis-masters","name":"Tennis Masters","url":"https://class6x.gitlab.io/tennis-masters/"},{"id":"there-is-no-game","name":"There Is No Game","url":"https://class6x.gitlab.io/there-is-no-game/"},{"id":"thumb-fighter","name":"Thumb Fighter","url":"https://class6x.gitlab.io/thumb-fighter/"},{"id":"tictactoe","name":"Tictactoe","url":"https://class6x.gitlab.io/tictactoe/"},{"id":"tiger-simulator-3d","name":"Tiger Simulator 3d","url":"https://class6x.gitlab.io/tiger-simulator-3d/"},{"id":"time-clones","name":"Time Clones","url":"https://class6x.gitlab.io/time-clones/"},{"id":"tingly-ppyramid-solitaire","name":"Tingly Ppyramid Solitaire","url":"https://class6x.gitlab.io/tingly-ppyramid-solitaire/"},{"id":"tingly-pyramid-solitaire","name":"Tingly Pyramid Solitaire","url":"https://class6x.gitlab.io/tingly-pyramid-solitaire/"},{"id":"tiny-fishing","name":"Tiny Fishing","url":"https://class6x.gitlab.io/tiny-fishing/"},{"id":"top-speed-racing-3d","name":"Top Speed Racing 3d","url":"https://class6x.gitlab.io/top-speed-racing-3d/"},{"id":"towntopia","name":"Towntopia","url":"https://class6x.gitlab.io/towntopia/"},{"id":"traffic-mania","name":"Traffic Mania","url":"https://class6x.gitlab.io/traffic-mania/"},{"id":"traffic-rider","name":"Traffic Rider","url":"https://class6x.gitlab.io/traffic-rider/"},{"id":"traffic-rush","name":"Traffic Rush","url":"https://class6x.gitlab.io/traffic-rush/"},{"id":"tricks","name":"Tricks","url":"https://class6x.gitlab.io/tricks/"},{"id":"truck-loader","name":"Truck Loader","url":"https://class6x.gitlab.io/truck-loader/"},{"id":"tube-jumpers","name":"Tube Jumpers","url":"https://class6x.gitlab.io/tube-jumpers/"},{"id":"tunnel-rush","name":"Tunnel Rush","url":"https://class6x.gitlab.io/tunnel-rush/"},{"id":"turbo-moto-racer","name":"Turbo Moto Racer","url":"https://class6x.gitlab.io/turbo-moto-racer/"},{"id":"ultimate-car-driving","name":"Ultimate Car Driving","url":"https://class6x.gitlab.io/ultimate-car-driving/"},{"id":"unicycle-hero","name":"Unicycle Hero","url":"https://class6x.gitlab.io/unicycle-hero/"},{"id":"vex-6","name":"Vex 6","url":"https://class6x.gitlab.io/vex-6/"},{"id":"vex-7","name":"Vex 7","url":"https://class6x.gitlab.io/vex-7/"},{"id":"vex-8","name":"Vex 8","url":"https://class6x.gitlab.io/vex-8/"},{"id":"village-craft","name":"Village Craft","url":"https://class6x.gitlab.io/village-craft/"},{"id":"volley-random","name":"Volley Random","url":"https://class6x.gitlab.io/volley-random/"},{"id":"war-of-caribbean-pirates","name":"War Of Caribbean Pirates","url":"https://class6x.gitlab.io/war-of-caribbean-pirates/"},{"id":"we-become-what-we-behold","name":"We Become What We Behold","url":"https://class6x.gitlab.io/we-become-what-we-behold/"},{"id":"wood-blocks-3d","name":"Wood Blocks 3d","url":"https://class6x.gitlab.io/wood-blocks-3d/"},{"id":"word-city-crossed","name":"Word City Crossed","url":"https://class6x.gitlab.io/word-city-crossed/"},{"id":"words-search-classic-edition","name":"Words Search Classic Edition","url":"https://class6x.gitlab.io/words-search-classic-edition/"},{"id":"world-conquest","name":"World Conquest","url":"https://class6x.gitlab.io/world-conquest/"},{"id":"worlds-hardest-game-2","name":"Worlds Hardest Game 2","url":"https://class6x.gitlab.io/worlds-hardest-game-2/"},{"id":"worlds-hardest-game-3","name":"Worlds Hardest Game 3","url":"https://class6x.gitlab.io/worlds-hardest-game-3/"},{"id":"wrassling","name":"Wrassling","url":"https://class6x.gitlab.io/wrassling/"},{"id":"yohohoio","name":"Yohohoio","url":"https://class6x.gitlab.io/yohohoio/"},{"id":"yokai-dungeon","name":"Yokai Dungeon","url":"https://class6x.gitlab.io/yokai-dungeon/"},{"id":"zeepkist-crash-2d","name":"Zeepkist Crash 2d","url":"https://class6x.gitlab.io/zeepkist-crash-2d/"},{"id":"zen-blocks","name":"Zen Blocks","url":"https://class6x.gitlab.io/zen-blocks/"},{"id":"zombie-siege-outbreak","name":"Zombie Siege Outbreak","url":"https://class6x.gitlab.io/zombie-siege-outbreak/"}];



function defaultState() {
  return { users: [], sessionUserId: null, settings: { wallpaper: "default", reducedMotion: false } };
}
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || "null");
    if (!d || !Array.isArray(d.users)) return defaultState();
    if (!d.settings) d.settings = { wallpaper: "default", reducedMotion: false };
    return d;
  } catch (e) { return defaultState(); }
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
}


/* Custom cursor — direct GPU transform, no lag loop */
(function () {
  const c = document.getElementById("cursor");
  if (!c) return;
  const ring = document.getElementById("cursor-ring");
  if (ring) ring.style.display = "none";
  // Hotspot near feet of egg
  const ox = 0.4, oy = 0.85;
  function move(e) {
    c.style.transform = "translate3d(" + (e.clientX - 36 * ox) + "px," + (e.clientY - 48 * oy) + "px,0)";
    document.body.classList.add("ready");
  }
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("mousedown", function () { c.classList.add("click"); });
  document.addEventListener("mouseup", function () { c.classList.remove("click"); });
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("button, input, select, a, .user-chip, .desk-icon, .tb, .tb-bell, .snav, .browser-tab, .fe-tile, .game-tile")) {
      c.classList.add("dot");
    }
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("button, input, select, a, .user-chip, .desk-icon, .tb, .tb-bell, .snav, .browser-tab, .fe-tile, .game-tile")) {
      c.classList.remove("dot");
    }
  });
})();


/* UV proxy helpers */
function ensureProxySW() {
  if (window.__mountSWPromise) return window.__mountSWPromise;
  if (location.protocol === "file:" || location.origin === "null") {
    window.__mountSWReady = false;
    window.__mountSWPromise = Promise.resolve();
    return window.__mountSWPromise;
  }
  if (typeof registerSW === "function") {
    window.__mountSWPromise = registerSW().then(function () {
      window.__mountSWReady = true;
    }).catch(function (err) {
      console.warn("SW register failed", err);
      window.__mountSWReady = false;
    });
    return window.__mountSWPromise;
  }
  window.__mountSWReady = false;
  window.__mountSWPromise = Promise.resolve();
  return window.__mountSWPromise;
}
function toProxyUrl(raw) {
  var url = raw;
  if (typeof search === "function") {
    url = search(raw, "https://duckduckgo.com/?q=%s");
  } else {
    url = String(raw || "").trim();
    if (!/^https?:\/\//i.test(url)) {
      if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(url)) url = "https://" + url;
      else url = "https://duckduckgo.com/?q=" + encodeURIComponent(url);
    }
  }
  try {
    if (typeof __uv$config !== "undefined" && __uv$config.encodeUrl && __uv$config.prefix) {
      return __uv$config.prefix + __uv$config.encodeUrl(url);
    }
  } catch (e) {}
  return url;
}
function canUseProxy() {
  return !!(typeof __uv$config !== "undefined" && __uv$config.encodeUrl && __uv$config.prefix && location.protocol !== "file:");
}

let state = load();
let selectedUserId = null;
let unlocked = false;
let zTop = 50;
const openWins = new Map();

function uid() { return "u_" + Math.random().toString(36).slice(2, 10); }
function initials(n) { return ((String(n || "?").trim()[0]) || "?").toUpperCase(); }
function userById(id) { return state.users.find(u => u.id === id); }
function currentUser() { return userById(state.sessionUserId); }
function ensureUser(u) {
  if (!u.data) u.data = {};
  if (!u.data.prefs) u.data.prefs = {};
  return u;
}
function gearImg(cls) {
  return `<div class="${cls}"><img src="${GEAR_URL}" alt=""></div>`;
}

function tick() {
  const n = new Date();
  const t = n.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const d = n.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  const ds = n.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" });
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("lock-clock", t); set("lock-date", d); set("tb-time", t); set("tb-date", ds);
}
setInterval(tick, 10000); tick();

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function applyWallpaper() {
  var wp = document.getElementById("wallpaper");
  var photo = document.getElementById("wp-photo");
  var src = null;
  try {
    if (state && state.settings && state.settings.wallpaper && state.settings.wallpaper !== "default" && state.settings.wallpaper !== "animated") {
      src = state.settings.wallpaper;
    }
  } catch (e) {}
  if (src) {
    document.documentElement.style.setProperty("--wp-image", "url(\"" + String(src).replace(/"/g, '\\"') + "\")");
    if (wp) wp.classList.add("photo-mode");
  } else {
    // animated canvas wallpaper (default)
    document.documentElement.style.setProperty("--wp-image", "none");
    if (wp) wp.classList.remove("photo-mode");
    startAnimatedWallpaper();
  }
}

var __wpAnim = null;
function startAnimatedWallpaper() {
  var canvas = document.getElementById("wp-canvas");
  if (!canvas) return;
  if (__wpAnim) return; // already running
  var ctx = canvas.getContext("2d");
  var stars = [];
  var w = 0, h = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth || window.innerWidth;
    h = canvas.clientHeight || (window.innerHeight - 48);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = [];
    var count = Math.floor((w * h) / 4500);
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.72,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.02 + 0.005
      });
    }
  }
  resize();
  window.addEventListener("resize", resize);

  function mountainPath(baseY, peakX, peakY, spread) {
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, baseY);
    ctx.lineTo(peakX - spread * 0.55, baseY - (baseY - peakY) * 0.25);
    ctx.lineTo(peakX, peakY);
    ctx.lineTo(peakX + spread * 0.5, baseY - (baseY - peakY) * 0.2);
    ctx.lineTo(w, baseY + 20);
    ctx.lineTo(w, h);
    ctx.closePath();
  }

  function frame(t) {
    t = t * 0.001;
    // sky gradient
    var g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#05051a");
    g.addColorStop(0.45, "#0a0a28");
    g.addColorStop(0.75, "#12122a");
    g.addColorStop(1, "#0a0a14");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // aurora bands
    for (var b = 0; b < 3; b++) {
      var phase = t * (0.15 + b * 0.05) + b * 1.7;
      var ag = ctx.createLinearGradient(0, h * 0.05, w, h * 0.55);
      var alpha = 0.08 + 0.05 * Math.sin(phase);
      if (b === 0) ag.addColorStop(0, "rgba(120,40,255," + (alpha) + ")");
      else if (b === 1) ag.addColorStop(0, "rgba(40,180,255," + (alpha * 0.9) + ")");
      else ag.addColorStop(0, "rgba(180,60,255," + (alpha * 0.7) + ")");
      ag.addColorStop(0.35 + 0.1 * Math.sin(phase * 1.3), "rgba(80,200,255," + (alpha * 1.2) + ")");
      ag.addColorStop(0.7, "rgba(120,40,255," + (alpha * 0.5) + ")");
      ag.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = ag;
      ctx.beginPath();
      var y0 = h * (0.12 + b * 0.06);
      ctx.moveTo(0, y0);
      for (var x = 0; x <= w; x += 16) {
        var yy = y0
          + Math.sin(x * 0.008 + phase) * (28 + b * 10)
          + Math.sin(x * 0.02 - phase * 1.4) * 12;
        ctx.lineTo(x, yy);
      }
      ctx.lineTo(w, h * 0.65);
      ctx.lineTo(0, h * 0.65);
      ctx.closePath();
      ctx.fill();
    }

    // stars twinkle
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.a += s.s;
      var tw = 0.35 + 0.65 * Math.abs(Math.sin(s.a));
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255," + tw + ")";
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // far mountains
    ctx.fillStyle = "#0d1020";
    mountainPath(h * 0.62, w * 0.22, h * 0.42, w * 0.5);
    ctx.fill();
    ctx.fillStyle = "#0a0d18";
    mountainPath(h * 0.68, w * 0.78, h * 0.4, w * 0.55);
    ctx.fill();

    // main peak
    var peakX = w * 0.5;
    var peakY = h * 0.28;
    var baseY = h * 0.72;
    var mg = ctx.createLinearGradient(peakX, peakY, peakX, h);
    mg.addColorStop(0, "#0c1228");
    mg.addColorStop(0.45, "#080c1c");
    mg.addColorStop(1, "#04060f");
    ctx.fillStyle = mg;
    mountainPath(baseY, peakX, peakY, w * 0.7);
    ctx.fill();

    // soft ridge highlight (no solid triangle)
    ctx.strokeStyle = "rgba(140,170,255,0.15)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(peakX - w * 0.12, peakY + h * 0.12);
    ctx.lineTo(peakX, peakY);
    ctx.lineTo(peakX + w * 0.11, peakY + h * 0.11);
    ctx.stroke();

    // fog near base
    var fog = ctx.createLinearGradient(0, h * 0.55, 0, h);
    fog.addColorStop(0, "rgba(10,12,30,0)");
    fog.addColorStop(0.4, "rgba(12,14,28,0.35)");
    fog.addColorStop(1, "rgba(5,6,16,0.85)");
    ctx.fillStyle = fog;
    ctx.fillRect(0, h * 0.5, w, h * 0.5);

    __wpAnim = requestAnimationFrame(frame);
  }
  __wpAnim = requestAnimationFrame(frame);
}


function renderUserList() {
  const list = document.getElementById("user-list");
  list.innerHTML = "";
  state.users.forEach(u => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "user-chip";
    b.innerHTML = `<div class="avatar">${USER_ICON}</div><b></b>`;
    b.querySelector("b").textContent = u.name;
    b.onclick = () => selectUser(u.id);
    list.appendChild(b);
  });
}
function selectUser(id) {
  selectedUserId = id;
  const u = userById(id);
  document.getElementById("user-list").style.display = "none";
  document.getElementById("btn-add-user-login").style.display = "none";
  document.getElementById("create-form").classList.remove("show");
  document.getElementById("login-form").classList.add("show");
  document.getElementById("login-avatar").innerHTML = USER_ICON;
  document.getElementById("login-name").textContent = u.name;
  document.getElementById("login-err").textContent = "";
  document.getElementById("login-pass").value = "";
  setTimeout(() => document.getElementById("login-pass").focus(), 40);
}
function backToUsers() {
  selectedUserId = null;
  document.getElementById("login-form").classList.remove("show");
  document.getElementById("create-form").classList.remove("show");
  document.getElementById("user-list").style.display = "";
  document.getElementById("btn-add-user-login").style.display = "";
  renderUserList();
}
function unlockUI() {
  unlocked = true;
  document.getElementById("lock").classList.add("unlocked");
  if (!state.users.length) {
    document.getElementById("user-list").style.display = "none";
    document.getElementById("btn-add-user-login").style.display = "none";
    document.getElementById("create-form").classList.add("show");
  } else backToUsers();
}
function createUser(name, pass) {
  name = String(name || "").trim();
  pass = String(pass || "");
  if (!name) return "Enter a username.";
  if (state.users.some(u => u.name.toLowerCase() === name.toLowerCase())) return "Username taken.";
  if (!pass || pass.length < 4) return "PIN required (at least 4 characters).";
  state.users.push(ensureUser({ id: uid(), name, pass, created: Date.now(), data: {} }));
  save();
  return null;
}
function signIn(user) {
  ensureUser(user);
  state.sessionUserId = user.id;
  save();
  enterSession();
}
function enterSession() {
  const u = currentUser();
  if (!u) { showScreen("lock"); return; }
  document.getElementById("session-avatar").innerHTML = USER_ICON;
  document.getElementById("session-name").textContent = u.name;
  applyWallpaper();
  renderDesktop();
  renderPinned();
  renderTaskbar();
  showScreen("session");
  var lock = document.getElementById("lock");
  if (lock) {
    lock.classList.remove("unlocked", "active");
    lock.style.display = "none";
  }
  closeStart();
  if (window.updateBgMusic) window.updateBgMusic();
  setupNotificationsUI();
}
function lockSession() {
  openWins.forEach(win => win.remove());
  openWins.clear();
  renderTaskbar();
  if (window.updateBgMusic) window.updateBgMusic();
  state.sessionUserId = null;
  save();
  showScreen("lock");
  document.getElementById("lock").classList.remove("unlocked");
  unlocked = false;
  backToUsers();
  closeStart();
}

document.getElementById("btn-add-user-login").onclick = () => {
  document.getElementById("user-list").style.display = "none";
  document.getElementById("btn-add-user-login").style.display = "none";
  document.getElementById("login-form").classList.remove("show");
  document.getElementById("create-form").classList.add("show");
};
document.getElementById("btn-cancel-create").onclick = backToUsers;
document.getElementById("btn-create").onclick = () => {
  const err = createUser(document.getElementById("create-name").value, document.getElementById("create-pass").value);
  if (err) { document.getElementById("create-err").textContent = err; return; }
  signIn(state.users[state.users.length - 1]);
};
document.getElementById("btn-back-users").onclick = backToUsers;
document.getElementById("btn-sign-in").onclick = () => {
  const u = userById(selectedUserId);
  if (!u) return;
  if (u.pass && u.pass !== document.getElementById("login-pass").value) {
    document.getElementById("login-err").textContent = "Incorrect PIN.";
    return;
  }
  signIn(u);
};
document.getElementById("login-pass").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("btn-sign-in").click();
});
function tryUnlock(e) {
  if (unlocked) return;
  if (!document.getElementById("lock").classList.contains("active")) return;
  // allow clicks anywhere on lock screen before login panel is interactive
  unlockUI();
}
document.getElementById("lock").addEventListener("click", tryUnlock);
document.getElementById("lock").addEventListener("pointerdown", tryUnlock);
window.addEventListener("keydown", tryUnlock);
window.addEventListener("keyup", tryUnlock);

function renderDesktop() {
  const box = document.getElementById("desktop-icons");
  box.innerHTML = "";
  APPS.filter(a => a.desktop).forEach(app => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "desk-icon";
    let ico = app.icon === "GEAR" ? gearImg("ico settings") : appIconHTML(app.icon, 22);
    b.innerHTML = ico + `<span>${app.name}</span>`;
    b.ondblclick = () => openApp(app.id);
    b.onclick = () => {
      document.querySelectorAll(".desk-icon").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
    };
    box.appendChild(b);
  });
}
function renderPinned() {
  const box = document.getElementById("pinned");
  box.innerHTML = "";
  APPS.filter(a => a.pinned).forEach(app => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "start-app";
    let ico = app.icon === "GEAR" ? gearImg("ico settings") : appIconHTML(app.icon, 22);
    b.innerHTML = ico + `<span>${app.name}</span>`;
    b.onclick = () => { closeStart(); openApp(app.id); };
    box.appendChild(b);
  });
}

const startMenu = document.getElementById("start");
function closeStart() {
  startMenu.classList.remove("open");
  document.getElementById("btn-start").classList.remove("active");
}
document.getElementById("btn-start").onclick = e => {
  e.stopPropagation();
  startMenu.classList.toggle("open");
  document.getElementById("btn-start").classList.toggle("active", startMenu.classList.contains("open"));
};
document.addEventListener("click", e => {
  if (!e.target.closest("#start") && !e.target.closest("#btn-start")) closeStart();
  if (!e.target.closest("#ctx")) document.getElementById("ctx").classList.remove("open");
});
document.getElementById("btn-lock").onclick = lockSession;
document.getElementById("start-user-btn").onclick = () => { closeStart(); openApp("settings"); };

function openApp(id) {
  if (openWins.has(id)) { focusWin(openWins.get(id)); return; }
  const app = APPS.find(a => a.id === id);
  if (!app) return;

  const win = document.createElement("div");
  win.className = "window";
  win.dataset.id = id;
  const w = Math.min(
    id === "settings" || id === "games" || id === "ai" || id === "files" || id === "notes" ? 1020 :
    id === "browser" ? 1000 :
    id === "calc" ? 320 : id === "terminal" ? 900 : 520,
    innerWidth - 16
  );
  const h = Math.min(
    id === "settings" || id === "ai" || id === "files" || id === "notes" ? 640 :
    id === "games" ? Math.min(innerHeight - 80, 820) :
    id === "browser" ? 640 :
    id === "calc" ? 440 : id === "terminal" ? 560 : 380,
    innerHeight - 64
  );
  win.style.width = w + "px";
  win.style.height = h + "px";
  win.style.left = Math.max(8, (innerWidth - w) / 2) + "px";
  win.style.top = Math.max(8, (innerHeight - 48 - h) / 2) + "px";
  win.style.zIndex = ++zTop;

  let wicon;
  if (app.icon === "GEAR") wicon = `<div class="wicon settings-wicon"><img src="${GEAR_URL}" alt=""></div>`;
  else if (app.icon === "WEB") wicon = `<div class="wicon" style="background:#2563eb;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg></div>`;
  else if (app.icon === "GAME") wicon = `<div class="wicon" style="background:#333;padding:2px"><img src="${GAMES_ICON}" alt="" style="width:100%;height:100%;object-fit:contain;filter:brightness(0) invert(1)"></div>`;
  else if (app.icon === "AI") wicon = `<div class="wicon" style="background:linear-gradient(135deg,#60cdff,#8b5cf6)"></div>`;
  else if (app.icon === "FILES") wicon = `<div class="wicon" style="background:#e8a317;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg></div>`;
  else if (app.icon === "NOTES") wicon = `<div class="wicon" style="background:#f5c542;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#1a1a1a" stroke-width="2"><path d="M5 3h11l3 3v15H5V3z"/><path d="M14 3v4h4"/></svg></div>`;
  else if (app.icon === "CALC") wicon = `<div class="wicon" style="background:#2a2a2a;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/></svg></div>`;
  else if (app.icon === "SPOTIFY") wicon = `<div class="wicon" style="background:#1DB954"></div>`;
  else if (app.icon === "DISCORD") wicon = `<div class="wicon" style="background:#5865F2"></div>`;
  else if (app.icon === "VSCODE") wicon = `<div class="wicon" style="background:#007ACC"></div>`;
  else if (app.icon === "GFN") wicon = `<div class="wicon" style="background:#76b900"></div>`;
  else if (app.icon === "YT") wicon = `<div class="wicon" style="background:#FF0000"></div>`;
  else if (app.icon === "GITHUB") wicon = `<div class="wicon" style="background:#333"></div>`;
  else if (app.icon === "TERM") wicon = `<div class="wicon" style="background:#111;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#4ec9b0" stroke-width="2"><path d="M7 10l3 2-3 2M12 14h5"/></svg></div>`;
  else if (app.icon === "FLIX") wicon = `<div class="wicon" style="background:#e50914;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2"><path d="M10 9l5 3-5 3V9z"/></svg></div>`;
  else wicon = `<div class="wicon"></div>`;

  win.innerHTML = `
    <div class="wtitle" data-drag>
      ${wicon}
      <div class="wname">${app.name}</div>
      <div class="wbtns">
        <button type="button" class="wbtn min" title="Minimize">&#9472;</button>
        <button type="button" class="wbtn max" title="Maximize">&#9723;</button>
        <button type="button" class="wbtn close" title="Close">&#10005;</button>
      </div>
    </div>
    <div class="wbody"></div>`;

  const body = win.querySelector(".wbody");
  if (id === "settings") renderSettings(body);
  else if (id === "browser") renderBrowser(body);
  else if (id === "games") renderGames(body);
  else if (id === "ai") renderMountAI(body);
  else if (id === "files") renderFiles(body);
  else if (id === "notes") renderNotes(body);
  else if (id === "calc") renderCalc(body);
  else if (id === "terminal") renderTerminal(body);
  else body.innerHTML = `<div style="padding:16px">${app.name}</div>`;

  document.getElementById("windows").appendChild(win);
  requestAnimationFrame(() => requestAnimationFrame(() => win.classList.add("open")));
  openWins.set(id, win);
  wireWin(win, id);
  renderTaskbar();
  focusWin(win);
  if (window.updateBgMusic) window.updateBgMusic();
}

function closeWin(id) {
  const win = openWins.get(id);
  if (!win) return;
  win.classList.add("closing");
  win.classList.remove("open");
  setTimeout(() => {
    win.remove();
    openWins.delete(id);
    renderTaskbar();
    if (window.updateBgMusic) window.updateBgMusic();
  }, 160);
}

function wireWin(win, id) {
  const bar = win.querySelector("[data-drag]");
  let drag = null;
  bar.addEventListener("pointerdown", e => {
    if (e.target.closest("button") || win.classList.contains("maximized")) return;
    focusWin(win);
    drag = { x: e.clientX, y: e.clientY, l: win.offsetLeft, t: win.offsetTop };
    bar.setPointerCapture(e.pointerId);
  });
  bar.addEventListener("pointermove", e => {
    if (!drag) return;
    win.style.left = drag.l + (e.clientX - drag.x) + "px";
    win.style.top = Math.max(0, drag.t + (e.clientY - drag.y)) + "px";
  });
  bar.addEventListener("pointerup", () => { drag = null; });
  bar.addEventListener("dblclick", () => win.classList.toggle("maximized"));
  win.querySelector(".close").onclick = () => closeWin(id);
  win.querySelector(".min").onclick = () => { win.style.visibility = "hidden"; renderTaskbar(); if (window.updateBgMusic) window.updateBgMusic(); };
  win.querySelector(".max").onclick = () => win.classList.toggle("maximized");
  win.addEventListener("mousedown", () => focusWin(win));
}

function focusWin(win) {
  document.querySelectorAll(".window").forEach(w => w.classList.remove("active"));
  win.classList.add("active");
  win.style.visibility = "visible";
  win.style.zIndex = ++zTop;
  renderTaskbar();
  if (window.updateBgMusic) window.updateBgMusic();
}

function tbIconHTML(app) {
  if (!app) return "*";
  if (app.icon === "GEAR") return `<span class="gear-ico"><img src="${GEAR_URL}" alt=""></span>`;
  if (app.icon === "WEB") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#60cdff" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`;
  if (app.icon === "GAME") return `<img src="${GAMES_ICON}" alt="" style="width:18px;height:18px;object-fit:contain;filter:brightness(0) invert(1)">`;
  if (app.icon === "AI") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#60cdff" stroke-width="1.8"><path d="M12 3a6 6 0 0 1 6 6v1a4 4 0 0 1 3 4v1H3v-1a4 4 0 0 1 3-4V9a6 6 0 0 1 6-6z"/><path d="M9 18h6M10 21h4"/></svg>`;
  if (app.icon === "FILES") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#e8a317" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>`;
  if (app.icon === "NOTES") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f5c542" stroke-width="1.8"><path d="M5 3h11l3 3v15H5V3z"/><path d="M14 3v4h4M8 12h8M8 16h6"/></svg>`;
  if (app.icon === "CALC") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ccc" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/></svg>`;
  if (app.icon === "SPOTIFY") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#1DB954"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "DISCORD") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#5865F2"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "VSCODE") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#007ACC"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "GFN") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#76b900"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "YT") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#FF0000"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "GITHUB") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ccc"><circle cx="12" cy="12" r="10"/></svg>`;
  if (app.icon === "TERM") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4ec9b0" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10l3 2-3 2M12 14h5"/></svg>`;
  if (app.icon === "FLIX") return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#e50914" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>`;
  return app.name[0];
}

// Always pinned on the taskbar
const TASKBAR_PINNED = ["files", "notes", "calc", "terminal"];

function renderTaskbar() {
  const bar = document.getElementById("task-apps");
  bar.innerHTML = "";

  const shown = new Set();

  function addBtn(id, pinned) {
    if (shown.has(id)) return;
    shown.add(id);
    const app = APPS.find(a => a.id === id);
    const win = openWins.get(id);
    const b = document.createElement("button");
    b.type = "button";
    const isOpen = !!win;
    const isActive = win && win.classList.contains("active") && win.style.visibility !== "hidden";
    b.className = "tb" + (isActive ? " active" : "") + (isOpen ? " open" : "") + (pinned ? " pinned" : "");
    b.title = app ? app.name : id;
    b.innerHTML = tbIconHTML(app);
    b.onclick = () => {
      if (!win) {
        openApp(id);
        return;
      }
      if (win.style.visibility === "hidden") { win.style.visibility = "visible"; focusWin(win); }
      else if (win.classList.contains("active")) { win.style.visibility = "hidden"; renderTaskbar(); }
      else focusWin(win);
    };
    bar.appendChild(b);
  }

  TASKBAR_PINNED.forEach(id => addBtn(id, true));
  openWins.forEach((win, id) => addBtn(id, false));
  if (window.updateBgMusic) window.updateBgMusic();
}


function renderBrowser(root) {
  const tabs = [{ id: 1, title: "New tab", url: "", history: [], index: -1 }];
  let active = 1;
  let nextId = 2;

  root.innerHTML = `
    <div class="browser">
      <div class="browser-tabs" id="b-tabs"></div>
      <div class="browser-chrome">
        <div class="nav">
          <button type="button" id="b-back" title="Back">&#8592;</button>
          <button type="button" id="b-fwd" title="Forward">&#8594;</button>
          <button type="button" id="b-reload" title="Reload">&#8635;</button>
        </div>
        <form id="b-form">
          <input id="b-url" type="text" placeholder="Search or enter address" spellcheck="false" />
        </form>
      </div>
      <div id="b-stage" style="flex:1;min-height:0;position:relative;display:flex;flex-direction:column"></div>
    </div>`;

  const tabsEl = root.querySelector("#b-tabs");
  const stage = root.querySelector("#b-stage");
  const urlInput = root.querySelector("#b-url");
  const backBtn = root.querySelector("#b-back");
  const fwdBtn = root.querySelector("#b-fwd");

  function current() { return tabs.find(t => t.id === active); }

  function normalize(raw) {
    raw = String(raw || "").trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw)) return "https://" + raw;
    return "https://duckduckgo.com/?q=" + encodeURIComponent(raw);
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    tabs.forEach(t => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "browser-tab" + (t.id === active ? " active" : "");
      b.innerHTML = `<span style="overflow:hidden;text-overflow:ellipsis">${t.title}</span>`;
      const x = document.createElement("button");
      x.type = "button"; x.className = "x"; x.textContent = "x";
      x.onclick = e => {
        e.stopPropagation();
        const idx = tabs.findIndex(x => x.id === t.id);
        tabs.splice(idx, 1);
        if (!tabs.length) {
          tabs.push({ id: nextId++, title: "New tab", url: "", history: [], index: -1 });
          active = tabs[0].id;
        } else if (active === t.id) {
          active = tabs[Math.max(0, idx - 1)].id;
        }
        paint();
      };
      b.appendChild(x);
      b.onclick = () => { active = t.id; paint(); };
      tabsEl.appendChild(b);
    });
    const add = document.createElement("button");
    add.type = "button"; add.className = "browser-new"; add.textContent = "+";
    add.onclick = () => {
      const t = { id: nextId++, title: "New tab", url: "", history: [], index: -1 };
      tabs.push(t); active = t.id; paint();
    };
    tabsEl.appendChild(add);
  }

  function showHome() {
    stage.innerHTML = `
      <div class="browser-home">
        <h2>Mount</h2>
        <p>Search or enter a website · proxied</p>
        <form class="search-box" id="b-home-form">
          <input id="b-home-q" placeholder="Search DuckDuckGo or type a URL" />
        </form>
      </div>`;
    stage.querySelector("#b-home-form").onsubmit = e => {
      e.preventDefault();
      navigate(stage.querySelector("#b-home-q").value);
    };
  }

  function showFrame(url) {
    stage.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "browser-frame";
    frame.setAttribute("allow", "fullscreen");
    frame.src = url;
    stage.appendChild(frame);
  }

  function navigate(raw, push) {
    const url = normalize(raw);
    if (!url) return;
    const t = current();
    if (push !== false) {
      t.history = t.history.slice(0, t.index + 1);
      t.history.push(url);
      t.index = t.history.length - 1;
    }
    t.url = url;
    try {
      t.title = new URL(url).hostname.replace(/^www\./, "") || "Tab";
    } catch (e) { t.title = "Tab"; }
    urlInput.value = url;
    renderTabs();
    updateNav();
    function go(src) { showFrame(src); }
    if (!canUseProxy()) {
      go(url);
      return;
    }
    var proxied = toProxyUrl(url);
    var done = false;
    var swTimer = setTimeout(function () {
      if (!done) { done = true; go(proxied); }
    }, 400);
    ensureProxySW().then(function () {
      if (!done) { done = true; clearTimeout(swTimer); go(proxied); }
    });
  }

  function updateNav() {
    const t = current();
    backBtn.disabled = !t || t.index <= 0;
    fwdBtn.disabled = !t || t.index >= t.history.length - 1;
  }

  function paint() {
    const t = current();
    urlInput.value = t.url || "";
    if (!t.url) showHome();
    else showFrame(t.url);
    renderTabs();
    updateNav();
  }

  root.querySelector("#b-form").onsubmit = e => {
    e.preventDefault();
    navigate(urlInput.value);
  };
  backBtn.onclick = () => {
    const t = current();
    if (t.index > 0) {
      t.index--;
      t.url = t.history[t.index];
      urlInput.value = t.url;
      showFrame(toProxyUrl(t.url));
      renderTabs();
      updateNav();
    }
  };
  fwdBtn.onclick = () => {
    const t = current();
    if (t.index < t.history.length - 1) {
      t.index++;
      t.url = t.history[t.index];
      urlInput.value = t.url;
      showFrame(toProxyUrl(t.url));
      renderTabs();
      updateNav();
    }
  };
  root.querySelector("#b-reload").onclick = () => {
    const t = current();
    if (t.url) showFrame(toProxyUrl(t.url));
    else showHome();
  };

  paint();
}



async function loadGamesCatalog() {
  if (GAMES_CATALOG) return GAMES_CATALOG;
  if (typeof GAMES_EMBEDDED !== "undefined" && GAMES_EMBEDDED && GAMES_EMBEDDED.length) {
    GAMES_CATALOG = GAMES_EMBEDDED;
    return GAMES_CATALOG;
  }
  try {
    const r = await fetch("games.json");
    GAMES_CATALOG = await r.json();
  } catch (e) {
    GAMES_CATALOG = [];
  }
  return GAMES_CATALOG;
}


function gameColor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  return "hsl(" + hue + " 45% 38%)";
}

function renderGames(root) {
  root.innerHTML = `
    <div class="games-app">
      <div class="games-library" id="games-library">
        <div class="games-toolbar">
          <input id="games-search" type="text" placeholder="Search games" />
          <span id="games-count"></span>
        </div>
        <div class="games-grid" id="games-grid">Loading…</div>
      </div>
      <div class="games-player" id="games-player" hidden>
        <div class="games-player-bar">
          <button type="button" id="games-back">Back</button>
          <span id="games-playing-title"></span>
        </div>
        <iframe id="games-frame" class="games-frame" allowfullscreen allow="fullscreen; gamepad; autoplay; clipboard-write" referrerpolicy="no-referrer"></iframe>
      </div>
    </div>`;

  const library = root.querySelector("#games-library");
  const player = root.querySelector("#games-player");
  const grid = root.querySelector("#games-grid");
  const search = root.querySelector("#games-search");
  const count = root.querySelector("#games-count");
  const frame = root.querySelector("#games-frame");
  const playingTitle = root.querySelector("#games-playing-title");
  let all = [];

  function paint(q) {
    q = (q || "").trim().toLowerCase();
    const list = !q ? all : all.filter(g => g.name.toLowerCase().includes(q) || g.id.includes(q));
    count.textContent = list.length + " games";
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    list.forEach(g => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "game-tile";
      const letter = (g.name || "?").trim().charAt(0).toUpperCase() || "?";
      // Every game has a local logo in game-icons/
      const iconSrc = "game-icons/" + g.id + ".png";
      b.innerHTML = `<div class="game-thumb" style="background:${gameColor(g.id)}">` +
        `<span class="game-letter">${letter}</span>` +
        `<img class="game-icon" alt="" loading="eager" decoding="async" src="${iconSrc}" />` +
        `</div><span class="game-name"></span>`;
      b.querySelector(".game-name").textContent = g.name;
      const img = b.querySelector(".game-icon");
      img.onload = function () { img.classList.add("ok"); };
      img.onerror = function () { img.remove(); };
      b.title = g.name;
      b.onclick = () => playGame(g);
      frag.appendChild(b);
    });
    grid.appendChild(frag);
  }

  function playGame(g) {
    playingTitle.textContent = g.name;
    library.hidden = true;
    player.hidden = false;
    frame.onload = null;
    frame.onerror = null;
    var target = g.url || "";
    var isLocalish = /class6x|gitlab\.io|localhost|127\.0\.0\.1/i.test(target);
    function useDirect() { frame.src = target; }
    function useProxy() {
      if (!canUseProxy()) { useDirect(); return; }
      ensureProxySW().then(function () {
        try { frame.src = toProxyUrl(target); }
        catch (e) { useDirect(); }
      });
    }
    // Static class6x games: direct (fast). Other hosts: proxy when available.
    if (isLocalish) useDirect();
    else useProxy();
  }

  function exitGame() {
    frame.src = "about:blank";
    player.hidden = true;
    library.hidden = false;
    playingTitle.textContent = "";
  }

  root.querySelector("#games-back").onclick = exitGame;

  loadGamesCatalog().then(list => {
    all = list || [];
    paint("");
    search.oninput = () => paint(search.value);
  });
}




function renderMountAI(root) {
  root.innerHTML = `
    <div class="mount-ai">
      <div class="mount-ai-bar">
        <span>Mount AI</span>
        <button type="button" id="ai-refresh" title="Reload">Refresh</button>
      </div>
      <iframe class="mount-ai-frame" id="ai-frame" title="Mount AI" allow="clipboard-write"></iframe>
    </div>`;
  const frame = root.querySelector("#ai-frame");
  function load() {
    frame.src = MOUNT_AI_URL + (MOUNT_AI_URL.indexOf("?") >= 0 ? "&" : "?") + "t=" + Date.now();
  }
  root.querySelector("#ai-refresh").onclick = load;
  load();
}

/* ── per-user helpers for Files / Notes ── */
function userData() {
  const u = currentUser();
  if (!u) return null;
  if (!u.data) u.data = {};
  return u.data;
}
function defaultFS() {
  return {
    type: "folder",
    name: "Home",
    children: [
      { type: "folder", name: "Desktop", children: [] },
      { type: "folder", name: "Documents", children: [
        { type: "file", name: "Welcome.txt", content: "Welcome to Mount OS File Explorer.\n\nCreate folders and text files here.\nDrop an image onto the window to set wallpaper." }
      ]},
      { type: "folder", name: "Downloads", children: [] },
      { type: "folder", name: "Music", children: [] },
      { type: "folder", name: "Pictures", children: [] },
      { type: "folder", name: "Videos", children: [] },
      { type: "folder", name: "Config", children: [] },
      { type: "folder", name: "System", children: [] }
    ]
  };
}
function ensureFS() {
  const d = userData();
  if (!d) return defaultFS();
  if (!d.fs || !d.fs.children || d.fs.children.length < 5) d.fs = defaultFS();
  return d.fs;
}
function ensureNotes() {
  const d = userData();
  if (!d) return [];
  if (!Array.isArray(d.notes)) d.notes = [{ id: "n1", title: "Welcome", body: "Your notes are saved to this user account.", updated: Date.now() }];
  return d.notes;
}

function renderFiles(root) {
  const fs = ensureFS();
  let path = []; // stack of folder nodes under Home
  let selected = null;
  let view = "home"; // home | folder | trash
  let trash = (userData() && userData().trash) || [];
  if (userData()) userData().trash = trash;

  const FOLDER_SVG = `<svg class="fe-folder-svg" viewBox="0 0 64 64" width="56" height="56"><path fill="#f5c518" d="M6 14c0-3.3 2.7-6 6-6h12l4 5h24c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6H12c-3.3 0-6-2.7-6-6V14z"/><path fill="#ffd54a" d="M6 22h52v28c0 3.3-2.7 6-6 6H12c-3.3 0-6-2.7-6-6V22z"/></svg>`;
  const FILE_SVG = `<svg class="fe-file-svg" viewBox="0 0 64 64" width="48" height="48"><path fill="#8ab4f8" d="M14 6h24l12 12v40c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4V10c0-2.2 1.8-4 4-4z"/><path fill="#b6d0ff" d="M38 6v12h12"/></svg>`;

  root.innerHTML = `
    <div class="fe-app">
      <div class="fe-top">
        <button type="button" class="fe-nav-btn" id="fe-back" title="Back">←</button>
        <button type="button" class="fe-nav-btn" id="fe-up" title="Up">↑</button>
        <div class="fe-path" id="fe-path">
          <span class="fe-path-seg">Home</span>
        </div>
        <div class="fe-search-wrap">
          <input id="fe-search" type="search" placeholder="Search..." />
        </div>
      </div>
      <div class="fe-body">
        <aside class="fe-sidebar">
          <div class="fe-side-label">Quick Access</div>
          <button type="button" class="fe-side-item active" data-nav="home">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"/></svg>
            Home
          </button>
          <button type="button" class="fe-side-item" data-nav="Desktop">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg>
            Desktop
          </button>
          <button type="button" class="fe-side-item" data-nav="Downloads">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v10M8 10l4 4 4-4M5 18h14"/></svg>
            Downloads
          </button>
          <button type="button" class="fe-side-item" data-nav="Documents">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l3 3v15H6V3z"/><path d="M14 3v4h4"/></svg>
            Documents
          </button>
          <button type="button" class="fe-side-item" data-nav="Pictures">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M3 16l5-4 4 3 3-2 6 4"/></svg>
            Pictures
          </button>
          <button type="button" class="fe-side-item" data-nav="Music">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/></svg>
            Music
          </button>
          <button type="button" class="fe-side-item" data-nav="Videos">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="14" height="12" rx="1"/><path d="M17 10l4-2v8l-4-2"/></svg>
            Videos
          </button>
          <div class="fe-side-label">This PC</div>
          <button type="button" class="fe-side-item" data-nav="home">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4zM8 18v2M16 18v2M4 10h16"/></svg>
            Local Disk (C:)
          </button>
          <button type="button" class="fe-side-item" data-nav="System">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v10H4zM9 20h6"/></svg>
            System
          </button>
          <div class="fe-side-spacer"></div>
          <button type="button" class="fe-side-item" data-nav="trash">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12"/></svg>
            Trash
          </button>
        </aside>
        <div class="fe-content">
          <div class="fe-toolbar-actions">
            <button type="button" id="fe-new-folder">New folder</button>
            <button type="button" id="fe-new-file">New text file</button>
            <button type="button" id="fe-upload">Upload file</button>
            <button type="button" id="fe-run">Open / Run</button>
            <button type="button" id="fe-delete" class="danger">Delete</button>
            <input type="file" id="fe-file-input" multiple hidden />
          </div>
          <div class="fe-grid" id="fe-grid"></div>
          <div class="fe-status" id="fe-status">0 items</div>
          <div id="fe-editor-wrap" class="fe-editor-wrap" hidden>
            <div class="fe-editor-bar">
              <span id="fe-edit-name"></span>
              <button type="button" id="fe-save">Save</button>
              <button type="button" id="fe-close-editor">Close</button>
            </div>
            <textarea id="fe-editor" spellcheck="false"></textarea>
          </div>
        </div>
      </div>
    </div>`;

  const grid = root.querySelector("#fe-grid");
  const pathEl = root.querySelector("#fe-path");
  const status = root.querySelector("#fe-status");
  const search = root.querySelector("#fe-search");
  const editorWrap = root.querySelector("#fe-editor-wrap");
  const editor = root.querySelector("#fe-editor");
  const editName = root.querySelector("#fe-edit-name");

  function currentFolder() {
    if (view === "trash") return { name: "Trash", children: trash };
    let node = fs;
    for (const p of path) node = p;
    return node;
  }

  function goHome() {
    path = [];
    view = "home";
    selected = null;
    editorWrap.hidden = true;
    paint();
  }

  function goNamed(name) {
    if (name === "home") return goHome();
    if (name === "trash") {
      view = "trash";
      path = [];
      selected = null;
      editorWrap.hidden = true;
      paint();
      return;
    }
    const folder = (fs.children || []).find(c => c.type === "folder" && c.name === name);
    if (folder) {
      path = [folder];
      view = "folder";
      selected = null;
      editorWrap.hidden = true;
      paint();
    }
  }

  function paintPath() {
    pathEl.innerHTML = "";
    const segs = view === "trash" ? ["Trash"] : ["Home"].concat(path.map(p => p.name));
    segs.forEach((name, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "fe-path-sep";
        sep.textContent = " › ";
        pathEl.appendChild(sep);
      }
      const s = document.createElement("button");
      s.type = "button";
      s.className = "fe-path-seg";
      s.textContent = name;
      s.onclick = () => {
        if (view === "trash") return;
        path = path.slice(0, i);
        view = path.length ? "folder" : "home";
        selected = null;
        editorWrap.hidden = true;
        paint();
      };
      pathEl.appendChild(s);
    });
  }

  function paintSide() {
    const activeName = view === "trash" ? "trash" : (path.length ? path[path.length - 1].name : "home");
    root.querySelectorAll(".fe-side-item").forEach(btn => {
      const nav = btn.getAttribute("data-nav");
      btn.classList.toggle("active", nav === activeName || (activeName === "home" && nav === "home" && btn.textContent.trim().startsWith("Home")));
    });
  }

  function paintGrid() {
    const folder = currentFolder();
    let kids = (folder.children || []).slice();
    const q = (search.value || "").trim().toLowerCase();
    if (q) kids = kids.filter(k => (k.name || "").toLowerCase().includes(q));
    grid.innerHTML = "";
    status.textContent = kids.length + (kids.length === 1 ? " item" : " items");
    if (!kids.length) {
      grid.innerHTML = `<div class="fe-empty">This folder is empty</div>`;
      return;
    }
    kids.forEach(item => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "fe-tile" + (selected === item ? " selected" : "");
      tile.innerHTML = (item.type === "folder" ? FOLDER_SVG : FILE_SVG) + `<span class="fe-tile-name"></span>`;
      tile.querySelector(".fe-tile-name").textContent = item.name;
      tile.onclick = () => {
        selected = item;
        paintGrid();
      };
      tile.ondblclick = () => {
        selected = item;
        paintGrid();
        runItem(item);
      };
      grid.appendChild(tile);
    });
  }

  function fileKind(name) {
    const n = (name || "").toLowerCase();
    if (/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(n)) return "image";
    if (/\.(mp4|webm|ogg|mov)$/.test(n)) return "video";
    if (/\.(mp3|wav|ogg|m4a|flac)$/.test(n)) return "audio";
    if (/\.(html?|htm)$/.test(n)) return "html";
    if (/\.(txt|md|json|csv|log|js|css|xml|py|c|cpp|h|java|rs|go)$/.test(n)) return "text";
    if (/\.(pdf)$/.test(n)) return "pdf";
    return "binary";
  }

  function runItem(item) {
    if (!item || item.type === "folder") {
      if (item && item.type === "folder" && view !== "trash") {
        path.push(item);
        view = "folder";
        selected = null;
        editorWrap.hidden = true;
        paint();
      }
      return;
    }
    const kind = fileKind(item.name);
    if (kind === "text" || (!item.dataUrl && item.content != null && kind !== "binary")) {
      editorWrap.hidden = false;
      editName.textContent = item.name;
      editor.value = item.content || "";
      return;
    }
    if (item.dataUrl) {
      if (kind === "image") {
        editorWrap.hidden = false;
        editName.textContent = item.name;
        editor.value = "";
        editorWrap.querySelector("#fe-editor").hidden = true;
        let prev = editorWrap.querySelector(".fe-media-preview");
        if (!prev) {
          prev = document.createElement("div");
          prev.className = "fe-media-preview";
          editorWrap.appendChild(prev);
        }
        prev.hidden = false;
        prev.innerHTML = `<img src="${item.dataUrl}" alt="" style="max-width:100%;max-height:100%;object-fit:contain" />`;
        return;
      }
      if (kind === "video") {
        editorWrap.hidden = false;
        editName.textContent = item.name;
        editor.hidden = true;
        let prev = editorWrap.querySelector(".fe-media-preview");
        if (!prev) {
          prev = document.createElement("div");
          prev.className = "fe-media-preview";
          editorWrap.appendChild(prev);
        }
        prev.hidden = false;
        prev.innerHTML = `<video src="${item.dataUrl}" controls style="max-width:100%;max-height:100%"></video>`;
        return;
      }
      if (kind === "audio") {
        editorWrap.hidden = false;
        editName.textContent = item.name;
        editor.hidden = true;
        let prev = editorWrap.querySelector(".fe-media-preview");
        if (!prev) {
          prev = document.createElement("div");
          prev.className = "fe-media-preview";
          editorWrap.appendChild(prev);
        }
        prev.hidden = false;
        prev.innerHTML = `<audio src="${item.dataUrl}" controls style="width:90%"></audio>`;
        return;
      }
      if (kind === "html") {
        // open in browser app via blob
        try {
          const w = window.open();
          if (w) {
            w.document.write(item.content || atob((item.dataUrl.split(",")[1] || "")));
            w.document.close();
          }
        } catch (e) {
          editorWrap.hidden = false;
          editName.textContent = item.name;
          editor.hidden = false;
          editor.value = item.content || "[HTML file — open failed]";
        }
        return;
      }
      // generic download/open
      const a = document.createElement("a");
      a.href = item.dataUrl;
      a.download = item.name;
      a.target = "_blank";
      a.click();
      return;
    }
    // fallback text editor
    editorWrap.hidden = false;
    editName.textContent = item.name;
    editor.hidden = false;
    const prev = editorWrap.querySelector(".fe-media-preview");
    if (prev) prev.hidden = true;
    editor.value = item.content || "";
  }

  function paint() {
    paintPath();
    paintSide();
    paintGrid();
    save();
  }

  root.querySelectorAll(".fe-side-item").forEach(btn => {
    btn.onclick = () => goNamed(btn.getAttribute("data-nav"));
  });
  root.querySelector("#fe-back").onclick = root.querySelector("#fe-up").onclick = () => {
    if (view === "trash") { goHome(); return; }
    if (path.length) {
      path.pop();
      view = path.length ? "folder" : "home";
      selected = null;
      editorWrap.hidden = true;
      paint();
    }
  };
  root.querySelector("#fe-new-folder").onclick = () => {
    if (view === "trash") return;
    const name = prompt("Folder name");
    if (!name || !name.trim()) return;
    const folder = currentFolder();
    if (!folder.children) folder.children = [];
    folder.children.push({ type: "folder", name: name.trim(), children: [] });
    paint();
  };
  root.querySelector("#fe-new-file").onclick = () => {
    if (view === "trash") return;
    const name = prompt("File name", "Note.txt");
    if (!name || !name.trim()) return;
    let n = name.trim();
    if (!/\.[a-z0-9]+$/i.test(n)) n += ".txt";
    const folder = currentFolder();
    if (!folder.children) folder.children = [];
    folder.children.push({ type: "file", name: n, content: "" });
    paint();
  };
  const fileInput = root.querySelector("#fe-file-input");
  root.querySelector("#fe-upload").onclick = () => {
    if (view === "trash") return;
    fileInput.click();
  };
  fileInput.onchange = () => {
    const files = Array.from(fileInput.files || []);
    if (!files.length) return;
    const folder = currentFolder();
    if (!folder.children) folder.children = [];
    let left = files.length;
    files.forEach(file => {
      if (file.size > 4 * 1024 * 1024) {
        alert(file.name + " is too large (max 4 MB for local storage).");
        left--;
        if (left <= 0) paint();
        return;
      }
      const reader = new FileReader();
      const isText = /^(text\/|application\/(json|javascript|xml))/.test(file.type) || /\.(txt|md|json|csv|log|js|css|html?|xml|py)$/i.test(file.name);
      reader.onload = () => {
        const entry = { type: "file", name: file.name, mime: file.type || "application/octet-stream", size: file.size };
        if (isText) {
          entry.content = reader.result;
        } else {
          entry.dataUrl = reader.result;
        }
        folder.children.push(entry);
        left--;
        if (left <= 0) paint();
      };
      reader.onerror = () => { left--; if (left <= 0) paint(); };
      if (isText) reader.readAsText(file);
      else reader.readAsDataURL(file);
    });
    fileInput.value = "";
  };
  root.querySelector("#fe-run").onclick = () => {
    if (selected) runItem(selected);
  };
  root.querySelector("#fe-delete").onclick = () => {
    if (!selected) return;
    if (view === "trash") {
      trash = trash.filter(c => c !== selected);
      if (userData()) userData().trash = trash;
    } else {
      const folder = currentFolder();
      folder.children = (folder.children || []).filter(c => c !== selected);
      trash.push(selected);
      if (userData()) userData().trash = trash;
    }
    selected = null;
    editorWrap.hidden = true;
    paint();
  };
  root.querySelector("#fe-save").onclick = () => {
    if (selected && selected.type === "file") {
      selected.content = editor.value;
      save();
    }
  };
  root.querySelector("#fe-close-editor").onclick = () => {
    editorWrap.hidden = true;
    editor.hidden = false;
    const prev = editorWrap.querySelector(".fe-media-preview");
    if (prev) { prev.hidden = true; prev.innerHTML = ""; }
  };
  search.oninput = () => paintGrid();

  // drop image anywhere in content to set wallpaper
  const content = root.querySelector(".fe-content");
  ;["dragenter","dragover"].forEach(ev => {
    content.addEventListener(ev, e => { e.preventDefault(); content.classList.add("fe-drag"); });
  });
  ;["dragleave","drop"].forEach(ev => {
    content.addEventListener(ev, e => { e.preventDefault(); content.classList.remove("fe-drag"); });
  });
  content.addEventListener("drop", e => {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state.settings.wallpaper = reader.result;
        save();
        applyWallpaper();
      } catch (err) {}
    };
    reader.readAsDataURL(file);
  });

  paint();
}

function renderNotes(root) {
  const notes = ensureNotes();
  let activeId = notes[0] ? notes[0].id : null;

  root.innerHTML = `
    <div class="notes-app">
      <div class="notes-sidebar">
        <div class="notes-side-bar">
          <button type="button" id="note-new">+ New</button>
        </div>
        <div class="notes-list" id="notes-list"></div>
      </div>
      <div class="notes-editor">
        <input id="note-title" type="text" placeholder="Title" />
        <textarea id="note-body" placeholder="Start writing…"></textarea>
        <div class="notes-footer">
          <span id="note-status">Saved</span>
          <button type="button" id="note-delete" class="danger">Delete</button>
        </div>
      </div>
    </div>`;

  const listEl = root.querySelector("#notes-list");
  const titleEl = root.querySelector("#note-title");
  const bodyEl = root.querySelector("#note-body");
  const status = root.querySelector("#note-status");

  function uid() { return "n_" + Math.random().toString(36).slice(2, 9); }

  function paintList() {
    listEl.innerHTML = "";
    notes.forEach(n => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "notes-item" + (n.id === activeId ? " active" : "");
      const preview = (n.body || "").trim().slice(0, 60) || "Empty note";
      b.innerHTML = `<b></b><span></span>`;
      b.querySelector("b").textContent = n.title || "Untitled";
      b.querySelector("span").textContent = preview;
      b.onclick = () => { activeId = n.id; paintList(); paintEditor(); };
      listEl.appendChild(b);
    });
  }

  function active() { return notes.find(n => n.id === activeId); }

  function paintEditor() {
    const n = active();
    if (!n) {
      titleEl.value = "";
      bodyEl.value = "";
      titleEl.disabled = bodyEl.disabled = true;
      return;
    }
    titleEl.disabled = bodyEl.disabled = false;
    titleEl.value = n.title || "";
    bodyEl.value = n.body || "";
    status.textContent = "Saved";
  }

  function persist() {
    const n = active();
    if (!n) return;
    n.title = titleEl.value;
    n.body = bodyEl.value;
    n.updated = Date.now();
    save();
    status.textContent = "Saved";
    paintList();
  }

  let t = null;
  function scheduleSave() {
    status.textContent = "Saving…";
    clearTimeout(t);
    t = setTimeout(persist, 350);
  }

  titleEl.oninput = scheduleSave;
  bodyEl.oninput = scheduleSave;

  root.querySelector("#note-new").onclick = () => {
    const n = { id: uid(), title: "New note", body: "", updated: Date.now() };
    notes.unshift(n);
    activeId = n.id;
    save();
    paintList();
    paintEditor();
    titleEl.focus();
    titleEl.select();
  };
  root.querySelector("#note-delete").onclick = () => {
    const n = active();
    if (!n) return;
    const i = notes.indexOf(n);
    if (i >= 0) notes.splice(i, 1);
    activeId = notes[0] ? notes[0].id : null;
    save();
    paintList();
    paintEditor();
  };

  paintList();
  paintEditor();
}

function renderCalc(root) {
  root.innerHTML = `
    <div class="calc-app">
      <div class="calc-display" id="calc-display">0</div>
      <div class="calc-keys">
        <button type="button" data-k="C" class="calc-fn">C</button>
        <button type="button" data-k="±" class="calc-fn">±</button>
        <button type="button" data-k="%" class="calc-fn">%</button>
        <button type="button" data-k="/" class="calc-op">÷</button>
        <button type="button" data-k="7">7</button>
        <button type="button" data-k="8">8</button>
        <button type="button" data-k="9">9</button>
        <button type="button" data-k="*" class="calc-op">×</button>
        <button type="button" data-k="4">4</button>
        <button type="button" data-k="5">5</button>
        <button type="button" data-k="6">6</button>
        <button type="button" data-k="-" class="calc-op">−</button>
        <button type="button" data-k="1">1</button>
        <button type="button" data-k="2">2</button>
        <button type="button" data-k="3">3</button>
        <button type="button" data-k="+" class="calc-op">+</button>
        <button type="button" data-k="0" class="calc-zero">0</button>
        <button type="button" data-k=".">.</button>
        <button type="button" data-k="=" class="calc-eq">=</button>
      </div>
    </div>`;

  const display = root.querySelector("#calc-display");
  let cur = "0";
  let prev = null;
  let op = null;
  let reset = false;

  function show() {
    display.textContent = cur;
  }

  function input(k) {
    if (k === "C") { cur = "0"; prev = null; op = null; reset = false; show(); return; }
    if (k === "±") { cur = String(-(parseFloat(cur) || 0)); show(); return; }
    if (k === "%") { cur = String((parseFloat(cur) || 0) / 100); show(); return; }
    if (k === "." ) {
      if (reset) { cur = "0."; reset = false; show(); return; }
      if (!cur.includes(".")) { cur += "."; show(); }
      return;
    }
    if ("0123456789".includes(k)) {
      if (reset || cur === "0") { cur = k; reset = false; }
      else cur += k;
      show();
      return;
    }
    if ("+-*/".includes(k)) {
      if (prev !== null && op && !reset) compute();
      prev = parseFloat(cur);
      op = k;
      reset = true;
      return;
    }
    if (k === "=") {
      compute();
      op = null;
      prev = null;
      reset = true;
    }
  }

  function compute() {
    if (prev === null || !op) return;
    const a = prev;
    const b = parseFloat(cur) || 0;
    let r = 0;
    if (op === "+") r = a + b;
    else if (op === "-") r = a - b;
    else if (op === "*") r = a * b;
    else if (op === "/") r = b === 0 ? "Error" : a / b;
    cur = typeof r === "number" ? String(parseFloat(r.toPrecision(12))) : r;
    show();
  }

  root.querySelectorAll(".calc-keys button").forEach(btn => {
    btn.onclick = () => input(btn.getAttribute("data-k"));
  });
}

function renderMountFlix(root) {
  // Legal free / public-domain / officially free sources only
  const CATALOG = {
    movies: [
      { title: "Night of the Living Dead (1968)", tag: "Horror · Public domain", url: "https://archive.org/details/night_of_the_living_dead", thumb: "https://archive.org/services/img/night_of_the_living_dead" },
      { title: "His Girl Friday (1940)", tag: "Comedy · Public domain", url: "https://archive.org/details/his_girl_friday", thumb: "https://archive.org/services/img/his_girl_friday" },
      { title: "Charade (1963)", tag: "Mystery · Public domain", url: "https://archive.org/details/charade1963", thumb: "https://archive.org/services/img/charade1963" },
      { title: "The General (1926)", tag: "Silent · Keaton", url: "https://archive.org/details/TheGeneral", thumb: "https://archive.org/services/img/TheGeneral" },
      { title: "Plan 9 From Outer Space", tag: "Sci-fi · Public domain", url: "https://archive.org/details/Plan_9_from_Outer_Space_1959", thumb: "https://archive.org/services/img/Plan_9_from_Outer_Space_1959" },
      { title: "Dementia 13 (1963)", tag: "Horror · Public domain", url: "https://archive.org/details/Dementia_13", thumb: "https://archive.org/services/img/Dementia_13" },
      { title: "The Little Shop of Horrors (1960)", tag: "Comedy · Public domain", url: "https://archive.org/details/The_Little_Shop_of_Horrors_1960", thumb: "https://archive.org/services/img/The_Little_Shop_of_Horrors_1960" },
      { title: "Angel and the Badman", tag: "Western · Public domain", url: "https://archive.org/details/AngelAndTheBadman", thumb: "https://archive.org/services/img/AngelAndTheBadman" }
    ],
    tv: [
      { title: "The Twilight Zone (public episodes)", tag: "Classic TV", url: "https://archive.org/details/twilight-zone", thumb: "https://archive.org/services/img/twilight-zone" },
      { title: "Classic TV Commercials", tag: "Nostalgia", url: "https://archive.org/details/classic_tv_commercials", thumb: "https://archive.org/services/img/classic_tv_commercials" },
      { title: "Public Domain TV Series", tag: "Various", url: "https://archive.org/details/television", thumb: "https://archive.org/services/img/television" },
      { title: "Vintage Sci-Fi TV", tag: "Sci-fi", url: "https://archive.org/details/SciFiTV", thumb: "https://archive.org/services/img/SciFiTV" }
    ],
    anime: [
      { title: "Origin: Spirits of the Past (trailer / legal hubs)", tag: "Feature", url: "https://archive.org/search?query=anime%20public%20domain", thumb: "https://archive.org/services/img/anime" },
      { title: "Internet Archive · Anime collection", tag: "Legal uploads", url: "https://archive.org/details/anime", thumb: "https://archive.org/services/img/anime" },
      { title: "Creative Commons Anime shorts", tag: "CC", url: "https://archive.org/search?query=subject%3A%22anime%22%20AND%20mediatype%3Amovies", thumb: "https://archive.org/services/img/opensource_movies" },
      { title: "Japan Foundation · Free culture films", tag: "Official", url: "https://www.youtube.com/@JapanFoundation", thumb: "" }
    ],
    manga: [
      { title: "Internet Archive · Comics & manga", tag: "Public domain / open", url: "https://archive.org/details/manga", thumb: "https://archive.org/services/img/manga" },
      { title: "Project Gutenberg · Illustrated books", tag: "Public domain", url: "https://www.gutenberg.org/ebooks/search/?query=illustrated", thumb: "" },
      { title: "Internet Archive · Comic books", tag: "Golden age PD", url: "https://archive.org/details/comics", thumb: "https://archive.org/services/img/comics" },
      { title: "Open Library · Graphic novels", tag: "Borrow / PD", url: "https://openlibrary.org/subjects/comics", thumb: "" }
    ]
  };

  let tab = "movies";
  let playing = null;

  root.innerHTML = `
    <div class="flix-app">
      <div class="flix-top">
        <div class="flix-logo">MOUNT<span>FLIX</span></div>
        <nav class="flix-tabs">
          <button type="button" data-tab="movies" class="active">Movies</button>
          <button type="button" data-tab="tv">TV Shows</button>
          <button type="button" data-tab="anime">Anime</button>
          <button type="button" data-tab="manga">Manga</button>
        </nav>
        <input class="flix-search" id="flix-search" type="search" placeholder="Search titles..." />
      </div>
      <div class="flix-hero" id="flix-hero">
        <div class="flix-hero-text">
          <h2>Free & legal streaming</h2>
          <p>Public-domain films, classic TV, and open collections via Internet Archive & friends. No piracy links.</p>
        </div>
      </div>
      <div class="flix-row-title" id="flix-row-title">Movies</div>
      <div class="flix-grid" id="flix-grid"></div>
      <div class="flix-player" id="flix-player" hidden>
        <div class="flix-player-bar">
          <button type="button" id="flix-back">← Back</button>
          <span id="flix-playing-title"></span>
          <button type="button" id="flix-open-ext">Open source ↗</button>
        </div>
        <iframe id="flix-frame" class="flix-frame" allowfullscreen referrerpolicy="no-referrer"></iframe>
      </div>
    </div>`;

  const grid = root.querySelector("#flix-grid");
  const rowTitle = root.querySelector("#flix-row-title");
  const player = root.querySelector("#flix-player");
  const frame = root.querySelector("#flix-frame");
  const playingTitle = root.querySelector("#flix-playing-title");
  const search = root.querySelector("#flix-search");

  function paint() {
    const q = (search.value || "").trim().toLowerCase();
    let list = CATALOG[tab] || [];
    if (q) list = list.filter(x => (x.title + " " + x.tag).toLowerCase().includes(q));
    rowTitle.textContent = ({ movies: "Movies", tv: "TV Shows", anime: "Anime", manga: "Manga" })[tab] || tab;
    grid.innerHTML = "";
    list.forEach(item => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "flix-card";
      const thumb = item.thumb
        ? `<img src="${item.thumb}" alt="" loading="lazy" onerror="this.style.display='none'" />`
        : "";
      card.innerHTML = `<div class="flix-thumb">${thumb}<div class="flix-thumb-fallback">${(item.title || "?")[0]}</div></div>
        <div class="flix-card-title"></div>
        <div class="flix-card-tag"></div>`;
      card.querySelector(".flix-card-title").textContent = item.title;
      card.querySelector(".flix-card-tag").textContent = item.tag;
      card.onclick = () => play(item);
      grid.appendChild(card);
    });
    if (!list.length) grid.innerHTML = `<div class="flix-empty">No titles match</div>`;
  }

  function play(item) {
    playing = item;
    playingTitle.textContent = item.title;
    player.hidden = false;
    // Prefer opening Archive.org embed when possible
    let src = item.url;
    if (/archive\.org\/details\//.test(src)) {
      const id = src.split("/details/")[1].split(/[?#]/)[0];
      src = "https://archive.org/embed/" + id;
    }
    frame.src = src;
  }

  root.querySelectorAll(".flix-tabs button").forEach(btn => {
    btn.onclick = () => {
      tab = btn.getAttribute("data-tab");
      root.querySelectorAll(".flix-tabs button").forEach(b => b.classList.toggle("active", b === btn));
      paint();
    };
  });
  root.querySelector("#flix-back").onclick = () => {
    frame.src = "about:blank";
    player.hidden = true;
    playing = null;
  };
  root.querySelector("#flix-open-ext").onclick = () => {
    if (playing && playing.url) window.open(playing.url, "_blank", "noopener");
  };
  search.oninput = paint;
  paint();
}



function renderTerminal(root) {
  const u = currentUser();
  const userName = (u && u.name) ? u.name : "guest";
  const host = "MOUNT-PC";
  let cwdParts = ["C:", "Users", userName];
  let hist = [];
  let histIdx = -1;
  let tabs = [{ id: 1, title: "Command Prompt" }];
  let activeTab = 1;
  let nextTab = 2;
  const env = {
    USERNAME: userName,
    USERPROFILE: "C:\\\\Users\\\\" + userName,
    SYSTEMROOT: "C:\\\\Windows",
    PATH: "C:\\\\Windows\\\\System32;C:\\\\Windows",
    PROMPT: "$P$G"
  };

  root.innerHTML = `
    <div class="wt-app">
      <div class="wt-tabbar">
        <div class="wt-tabs" id="wt-tabs"></div>
        <button type="button" class="wt-newtab" id="wt-newtab" title="New tab">+</button>
        <div class="wt-tabbar-space"></div>
      </div>
      <div class="wt-body">
        <div class="wt-out" id="wt-out"></div>
        <div class="wt-input-row">
          <span class="wt-prompt" id="wt-prompt"></span>
          <input class="wt-input" id="wt-input" type="text" spellcheck="false" autocomplete="off" autocapitalize="off" />
        </div>
      </div>
    </div>`;

  const out = root.querySelector("#wt-out");
  const input = root.querySelector("#wt-input");
  const promptEl = root.querySelector("#wt-prompt");
  const tabsEl = root.querySelector("#wt-tabs");

  function cwdStr() {
    if (cwdParts.length === 1) return cwdParts[0] + "\\\\";
    return cwdParts.join("\\\\");
  }
  function setPrompt() {
    promptEl.textContent = cwdStr() + ">";
  }
  function paintTabs() {
    tabsEl.innerHTML = "";
    tabs.forEach(t => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "wt-tab" + (t.id === activeTab ? " active" : "");
      b.innerHTML = `<span class="wt-tab-icon">▶</span><span class="wt-tab-title"></span><span class="wt-tab-x" data-close="${t.id}">×</span>`;
      b.querySelector(".wt-tab-title").textContent = t.title;
      b.onclick = (e) => {
        if (e.target.getAttribute("data-close")) return;
        activeTab = t.id;
        paintTabs();
        input.focus();
      };
      b.querySelector(".wt-tab-x").onclick = (e) => {
        e.stopPropagation();
        if (tabs.length === 1) return;
        tabs = tabs.filter(x => x.id !== t.id);
        if (activeTab === t.id) activeTab = tabs[tabs.length - 1].id;
        paintTabs();
      };
      tabsEl.appendChild(b);
    });
  }
  function write(text, cls) {
    const d = document.createElement("div");
    d.className = "wt-line" + (cls ? " " + cls : "");
    d.textContent = text;
    out.appendChild(d);
    out.scrollTop = out.scrollHeight;
  }
  function writeHTML(html, cls) {
    const d = document.createElement("div");
    d.className = "wt-line" + (cls ? " " + cls : "");
    d.innerHTML = html;
    out.appendChild(d);
    out.scrollTop = out.scrollHeight;
  }
  function banner() {
    write("Microsoft Windows [Version 10.0.22631.2861]");
    write("(c) Microsoft Corporation. All rights reserved.");
    write("");
  }

  // virtual fs snapshot for dir/cd
  function fsTree() {
    try {
      const fs = ensureFS();
      return fs;
    } catch (e) {
      return { children: [] };
    }
  }
  function listNames() {
    const names = ["Desktop", "Documents", "Downloads", "Music", "Pictures", "Videos", "AppData", "Favorites"];
    try {
      const fs = fsTree();
      if (fs && fs.children) return fs.children.map(c => c.name);
    } catch (e) {}
    return names;
  }

  function neofetch() {
    const games = (typeof GAMES_EMBEDDED !== "undefined" && GAMES_EMBEDDED) ? GAMES_EMBEDDED.length : "?";
    const lines = [
      "        /\\\\          " + userName + "@" + host,
      "       /  \\\\         ---------------",
      "      /_/\\\\_\\\\        OS: Mount OS (Windows Terminal)",
      "     /      \\\\       Host: " + host,
      "    /   /\\\\   \\\\      Kernel: Browser",
      "   /   /  \\\\   \\\\     Shell: cmd.exe",
      "  /___/    \\\\___\\\\    Font: Minecraft",
      "                    Resolution: " + window.innerWidth + "x" + window.innerHeight,
      "                    Games: " + games,
      "                    Terminal: Windows Terminal",
      "                    CPU: Virtual",
      "                    Memory: localStorage"
    ];
    lines.forEach(l => write(l, "wt-accent"));
  }

  const HELP = [
    "For more information on a specific command, type HELP command-name",
    "ASSOC          Displays or modifies file extension associations.",
    "CD             Displays the name of or changes the current directory.",
    "CHDIR          Displays the name of or changes the current directory.",
    "CLS            Clears the screen.",
    "COLOR          Sets the default console foreground and background colors.",
    "COPY           Copies one or more files to another location.",
    "DATE           Displays or sets the date.",
    "DEL            Deletes one or more files.",
    "DIR            Displays a list of files and subdirectories in a directory.",
    "ECHO           Displays messages, or turns command echoing on or off.",
    "EXIT           Quits the CMD.EXE program (command interpreter).",
    "FIND           Searches for a text string in a file or files.",
    "HELP           Provides Help information for Windows commands.",
    "MKDIR          Creates a directory.",
    "MD             Creates a directory.",
    "MOVE           Moves one or more files from one directory to another.",
    "PATH           Displays or sets a search path for executable files.",
    "PROMPT         Changes the cmd.exe command prompt.",
    "RD             Removes a directory.",
    "RMDIR          Removes a directory.",
    "REN            Renames a file or files.",
    "RENAME         Renames a file or files.",
    "SET            Displays, sets, or removes Windows environment variables.",
    "START          Starts a separate window to run a specified program or command.",
    "SYSTEMINFO     Displays machine specific properties and configuration.",
    "TIME           Displays or sets the system time.",
    "TITLE          Sets the window title for the command prompt window.",
    "TREE           Graphically displays the directory structure.",
    "TYPE           Displays the contents of a text file.",
    "VER            Displays the Windows version.",
    "VOL            Displays a disk volume label and serial number.",
    "WHOAMI         Displays user name.",
    "HOSTNAME       Displays host name.",
    "IPCONFIG       Displays network configuration.",
    "PING           Ping a host (simulated).",
    "TASKLIST       Lists running tasks.",
    "NEOFETCH       System information with logo.",
    "CLEAR          Clears the screen (alias of CLS).",
    "OPEN           Opens a Mount OS app (files, notes, calc, games…)."
  ];

  function run(raw) {
    const line = raw.replace(/^\s+|\s+$/g, "");
    if (!line) {
      write(cwdStr() + ">");
      return;
    }
    write(cwdStr() + ">" + line);
    hist.push(line);
    histIdx = hist.length;

    // split respecting simple quotes
    const parts = [];
    let cur = "", q = null;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) {
        if (ch === q) q = null;
        else cur += ch;
      } else if (ch === '"' || ch === "'") {
        q = ch;
      } else if (/\s/.test(ch)) {
        if (cur) { parts.push(cur); cur = ""; }
      } else cur += ch;
    }
    if (cur) parts.push(cur);

    const cmd = (parts[0] || "").toLowerCase();
    const args = parts.slice(1);

    if (cmd === "help" || cmd === "/?") {
      if (args[0]) {
        write("Help for " + args[0].toUpperCase() + " is not available in this demo shell.");
        write("Type HELP for a list of commands.");
      } else HELP.forEach(l => write(l));
    }
    else if (cmd === "cls" || cmd === "clear") { out.innerHTML = ""; }
    else if (cmd === "ver") {
      write("Microsoft Windows [Version 10.0.22631.2861]");
    }
    else if (cmd === "whoami") write(host + "\\\\" + userName);
    else if (cmd === "hostname") write(host);
    else if (cmd === "date") write("The current date is: " + new Date().toLocaleDateString());
    else if (cmd === "time") write("The current time is: " + new Date().toLocaleTimeString());
    else if (cmd === "echo") {
      if (!args.length) write("ECHO is on.");
      else write(args.join(" "));
    }
    else if (cmd === "cd" || cmd === "chdir") {
      if (!args.length) write(cwdStr());
      else {
        let t = args.join(" ");
        if (t === "/" || t === "\\\\") cwdParts = ["C:"];
        else if (t === "~") cwdParts = ["C:", "Users", userName];
        else if (t === ".." ) { if (cwdParts.length > 1) cwdParts.pop(); }
        else if (/^[a-zA-Z]:\\?$/.test(t)) cwdParts = [t.replace(/\\\\$/, "").toUpperCase()];
        else if (t.startsWith("C:\\\\") || t.startsWith("c:\\\\")) cwdParts = t.split(/\\\\+/).filter(Boolean);
        else cwdParts = cwdParts.concat(t.split(/\\\\+/).filter(Boolean));
        setPrompt();
      }
    }
    else if (cmd === "dir") {
      write(" Volume in drive C has no label.");
      write(" Volume Serial Number is 1A2B-3C4D");
      write("");
      write(" Directory of " + cwdStr());
      write("");
      const now = new Date();
      const ds = now.toLocaleDateString() + "  " + now.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
      write(ds + "    <DIR>          .");
      write(ds + "    <DIR>          ..");
      listNames().forEach(n => write(ds + "    <DIR>          " + n));
      write("               0 File(s)              0 bytes");
      write("               " + listNames().length + " Dir(s)  128,000,000,000 bytes free");
    }
    else if (cmd === "mkdir" || cmd === "md") {
      if (!args[0]) write("The syntax of the command is incorrect.");
      else write("Directory created: " + args[0], "wt-ok");
    }
    else if (cmd === "rmdir" || cmd === "rd") {
      if (!args[0]) write("The syntax of the command is incorrect.");
      else write("Directory removed: " + args[0], "wt-ok");
    }
    else if (cmd === "del" || cmd === "erase") {
      if (!args[0]) write("The syntax of the command is incorrect.");
      else write("Deleted: " + args.join(" "), "wt-ok");
    }
    else if (cmd === "copy" || cmd === "move" || cmd === "ren" || cmd === "rename") {
      write("Operation completed.", "wt-ok");
    }
    else if (cmd === "type") {
      if (!args[0]) write("The syntax of the command is incorrect.");
      else write("(empty file or not found)");
    }
    else if (cmd === "tree") {
      write(cwdStr());
      const names = listNames();
      names.forEach((n, i) => {
        const last = i === names.length - 1;
        write((last ? "└───" : "├───") + n);
      });
    }
    else if (cmd === "set") {
      if (!args.length) {
        Object.keys(env).sort().forEach(k => write(k + "=" + env[k]));
      } else {
        const m = args.join(" ").match(/^([^=]+)=(.*)$/);
        if (m) { env[m[1].toUpperCase()] = m[2]; }
        else {
          const key = args[0].toUpperCase();
          if (env[key] != null) write(key + "=" + env[key]);
          else write("Environment variable " + key + " not defined");
        }
      }
    }
    else if (cmd === "path") {
      if (!args.length) write("PATH=" + env.PATH);
      else env.PATH = args.join(" ");
    }
    else if (cmd === "prompt") {
      write("PROMPT set (display still uses path form in this shell).");
    }
    else if (cmd === "title") {
      const t = args.join(" ") || "Command Prompt";
      const tab = tabs.find(x => x.id === activeTab);
      if (tab) { tab.title = t; paintTabs(); }
    }
    else if (cmd === "color") {
      write("Color change applied to this session (visual theme fixed in Mount OS).");
    }
    else if (cmd === "vol") {
      write(" Volume in drive C has no label.");
      write(" Volume Serial Number is 1A2B-3C4D");
    }
    else if (cmd === "systeminfo") {
      [
        "Host Name:                 " + host,
        "OS Name:                   Microsoft Windows 10 Pro",
        "OS Version:                10.0.22631 N/A Build 22631",
        "System Manufacturer:       Mount OS Virtual",
        "System Model:              Browser PC",
        "System Type:               x64-based PC",
        "Total Physical Memory:     16,384 MB",
        "Available Physical Memory: 8,192 MB"
      ].forEach(l => write(l));
    }
    else if (cmd === "ipconfig") {
      write("Windows IP Configuration");
      write("");
      write("Ethernet adapter Ethernet:");
      write("   Connection-specific DNS Suffix  . : local");
      write("   IPv4 Address. . . . . . . . . . . : 10.0.0.15");
      write("   Subnet Mask . . . . . . . . . . . : 255.255.255.0");
      write("   Default Gateway . . . . . . . . . : 10.0.0.1");
    }
    else if (cmd === "ping") {
      const target = args[0] || "localhost";
      write("Pinging " + target + " with 32 bytes of data:");
      for (let i = 0; i < 4; i++) write("Reply from " + target + ": bytes=32 time=" + (Math.floor(Math.random()*20)+1) + "ms TTL=64");
      write("");
      write("Ping statistics for " + target + ":");
      write("    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)");
    }
    else if (cmd === "tasklist") {
      write("Image Name                     PID Session Name        Session#    Mem Usage");
      write("========================= ======== ================ =========== ============");
      write("System Idle Process              0 Services                   0          8 K");
      write("System                           4 Services                   0        132 K");
      write("MountOS.exe                   1337 Console                    1     64,000 K");
      write("RuntimeBroker.exe             2048 Console                    1     12,400 K");
      openWins.forEach((w, id) => write((id + ".exe").padEnd(26) + " " + String(1000 + id.length * 97).padStart(8) + " Console                    1     25,000 K"));
    }
    else if (cmd === "start") {
      const app = (args[0] || "").toLowerCase();
      const map = { files: "files", explorer: "files", notes: "notes", calc: "calc", calculator: "calc", settings: "settings", browser: "browser", mount: "browser", games: "games", ai: "ai", terminal: "terminal", cmd: "terminal", wt: "terminal" };
      if (map[app]) { write("Starting " + map[app] + "...", "wt-ok"); openApp(map[app]); }
      else if (!args.length) write("The system cannot find the file " + (args[0] || "") + ".");
      else write("Started: " + args.join(" "), "wt-ok");
    }
    else if (cmd === "open") {
      const app = (args[0] || "").toLowerCase();
      const map = { files: "files", explorer: "files", notes: "notes", calc: "calc", calculator: "calc", settings: "settings", browser: "browser", mount: "browser", games: "games", ai: "ai", terminal: "terminal" };
      if (map[app]) { openApp(map[app]); write("OK", "wt-ok"); }
      else write("Usage: OPEN [files|notes|calc|games|settings|browser|ai]", "wt-err");
    }
    else if (cmd === "exit") {
      closeWin("terminal");
      return;
    }
    else if (cmd === "neofetch" || cmd === "fetch") neofetch();
    else if (cmd === "assoc") write(".txt=txtfile");
    else if (cmd === "find") write("FIND: parameter format not correct");
    else {
      write("'" + parts[0] + "' is not recognized as an internal or external command,");
      write("operable program or batch file.");
    }
    write("");
  }

  root.querySelector("#wt-newtab").onclick = () => {
    tabs.push({ id: nextTab++, title: "Command Prompt" });
    activeTab = tabs[tabs.length - 1].id;
    paintTabs();
    out.innerHTML = "";
    banner();
    write("");
    input.focus();
  };

  paintTabs();
  setPrompt();
  banner();
  write("");
  input.focus();
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      run(input.value);
      input.value = "";
      setPrompt();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; input.value = hist[histIdx] || ""; input.setSelectionRange(input.value.length, input.value.length); }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < hist.length - 1) { histIdx++; input.value = hist[histIdx] || ""; }
      else { histIdx = hist.length; input.value = ""; }
    } else if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      write(cwdStr() + ">" + input.value + "^C");
      input.value = "";
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      out.innerHTML = "";
    }
  });
  root.addEventListener("mousedown", () => input.focus());
}

function renderSettings(root) {
  root.innerHTML = `
    <div class="settings-layout">
      <aside class="settings-nav">
        <h2>Settings</h2>
        <button type="button" class="snav active" data-panel="system"><i></i> System</button>
        <button type="button" class="snav" data-panel="personalize"><i></i> Personalization</button>
        <button type="button" class="snav" data-panel="accounts"><i></i> Accounts</button>
        <button type="button" class="snav" data-panel="about"><i></i> About</button>
      </aside>
      <main class="settings-main" id="settings-main"></main>
    </div>`;
  const main = root.querySelector("#settings-main");
  const navs = root.querySelectorAll(".snav");

  function show(panel) {
    navs.forEach(n => n.classList.toggle("active", n.dataset.panel === panel));
    if (panel === "system") {
      main.innerHTML = `
        <h3>System</h3>
        <div class="sub">Display, notifications, power</div>
        <div class="s-card"><div class="row">
          <div><b>Notifications</b><p>System notifications</p></div>
          <button type="button" class="toggle" id="t-notif"></button>
        </div></div>
        <div class="s-card"><div class="row">
          <div><b>Reduced motion</b><p>Fewer animations</p></div>
          <button type="button" class="toggle ${state.settings.reducedMotion ? "on" : ""}" id="t-motion"></button>
        </div></div>`;
      main.querySelector("#t-motion").onclick = function () {
        state.settings.reducedMotion = !state.settings.reducedMotion;
        this.classList.toggle("on", state.settings.reducedMotion);
        save();
      };
      main.querySelector("#t-notif").onclick = function () { this.classList.toggle("on"); };
    }
    if (panel === "personalize") {
      main.innerHTML = `
        <h3>Personalization</h3>
        <div class="sub">Colors</div>
        <div class="s-card"><div class="row">
          <div><b>Accent color</b><p>Windows blue</p></div>
          <span style="width:28px;height:28px;border-radius:4px;background:#60cdff"></span>
        </div></div>`;
    }
    if (panel === "accounts") {
      const rows = state.users.map(u => `
        <div class="s-card"><div class="row">
          <div><b>${u.name}${u.id === state.sessionUserId ? " (signed in)" : ""}</b><p>Local account</p></div>
          ${u.id !== state.sessionUserId ? `<button type="button" class="btn" data-del="${u.id}" style="width:auto;padding:6px 12px;margin:0">Remove</button>` : ""}
        </div></div>`).join("");
      main.innerHTML = `
        <h3>Accounts</h3>
        <div class="sub">Your accounts</div>
        ${rows}
        <div class="s-card">
          <b>Add an account</b>
          <input id="set-new-name" type="text" placeholder="Username" style="margin-top:10px" />
          <input id="set-new-pass" type="password" placeholder="PIN (optional)" />
          <button type="button" class="btn primary" id="set-add" style="margin-top:8px">Add</button>
        </div>`;
      main.querySelectorAll("[data-del]").forEach(btn => {
        btn.onclick = () => {
          state.users = state.users.filter(u => u.id !== btn.getAttribute("data-del"));
          save(); show("accounts");
        };
      });
      main.querySelector("#set-add").onclick = () => {
        const err = createUser(main.querySelector("#set-new-name").value, main.querySelector("#set-new-pass").value);
        if (err) alert(err); else show("accounts");
      };
    }
    if (panel === "about") {
      main.innerHTML = `
        <h3>About</h3>
        <div class="sub">Mount OS</div>
        <div class="s-card"><div class="row"><div><b>Edition</b><p>Mount OS</p></div></div></div>
        <div class="s-card"><div class="row"><div><b>Version</b><p>1.0.0</p></div></div></div>
        <div class="s-card"><div class="row"><div><b>Storage</b><p>localStorage</p></div></div></div>`;
    }
  }
  navs.forEach(n => n.onclick = () => show(n.dataset.panel));
  show("system");
}

document.getElementById("wallpaper").addEventListener("contextmenu", e => {
  e.preventDefault();
  const ctx = document.getElementById("ctx");
  ctx.innerHTML = `<button type="button" data-act="settings">Settings</button><hr><button type="button" data-act="lock">Lock</button>`;
  ctx.style.left = Math.min(e.clientX, innerWidth - 210) + "px";
  ctx.style.top = Math.min(e.clientY, innerHeight - 100) + "px";
  ctx.classList.add("open");
  ctx.onclick = ev => {
    const a = ev.target.getAttribute("data-act");
    ctx.classList.remove("open");
    if (a === "settings") openApp("settings");
    if (a === "lock") lockSession();
  };
});

applyWallpaper();
document.getElementById("login-avatar").innerHTML = USER_ICON;
document.getElementById("session-avatar").innerHTML = USER_ICON;
renderUserList();
state.sessionUserId = null;
save();
showScreen("lock");
startAnimatedWallpaper();
setupNotificationsUI();


/* ── Notifications (from notifications.json) ── */
var __notifs = [];
var __notifRead = {};
try { __notifRead = JSON.parse(localStorage.getItem("mount_notif_read") || "{}") || {}; } catch (e) {}

function saveNotifRead() {
  try { localStorage.setItem("mount_notif_read", JSON.stringify(__notifRead)); } catch (e) {}
}

function notifUnreadCount() {
  return __notifs.filter(function (n) {
    var id = n.id || n.title;
    if (__notifRead[id]) return false;
    return n.read !== true;
  }).length;
}

function renderNotifBadge() {
  var badge = document.getElementById("tb-badge");
  if (!badge) return;
  var n = notifUnreadCount();
  if (n > 0) {
    badge.hidden = false;
    badge.textContent = n > 99 ? "99+" : String(n);
  } else {
    badge.hidden = true;
  }
}

function renderNotifList() {
  var list = document.getElementById("notif-list");
  if (!list) return;
  list.innerHTML = "";
  if (!__notifs.length) {
    list.innerHTML = '<div class="notif-empty">No notifications</div>';
    return;
  }
  __notifs.forEach(function (n) {
    var id = n.id || n.title;
    var unread = !__notifRead[id] && n.read !== true;
    var b = document.createElement("button");
    b.type = "button";
    b.className = "notif-item" + (unread ? " unread" : "");
    b.innerHTML = '<div class="nf"></div><div class="nt"></div><div class="nb"></div><div class="nm"></div>';
    b.querySelector(".nf").textContent = n.from || "System";
    b.querySelector(".nt").textContent = n.title || "";
    b.querySelector(".nb").textContent = n.body || "";
    b.querySelector(".nm").textContent = n.time || "";
    b.onclick = function () {
      __notifRead[id] = true;
      saveNotifRead();
      renderNotifBadge();
      renderNotifList();
    };
    list.appendChild(b);
  });
}

function loadNotifications() {
  fetch("notifications.json?t=" + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (data) {
      __notifs = Array.isArray(data) ? data : (data.notifications || []);
      renderNotifBadge();
      renderNotifList();
    })
    .catch(function () {
      __notifs = [];
      renderNotifBadge();
      renderNotifList();
    });
}

function setupNotificationsUI() {
  var bell = document.getElementById("tb-bell");
  var panel = document.getElementById("notif-panel");
  if (!bell || !panel) return;
  if (bell.dataset.ready) { loadNotifications(); return; }
  bell.dataset.ready = "1";
  bell.onclick = function (e) {
    e.stopPropagation();
    panel.hidden = !panel.hidden;
    if (!panel.hidden) renderNotifList();
  };
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#notif-panel") && !e.target.closest("#tb-bell")) {
      panel.hidden = true;
    }
  });
  var clearBtn = document.getElementById("notif-clear");
  if (clearBtn) {
    clearBtn.onclick = function () {
      __notifs.forEach(function (n) { __notifRead[n.id || n.title] = true; });
      saveNotifRead();
      renderNotifBadge();
      renderNotifList();
    };
  }
  loadNotifications();
  // refresh periodically so JSON edits show up
  setInterval(loadNotifications, 15000);
}


// Background music — Aria Math (quiet), only on home desktop (no open apps)
window.updateBgMusic = function updateBgMusic() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  // Any visible app window => pause. Home screen only => play.
  let busy = false;
  if (typeof openWins !== "undefined") {
    openWins.forEach(function (win) {
      if (win && win.style.visibility !== "hidden") busy = true;
    });
  }
  if (document.hidden) busy = true;
  if (busy) {
    if (!audio.paused) audio.pause();
  } else {
    const p = audio.play();
    if (p && p.catch) p.catch(function () {});
  }
};
(function setupBgMusic() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  audio.loop = true;
  audio.volume = 0.18;
  function onGesture() {
    window.updateBgMusic();
  }
  document.addEventListener("pointerdown", onGesture, true);
  document.addEventListener("keydown", onGesture, true);
  document.addEventListener("visibilitychange", function () {
    window.updateBgMusic();
  });
  // Initial attempt (may be blocked until gesture)
  window.updateBgMusic();
})();

// Register UV service worker early so the proxy is ready when needed
try { ensureProxySW(); } catch (e) {}
