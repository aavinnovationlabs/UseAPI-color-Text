const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/query",
    createProxyMiddleware({
      target: "https://jjdynamicuipoc-production.up.railway.app",
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
  );
};
