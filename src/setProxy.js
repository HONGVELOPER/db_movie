const proxy = require('http-proxy-middelware');

module.exports = (app) => {
    app.use(
        proxy('/', {
            target: 'http://localhost:3001/'
        })
    )
}