const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('PROXY')
console.log('진입')
console.log('성공')

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3001',
            changeOrigin: true
        })
    )
}
