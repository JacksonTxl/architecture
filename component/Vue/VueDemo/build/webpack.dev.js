'use strict'

const webpack = require('webpack')
const config = require('./config')
const base = require('./webpack.base')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
      options: {
          postcss: config.postcss,
          vue: {
              loaders: {
                  css: 'style-loader!css-loader!postcss-loader'
              },
              postcss: config.postcss
          }
      }
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  use: 'vue-loader'
})

base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

module.exports = base
