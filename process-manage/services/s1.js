const http = require('http')
const path = require('path')

const port = 60001

const server = http.createServer((req, res) => {
  if (req.url === '/throw') {
    throw new Error('i am throwing')
  }
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
  console.log(`server listening on port ${port}`)
  const pid = process.pid
  const name = path.basename(__filename)
  process.send({ action: 'service-start', data: { pid, name } })
})

server.listen(port)

process.once('SIGTERM', () => {
  process.exit(0)
})

process.on('uncaughtException', () => {
  process.exit(99)
})
