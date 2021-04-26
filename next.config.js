const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

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
  ],
  nextConfig
)
