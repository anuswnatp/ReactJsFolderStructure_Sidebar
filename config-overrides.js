// config-overrides.js
const {override, fixBabelImports, addWebpackAlias} = require('customize-cra')
const path = require('path')
module.exports = override(
addWebpackAlias({
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@utils']: path.resolve(__dirname, './src/utilities'),
    ['@services']: path.resolve(__dirname, './src/services'),
    ['@store']: path.resolve(__dirname, './src/store'),
    ['~'] : path.resolve(__dirname, './src')
})
)
