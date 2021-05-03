const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const whiteList_Image_Domains = {
  images: {
    domains: ['assets.nflxext.com'],
  },
}

const nextConfig = {
  target: 'serverless',
  compress: true,
}

module.exports = withPlugins(
  [
    [
      {
        pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
      },
    ],
    [withImages],
    [whiteList_Image_Domains],
  ],
  nextConfig
)
