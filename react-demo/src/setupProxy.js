//下载 cnpm install http-proxy-middleware --save
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: "https://x.dscmall.cn/api",
        changeOrigin: true, //允许跨域
        pathRewrite: {
            "^/api": "/"
        }
    }))
}