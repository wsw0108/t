/* globals __line */
var path = require('path')
var createContext = require('gl')
var utils = require('./utils.js')
var utilsLog = require('./utils_log.js')
var log = new utilsLog.Log(path.basename(__filename), 'DEBUG')

function main () {
  // Create context
  var width = 512
  var height = 512
  var gl = createContext(width, height)

  var vertexSrc = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0, 1);
    gl_PointSize = 20.0;
  }
  `

  var fragmentSrc = `
  void main() {
    gl_FragColor = vec4(0, 1, 0, 1);  // green
  }
  `

  // setup a GLSL program
  var program = utils.createProgramFromSources(gl, [vertexSrc, fragmentSrc])
  gl.useProgram(program)

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, 'a_position')

  // Create a buffer and put a single clipspace rectangle in
  // it (2 triangles)
  var buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1.02, -1.02,
      0.0, 0.0,
      1.02, 1.02]),
    gl.STATIC_DRAW)
  gl.enableVertexAttribArray(positionLocation)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

  // draw
  gl.drawArrays(gl.POINTS, 0, 3)
  // gl.drawArrays(gl.TRIANGLES, 0, 3)

  var filename = __filename + '.ppm' // eslint-disable-line
  log.info(__line, 'rendering ' + filename)
  utils.bufferToFile(gl, width, height, filename)
  log.info(__line, 'finished rendering ' + filename)

  gl.destroy()
}

main()
