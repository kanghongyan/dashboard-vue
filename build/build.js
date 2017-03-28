// https://github.com/shelljs/shelljs
require('shelljs/global');//ndoejs扩展，用于执行Unix shell命令
env.NODE_ENV = 'production';

var path = require('path');
var config = require('../config');
var ora = require('ora');//elegant terminal spinner
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);// ./dist/static/
rm('-rf', assetsPath);//先删除原来的目录
mkdir('-p', assetsPath);// mkdir -p 父目录/子目录.
cp('-R', 'static/', assetsPath);//拷贝文件夹及其子目录

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  /*process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')*/
});
