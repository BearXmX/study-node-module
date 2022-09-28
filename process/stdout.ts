// process.stdout 输出

process.stdout.write('process stdin start' + '\n')

let num1: number | null = null
let num2: number | null = null

process.stdout.write('请输入num1的值' + '\n')

process.stdin.on('data', chunk => {
  console.log(Number(chunk), 'chunk')

  //  初次输入点回车 num1无值 走if
  //  同时赋值给num1 第二次输入回车则走else
  if (!num1) {
    num1 = Number(chunk)
    process.stdout.write('请输入num2的值' + '\n')
  } else {
    num2 = Number(chunk)
    process.stdout.write('结果是：' + (num1 + num2))
    process.exit()
  }
})
