const http = require('http')
const path = require('path')

const port = 60001

const server = http.createServer((req, res) => {
  res.end(req.url)
})

server.on('listening', () => {
  console.log(`server listening on port ${port}`)
  const pid = process.pid
  const name = path.basename(__filename)
  process.send({ action: 'service-start', data: { pid, name } })
})

server.listen(port)
