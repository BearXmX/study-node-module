import { copyFile, watchFile } from 'fs'

/** @description copyFile 复制一个文件的内容到另一个文件当中 */

/*  第一个参数为被copy的文件地址，第二个参数为目标文件地址，第三个参数为回调函数
    覆盖操作 目标文件不存在则会执行创建 
*/
copyFile('./e.txt', './d.txt', err => {
  if (err) {
    return
  }
})

/** @description watchFile 监听文件变化 */

// 第一个参数需要被监听的文件地址，第二个参数为可选参数object，第三个参数为修改回调

/* 第二个参数object {
 persistent: boolean 表示当文件被监视时，进程是否应该继续运行，false终止进程
 interval: number 表示隔多久毫秒轮询文件内容默认为5007
} */

// 第三个参数回调函数，第一个参数为当前状态对象，第二个参数为之前状态对象

watchFile('./e.txt', { persistent: true, interval: 200 }, (current, preview) => {
  console.log(`the current mtime is: ${current.mtime}`)
  console.log(`the previous mtime was: ${preview.mtime}`)
  if (current.mtime !== preview.mtime) {
    console.log('e.txt 文件内容被修改了~')
  }
})
