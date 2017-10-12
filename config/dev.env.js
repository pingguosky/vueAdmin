var merge = require('webpack-merge')    // 合并对象
var prodEnv = require('./prod.env')   // 对象

// 第2个对象合并到第1个
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
