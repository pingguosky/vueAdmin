var chalk = require('chalk')    // 输出终端样式
var semver = require('semver')  // 版本号处理
var packageConfig = require('../package.json')
var shell = require('shelljs')  // 执行终端命令
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}
// 版本要求
var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),  // 当前node版本
    versionRequirement: packageConfig.engines.node  // 版本要求
  }
]
// 获取全局npm信息
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),    // 获取npm最新版本
    versionRequirement: packageConfig.engines.npm   // 版本要求
  })
}
// 检测运行node和npm版本信息
module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
