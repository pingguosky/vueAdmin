var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// webpack配置相关
module.exports = {
  entry: {      // 入口
    app: './src/main.js'    // 最后形成 app:['webpack-hot-middleware/client?noInfo=true&reload=true','./src/main.js']
  },
  output: {
    path: config.build.assetsRoot,    // 输出绝对路径
    filename: '[name].js',      // 打包后的文件名，这里是entry下的key值
    publicPath: process.env.NODE_ENV === 'production'   // 静态资源路径
      ? config.build.assetsPublicPath     // config/index.js文件下的配置
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,        // 匹配后缀名
        // loader: 'eslint-loader',    // 匹配到的js和vue交给eslint-loader处理
        enforce: 'pre',             // 前置。编译之前对代码检测
        include: [resolve('src'), resolve('test')], // 指定loader处理目录
        // options: {      // eslint检查错误用这个模块处理
        //     formatter: require('eslint-friendly-formatter')   // 提供错误友好信息
        // }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig      // 把vue里css抽离出来
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,     // 10kb
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
