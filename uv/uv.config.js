(function () {
  if (typeof Ultraviolet === "undefined") return;

  var path = location.pathname || "/";
  var dir = path.replace(/\/[^\/]*$/, "/");
  if (dir.indexOf("/uv/") !== -1) dir = dir.replace(/\/uv\/.*$/, "/");
  if (dir.indexOf("/service/") !== -1) dir = dir.replace(/\/service\/.*$/, "/");
  var base = dir.replace(/\/$/, "");
  function join(p) { return base ? base + p : p; }

  // Working public bare servers (probed order)
  var bareServers = [
    "https://tomp.app/",
    "https://twilight-cake-6f4c.weswoodland13.workers.dev/"
  ];

  try {
    var custom = localStorage.getItem("mount_bare");
    if (custom && /^https?:\/\//i.test(custom)) {
      bareServers = [custom.replace(/\/?$/, "/")].concat(
        bareServers.filter(function (u) { return u.indexOf(custom.replace(/\/?$/, "/")) === -1; })
      );
    }
  } catch (e) {}

  self.__uv$config = {
    prefix: join("/service/"),
    bare: bareServers[0],
    bareServers: bareServers,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: join("/uv/uv.handler.js"),
    client: join("/uv/uv.client.js"),
    bundle: join("/uv/uv.bundle.js"),
    config: join("/uv/uv.config.js"),
    sw: join("/uv/uv.sw.js")
  };
  self.__wpBase = base;
})();
