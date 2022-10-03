// Buffer 内置类 缓存

// 二进制数据、流操作、Buffer

// alloc: 创建指定字节大小的buffer
// allocUnsafe: 创建指定大小的buffer(不安全)
// from: 接收数据，创建buffer

// 1字节(byte)=8位(bit)
// 1K=1024字节
// 1M=1024k

/** @description Buffer.alloc 创建*字节的buffer */
const bf1 = Buffer.alloc(10)

// <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(bf1)

/** @description Buffer.allocUnsafe 创建*字节的buffer 不安全的*/
const bf2 = Buffer.allocUnsafe(10)

// <Buffer 08 ea 1b 36 c7 01 00 00 08 ea>
console.log(bf2)

/** @description Buffer.from 将内容转换为buffer */
const bf3 = Buffer.from('1')

// <Buffer 31>
console.log(bf3)

const bf4 = Buffer.from('中文')

// <Buffer e4 b8 ad e6 96 87>
console.log(bf4)

const bf5 = Buffer.from([1, 2, 3, 4])

// <Buffer 01 02 03 04>
console.log(bf5)

/** @description Buffer.fill 填充buffer */
const bf6 = Buffer.alloc(6)

// <Buffer 00 00 00 00 00 00>
console.log(bf6)

bf6.fill('123456789')

// <Buffer 31 32 33 34 35 36>
console.log(bf6)

// 123456789
console.log(bf6.toString())
