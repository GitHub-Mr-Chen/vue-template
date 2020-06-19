module.exports = {
  devServer: {
    proxy: {
      '/hos-portal': {
        target: 'https://zmjtest.kaisasso.com',
        // target: 'https://zmj.kaisasso.com',
        changeOrigin: true,
      },
    },
  },
}
