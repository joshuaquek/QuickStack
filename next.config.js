require('dotenv-safe')

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  },
  assetPrefix: process.env.NEXT_JS_BASE_URL || undefined
}
