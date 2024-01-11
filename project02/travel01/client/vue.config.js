const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
}),
{
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:5005' // 개발서버
          }
      }
  }
}
