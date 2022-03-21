webpack 不会更改代码中除 import 和 export 语句以外的部分。

如果你在使用其它 ES2015 特性，请确保你在 webpack loader 系统 中使用了一个像是 Babel 或 Bublé 的 transpiler(转译器)。

使用 npm scripts，我们可以像使用 npx 那样通过模块名引用本地安装的 npm packages

像 webpack 这样的工具，将动态打包所有依赖（创建所谓的 依赖图(dependency graph)）。这是极好的创举，因为现在每个模块都可以明确表述它自身的依赖，可以避免打包未使用的模块。

webpack 最出色的功能之一就是，除了引入 JavaScript，还可以通过 loader 引入任何其他类型的文件。


manifest 

webpack通过manifest，可以追踪所有模块到输出bundle之间的映射
通过webpackManifestPlugin插件，可以将manifest数据提取为一个容易使用的json文件

