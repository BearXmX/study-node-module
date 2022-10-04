// path 模块

import path from 'path'

console.log(__dirname, '__dirname')
console.log(__filename, '__filename')

/** @description path.basename 获取路径中的基础名称 => 返回路径的最后一个部分 */
// index.ts
console.log(path.basename(__filename))
// 第二个参数传入后缀 可过滤掉后缀 index
console.log(path.basename(__filename, '.ts'))
// 自定义 level3
console.log(path.basename('/level1/level2/level3'))

/** @description path.dirname 获取路径目录名 */
// C:\Users\XmX\Desktop\study-node-module\path
console.log(path.dirname(__filename))
// level1/level2
console.log(path.dirname('/level1/level2/level3'))

/** @description path.extname 获取路径的扩展名 最后一个.后的扩展名*/
// .txt
console.log(path.extname('xxx.txt'))
// .css
console.log(path.extname('xxx.txt.js.css'))

/** @description path.parse 解析路径 */
// {
//   root: '/', // 根路径
//   dir: '/a/b/c', // 路径目录
//   base: 'index.html', // 路径基础名称
//   ext: '.html', // 扩展名
//   name: 'index' // 文件名无扩展名
// }
console.log(path.parse('/a/b/c/index.html'))
// { root: '/',
// dir: '/a/b',
// base: 'c',
// ext: '',
// name: 'c'
// }
console.log(path.parse('/a/b/c'))

/** @description path.format 序列化路径 */
const urlObj: ReturnType<typeof path.parse> = {
  dir: '/a/b',
  root: '',
  name: 'index',
  ext: 'css',
  base: 'index.css',
}
// /a/b\index.css
console.log(path.format(urlObj))

/** @description path.isAbsolute 判断路径是否为绝对路径 */
// false
console.log(path.isAbsolute('path'))
// true
console.log(path.isAbsolute('/path'))
// false
console.log(path.isAbsolute('./path'))

/** @description path.join 拼接路径*/

// f1\f2\f3\index.css
console.log(path.join('f1', 'f2', 'f3', 'index.css'))

// f1\index.css ../ 代表返回上一级
console.log(path.join('f1', 'f2', '../', 'index.css'))

/** @description  path.resolve */
// C:\Users\XmX\Desktop\study-node-module\path\dist\index.html
console.log(path.resolve(__dirname, 'dist', 'index.html'))

// 如果处理完全部给定的 path 片段后还未生成一个绝对路径，则当前工作目录会被用上
// C:\Users\XmX\Desktop\study-node-module\path\dist
console.log(path.resolve('dist'))
// C:\Users\XmX\Desktop\study-node-module\path\dist
console.log(path.resolve('./dist'))

/** @description path 规范化路径 */
// 'a/b/c/d'
console.log(path.normalize('a///b/c/d'))
