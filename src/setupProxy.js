const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('진입')
console.log('진입')
console.log('진입')

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3001/',
            changeOrigin: true
        })
    )
}
