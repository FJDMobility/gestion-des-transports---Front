module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 3000,
    proxy: {
      '^/api': {
        target: 'http://localhost:9090',
        changeOrigin: true
      },
    } 
  }
}
