const http = require('http')

const port = 0

const server = http.createServer((req, res) => {
  if (req.url === '/stdout') {
    console.log('console.log')
    process.stdout.write('stdout\r\n')
  } else {
    console.error('console.error')
    process.stderr.write('stderr\r\n')
  }
  res.end(req.url)
})

server.on('listening', () => {
  console.log(`server listening on port ${server.address().port}`)
})

server.listen(port)
