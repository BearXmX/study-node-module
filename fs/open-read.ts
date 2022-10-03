import { open, close, read } from 'fs'

/** @description open 在内存中打开一个文件 */

/* 第一个参数为文件地址，第二份参数为打开模式，
第三个参数为回调，回调第二个参数为被 WriteStream 使用的整数文件描述符
*/

const buffer1 = Buffer.alloc(10)

console.log(`将要存放写入数据的buffer: `, buffer1)

console.log(`将要存放写入数据的buffer的字节长度: `, buffer1.byteLength)

/** @description read 从磁盘中读取文件内容放置buffer中 */

/* 
buffer 是数据将被写入到的 buffer，将数据写入哪个buffer

offset 是buffer写入的偏移量，规定从buffer的哪个位置开始写入

length 是一个整数，指定要读取的字节数

position 指定从文件中开始读取的位置，从文件内容第几个字符开始读 
*/

// offset + length <= buffer1.byteLength

/** @use normal */

/* 
console.log(buffer1): <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(byteReads): 4 
console.log(resultBufffer) <Buffer 63 6f 70 79 00 00 00 00 00 00>
console.log(resultBufffer.toString()): copy 
*/

open('./e.txt', 'r', (err, fd) => {
  // fd buffer offset length position 回调有三个参数 (err, bytesRead, buffer)
  read(fd, buffer1, 0, 4, 0, (err, byteReads, resultBufffer) => {
    console.log(`写入的字节数: `, byteReads)
    console.log(`写入的字节buffer结果: `, resultBufffer)
    console.log(`写入的字节buffer结果转换后的内容: `, resultBufffer.toString())
    close(fd)
  })
})

/** @use 设置offset => 设置写入buffer偏移量 */

/* 
console.log(buffer1): <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(byteReads): 4 
console.log(resultBufffer) <Buffer 00 00 63 6f 70 79 00 00 00 00>
console.log(resultBufffer.toString()): copy 
*/

// open('./e.txt', 'r', (err, fd) => {
//   // fd buffer offset length position 回调有三个参数 (err, bytesRead, buffer)
//   read(fd, buffer1, 2, 4, 0, (err, byteReads, resultBufffer) => {
//     console.log(`写入的字节数: `,byteReads)
//     console.log(`写入的字节buffer结果: `,resultBufffer)
//     console.log(`写入的字节buffer结果转换后的内容: `,resultBufffer.toString())
//   })
// })

/** @use 设置length => 设置写入buffer多少字节 */

/* 
console.log(buffer1): <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(byteReads): 6
console.log(resultBufffer) <Buffer 63 6f 70 79 20 66 00 00 00 00>
console.log(resultBufffer.toString()): copy f  
*/

// open('./e.txt', 'r', (err, fd) => {
//   // fd buffer offset length position 回调有三个参数 (err, bytesRead, buffer)
//   read(fd, buffer1, 0, 6, 0, (err, byteReads, resultBufffer) => {
//     console.log(`写入的字节数: `,byteReads)
//     console.log(`写入的字节buffer结果: `,resultBufffer)
//     console.log(`写入的字节buffer结果转换后的内容: `,resultBufffer.toString())
//   })
// })

/** @use 设置position => 设置从哪个位置开始读取文件 */

/* 
console.log(buffer1): <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(byteReads): 4
console.log(resultBufffer) <Buffer 70 79 20 66 00 00 00 00 00 00>
console.log(resultBufffer.toString()): py f
*/

// open('./e.txt', 'r', (err, fd) => {
//   // fd buffer offset length position 回调有三个参数 (err, bytesRead, buffer)
//   read(fd, buffer1, 0, 4, 2, (err, byteReads, resultBufffer) => {
//     console.log(`写入的字节数: `,byteReads)
//     console.log(`写入的字节buffer结果: `,resultBufffer)
//     console.log(`写入的字节buffer结果转换后的内容: `,resultBufffer.toString())
//   })
// })
