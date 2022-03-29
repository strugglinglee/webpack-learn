
# 学习官方文档学习顺序

学习[webpack官方文档](https://www.webpackjs.com/)

Guides(指南) -> Concepts（概念） -> Configuration（配置） -> Loaders -> Plugins(插件) -> API

## docs文件夹下为学习webpack的笔记（按学习顺序分类）

JavaScript 可以压缩、拆分 chunk 和懒加载，以提高性能。打包是 web 开发中最重要的挑战之一。

## webpack 是一个模块打包工具(module bundler)

webpack 是一个模块打包工具(module bundler)（例如，Browserify 或 Brunch）。而不是一个任务执行工具(task runner)（例如，Make, Grunt 或者 Gulp ）。任务执行工具用来自动化处理常见的开发任务，例如，lint(代码检测)、build(构建)、test(测试)。相比模块打包工具，任务执行工具则聚焦在偏重上层的问题上面。你仍然可以得益于这种用法：使用上层的工具，而将打包部分的问题留给 webpack。

打包工具帮助你取得准备用于部署的 JavaScript 和 stylesheet，将它们转换为适合浏览器的可用格式。例如，可以通过 压缩、分离 chunk 和 惰性加载 我们的 JavaScript 来提高性能。打包是 web 开发中最重要的挑战之一，解决此问题可以消除开发过程中的大部分痛点。
