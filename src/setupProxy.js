/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-01 14:46:54
 * @LastEditTime: 2021-12-23 11:11:49
 * @LastEditors: zaq
 * @Reference: 
 */
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // 配置多个代理
    proxy('/api', {
      target: 'https://api.github.com',
      changeOrigin: true,// 控制服务器中收到的请求头中的host值 为真则显示'http://localhost:5000' 为假则为本项目的域名端口
      pathRewrite: {'^/api': ''}
    }),
    proxy('/app', {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {'^/app': '' }
    })
  )
}

/**
 * @description 配置导出一个common js函数（Nodejs语法）启动项目会自动读取setupProxy文件并配置代理
 */