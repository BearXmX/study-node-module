import { createReadStream } from 'fs'

const rs = createReadStream('./a.txt')

rs.setEncoding('utf-8')

// rs.pipe(process.stdout)

const bufArr: Buffer[] = []

rs.on('data', chunk => {
  bufArr.push(chunk as Buffer)
})

rs.on('end', () => {
  console.log(bufArr.concat().toString())
})

console.log(Buffer.alloc(10).fill('1').toString())
