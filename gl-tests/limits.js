const createContext = require('gl')

const gl = createContext(1, 1)

Object.keys(gl).filter(key => key.startsWith('MAX')).forEach(key => {
  const limit = gl.getParameter(gl[key])
  console.log(`${key}: ${limit}`)
})
