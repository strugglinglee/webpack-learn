const merge = require('webpack-merge')
const common = require('./webpack.common.js')


// 许多lib通过和process.env.NODE_ENV环境变量关联，以决定lib中应该引用哪些内容
// 其中会引入tree shaking 中的TerserPlugin
// v4开始，指定mode会自动配置DefinePlugin
module.exports = merge(common, {
  mode: 'production'
})