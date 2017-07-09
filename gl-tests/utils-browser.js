/* eslint-env: browser */
/* eslint no-unused-vars: 0 */

function loadShader (gl, shaderSource, shaderType) {
  var shader = gl.createShader(shaderType)
  gl.shaderSource(shader, shaderSource)
  gl.compileShader(shader)

  // Check the compile status
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader)
    console.log("*** Error compiling shader '" + shader + "':" + lastError)
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function createProgram (gl, shaders) {
  var program = gl.createProgram()
  shaders.forEach(function (shader) {
    gl.attachShader(program, shader)
  })
  gl.linkProgram(program)

  // Check the link status
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program)
    console.log('Error in program linking:' + lastError)

    gl.deleteProgram(program)
    return null
  }
  return program
}

function createProgramFromSources (gl, shaderSources) {
  var defaultShaderType = [
    'VERTEX_SHADER',
    'FRAGMENT_SHADER'
  ]

  var shaders = []
  for (var ii = 0; ii < shaderSources.length; ++ii) {
    shaders.push(loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]]))
  }
  return createProgram(gl, shaders)
}
