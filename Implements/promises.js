const fs = require('fs')

function readFilePromise() {
  return new Promise(resolve => {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}

readFilePromise().then(console.log)
