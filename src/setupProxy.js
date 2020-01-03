const proxy = require('http-proxy-middleware')
const target = process.env.BACKEND_URL

if (target) {
  module.exports = function(app) {
    app.use(proxy('/api', { target }))
    app.use(proxy('/media', { target }))
  }
}
