# tree-shaking

## sideEffects

webpack4正式版本通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

如果所有代码都不包含 side effect，我们就可以简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export。

"side effect(副作用)" 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

如果你的代码确实有一些副作用，可以改为提供一个数组

## 避免意外删除

注意，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除

最后，还可以在 module.rules 配置选项 中设置 "sideEffects"。

## 设置mode运行tree-shaking

在命令行接口中使用 --optimize-minimize 标记，来启用 TerserPlugin。

运行 tree shaking 需要 ModuleConcatenationPlugin。通过 mode: "production" 可以添加此插件。如果你没有使用 mode 设置，记得手动添加 ModuleConcatenationPlugin。
