var Encore = require('@symfony/webpack-encore');

// Template front-end build configuration
Encore
    .setOutputPath('src/assets/build')
    .setPublicPath('assets/build')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSassLoader()
    .disableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .configureBabel(() => {
    }, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .configureUrlLoader({
        fonts: {limit: 4096},
        images: {limit: 4096}
    })
    .addEntry('theme', [
        './.dev/scss/theme.scss',
        './.dev/js/theme.js'
    ]);

// Export configurations
module.exports = Encore.getWebpackConfig();