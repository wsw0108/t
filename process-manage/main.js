const Master = require('./master')

const master = new Master()
master.ready(() => {
  console.log(`master.isStarted: ${master.isStarted}`)
})
