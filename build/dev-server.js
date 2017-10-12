require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)    // 开发环境
}

var opn = require('opn')    // 打开指定url地址
var path = require('path')  // 处理路径相关
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')  // http协议代理的中间件，转发请求到启动的服务
var webpackConfig = require('./webpack.dev.conf') // 开发环境webpack配置

// default port where dev server listens for incoming traffic（从环境变量或开发环境获取端口号）
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser    // 是否在启动应用时打开浏览器
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable    // 获取需要代理http服务配置信息（跨域时设置目标服务信息，可跨域拿信息）

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {     // 根据webpack配置打包js存储内存中供访问
  publicPath: webpackConfig.output.publicPath,    // 访问静态目录
  quiet: true     // 可在控制台输出内容
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {    // 热加载
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {       // 改变模板html的热更新
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests（作代理）
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API （解决：路由设置成history模式，路由可能请求不到）
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets（静态资源路径）
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {           // devMiddleware中间件把打包后的内容放入到内存，所有内容通过执行回调
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
