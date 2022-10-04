import { access, readdir, stat, mkdir, rmdir, rename, unlink } from 'fs'
import { resolve } from 'path'

console.log(__dirname, '__dirname')

/** @description fs.access 判断使用者对该文件是否拥有权限，一般都有 */

// 可以用来判断文件是否存在

// 文件不存在的情况
access('./g.txt', err => {
  if (err) {
    console.log('access: 文件不存在')
    return
  }
  console.log('access: has access!')
})

// 文件存在的情况
access('./f.txt', err => {
  if (err) {
    console.log('access: 文件不存在')
    return
  }
  console.log('access: has access!')
})

/** @description fs.readdir 读取文件目录，但是只读一级 */

// 主要是回调函数的第二个参数 为下面一级的目录或者文件basename组成的string[]
readdir('./dir-level1', (err, filesArray) => {
  if (err) {
    console.log('readdir: 读取文件目录失败!')
    return
  }
  console.log('readdir:', filesArray)
  /*   
  如果想更层级读取，可以判断当前filesArray的每一项是目录还是文件
  是目录，  判断方法使用fs.stat回调里的xxxx.isDirectory/xxxx.isFile
  path.resolve拼接每一及目录路径执行递归
  */
})

/** @description fs.stat 获取该路径的文件信息 */

stat('./dir-level1', (err, fileObj) => {
  if (err) {
    console.log('stat: 读取错误')
    return
  }
  // console.log(`stat: `, fileObj)
  console.log(`stat: 是${fileObj.isDirectory() ? '目录' : '文件'}`)
})

/** @description fs.mkdir 创建目录 */

// 如果目录已经存在，将不会执行创建
mkdir('mkdir-level1', err => {
  if (err) {
    console.log('mkdir: 目录创建失败-目录已经存在')
    return
  }
  console.log('mkdir: 目录创建成功')
})

mkdir('mkdir-level1/mkdir-level2', err => {
  if (err) {
    console.log('mkdir: 目录创建失败-目录已经存在')
    return
  }
  console.log('mkdir: 目录创建成功')
})

/** @description fs.rmdir 删除目录 */

// 只能删除空目录
rmdir('./rmdir-level1', err => {
  if (err) {
    console.log('rmdir: 目录删除失败-只能删除空目录')
    return
  }
  console.log('rmdir: 目录删除成功')
})

/** @description fs.rename 文件重命名 也可以更改路径*/

// 重命名
rename(resolve(__dirname, 'h.txt'), resolve(__dirname, 'new-h.txt'), err => {
  if (err) {
    console.log('rename: 文件重命名失败-找不到需要修改的文件')
    return
  }
  console.log('rename: 文件重命名成功')
})

// 更改路径
rename(resolve(__dirname, 'g.txt'), resolve(__dirname, 'dir-level1', 'g.txt'), err => {
  if (err) {
    console.log('rename: 文件重命名失败-找不到需要修改的文件')
    return
  }
  console.log('rename: 文件重命名成功')
})

/** @description fs.unlink 删除文件，只用于文件 */

unlink('./i.txt', err => {
  if (err) {
    console.log(`unlink: 文件删除失败-找不到需要被删除的文件`)
    return
  }
  console.log(`unlink: 文件删除成功`)
})
