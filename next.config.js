const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')

const whiteList_Image_Domains = {
  images: {
    domains: ['assets.nflxext.com'],
  },
}

const nextConfig = {
  target: 'serverless',
  compress: true,

  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },

  webpack(config) {
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
  ],
  nextConfig
)
