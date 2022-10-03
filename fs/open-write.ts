import { open, write, readFile } from 'fs'

const buffer2 = Buffer.from('抱紧你的我，比国王还富有')

console.log(`将要被读取的存放数据的buffer: `, buffer2)

console.log(`存放数据的buffer的字节长度: `, buffer2.byteLength)

/** @description write 从buffer中读取内容写入到指定文件中 覆盖操作 */

/* 
buffer 是将被读取的buffer，从哪个buffer开始读取数据

offset 是读取buffer的偏移量，从buffer的哪个位置开始读

length 是一个整数，指定要读取的字节数

position 指定从文件中开始写入的位置，从文件内容的第几个内容开始写入 
*/

/** @use normal */

/*
console.log(buffer2): <Buffer e6 8a b1 e7 b4 a7 e4 bd a0 e7 9a 84 e6 88 91 ef bc 8c e6 af 94 e5 9b bd e7 8e 8b e8 bf 98 e5 af 8c e6 9c 89>
console.log(buffer2.byteLength): 36
console.log(bytesWritten): 6
console.log(buffer): <Buffer e6 8a b1 e7 b4 a7 e4 bd a0 e7 9a 84 e6 88 91 ef bc 8c e6 af 94 e5 9b bd e7 8e 8b e8 bf 98 e5 af 8c e6 9c 89>
console.log(buffer.toString()): 抱紧你的我，比国王还富有 
console.log(`写入后的结果: `, data): 写入后的结果: 抱紧你
*/

open('./f.txt', 'w', (err, fd) => {
  // fd buffer offset length position 回调有三个参数 (err, bytesWritten, buffer)
  write(fd, buffer2, 0, 9, 0, (err, bytesWritten, buffer) => {
    console.log(`读取的字节数: `, bytesWritten)
    console.log(`被读取的字节: `, buffer)
    console.log(`被读取的字节转换后的结果: `, buffer.toString())
    readFile('./f.txt', 'utf-8', (err, data) => {
      console.log(`写入后的结果: `, data)
    })
  })
})
