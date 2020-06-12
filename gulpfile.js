const { series, parallel } = require('gulp')
const fs = require('fs')

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working')
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 working')
    done()
  }, 1000)
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 working')
    done()
  }, 1000)
}

exports.series = series(task1, task2, task3)  // 同步执行队列
exports.parallel = parallel(task1, task2, task3) // 异步执行队列

exports.promise = () => {
  return Promise.resolve('promise done!')
}

exports.async = async () => {
  await (() => {
    new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
  })()
  console.log('async task')
}

exports.stream = () => {
  const readStream = fs.createReadStream('package.json')
  console.log(readStream)
  return readStream
}
