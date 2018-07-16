const fs = require('fs')

function readFilePromise(file, encoding = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      !err ? resolve(data) : reject(err)
    })
  })
}

readFilePromise('tesxt.txt')
  .then(console.log)
  .catch(console.log)
