const fs = require('fs')

function readFilePromise(file, encoding = 'utf-8') {
  return new Promise(resolve => {
    fs.readFile(file, encoding,(err, data) => {
      !err ? resolve(data) : console.log(err)
    })
  })
}

readFilePromise('text.txt').then(console.log)
