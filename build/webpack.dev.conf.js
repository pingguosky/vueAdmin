var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')    // 生产和开发环境配置
var HtmlWebpackPlugin = require('html-webpack-plugin')    // 根据模板生成html文件，打包的js插入到html
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')  // 清除webpack打包错误提示

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 第2个参数合并到第1个参数（第1个参数为webpack基础配置）
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),      // 作用：开启热更新（重要）
    new webpack.NoEmitOnErrorsPlugin(),            // 作用：跳过编译时出现的错误，编译后报错
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({   // 生成html文件
      filename: 'index.html',
      template: 'index.html',
      inject: true      // 打包js插入到html
    }),
    new FriendlyErrorsPlugin()      // 作用：友好错误提示
  ]
})
