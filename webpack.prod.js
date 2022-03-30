const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// 许多lib通过和process.env.NODE_ENV环境变量关联，以决定lib中应该引用哪些内容
// 其中会引入tree shaking 中的TerserPlugin
// v4开始，指定mode会自动配置DefinePlugin => bundle 大小显著下降
module.exports = merge(common, {
  // 设置 production mode 配置后，webpack v4+ 会默认压缩你的代码
  mode: "production",
  // 避免在生产中使用 inline-*** 和 eval-***，因为它们会增加 bundle 体积大小，并降低整体性能。
  devtool: "source-map",
});
