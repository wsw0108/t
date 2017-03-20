const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const childprocess = require('child_process')
const ready = require('get-ready')

class Master extends EventEmitter {
  constructor () {
    super()

    ready.mixin(this)

    this.isStarted = false

    this.ready(() => {
      this.isStarted = true
    })

    this.on('service-start', this.onServiceStart.bind(this))
    this.on('service-exit', this.onServiceExit.bind(this))

    const scripts = this.scripts = fs.readdirSync('services')
    this.serviceCount = scripts.length
    this.forkServices()
  }

  forkServices () {
    this.startSuccessCount = 0
    this.services = new Map()
    this.scripts.forEach(script => {
      script = path.join(__dirname, 'services', script)
      this.forkService(script)
    })
  }

  forkService (script) {
    const name = path.basename(script)
    const stdout = fs.openSync(path.join('logs', name + '.stdout'), 'a+')
    const stderr = fs.openSync(path.join('logs', name + '.stderr'), 'a+')
    const stdio = ['pipe', stdout, stderr, 'ipc']
    const service = childprocess.fork(script, ['arg1', 'arg2'], { stdio })
    this.services.set(service.pid, service)
    service.on('message', msg => {
      console.log(`service:${service.pid}: ${msg.data.name}`)
      this.emit(msg.action, msg.data)
    })
    service.once('exit', (code, signal) => {
      console.log(`service:${service.pid} exit with code: ${code} - ${signal}`)
      fs.close(stdout)
      fs.close(stderr)
      this.emit('service-exit', { pid: service.pid, code, signal, script })
    })
  }

  onServiceStart (data) {
    this.startSuccessCount++
    console.log(`startSuccessCount: ${this.startSuccessCount}`)
    if (this.startSuccessCount < this.serviceCount) {
      return
    }
    console.log(`IsStarted: ${this.isStarted}`)
    this.ready(true)
  }

  onServiceExit (data) {
    const service = this.services.get(data.pid)
    service.removeAllListeners()
    this.services.delete(data.pid)
    this.startSuccessCount--

    if (this.isStarted) {
      setTimeout(() => {
        this.forkService(data.script)
      }, 1000)
    } else {
      process.exit(1)
    }
  }
}

module.exports = Master
