// process 进程

const flag = Math.random() * 100 > 50

if (flag) {
  process.exit()
}

// 进程事件
process.on('beforeExit', code => {
  console.log('进程结束前callback', code)
})

process.on('exit', code => {
  console.log('进程结束时callback', code)
})
