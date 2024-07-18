const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://directus-production-ad24.up.railway.app/auth/login',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
})
