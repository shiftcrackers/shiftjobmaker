const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://146.56.96.107:8080/',
            changeOrigin: true
        })
    )
};