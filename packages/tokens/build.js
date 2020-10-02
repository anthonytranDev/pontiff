const { execSync } = require('child_process')
const path = require('path')

const buildPath = path.join(__dirname, '/dist')

const StyleDictionary = require('style-dictionary').extend({
  source: [__dirname + '/values/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: 'pt-',
      buildPath: path.join(buildPath, '/scss/'),
      files: [
        {
          destination: '_globals.scss',
          format: 'scss/map-deep',
        },
      ],
      file: {
        destination: path.join(buildPath, '/scss/'),
      },
    },
  },
})

execSync('cross-env rm -rf ' + buildPath)

StyleDictionary.buildAllPlatforms()
