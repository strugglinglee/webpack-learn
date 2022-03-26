# shim预置依赖

## shim的作用

一些第三方库可能会引用一些全局依赖（JQ中的$），这些library可能会创建一些需要导出的全局变量；

使用`polyfill`扩展浏览器能力，支持更多用户。

## shim预置全局变量

使用 ProvidePlugin 后，能够在 webpack 编译的每个模块中，通过访问一个变量来获取一个 package

如果 webpack 看到模块中用到这个变量，它将在最终 bundle 中引入给定的 package。

```js
plugins: [
  new webpack.ProvidePlugin({
    _: 'lodash'
  })
]
// 很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除
-  _: 'lodash'
+  join: ['lodash', 'join']
```

## 细粒度shim

一些遗留模块依赖的 this 指向的是 window 对象。当模块运行在 CommonJS 上下文中，这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这种情况下，你可以通过使用 imports-loader 覆盖 this 指向

```js
module: {
  rules: [
    {
      test: require.resolve('index.js'),
      use: 'imports-loader?this=>window'
    }
  ]
},
```

## 全局export

有的老项目声明全局变量没有export导出

使用`exports-loader`

```js
//file 导出为 file 以及将 helpers.parse 导出为 parse
module: {
  rules: [
    {
      test: require.resolve('globals.js'),
      use: 'exports-loader?file,parse=helpers.parse'
    }
  ]
},

```

## 加载polyfill
