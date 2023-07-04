const path = require('path')

function resolve(dir) {
  path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH,
  outputDir: 'vueElement',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    https: true,
    proxy: {
      '/api/': {
        // 此处并非和url一致
        target: 'https://10.20.170.35:8090/', // 测试
        // target: 'http://192.168.135.193:8082/wallet', // 本地
        changeOrigin: true, // 允许跨域
        ws: true,
        pathRewrite: {
          '^/api/': '',
        },
      },
    },
  },
  configureWebpack: {
    name: '',
    resolve: {
      alias: {
        '@': resolve('src'),
        images: '@/assets/images',
        components: '@/components',
        views: '@/views',
        const: '@/const',
      },
    }
  },
}