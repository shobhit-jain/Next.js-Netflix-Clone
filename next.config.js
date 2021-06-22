const isProd = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')

const whiteList_Image_Domains = {
  images: {
    domains: ['assets.nflxext.com', 'upload.wikimedia.org'],
  },
}

const nextConfig = {
  target: 'serverless',
  compress: true,

  // future: {
  //   webpack5: true,
  // },

  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },

  // webpack(config) {
  //   return config
  // },

  webpack: (config, options, isServer) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty',
      }
    }

    return config
  },
}

module.exports = withPlugins(
  [
    [
      {
        pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
      },
    ],
    [withImages],
    [withVideos],
    [whiteList_Image_Domains],
    [
      withPWA,
      {
        pwa: {
          register: true,
          disable: !isProd,
          dest: 'public',
        },
      },
    ],
  ],
  nextConfig
)
