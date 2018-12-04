require('dotenv-safe')

module.exports = {
  // assetPrefix: process.env.NEXT_JS_BASE_URL || undefined,
  assetPrefix: process.env.NEXT_JS_BASE_URL || '/',
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: `${process.env.NEXT_JS_BASE_URL === '/' ? '' : process.env.NEXT_JS_BASE_URL}/static`
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}
