module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        performance: {
          hints: false
        }
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}