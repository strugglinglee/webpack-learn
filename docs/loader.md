# loader

## loader作用

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时**预处理文件**。
因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。

loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。
loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！


## 使用 loader 
在你的应用程序中，有三种使用 loader 的方式：

- **配置（推荐）**：在 webpack.config.js 文件中指定 loader。
- **内联**：在每个 import 语句中显式指定 loader。
- **CLI**：在 shell 命令中指定它们。

## loader 特性 
- **loader 支持链式传递**。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 期望 JavaScript。
- loader 可以是**同步**的，也可以是**异步**的。
- loader 运行在 **Node.js** 中，并且能够执行任何 Node.js 能做到的操作。
- loader 可以通过 **options 对象配置**（仍然支持使用 query 参数来设置选项，但是这种方式已被废弃）。
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块。
- **插件(plugin)可以为 loader 带来更多特性**。
- loader 能够产生额外的任意文件。

通过（loader）预处理函数，loader 为 JavaScript 生态系统提供了更多能力。 用户现在可以更加灵活地引入**细粒度逻辑**，例如：压缩、打包、语言翻译和 更多其他特性。

## 编写loader
### 保持功能单一
避免做多种功能，只需完成一种功能的转换即可

### 模块
webpack本身运行在node.js之上，一个loader就是一个node模块，这个模块导出的是一个函数。

