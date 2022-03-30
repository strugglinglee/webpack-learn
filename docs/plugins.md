# plugins

插件是 webpack 的 支柱 功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！
插件目的在于解决 loader 无法实现的其他事。


## 剖析

webpack 插件是一个具有 apply 方法的 JavaScript 对象。
apply 方法会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。


## 用法

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入` new 实例`。
根据你使用 webpack 的需要，这里有多种方式使用插件。
在使用 Node API 时，还可以通过配置中的 plugins 属性传入插件