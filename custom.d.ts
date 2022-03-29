// 在 TypeScript 中使用非代码资源(non-code asset)，我们需要告诉 TypeScript 推断导入资源的类型
/**
 * 通过指定任何以 .svg 结尾的导入(import)，将 SVG 声明(declare) 为一个新的模块(module)，并将模块的 content 定义为 any。我们可以通过将类型定义为字符串，来更加显式地将它声明为一个 url。同样的概念适用于其他资源，包括 CSS, SCSS, JSON 等。
 */
declare module '*.svg' {
  const content: any;
  export default content;
}
