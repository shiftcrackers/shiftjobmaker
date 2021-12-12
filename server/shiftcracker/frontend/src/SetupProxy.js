const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    proxy({
      // target: "http://127.0.0.1:8080/",
      target: "http://146.56.96.107:8080/",
      changeOrigin: true,
    })
  );
};
