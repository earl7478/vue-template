const configInfo = require('./src/config/index.js')

process.env.VUE_APP_TITLE = configInfo.title || '追X'
module.exports = {
  devServer: {
    port: 80,
    proxy: {
      '/': {
        target: `https://scbmsapidev.zghrds.com`,
        // https请求需要该设置
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    },
    disableHostCheck: true
  },
}