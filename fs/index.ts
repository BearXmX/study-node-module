// fs模块 文件系统

import { appendFile, readFile, writeFile } from 'fs'

import moment from 'moment'

const time = moment().format('YYYY-MM-DD HH:MM:SS')

/** @description readFile 读取文件 */

// 第一个参数为文件地址，第二个参数可为object，也可为buffer编码，第三个参数为回调
readFile('a.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log('readCallback: ', data)
  }
  return
})

/** @description writeFile 写入文件 路径存在则写入，不存在就创建再写入，覆盖原先文件内容 */

// 第一个参数为文件地址，第二个参数为需要写入的文件内容，第三个参数为回调
writeFile('b.txt', 'writeFile test content', err => {})

/** @description appendFile 不存在就创建再追加文件内容  */

// 第一个参数为文件地址，第二个参数为需要写入的文件内容，第三个参数为回调
appendFile('c.txt', `\nappendTime is: ${time}`, err => {})
