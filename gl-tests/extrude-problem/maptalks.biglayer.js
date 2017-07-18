/*!
 * maptalks.biglayer v0.3.0
 * LICENSE : MIT
 * (c) 2016-2017 maptalks.org
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
	typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
	(factory((global.maptalks = global.maptalks || {}),global.maptalks));
}(this, (function (exports,maptalks) { 'use strict';

function create$2() {
    var out = new Float32Array(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

function create$3() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}



function copy$3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}





function identity$3(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}









function multiply$3(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

function translate$2(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2],
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

function scale$3(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}



function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}



function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) {
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}





























function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}





function lookAt(out, eye, center, up) {
    var x0,
        x1,
        x2,
        y0,
        y1,
        y2,
        z0,
        z1,
        z2,
        len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) === 0 && Math.abs(eyey - centery) === 0 && Math.abs(eyez - centerz) === 0) {
        return identity$3(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
}

function create$5() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}



function fromValues$5(x, y, z) {
    var out = new Float32Array(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}







































function normalize$1(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
}

























var vec = create$5();

function create$6() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}























































var vec$1 = create$6();

function create$4() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}



var tmpvec3 = create$5();
var xUnitVec3 = fromValues$5(1, 0, 0);
var yUnitVec3 = fromValues$5(0, 1, 0);



var matr = create$2();





































var temp1 = create$4();
var temp2 = create$4();

function create$7() {
    var out = new Float32Array(2);
    out[0] = 0;
    out[1] = 0;
    return out;
}





























































var vec$2 = create$7();

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Painter = function (_maptalks$Class) {
    inherits(Painter, _maptalks$Class);

    function Painter(gl, map, options) {
        classCallCheck(this, Painter);

        var _this = possibleConstructorReturn(this, _maptalks$Class.call(this, options));

        _this.gl = gl;
        _this.map = map;
        return _this;
    }

    return Painter;
}(maptalks.Class);

function getTargetZoom(map) {
    return map.getMaxNativeZoom() / 2;
}

var RADIAN = Math.PI / 180;

function setupBlend(gl, compOp) {
    switch (compOp) {
        case 'source-over':
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case 'destination-over':
            gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ONE);
            break;
        case 'source-in':
            gl.blendFunc(gl.DST_ALPHA, gl.ZERO);
            break;
        case 'destination-in':
            gl.blendFunc(gl.ZERO, gl.SRC_ALPHA);
            break;
        case 'source-out':
            gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ZERO);
            break;
        case 'destination-out':
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case 'source-atop':
            gl.blendFunc(gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case 'destination-atop':
            gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA);
            break;
        case 'xor':
            gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case 'lighter':
            gl.blendFunc(gl.ONE, gl.ONE);
            break;
        case 'copy':
            gl.blendFunc(gl.ONE, gl.ZERO);
            break;
        case 'destination':
            gl.blendFunc(gl.ZERO, gl.ONE);
            break;

        default:
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            break;
    }
}

var WebglRenderer = function (_maptalks$renderer$Ca) {
    inherits(WebglRenderer, _maptalks$renderer$Ca);

    function WebglRenderer() {
        classCallCheck(this, WebglRenderer);
        return possibleConstructorReturn(this, _maptalks$renderer$Ca.apply(this, arguments));
    }

    WebglRenderer.prototype.needToRedraw = function needToRedraw() {
        var map = this.getMap();
        if (map.isZooming() && !map.getPitch()) {
            return false;
        }
        return _maptalks$renderer$Ca.prototype.needToRedraw.call(this);
    };

    WebglRenderer.prototype.createCanvas = function createCanvas() {
        if (this.canvas) {
            return;
        }

        var map = this.getMap();
        var size = map.getSize();
        var r = maptalks.Browser.retina ? 2 : 1;
        this.canvas = maptalks.Canvas.createCanvas(r * size['width'], r * size['height'], map.CanvasClass);
        var gl = this.gl = this._createGLContext(this.canvas, this.layer.options['glOptions']);

        gl.clearColor(0.0, 0.0, 0.0, 0.0);

        gl.enable(gl.BLEND);
        var compOp = this.layer.options['globalCompositeOperation'] || 'source-over';
        setupBlend(gl, compOp);

        gl.disable(gl.DEPTH_TEST);

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

        if (this.onCanvasCreate) {
            this.onCanvasCreate();
        }

        if (this.layer.options['doubleBuffer']) {
            this.buffer = maptalks.Canvas.createCanvas(this.canvas.width, this.canvas.height, map.CanvasClass);
            this.context = this.buffer.getContext('2d');
        }
    };

    WebglRenderer.prototype.resizeCanvas = function resizeCanvas(canvasSize) {
        if (!this.canvas) {
            return;
        }
        var size = void 0;
        if (!canvasSize) {
            size = this.getMap().getSize();
        } else {
            size = canvasSize;
        }
        var r = maptalks.Browser.retina ? 2 : 1;

        this.canvas.height = r * size['height'];
        this.canvas.width = r * size['width'];
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    };

    WebglRenderer.prototype.clearCanvas = function clearCanvas() {
        if (!this.canvas) {
            return;
        }
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        if (this.context) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };

    WebglRenderer.prototype.prepareCanvas = function prepareCanvas() {
        if (this.context) {
            return _maptalks$renderer$Ca.prototype.prepareCanvas.call(this);
        }
        if (!this.canvas) {
            this.createCanvas();
        } else {
            this.clearCanvas();
        }
        this.layer.fire('renderstart', { 'context': this.context, 'gl': this.gl });
        return null;
    };

    WebglRenderer.prototype.mergeSprites = function mergeSprites(sprites, forPoint) {
        if (!sprites || sprites.length === 0) {
            return null;
        }

        var buffer = 2;
        var w = 0,
            h = 0;
        sprites.forEach(function (s) {
            if (forPoint) {
                var len = Math.max(s.canvas.width, s.canvas.height);
                w += len + buffer;
                if (len > h) {
                    h = len;
                }
            } else {
                w += s.canvas.width + buffer;
                if (s.canvas.height > h) {
                    h = s.canvas.height;
                }
            }
        });

        w = Math.pow(2, Math.ceil(Math.log(w) / Math.LN2));
        h = Math.pow(2, Math.ceil(Math.log(h) / Math.LN2));

        var map = this.getMap();
        var spriteCanvas = maptalks.Canvas.createCanvas(w, h, map.CanvasClass),
            ctx = spriteCanvas.getContext('2d'),
            texCoords = [],
            offsets = [],
            sizes = [];
        var pointer = 0;
        sprites.forEach(function (s) {
            var dx = 0,
                dy = 0,
                len = void 0;
            if (forPoint) {
                var cw = s.canvas.width,
                    ch = s.canvas.height;
                len = Math.max(cw, ch);
                dx = len > cw ? (len - cw) / 2 : 0;
                dy = len > ch ? (len - ch) / 2 : 0;

                texCoords.push([pointer / w, len / w, len / h, len]);
                sizes.push([cw, ch]);
            } else {
                len = s.canvas.width;
                texCoords.push([pointer / w, s.canvas.width / w, s.canvas.height / h]);
            }

            ctx.drawImage(s.canvas, pointer + dx, dy);

            offsets.push(s.offset);
            pointer += len + buffer;
        });
        var result = {
            'canvas': spriteCanvas,
            'texCoords': texCoords,
            'offsets': offsets
        };
        if (forPoint) {
            result['sizes'] = sizes;
        }
        return result;
    };

    WebglRenderer.prototype.createBuffer = function createBuffer() {
        var gl = this.gl;

        var buffer = gl.createBuffer();
        if (!buffer) {
            throw new Error('Failed to create the buffer object');
        }

        if (!this._buffers) {
            this._buffers = [];
        }
        this._buffers.push(buffer);

        return buffer;
    };

    WebglRenderer.prototype.enableVertexAttrib = function enableVertexAttrib(attributes) {
        var gl = this.gl;
        if (Array.isArray(attributes[0])) {
            var verticesTexCoords = new Float32Array([0.0, 0.0, 0.0]);

            var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;

            var STRIDE = 0;
            for (var i = 0; i < attributes.length; i++) {
                STRIDE += attributes[i][1] || 0;
            }

            var offset = 0;
            for (var _i = 0; _i < attributes.length; _i++) {
                var attr = gl.getAttribLocation(gl.program, attributes[_i][0]);
                if (attr < 0) {
                    throw new Error('Failed to get the storage location of ' + attributes[_i][0]);
                }
                gl.vertexAttribPointer(attr, attributes[_i][1], gl[attributes[_i][2] || 'FLOAT'], false, FSIZE * STRIDE, FSIZE * offset);
                offset += attributes[_i][1] || 0;
                gl.enableVertexAttribArray(attr);
            }
        } else {
            var _attr = gl.getAttribLocation(gl.program, attributes[0]);
            gl.vertexAttribPointer(_attr, attributes[1], gl[attributes[2] || 'FLOAT'], false, 0, 0);
            gl.enableVertexAttribArray(_attr);
        }
    };

    WebglRenderer.prototype.onRemove = function onRemove() {
        var gl = this.gl;
        if (this._buffers) {
            this._buffers.forEach(function (b) {
                gl.deleteBuffer(b);
            });
            delete this._buffers;
        }
    };

    WebglRenderer.prototype.createProgram = function createProgram(vshader, fshader, uniforms) {
        var gl = this.gl;

        var vertexShader = this._compileShader(gl, gl.VERTEX_SHADER, vshader);
        var fragmentShader = this._compileShader(gl, gl.FRAGMENT_SHADER, fshader);
        if (!vertexShader || !fragmentShader) {
            return null;
        }

        var program = gl.createProgram();
        if (!program) {
            return null;
        }

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        gl.linkProgram(program);

        var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
            var error = gl.getProgramInfoLog(program);
            gl.deleteProgram(program);
            gl.deleteShader(fragmentShader);
            gl.deleteShader(vertexShader);
            throw new Error('Failed to link program: ' + error);
        }

        this._initUniforms(program, uniforms);

        return program;
    };

    WebglRenderer.prototype.useProgram = function useProgram(program) {
        var gl = this.gl;
        gl.useProgram(program);
        gl.program = program;
        return this;
    };

    WebglRenderer.prototype.loadTexture = function loadTexture(image, texIdx) {
        var gl = this.gl;
        var texture = gl.createTexture();
        if (!texture) {
            throw new Error('Failed to create the texture object');
        }
        if (!texIdx) {
            texIdx = 0;
        }

        gl.activeTexture(gl['TEXTURE' + texIdx]);

        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        return texture;
    };

    WebglRenderer.prototype.enableSampler = function enableSampler(sampler, texIdx) {
        var gl = this.gl;
        var uSampler = this._getUniform(gl.program, sampler);
        if (!texIdx) {
            texIdx = 0;
        }

        gl.uniform1i(uSampler, texIdx);
        return uSampler;
    };

    WebglRenderer.prototype._calcMatrices = function _calcMatrices() {
        var map = this.getMap();
        var size = map.getSize(),
            scale = map.getScale();
        var center = map._prjToPoint(map._getPrjCenter(), map.getMaxZoom());
        var fov = map.getFov() * Math.PI / 180;
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * size.height * scale;

        var m = create$3();
        perspective(m, fov, size.width / size.height, 1, cameraToCenterDistance + 1E9);
        if (!maptalks.Util.IS_NODE) {
            scale$3(m, m, [1, -1, 1]);
        }
        translate$2(m, m, [0, 0, -cameraToCenterDistance]);
        rotateX(m, m, map.getPitch() * Math.PI / 180);
        rotateZ(m, m, -map.getBearing() * Math.PI / 180);
        translate$2(m, m, [-center.x, -center.y, 0]);
        return m;
    };

    WebglRenderer.prototype.calcMatrices = function calcMatrices() {
        var map = this.getMap();

        var size = map.getSize();

        var fov = map.getFov() * Math.PI / 180;
        var maxScale = map.getScale(map.getMinZoom()) / map.getScale(map.getMaxNativeZoom());
        var farZ = maxScale * size.height / 2 / this._getFovRatio();
        var m = create$3();
        perspective(m, fov, size.width / size.height, 1, farZ);
        var m1 = create$3();
        if (!maptalks.Util.IS_NODE) {
            scale$3(m, m, [1, -1, 1]);
        }
        copy$3(m1, m);
        var m2 = this._getLookAtMat();
        multiply$3(m, m1, m2);
        return m;
    };

    WebglRenderer.prototype._getLookAtMat = function _getLookAtMat() {
        var map = this.getMap();

        var targetZ = getTargetZoom(map);

        var size = map.getSize(),
            scale = map.getScale() / map.getScale(targetZ);

        var center2D = this.cameraCenter = map.coordinateToPoint(map.getCenter(), targetZ);
        var pitch = map.getPitch() * RADIAN;
        var bearing = -map.getBearing() * RADIAN;

        var ratio = this._getFovRatio();
        var z = scale * size.height / 2 / ratio;
        var cz = z * Math.cos(pitch);

        var dist = Math.sin(pitch) * z;

        var cx = center2D.x + dist * Math.sin(bearing);
        var cy = center2D.y + dist * Math.cos(bearing);

        var up = [Math.sin(bearing), Math.cos(bearing), 0];
        var m = create$3();
        lookAt(m, [cx, cy, cz], [center2D.x, center2D.y, 0], up);
        return m;
    };

    WebglRenderer.prototype._getFovRatio = function _getFovRatio() {
        var map = this.getMap();
        var fov = map.getFov();
        return Math.tan(fov / 2 * Math.PI / 180);
    };

    WebglRenderer.prototype.hitDetect = function hitDetect(point) {
        var gl = this.gl;
        if (!gl) {
            return false;
        }
        var pixels = new Uint8Array(1 * 1 * 4);
        var map = this.getMap();
        var h = this.canvas.height;
        var cp = map._pointToContainerPoint(point)._round();
        gl.readPixels(cp.x, h - cp.y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels[3] > 0;
    };

    WebglRenderer.prototype.getCanvasImage = function getCanvasImage() {
        var canvasImg = _maptalks$renderer$Ca.prototype.getCanvasImage.call(this);
        if (canvasImg && canvasImg.image && this.buffer) {
            var canvas = canvasImg.image;
            if (this.buffer.width !== canvas.width || this.buffer.height !== canvas.height || !this._preserveBuffer) {
                this.buffer.width = canvas.width;
                this.buffer.height = canvas.height;
            }
            if (!this._preserveBuffer) {
                this.context.drawImage(canvas, 0, 0);
            }
            canvasImg.image = this.buffer;
        }
        return canvasImg;
    };

    WebglRenderer.prototype.onZoomStart = function onZoomStart() {
        _maptalks$renderer$Ca.prototype.onZoomStart.apply(this, arguments);
    };

    WebglRenderer.prototype.onZoomEnd = function onZoomEnd() {
        _maptalks$renderer$Ca.prototype.onZoomEnd.apply(this, arguments);
    };

    WebglRenderer.prototype._createGLContext = function _createGLContext(canvas, options) {
        var attributes = maptalks.Util.extend({
            'alpha': true,
            'antialias': true,
            'preserveDrawingBuffer': true
        }, options);
        var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
        var context = null;

        for (var i = 0; i < names.length; ++i) {
            try {
                context = canvas.getContext(names[i], attributes);
            } catch (e) {}
            if (context) {
                break;
            }
        }
        return context;
    };

    WebglRenderer.prototype._compileShader = function _compileShader(gl, type, source) {
        var shader = gl.createShader(type);
        if (shader == null) {
            throw new Error('unable to create shader');
        }

        gl.shaderSource(shader, source);

        gl.compileShader(shader);

        var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            var error = gl.getShaderInfoLog(shader);

            gl.deleteShader(shader);
            throw new Error('Failed to compile shader: ' + error);
        }

        return shader;
    };

    WebglRenderer.prototype._initUniforms = function _initUniforms(program, uniforms) {
        for (var i = 0; i < uniforms.length; i++) {
            var name = uniforms[i];
            var uniform = uniforms[i];
            var b = name.indexOf('[');
            if (b >= 0) {
                name = name.substring(0, b);
                if (!maptalks.Util.IS_NODE) {
                    uniform = uniform.substring(0, b);
                }
            }
            program[name] = this._getUniform(program, uniform);
        }
    };

    WebglRenderer.prototype._getUniform = function _getUniform(program, uniformName) {
        var gl = this.gl;
        var uniform = gl.getUniformLocation(program, uniformName);
        if (!uniform) {
            throw new Error('Failed to get the storage location of ' + uniformName);
        }
        return uniform;
    };

    return WebglRenderer;
}(maptalks.renderer.CanvasRenderer);

var LineAtlas = function () {
    function LineAtlas(resources, options) {
        classCallCheck(this, LineAtlas);

        this.resources = resources;
        this.options = options || {};
        this.atlas = {};
    }

    LineAtlas.prototype.getAtlas = function getAtlas(symbol) {
        var key = JSON.stringify(symbol);

        if (!this.atlas[key]) {
            var atlas = this.addAtlas(symbol);
            if (atlas) {
                this.atlas[key] = atlas;
            }
        }
        return this.atlas[key];
    };

    LineAtlas.prototype.addAtlas = function addAtlas(symbol) {
        if (!symbol['lineDasharray'] && !symbol['linePatternFile']) {
            return null;
        }

        var size = this._getSize(symbol, this.resources);

        var canvas = this._createCanvas(size);

        if (!canvas) {
            throw new Error('can not initialize canvas container.');
        }

        var ctx = canvas.getContext('2d');
        maptalks.Canvas.prepareCanvas(ctx, symbol, this.resources);

        ctx.moveTo(0, size[1] / 2);
        ctx.lineTo(size[0], size[1] / 2);
        ctx.stroke();

        return {
            'canvas': canvas,
            'offset': new maptalks.Point(0, 0)
        };
    };

    LineAtlas.prototype._getSize = function _getSize(symbol, resources) {
        var w = 0,
            h = 0;
        var dashArray = symbol['lineDasharray'];
        if (dashArray) {
            for (var i = 0; i < dashArray.length; i++) {
                w += dashArray[i];
            }

            if (dashArray.length % 2 === 1) {
                w *= 2;
            }
            h = symbol['lineWidth'] == null ? 2 : symbol['lineWidth'];
        }
        if (symbol['linePatternFile']) {
            var image = resources.getImage(symbol['linePatternFile']);
            if (image.width > w) {
                w = image.width;
            }
            if (image.height > h) {
                h = image.height;
            }
        }
        return [w, h];
    };

    LineAtlas.prototype._createCanvas = function _createCanvas(size) {
        if (this.options['canvasClass']) {
            return new this.options['canvasClass'](size[0], size[1]);
        }
        if (typeof document !== 'undefined') {
            var canvas = document.createElement('canvas');
            canvas.width = size[0];
            canvas.height = size[1];
            return canvas;
        }
        return null;
    };

    return LineAtlas;
}();

var index$1 = Point$1;

function Point$1(x, y) {
    this.x = x;
    this.y = y;
}

Point$1.prototype = {
    clone: function clone() {
        return new Point$1(this.x, this.y);
    },

    add: function add(p) {
        return this.clone()._add(p);
    },

    sub: function sub(p) {
        return this.clone()._sub(p);
    },

    multByPoint: function multByPoint(p) {
        return this.clone()._multByPoint(p);
    },

    divByPoint: function divByPoint(p) {
        return this.clone()._divByPoint(p);
    },

    mult: function mult(k) {
        return this.clone()._mult(k);
    },

    div: function div(k) {
        return this.clone()._div(k);
    },

    rotate: function rotate(a) {
        return this.clone()._rotate(a);
    },

    rotateAround: function rotateAround(a, p) {
        return this.clone()._rotateAround(a, p);
    },

    matMult: function matMult(m) {
        return this.clone()._matMult(m);
    },

    unit: function unit() {
        return this.clone()._unit();
    },

    perp: function perp() {
        return this.clone()._perp();
    },

    round: function round() {
        return this.clone()._round();
    },

    mag: function mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function equals(other) {
        return this.x === other.x && this.y === other.y;
    },

    dist: function dist(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function distSqr(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function angle() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function angleTo(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function angleWith(b) {
        return this.angleWithSep(b.x, b.y);
    },

    angleWithSep: function angleWithSep(x, y) {
        return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
    },

    _matMult: function _matMult(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function _add(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function _sub(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function _mult(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function _div(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function _multByPoint(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function _divByPoint(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function _unit() {
        this._div(this.mag());
        return this;
    },

    _perp: function _perp() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function _rotate(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function _rotateAround(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function _round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

Point$1.convert = function (a) {
    if (a instanceof Point$1) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point$1(a[0], a[1]);
    }
    return a;
};

var options = {
    'project': true
};

var LinePainter = function (_Painter) {
    inherits(LinePainter, _Painter);

    function LinePainter(gl, map, options) {
        classCallCheck(this, LinePainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.normalArray = [];
        _this.elementArray = [];
        _this.styleArray = [];


        _this.distance = 0;
        return _this;
    }

    LinePainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'normalArray': this.normalArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    LinePainter.prototype.addLine = function addLine(line, style) {
        if (!line) {
            return this;
        }
        if (style.symbol['lineWidth'] <= 0 || style.symbol['lineOpacity'] <= 0) {
            return this;
        }

        var preVertexLen = this.vertexArray.length;

        var vertice = this._getVertice(line);

        if (vertice[0] && Array.isArray(vertice[0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addLine(vertice[i], style);
            }
            return this;
        }

        this._prepareToAdd();

        var targetZ = getTargetZoom(this.map);

        var currentVertex = void 0,
            nextVertex = void 0;
        for (var _i = 0, _l = vertice.length; _i < _l; _i++) {
            var vertex = vertice[_i];
            if (this.options['project']) {
                vertex = this.map.coordinateToPoint(new maptalks.Coordinate(vertex), targetZ).toArray();
            }
            currentVertex = index$1.convert(vertex);
            if (_i < _l - 1) {
                vertex = vertice[_i + 1];
                if (this.options['project']) {
                    vertex = this.map.coordinateToPoint(new maptalks.Coordinate(vertex), targetZ).toArray();
                }
                nextVertex = index$1.convert(vertex);
            } else {
                nextVertex = null;
            }
            this.addCurrentVertex(currentVertex, nextVertex);
        }

        var count = this.vertexArray.length - preVertexLen;

        this._addTexCoords(count, style);
        return this;
    };

    LinePainter.prototype.addCurrentVertex = function addCurrentVertex(currentVertex, nextVertex) {
        if (!this.preVertex) {
            this.e1 = this.e2 = this.e3 = -1;

            this._waitForLeftCap = true;
            this.preVertex = currentVertex;
            return;
        }

        var normal = currentVertex.sub(this.preVertex)._unit()._perp()._mult(-1);

        var nextNormal = void 0;
        if (nextVertex) {
            nextNormal = nextVertex.sub(currentVertex)._unit()._perp()._mult(-1);
        }

        var preJoinNormal = this._getStartNormal(normal, this.preNormal);

        this._addLineEndVertexs(this.preVertex, preJoinNormal, this.distance);

        this.distance += currentVertex.dist(this.preVertex);

        if (!nextVertex) {
            var endNormal = this._getEndNormal(normal, nextNormal);
            this._addLineEndVertexs(currentVertex, endNormal, this.distance);
        }

        this.preNormal = normal;
        this.preVertex = currentVertex;
    };

    LinePainter.prototype._prepareToAdd = function _prepareToAdd() {
        this.distance = 0;

        delete this.preVertex;
        delete this.preNormal;
    };

    LinePainter.prototype._addLineEndVertexs = function _addLineEndVertexs(vertex, joinNormal, linesofar) {
        var extrude = joinNormal.normal[0];

        this.e3 = this._addVertex(vertex, extrude, linesofar);
        if (this.e1 >= 0 && this.e2 >= 0) {
            this.elementArray.push(this.e1, this.e2, this.e3);
        }
        this.e1 = this.e2;
        this.e2 = this.e3;

        extrude = joinNormal.normal[1];

        this.e3 = this._addVertex(vertex, extrude, linesofar);
        if (this.e1 >= 0 && this.e2 >= 0) {
            this.elementArray.push(this.e1, this.e2, this.e3);
        }
        this.e1 = this.e2;
        this.e2 = this.e3;
    };

    LinePainter.prototype._addVertex = function _addVertex(currentVertex, normal, linesofar) {
        this.vertexArray.push(currentVertex.x, currentVertex.y);

        var normals = [this._precise(normal.x), this._precise(normal.y), linesofar];
        var n = this.normalArray.length / normals.length;
        maptalks.Util.pushIn(this.normalArray, normals);
        return n;
    };

    LinePainter.prototype._getVertice = function _getVertice(line) {
        if (line.geometry) {
            line = line.geometry.coordinates;
        } else if (line.coordinates) {
            line = line.coordinates;
        }
        return line;
    };

    LinePainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = (style.symbol['lineWidth'] || 2) / 2 * 100 + (style.symbol['lineOpacity'] || 1) * 10;

        v = v * 10000 + style.index;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    LinePainter.prototype._getStartNormal = function _getStartNormal(normal, preNormal) {
        return this._getJoinNormal(normal, preNormal, normal);
    };

    LinePainter.prototype._getEndNormal = function _getEndNormal(normal, nextNormal) {
        return this._getJoinNormal(normal, normal, nextNormal);
    };

    LinePainter.prototype._getJoinNormal = function _getJoinNormal(currentNormal, preNormal, normal) {
        if (!preNormal || !normal) {
            return {
                'normal': [currentNormal, currentNormal.mult(-1)]
            };
        }
        var joinNormal = preNormal.add(normal)._unit();
        var cosHalfAngle = joinNormal.x * normal.x + joinNormal.y * normal.y;
        var miterLength = 1 / cosHalfAngle;
        joinNormal._mult(miterLength);
        return {
            'normal': [joinNormal, joinNormal.mult(-1)]
        };
    };

    LinePainter.prototype._precise = function _precise(f) {
        return Math.round(f * 1E7) / 1E7;
    };

    return LinePainter;
}(Painter);

LinePainter.mergeOptions(options);

var earcut_1 = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    } else {
        for (i = end - dim; i >= start; i -= dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    }

    if (last && equals$8(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals$8(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;
        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev,
        next;

    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        if (ear === stop) {
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false;
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false;
    var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
        minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
        maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
        maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;

    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals$8(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

function splitEarcut(start, triangles, dim, minX, minY, size) {
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                var c = splitPolygon(a, b);

                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i,
        len,
        start,
        end,
        list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev;

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x);

            if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

function sortLinked(list) {
    var i,
        p,
        q,
        e,
        tail,
        numMerges,
        pSize,
        qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || qSize > 0 && q) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;
    } while (numMerges > 1);

    return list;
}

function zOrder(x, y, minX, minY, size) {
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;

    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;

    return x | y << 1;
}

function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

function equals$8(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

function intersects(p1, q1, p2, q2) {
    if (equals$8(p1, q1) && equals$8(p2, q2) || equals$8(p1, q2) && equals$8(p2, q1)) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    this.i = i;

    this.x = x;
    this.y = y;

    this.prev = null;
    this.next = null;

    this.z = null;

    this.prevZ = null;
    this.nextZ = null;

    this.steiner = false;
}

earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = { vertices: [], holes: [], dimensions: dim },
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) {
                result.vertices.push(data[i][j][d]);
            }
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

var options$1 = {
    'project': true
};

var PolygonPainter = function (_Painter) {
    inherits(PolygonPainter, _Painter);

    function PolygonPainter(gl, map, options) {
        classCallCheck(this, PolygonPainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.elementArray = [];
        _this.styleArray = [];
        return _this;
    }

    PolygonPainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    PolygonPainter.prototype.addPolygon = function addPolygon(polygon, style) {
        var _this2 = this;

        if (!polygon) {
            return this;
        }
        if (style.symbol['polygonOpacity'] <= 0) {
            return this;
        }

        var vertice = this._getVertice(polygon);

        if (vertice[0] && Array.isArray(vertice[0][0]) && Array.isArray(vertice[0][0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addPolygon(vertice[i], style);
            }
            return this;
        }
        vertice.forEach(function (ring) {
            if (!ring.length) {
                return;
            }
            if (!_this2._equalCoord(ring[0], ring[ring.length - 1])) {
                ring.push(ring[0], ring[1]);
            }
        });
        var targetZ = getTargetZoom(this.map);
        var data = earcut_1.flatten(vertice);

        if (this.options['project']) {
            var v = [];
            var c = void 0;
            for (var _i = 0, _l = data.vertices.length; _i < _l; _i += 2) {
                c = this.map.coordinateToPoint(new maptalks.Coordinate(data.vertices[_i], data.vertices[_i + 1]), targetZ);
                v.push(c.x, c.y);
            }
            data.vertices = v;
        }
        var triangles = earcut_1(data.vertices, data.holes, 2);
        if (triangles.length <= 2) {
            return this;
        }
        var deviation = earcut_1.deviation(data.vertices, data.holes, 2, triangles);
        if (Math.round(deviation * 1E3) / 1E3 !== 0) {
            if (console) {
                console.warn('Failed triangluation.');
            }
            return this;
        }
        var count = this.vertexArray.length / 2;
        if (count > 0) {
            triangles = triangles.map(function (e) {
                return e + count;
            });
        }
        maptalks.Util.pushIn(this.vertexArray, data.vertices);
        maptalks.Util.pushIn(this.elementArray, triangles);

        this._addTexCoords(data.vertices.length / 2, style);
        return this;
    };

    PolygonPainter.prototype._getVertice = function _getVertice(geo) {
        if (geo.geometry) {
            geo = geo.geometry.coordinates;
        } else if (geo.coordinates) {
            geo = geo.coordinates;
        }
        return geo;
    };

    PolygonPainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = style.index * 100 + (style.symbol['polygonOpacity'] || 1) * 10;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    PolygonPainter.prototype._equalCoord = function _equalCoord(c1, c2) {
        return c1[0] === c2[0] && c1[1] === c2[1];
    };

    return PolygonPainter;
}(Painter);

PolygonPainter.mergeOptions(options$1);

var lineFragment = "#ifdef GL_ES\nprecision mediump float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n\nuniform float u_blur;\nuniform vec2 u_tex_size;\n\n// varying lowp vec4 v_color;\n// varying vec2 v_linenormal;\nvarying vec4 v_texcoord;\nvarying float v_opacity;\nvarying float v_linewidth;\nvarying float v_scale;\nvarying float v_texture_normal;\nvarying float v_linesofar;\n// varying float v_ruler;\n\nuniform sampler2D u_image;\n\nvoid main() {\n    vec4 color;\n    if (v_texcoord.q == -1.0) {\n        // is a texture fragment\n        float linesofar = v_linesofar / v_scale;\n        float texWidth = u_tex_size.x * v_texcoord.t;\n        float x = v_texcoord.s + mod(linesofar, texWidth) / texWidth * v_texcoord.t;\n        float y = (v_texture_normal + 1.0) / 2.0 * v_texcoord.p;\n\n        color = texture2D(u_image, vec2(x, y));\n    } else {\n        // a color fragment\n        color = v_texcoord;\n    }\n    float alpha = 1.0;\n    gl_FragColor = color * (alpha * v_opacity);\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}";

var maxUniformLength = maptalks.Browser.ie || maptalks.Browser.edge ? 504 : maptalks.Util.IS_NODE ? 1014 : 240;

var lineVertex = '#ifdef GL_ES\nprecision highp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n\nattribute vec4 a_pos;\nattribute mediump vec2 a_normal;\n// attribute mediump vec2 a_linenormal;\nattribute float a_linesofar;\n// (line_width * 100 + opacity * 10) * 10000 + tex_idx\nattribute float a_style;\n// attribute float a_seglen;\n\nuniform mat4 u_matrix;\nuniform float u_scale;\nuniform float u_styles[' + maxUniformLength + '];\n\nvarying vec2 v_linenormal;\nvarying float v_linewidth;\nvarying float v_opacity;\nvarying vec4 v_texcoord;\nvarying float v_scale;\nvarying float v_texture_normal;\n\nvarying float v_linesofar;\n// varying float v_ruler;\n\nvoid main() {\n    int tex_idx = int(mod(a_style, 10000.0));\n    float s = floor(a_style / 10000.0);\n    v_opacity = mod(s, 10.0) / 10.0;\n    if (v_opacity == 0.0) {\n        v_opacity = 1.0;\n    }\n    v_linewidth = s / 100.0;\n    v_texcoord = vec4(u_styles[tex_idx], u_styles[tex_idx + 1], u_styles[tex_idx + 2], u_styles[tex_idx + 3]);\n\n    v_scale = u_scale;\n\n    // v_linenormal = a_linenormal;\n\n    vec4 pos = a_pos;\n    pos.x += a_normal.x * v_linewidth * u_scale;\n    pos.y += a_normal.y * v_linewidth * u_scale;\n\n    // add linesofar with corner length caused by line-join\n    v_linesofar = a_linesofar;\n\n\n    gl_Position = u_matrix * pos;\n    if (a_normal.y == 0.0) {\n        // with an upside down straight line, a_normal.y is always 0, use a_normal.x instead\n        v_texture_normal = -sign(a_normal.x);\n    } else {\n        //\n        v_texture_normal = sign(a_normal.y);\n    }\n\n}';

var pointFragment = "\nprecision mediump float;\nuniform sampler2D u_sampler;\nvarying vec3 v_texCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_sampler, vec2(v_texCoord[0] + gl_PointCoord[0] * v_texCoord[1], 1.0 + gl_PointCoord[1] * v_texCoord[2]));\n}";

var pointVertex = '\n// marker\'s 2d point at max zoom\nattribute vec4 a_pos;\n// texture idx in u_sprite\nattribute float a_sprite_idx;\nuniform mat4 u_matrix;\n// scale of current zoom\nuniform float u_scale;\n// sprites, an array of sprites\n// a sprite has 6 integers:\n// 0 : northwest\'s x, 1 : width, 2: height, 3: sprite size, 4: offset x, 5: offset y\n// array\'s length is not dynamic, support maximum count / 6 sprites\nuniform float u_sprite[' + maxUniformLength + '];\nvarying vec3 v_texCoord;\nvoid main() {\n  int idx = int(a_sprite_idx) * 6;\n  float size = u_sprite[idx + 3];\n  vec2 textOffset = vec2(u_sprite[idx + 4], u_sprite[idx + 5]);\n  vec4 pos = vec4(a_pos.x + textOffset.x * u_scale, a_pos.y + textOffset.y * u_scale, a_pos.z, a_pos.w);\n  gl_Position = u_matrix * pos;\n  gl_PointSize = size;\n  // texture coord\n  v_texCoord = vec3(u_sprite[idx], u_sprite[idx + 1], u_sprite[idx + 2]);\n}';

var polygonFragment = "\nprecision mediump float;\n\nvarying vec4 v_texcoord;\nvarying float v_opacity;\nvoid main() {\n    gl_FragColor = v_texcoord * v_opacity;\n}";

var polygonVertex = 'attribute vec4 a_pos;\n//tex_idx * 100 + opacity * 10\nattribute float a_fill_style;\n\nuniform mat4 u_matrix;\nuniform float u_fill_styles[' + maxUniformLength + '];\n\nvarying float v_opacity;\nvarying vec4 v_texcoord;\n\nvoid main() {\n  int tex_idx = int(floor(a_fill_style / 100.0));\n  v_opacity = mod(a_fill_style, 100.0) / 10.0;\n  v_texcoord = vec4(u_fill_styles[tex_idx], u_fill_styles[tex_idx + 1], u_fill_styles[tex_idx + 2], u_fill_styles[tex_idx + 3]);\n\n  gl_Position = u_matrix * a_pos;\n}';

var extrudeFragment = "\nprecision mediump float;\n\nvarying vec4 v_texcoord;\nvarying float v_opacity;\n// varying vec4 v_lighting;\n\nvoid main() {\n    gl_FragColor = v_texcoord * v_opacity;\n}";

var extrudeVertex = 'attribute vec4 a_pos;\nattribute vec4 a_normal;\n//tex_idx * 100 + opacity * 10\nattribute float a_fill_style;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp vec3 u_ambientlight;\nuniform lowp float u_lightintensity;\n// uniform vec3 u_ambientlight;\n\nuniform mat4 u_matrix;\nuniform float u_fill_styles[' + maxUniformLength + '];\n\nvarying float v_opacity;\nvarying vec4 v_texcoord;\n\nvarying vec4 v_lighting;\n\nvoid main() {\n  int tex_idx = int(a_fill_style / 100.0) * 4;\n  v_opacity = mod(a_fill_style, 100.0) / 10.0;\n\n  vec4 color = vec4(u_fill_styles[tex_idx], u_fill_styles[tex_idx + 1], u_fill_styles[tex_idx + 2], u_fill_styles[tex_idx + 3]);\n\n  gl_Position = u_matrix * a_pos;\n\n  vec3 normal = normalize(a_normal.xyz);\n  // // vec3 lightpos = normalize(u_lightpos);\n  // float nDotL = max(dot(u_lightpos, normal), 0.0);\n  // vec3 diffuse = u_lightcolor * color.rgb * nDotL;\n\n  // vec3 ambient = u_ambientlight * color.rgb;\n\n  // v_texcoord = vec4(diffuse + ambient, color.a);\n\n  // Relative luminance (how dark/bright is the surface color?)\n  float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n  // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(u_ambientlight, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(normal, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    // if (normal.y != 0.0) {\n    //     directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    // }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_texcoord.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_texcoord.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_texcoord.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n    v_texcoord.a = color.a;\n  // vec3 normal = normalize(a_normal.xyz);\n  // vec3 lightpos = normalize(u_lightpos.xyz);\n  // // codes from mapbox-gl-js\n  // v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n  // float directional = clamp(dot(normal, lightpos), 0.0, 1.0);\n  // directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n  // // if (a_normal.y != 0.0) {\n  // //   directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n  // // }\n\n  // v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}';

var shaders = {
    'line': {
        'fragmentSource': lineFragment,
        'vertexSource': lineVertex
    },
    'point': {
        'fragmentSource': pointFragment,
        'vertexSource': pointVertex
    },
    'polygon': {
        'fragmentSource': polygonFragment,
        'vertexSource': polygonVertex
    },
    'extrude': {
        'fragmentSource': extrudeFragment,
        'vertexSource': extrudeVertex
    }
};



var index = Object.freeze({
	WebglRenderer: WebglRenderer,
	Shader: shaders,
	Painter: Painter,
	LineAtlas: LineAtlas,
	LinePainter: LinePainter,
	PolygonPainter: PolygonPainter
});

var options$2 = {
    'renderer': 'webgl',
    'doublBuffer': false,
    'renderOnMoving': false,
    'renderOnZooming': false
};

var BigDataLayer = function (_maptalks$Layer) {
    inherits(BigDataLayer, _maptalks$Layer);

    BigDataLayer.fromJSON = function fromJSON(profile) {
        if (!profile || profile['type'] !== this.getJSONType()) {
            return null;
        }
        var constructor = this.prototype.constructor;
        var layer = new constructor(profile['id'], profile['data'], profile['options']);
        if (profile['style']) {
            layer.setStyle(profile['style']);
        }
        return layer;
    };

    function BigDataLayer(id, data, options) {
        classCallCheck(this, BigDataLayer);

        var opts = maptalks.Util.extend({}, options);
        var style = void 0;
        if (opts['style']) {
            style = opts['style'];
            delete opts['style'];
        }

        var _this = possibleConstructorReturn(this, _maptalks$Layer.call(this, id, opts));

        _this.data = data;
        if (style) {
            _this.setStyle(style);
        }
        return _this;
    }

    BigDataLayer.prototype.toJSON = function toJSON() {
        var json = {
            'type': this.getJSONType(),
            'data': this.data,
            'id': this.getId()
        };
        var options = this.config();
        var style = this.getStyle();
        if (options) {
            json['options'] = options;
        }
        if (style) {
            json['style'] = style;
        }
        return json;
    };

    BigDataLayer.prototype.setStyle = function setStyle(style) {
        if (!Array.isArray(style)) {
            style = [style];
        }
        this._style = style;
        this._cookedStyles = maptalks.MapboxUtil.compileStyle(style);

        this.fire('setstyle', { 'style': style });
        return this;
    };

    BigDataLayer.prototype.getStyle = function getStyle() {
        return this._style;
    };

    return BigDataLayer;
}(maptalks.Layer);

BigDataLayer.mergeOptions(options$2);

var sort$1 = sortKD;

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    var m = Math.floor((left + right) / 2);

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) {
                i++;
            }while (coords[2 * j + inc] > t) {
                j--;
            }
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var range_1 = range;

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

var within_1 = within;

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

var sort = sort$1;
var _range = range_1;
var _within = within_1;

var kdbush_1 = kdbush;

function kdbush(points, getX, getY, nodeSize, ArrayType) {
    return new KDBush(points, getX, getY, nodeSize, ArrayType);
}

function KDBush(points, getX, getY, nodeSize, ArrayType) {
    getX = getX || defaultGetX;
    getY = getY || defaultGetY;
    ArrayType = ArrayType || Array;

    this.nodeSize = nodeSize || 64;
    this.points = points;

    this.ids = new ArrayType(points.length);
    this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        this.ids[i] = i;
        this.coords[2 * i] = getX(points[i]);
        this.coords[2 * i + 1] = getY(points[i]);
    }

    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
}

KDBush.prototype = {
    range: function range(minX, minY, maxX, maxY) {
        return _range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    },

    within: function within(x, y, r) {
        return _within(this.ids, this.coords, x, y, r, this.nodeSize);
    }
};

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}

var BigPointLayer = function (_BigDataLayer) {
    inherits(BigPointLayer, _BigDataLayer);

    function BigPointLayer() {
        classCallCheck(this, BigPointLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    BigPointLayer.prototype.identify = function identify(coordinate, options) {
        var renderer$$1 = this._getRenderer();
        if (!renderer$$1) {
            return null;
        }
        return renderer$$1.identify(coordinate, options);
    };

    return BigPointLayer;
}(BigDataLayer);

BigPointLayer.registerJSONType('BigPointLayer');

BigPointLayer.registerRenderer('webgl', function (_WebglRenderer) {
    inherits(_class, _WebglRenderer);

    function _class(layer) {
        classCallCheck(this, _class);

        var _this2 = possibleConstructorReturn(this, _WebglRenderer.call(this, layer));

        _this2._needCheckStyle = true;
        _this2._needCheckSprites = true;
        _this2._registerEvents();
        return _this2;
    }

    _class.prototype.checkResources = function checkResources() {
        if (!this._needCheckStyle) {
            return [];
        }

        var resources = [];
        if (this.layer.getStyle()) {
            this.layer.getStyle().forEach(function (s) {
                var res = maptalks.Util.getExternalResources(s['symbol'], true);
                if (res) {
                    resources.push(res);
                }
            });
        }

        this._needCheckStyle = false;
        this._needCheckSprites = true;
        this._textureLoaded = false;
        return resources;
    };

    _class.prototype.onCanvasCreate = function onCanvasCreate() {
        var gl = this.gl;
        var uniforms = ['u_matrix', 'u_scale', 'u_sprite[0]'];
        var program = this.createProgram(shaders.point.vertexSource, shaders.point.fragmentSource, uniforms);
        this.useProgram(program);
        var buffer = this.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        this.enableVertexAttrib([['a_pos', 2], ['a_sprite_idx', 1]]);
    };

    _class.prototype.draw = function draw() {
        this.prepareCanvas();
        this._checkSprites();

        if (!this._vertexCount) {
            var map = this.getMap(),
                targetZ = getTargetZoom(map);
            var data = this.layer.data;
            var vertexTexCoords = [];
            var points = [];
            this._vertexCount = 0;
            var gl = this.gl;
            var maxIconSize = [0, 0];
            for (var i = 0, l = data.length; i < l; i++) {
                if (!data[i]) {
                    continue;
                }
                var point = void 0;
                if (Array.isArray(data[i])) {
                    point = data[i];
                } else if (data[i].type) {
                    var v = this._getVertice(data[i]);

                    point = [v[0], v[1], data[i].properties];
                }
                var tex = this._getTexCoord({ 'properties': point[2] });
                if (tex) {
                    this._vertexCount++;
                    var cp = map.coordinateToPoint(new maptalks.Coordinate(point), targetZ);
                    vertexTexCoords.push(cp.x, cp.y, tex.idx);
                    points.push([cp.x, cp.y, tex.size, tex.offset, point]);

                    if (tex.size[0] > maxIconSize[0]) {
                        maxIconSize[0] = tex.size[0];
                    }
                    if (tex.size[1] > maxIconSize[1]) {
                        maxIconSize[1] = tex.size[1];
                    }
                }
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexTexCoords), gl.STATIC_DRAW);

            this._maxIconSize = maxIconSize;
            this._indexData(points);
        }

        this._drawMarkers();
        this.completeRender();
    };

    _class.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawMarkers();
        this.completeRender();
    };

    _class.prototype.onRemove = function onRemove() {
        this._removeEvents();
        delete this._sprites;
        delete this._uSprite;
        _WebglRenderer.prototype.onRemove.apply(this, arguments);
    };

    _class.prototype.identify = function identify(coordinate, options) {
        if (!this._kdIndex) {
            return null;
        }
        var map = this.getMap();
        var targetZ = getTargetZoom(map);
        var c = map.coordinateToPoint(coordinate, targetZ);

        var scale = map.getScale() / map.getScale(targetZ);
        var w = scale * this._maxIconSize[0],
            h = scale * this._maxIconSize[1];
        if (w < 1) {
            w = 1;
        }
        if (h < 1) {
            h = 1;
        }
        var ids = this._kdIndex.range(c.x - w, c.y - h, c.x + w, c.y + h);
        var filter = void 0,
            limit = void 0;
        if (options) {
            if (options['filter']) {
                filter = options['filter'];
            }
            if (options['count']) {
                limit = options['count'];
            }
        }

        var result = [];
        for (var i = 0, l = ids.length; i < l; i++) {
            var p = this._indexPoints[ids[i]];
            var x = p[0],
                y = p[1];
            var size = p[2],
                offset = p[3];
            var extent = [scale * (-size[0] / 2 + offset.x), scale * (-size[1] / 2 + offset.y), scale * (size[0] / 2 + offset.x), scale * (size[1] / 2 + offset.y)];
            if (c.x >= x + extent[0] && c.x <= x + extent[2] && c.y >= y + extent[1] && c.y <= y + extent[3]) {
                if (!filter || filter(p[4])) {
                    result.push(p[4]);
                }
                if (limit && result.length >= limit) {
                    break;
                }
            }
        }
        return result;
    };

    _class.prototype._indexData = function _indexData(data) {
        this._indexPoints = data;
        this._kdIndex = kdbush_1(data, null, null, 64, Int32Array);
    };

    _class.prototype._getTexCoord = function _getTexCoord(props) {
        if (!this.layer._cookedStyles) {
            return null;
        }
        for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
            if (this.layer._cookedStyles[i].filter(props) === true) {
                return {
                    'idx': i,
                    'texCoord': this._sprites.texCoords[i],
                    'offset': this._sprites.offsets[i],
                    'size': this._sprites.sizes[i]
                };
            }
        }
        return null;
    };

    _class.prototype._checkSprites = function _checkSprites() {
        var _this3 = this;

        if (!this._needCheckSprites) {
            return;
        }
        var resources = this.resources;
        var sprites = [];
        if (this.layer.getStyle()) {
            (function () {
                var map = _this3.getMap();
                _this3.layer.getStyle().forEach(function (style) {
                    var marker = new maptalks.Marker([0, 0], {
                        'symbol': style['symbol']
                    });
                    var sprite = marker._getSprite(resources, map.CanvasClass);
                    if (sprite) {
                        sprites.push(sprite);
                    }
                });
            })();
        }

        this._sprites = this.mergeSprites(sprites, true);
        if (!this._sprites) {
            return;
        }

        if (typeof window != 'undefined' && window.MAPTALKS_WEBGL_DEBUG_CANVAS) {
            window.MAPTALKS_WEBGL_DEBUG_CANVAS.getContext('2d').drawImage(this._sprites.canvas, 0, 0);
        }

        this._needCheckSprites = false;

        if (!this._textureLoaded) {
            var ctx = this._sprites.canvas.getContext('2d');
            var width = this._sprites.canvas.width;
            var height = this._sprites.canvas.height;
            var imageData = ctx.getImageData(0, 0, width, height);
            this.loadTexture(imageData);
            this.enableSampler('u_sampler');
            this._textureLoaded = true;

            var uSprite = this._uSprite = [];
            for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
                uSprite.push.apply(uSprite, this._sprites.texCoords[i]);
                uSprite.push(this._sprites.offsets[i].x, this._sprites.offsets[i].y);
            }
        }
    };

    _class.prototype._getVertice = function _getVertice(point) {
        if (point.geometry) {
            point = point.geometry.coordinates;
        } else if (point.coordinates) {
            point = point.coordinates;
        }
        return point;
    };

    _class.prototype._drawMarkers = function _drawMarkers() {
        var gl = this.gl;
        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program.u_matrix, false, m);
        gl.uniform1f(gl.program.u_scale, this.getMap().getScale());
        gl.uniform1fv(gl.program.u_sprite, this._uSprite);

        gl.drawArrays(gl.POINTS, 0, this._vertexCount);
    };

    _class.prototype._registerEvents = function _registerEvents() {
        this.layer.on('setstyle', this._onStyleChanged, this);
    };

    _class.prototype._removeEvents = function _removeEvents() {
        this.layer.off('setstyle', this._onStyleChanged, this);
    };

    _class.prototype._onStyleChanged = function _onStyleChanged() {
        this._needCheckStyle = true;
    };

    return _class;
}(WebglRenderer));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var clone_1 = createCommonjsModule(function (module) {
  var clone = function () {
    'use strict';

    function clone(parent, circular, depth, prototype) {
      var filter;
      if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
        depth = circular.depth;
        prototype = circular.prototype;
        filter = circular.filter;
        circular = circular.circular;
      }

      var allParents = [];
      var allChildren = [];

      var useBuffer = typeof Buffer != 'undefined';

      if (typeof circular == 'undefined') circular = true;

      if (typeof depth == 'undefined') depth = Infinity;

      function _clone(parent, depth) {
        if (parent === null) return null;

        if (depth == 0) return parent;

        var child;
        var proto;
        if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
          return parent;
        }

        if (clone.__isArray(parent)) {
          child = [];
        } else if (clone.__isRegExp(parent)) {
          child = new RegExp(parent.source, __getRegExpFlags(parent));
          if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (clone.__isDate(parent)) {
          child = new Date(parent.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent)) {
          child = new Buffer(parent.length);
          parent.copy(child);
          return child;
        } else {
          if (typeof prototype == 'undefined') {
            proto = Object.getPrototypeOf(parent);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }

        if (circular) {
          var index = allParents.indexOf(parent);

          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent);
          allChildren.push(child);
        }

        for (var i in parent) {
          var attrs;
          if (proto) {
            attrs = Object.getOwnPropertyDescriptor(proto, i);
          }

          if (attrs && attrs.set == null) {
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        }

        return child;
      }

      return _clone(parent, depth);
    }

    clone.clonePrototype = function clonePrototype(parent) {
      if (parent === null) return null;

      var c = function c() {};
      c.prototype = parent;
      return new c();
    };

    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;

    function __isDate(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;

    function __isArray(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;

    function __isRegExp(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;

    function __getRegExpFlags(re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;

    return clone;
  }();

  if ('object' === 'object' && module.exports) {
    module.exports = clone;
  }
});

var index$5 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions$1 = createCommonjsModule(function (module) {
	var cssKeywords = index$5;

	var reverseKeywords = {};
	for (var key in cssKeywords) {
		if (cssKeywords.hasOwnProperty(key)) {
			reverseKeywords[cssKeywords[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: { channels: 3, labels: 'rgb' },
		hsl: { channels: 3, labels: 'hsl' },
		hsv: { channels: 3, labels: 'hsv' },
		hwb: { channels: 3, labels: 'hwb' },
		cmyk: { channels: 4, labels: 'cmyk' },
		xyz: { channels: 3, labels: 'xyz' },
		lab: { channels: 3, labels: 'lab' },
		lch: { channels: 3, labels: 'lch' },
		hex: { channels: 1, labels: ['hex'] },
		keyword: { channels: 1, labels: ['keyword'] },
		ansi16: { channels: 1, labels: ['ansi16'] },
		ansi256: { channels: 1, labels: ['ansi256'] },
		hcg: { channels: 3, labels: ['h', 'c', 'g'] },
		apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
		gray: { channels: 1, labels: ['gray'] }
	};

	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', { value: channels });
			Object.defineProperty(convert[model], 'labels', { value: labels });
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var v;

		if (max === 0) {
			s = 0;
		} else {
			s = delta / max * 1000 / 10;
		}

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		v = max / 255 * 1000 / 10;

		return [h, s, v];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
		return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in cssKeywords) {
			if (cssKeywords.hasOwnProperty(keyword)) {
				var value = cssKeywords[keyword];

				var distance = comparativeDistance(rgb, value);

				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
		g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
		b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

		var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
		var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
		var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= l <= 1 ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - s * f);
		var t = 255 * v * (1 - s * (1 - f));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= lmin <= 1 ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh);

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0:
				r = v;g = n;b = wh;break;
			case 1:
				r = n;g = v;b = wh;break;
			case 2:
				r = wh;g = v;b = n;break;
			case 3:
				r = wh;g = n;b = v;break;
			case 4:
				r = n;g = wh;b = v;break;
			case 5:
				r = v;g = wh;b = n;break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = x * 3.2406 + y * -1.5372 + z * -0.4986;
		g = x * -0.9689 + y * 1.8758 + z * 0.0415;
		b = x * 0.0557 + y * -0.2040 + z * 1.0570;

		r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

		g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

		b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round((r - 8) / 247 * 24) + 232;
		}

		var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = (color & 1) * mult * 255;
		var g = (color >> 1 & 1) * mult * 255;
		var b = (color >> 2 & 1) * mult * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = rem % 6 / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var integer = parseInt(match[0], 16);
		var r = integer >> 16 & 0xFF;
		var g = integer >> 8 & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = max - min;
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else if (max === r) {
			hue = (g - b) / chroma % 6;
		} else if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = h % 1 * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1;pure[1] = v;pure[2] = 0;break;
			case 1:
				pure[0] = w;pure[1] = 1;pure[2] = 0;break;
			case 2:
				pure[0] = 0;pure[1] = 1;pure[2] = v;break;
			case 3:
				pure[0] = 0;pure[1] = w;pure[2] = 1;break;
			case 4:
				pure[0] = v;pure[1] = 0;pure[2] = 1;break;
			default:
				pure[0] = 1;pure[1] = 0;pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
});

var conversions$3 = conversions$1;

var models$1 = Object.keys(conversions$3);

function buildGraph() {
	var graph = {};

	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}

	return graph;
}

function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions$3[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions$3[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions$3[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route$1 = function route(fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var conversions = conversions$1;
var route = route$1;

var convert$1 = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert$1[fromModel] = {};

	Object.defineProperty(convert$1[fromModel], 'channels', { value: conversions[fromModel].channels });
	Object.defineProperty(convert$1[fromModel], 'labels', { value: conversions[fromModel].labels });

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert$1[fromModel][toModel] = wrapRounded(fn);
		convert$1[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var index$3 = convert$1;

var colorNames = index$5;

var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr = /^#([a-fA-F0-9]{3})$/,
       hex = /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   } else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   } else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   } else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   } else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale$8(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   } else {
      a = scale$8(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale$8(parseInt(match[1]), 0, 360),
          s = scale$8(parseFloat(match[2]), 0, 100),
          l = scale$8(parseFloat(match[3]), 0, 100),
          a = scale$8(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale$8(parseInt(match[1]), 0, 360),
          w = scale$8(parseFloat(match[2]), 0, 100),
          b = scale$8(parseFloat(match[3]), 0, 100),
          a = scale$8(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
   var hsla = getHsla(string);
   return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   } else if (vals = getHsla(string)) {
      return vals[3];
   } else if (vals = getHwb(string)) {
      return vals[3];
   }
}

function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = rgba[3] !== undefined ? rgba[3] : 1;
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0] / 255 * 100),
       g = Math.round(rgba[1] / 255 * 100),
       b = Math.round(rgba[2] / 255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0] / 255 * 100),
       g = Math.round(rgba[1] / 255 * 100),
       b = Math.round(rgba[2] / 255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || hsla[3] && hsla[3] < 1) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = hsla[3] !== undefined ? hsla[3] : 1;
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
}

function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = hwb[3] !== undefined ? hwb[3] : 1;
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
   return reverseNames[rgb.slice(0, 3)];
}

function scale$8(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
   var str = num.toString(16).toUpperCase();
   return str.length < 2 ? "0" + str : str;
}

var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

var _clone = clone_1;
var convert = index$3;
var string = colorString;

var Color = function Color(obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function rgb() {
		return this.setSpace('rgb', arguments);
	},
	hsl: function hsl() {
		return this.setSpace('hsl', arguments);
	},
	hsv: function hsv() {
		return this.setSpace('hsv', arguments);
	},
	hwb: function hwb() {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function cmyk() {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function rgbArray() {
		return this.values.rgb;
	},
	hslArray: function hslArray() {
		return this.values.hsl;
	},
	hsvArray: function hsvArray() {
		return this.values.hsv;
	},
	hwbArray: function hwbArray() {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function cmykArray() {
		return this.values.cmyk;
	},
	rgbaArray: function rgbaArray() {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	rgbaArrayNormalized: function rgbaArrayNormalized() {
		var rgb = this.values.rgb;
		var glRgba = [];
		for (var i = 0; i < 3; i++) {
			glRgba[i] = rgb[i] / 255;
		}
		glRgba.push(this.values.alpha);
		return glRgba;
	},
	hslaArray: function hslaArray() {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function alpha(val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function red(val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function green(val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function blue(val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function hue(val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function saturation(val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function lightness(val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function saturationv(val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function whiteness(val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function blackness(val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function value(val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function cyan(val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function magenta(val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function yellow(val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function black(val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function hexString() {
		return string.hexString(this.values.rgb);
	},
	rgbString: function rgbString() {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function rgbaString() {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function percentString() {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function hslString() {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function hslaString() {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function hwbString() {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function keyword() {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function rgbNumber() {
		return this.values.rgb[0] << 16 | this.values.rgb[1] << 8 | this.values.rgb[2];
	},

	luminosity: function luminosity() {
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function contrast(color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function level(color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return contrastRatio >= 4.5 ? 'AA' : '';
	},

	dark: function dark() {
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function light() {
		return !this.dark();
	},

	negate: function negate() {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function lighten(ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function darken(ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function saturate(ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function desaturate(ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function whiten(ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function blacken(ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function greyscale() {
		var rgb = this.values.rgb;

		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function clearer(ratio) {
		this.setValues('alpha', this.values.alpha - this.values.alpha * ratio);
		return this;
	},

	opaquer: function opaquer(ratio) {
		this.setValues('alpha', this.values.alpha + this.values.alpha * ratio);
		return this;
	},

	rotate: function rotate(degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	mix: function mix(mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function toJSON() {
		return this.rgb();
	},

	clone: function clone() {
		var col = new Color();
		col.values = _clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, alpha === undefined ? this.values.alpha : alpha));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		return this.getValues(space);
	}

	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		return this;
	}

	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

var index$2 = Color;

var PathRenderer = function (_WebglRenderer) {
    inherits(PathRenderer, _WebglRenderer);

    function PathRenderer(layer) {
        classCallCheck(this, PathRenderer);

        var _this = possibleConstructorReturn(this, _WebglRenderer.call(this, layer));

        _this._needCheckStyle = true;
        _this._needCheckSprites = true;
        _this._registerEvents();
        return _this;
    }

    PathRenderer.prototype.checkResources = function checkResources() {
        if (!this._needCheckStyle) {
            return [];
        }

        var resources = [];
        if (this.layer._cookedStyles) {
            this.layer._cookedStyles.forEach(function (s) {
                s['symbol'] = maptalks.Util.convertResourceUrl(s['symbol']);
                var res = maptalks.Util.getExternalResources(s['symbol'], true);
                if (res) {
                    resources.push(res);
                }
            });
        }

        this._needCheckStyle = false;

        this._needCheckSprites = true;

        this._textureLoaded = false;

        if (resources.length === 0) {
            return [];
        }

        return resources;
    };

    PathRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        this.gl.getExtension('OES_element_index_uint');
    };

    PathRenderer.prototype.onRemove = function onRemove() {
        this._removeEvents();
        delete this._fillSprites;
        delete this._sprites;
        _WebglRenderer.prototype.onRemove.apply(this, arguments);
    };

    PathRenderer.prototype.getDataSymbol = function getDataSymbol(props) {
        var count = -1;
        for (var i = 0, l = this.layer._cookedStyles.length; i < l; i++) {
            var style = this.layer._cookedStyles[i];
            var texture = this.getTexture(style.symbol);
            if (texture) {
                count++;
            }
            if (style.filter({ 'properties': props }) === true) {
                if (texture) {
                    return {
                        'symbol': style.symbol,
                        'texCoord': this._fillSprites.texCoords[count],
                        'index': i
                    };
                } else {
                    return {
                        'symbol': style.symbol,
                        'index': i
                    };
                }
            }
        }
        return null;
    };

    PathRenderer.prototype.getLineTexture = function getLineTexture(symbol) {
        return this._atlas.getAtlas(symbol);
    };

    PathRenderer.prototype.getFillTexture = function getFillTexture(symbol) {
        var fillPattern = symbol ? symbol['polygonPatternFile'] : null;
        if (fillPattern) {
            return this.resources.getImage(fillPattern);
        }
        return null;
    };

    PathRenderer.prototype._checkSprites = function _checkSprites() {
        var _this2 = this;

        if (!this._needCheckSprites) {
            return;
        }
        this._atlas = new LineAtlas(this.resources);
        var sprites = [];
        var fillSprites = [];
        if (this.layer._cookedStyles) {
            this.layer._cookedStyles.forEach(function (s) {
                var sprite = _this2.getLineTexture(s.symbol);
                if (sprite) {
                    sprites.push(sprite);
                }

                sprite = _this2.getFillTexture(s.symbol);
                if (sprite) {
                    fillSprites.push({
                        'canvas': sprite,
                        'offset': new maptalks.Point(0, 0)
                    });
                }
            });
        }

        this._sprites = this.mergeSprites(sprites);
        this._fillSprites = this.mergeSprites(fillSprites);

        if (this._sprites && typeof window != 'undefined' && window.MAPTALKS_WEBGL_DEBUG_CANVAS) {
            var debugCanvas = window.MAPTALKS_WEBGL_DEBUG_CANVAS;
            debugCanvas.getContext('2d').fillRect(0, 0, debugCanvas.width, debugCanvas.height);
            debugCanvas.getContext('2d').fillStyle = 'rgb(255, 255, 255)';
            debugCanvas.getContext('2d').fillRect(0, 0, this._sprites.canvas.width, this._sprites.canvas.height);
            debugCanvas.getContext('2d').drawImage(this._sprites.canvas, 0, 0);
        }

        this._needCheckSprites = false;

        if (this._sprites && !this._textureLoaded) {
            this.loadTexture(this._sprites.canvas);
            this.enableSampler('u_image');
            this._textureLoaded = true;
        }

        if (this._fillSprites && !this._fillTextureLoaded) {
            this.loadTexture(this._fillSprites.canvas);
            this.enableSampler('u_fill_image');
            this._fillTextureLoaded = true;
        }

        var counter = 0;
        var uStyle = this._uStyle = [];
        for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
            var style = this.layer._cookedStyles[i];
            var texture = this.getLineTexture(style.symbol);
            if (texture) {
                uStyle.push.apply(uStyle, this._sprites.texCoords[counter++]);
                uStyle.push(-1);
            } else {
                var color = style.symbol['lineColor'] || '#000000';
                color = index$2(color).rgbaArrayNormalized();
                uStyle.push.apply(uStyle, color);
            }
        }

        counter = 0;
        var uFillStyle = this._uFillStyle = [];
        for (var _i = 0, _len = this.layer._cookedStyles.length; _i < _len; _i++) {
            var _style = this.layer._cookedStyles[_i];
            var _texture = this.getFillTexture(_style.symbol);
            if (_texture) {
                uFillStyle.push.apply(uFillStyle, this._fillSprites.texCoords[counter++]);
                uFillStyle.push(-1);
            } else {
                var _color = _style.symbol['polygonFill'] || '#fff';
                _color = index$2(_color).rgbaArrayNormalized();
                uFillStyle.push.apply(uFillStyle, _color);
            }
        }
    };

    PathRenderer.prototype._registerEvents = function _registerEvents() {
        this.layer.on('setstyle', this._onStyleChanged, this);
    };

    PathRenderer.prototype._removeEvents = function _removeEvents() {
        this.layer.off('setstyle', this._onStyleChanged, this);
    };

    PathRenderer.prototype._onStyleChanged = function _onStyleChanged() {
        this._needCheckStyle = true;
    };

    return PathRenderer;
}(WebglRenderer);

var options$3 = {
    'blur': 2
};

var BigLineLayer = function (_BigDataLayer) {
    inherits(BigLineLayer, _BigDataLayer);

    function BigLineLayer() {
        classCallCheck(this, BigLineLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return BigLineLayer;
}(BigDataLayer);

BigLineLayer.mergeOptions(options$3);

BigLineLayer.registerJSONType('BigLineLayer');

var BigLineRenderer = function (_PathRenderer) {
    inherits(BigLineRenderer, _PathRenderer);

    function BigLineRenderer() {
        classCallCheck(this, BigLineRenderer);
        return possibleConstructorReturn(this, _PathRenderer.apply(this, arguments));
    }

    BigLineRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_scale', 'u_tex_size', 'u_styles[0]'];
        this._lineProgram = this.createProgram(shaders.line.vertexSource, shaders.line.fragmentSource, uniforms);
        _PathRenderer.prototype.onCanvasCreate.call(this);
    };

    BigLineRenderer.prototype.draw = function draw() {
        this.prepareCanvas();

        this._drawLines();
        this.completeRender();
    };

    BigLineRenderer.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawLines();
        this.completeRender();
    };

    BigLineRenderer.prototype.onRemove = function onRemove() {
        delete this._lineArrays;
        _PathRenderer.prototype.onRemove.apply(this, arguments);
    };

    BigLineRenderer.prototype.getTexture = function getTexture(symbol) {
        return this.getLineTexture(symbol);
    };

    BigLineRenderer.prototype._drawLines = function _drawLines() {
        var gl = this.gl,
            map = this.getMap(),
            program = this._lineProgram;
        this.useProgram(program);
        this._checkSprites();

        this._prepareLineData();
        this._bufferLineData(this._lineArrays);

        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program.u_matrix, false, m);
        gl.uniform1f(program.u_scale, map.getScale() / map.getScale(getTargetZoom(map)));
        gl.uniform1fv(program.u_styles, this._uStyle);

        var texSize = [0, 0];
        if (this._sprites) {
            texSize = [this._sprites.canvas.width, this._sprites.canvas.height];
        }
        gl.uniform2fv(program.u_tex_size, new Float32Array(texSize));
        gl.drawElements(gl.TRIANGLES, this._elementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    BigLineRenderer.prototype._prepareLineData = function _prepareLineData() {
        if (this._lineArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();
        var data = this.layer.data;
        var painter = new LinePainter(gl, map);
        var symbol = void 0;
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                symbol = this.getDataSymbol(data[i][1]);
                painter.addLine(data[i][0], symbol);
            } else if (data[i].type) {
                symbol = this.getDataSymbol(data[i].properties);
                painter.addLine(data[i], symbol);
            }
        }

        var lineArrays = this._lineArrays = painter.getArrays();

        this._elementCount = lineArrays.elementArray.length;
    };

    BigLineRenderer.prototype._bufferLineData = function _bufferLineData(lineArrays) {
        var gl = this.gl;

        if (!this._vertexBuffer) {
            var vertexBuffer = this._vertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 2, 'FLOAT']);

        if (!this._normalBuffer) {
            var normalBuffer = this._normalBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.normalArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);
        }
        this.enableVertexAttrib([['a_normal', 2, 'FLOAT'], ['a_linesofar', 1, 'FLOAT']]);

        if (!this._texBuffer) {
            var texBuffer = this._texBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._texBuffer);
        }
        this.enableVertexAttrib([['a_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._elementBuffer) {
            var elementBuffer = this._elementBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(lineArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._elementBuffer);
        }
    };

    return BigLineRenderer;
}(PathRenderer);

BigLineLayer.registerRenderer('webgl', BigLineRenderer);

var options$4 = {
    'blur': 2
};

var BigPolygonLayer = function (_BigDataLayer) {
    inherits(BigPolygonLayer, _BigDataLayer);

    function BigPolygonLayer() {
        classCallCheck(this, BigPolygonLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return BigPolygonLayer;
}(BigDataLayer);

BigPolygonLayer.mergeOptions(options$4);

BigPolygonLayer.registerJSONType('BigPolygonLayer');

BigPolygonLayer.registerRenderer('webgl', function (_BigLineRenderer) {
    inherits(_class, _BigLineRenderer);

    function _class() {
        classCallCheck(this, _class);
        return possibleConstructorReturn(this, _BigLineRenderer.apply(this, arguments));
    }

    _class.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_fill_styles[0]'];
        this._polygonProgram = this.createProgram(shaders.polygon.vertexSource, shaders.polygon.fragmentSource, uniforms);
        _BigLineRenderer.prototype.onCanvasCreate.call(this);
    };

    _class.prototype.draw = function draw() {
        this.prepareCanvas();
        this._drawPolygons();
        this.gl.disable(this.gl.BLEND);
        this._drawLines();
        this.gl.enable(this.gl.BLEND);
        this.completeRender();
    };

    _class.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawPolygons();
        this.gl.disable(this.gl.BLEND);
        this._drawLines();
        this.gl.enable(this.gl.BLEND);
        this.completeRender();
    };

    _class.prototype.getTexture = function getTexture(symbol) {
        return this.getFillTexture(symbol);
    };

    _class.prototype._drawPolygons = function _drawPolygons() {
        var gl = this.gl,
            program = this._polygonProgram;
        this.useProgram(program);
        this._checkSprites();

        this._preparePolygonData();

        this._bufferPolygonData(this._polygonArrays);

        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program['u_matrix'], false, m);
        gl.uniform1fv(program['u_fill_styles'], this._uFillStyle);
        gl.drawElements(gl.TRIANGLES, this._polygonElementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    _class.prototype._preparePolygonData = function _preparePolygonData() {
        if (this._polygonArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();

        var data = this.layer.data;
        var painter = new PolygonPainter(gl, map);
        var symbol = void 0;
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                symbol = this.getDataSymbol(data[i][1]);
                painter.addPolygon(data[i][0], symbol);
            } else if (data[i].type) {
                symbol = this.getDataSymbol(data[i].properties);
                painter.addPolygon(data[i], symbol);
            }
        }
        var polygonArrays = this._polygonArrays = painter.getArrays();
        this._polygonElementCount = polygonArrays.elementArray.length;
    };

    _class.prototype._bufferPolygonData = function _bufferPolygonData(polygonArrays) {
        var gl = this.gl;
        if (!this._polygonVertexBuffer) {
            var vertexBuffer = this._polygonVertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(polygonArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._polygonVertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 2, 'FLOAT']);

        if (!this._polygonTexBuffer) {
            var texBuffer = this._polygonTexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(polygonArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._polygonTexBuffer);
        }
        this.enableVertexAttrib([['a_fill_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._polygonElemBuffer) {
            var elementBuffer = this._polygonElemBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(polygonArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._polygonElemBuffer);
        }
    };

    _class.prototype.onRemove = function onRemove() {
        delete this._polygonArrays;
        _BigLineRenderer.prototype.onRemove.apply(this, arguments);
    };

    return _class;
}(BigLineRenderer));

var options$6 = {
    'project': true
};

var ExtrudePainter = function (_Painter) {
    inherits(ExtrudePainter, _Painter);

    function ExtrudePainter(gl, map, options) {
        classCallCheck(this, ExtrudePainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.normalArray = [];
        _this.elementArray = [];
        _this.styleArray = [];
        return _this;
    }

    ExtrudePainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'normalArray': this.normalArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    ExtrudePainter.prototype.addPolygon = function addPolygon(polygon, height, style) {
        if (!polygon) {
            return this;
        }
        if (style.symbol['polygonOpacity'] <= 0) {
            return this;
        }

        var vertice = this._getVertice(polygon);

        if (vertice[0] && Array.isArray(vertice[0][0]) && Array.isArray(vertice[0][0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addPolygon(vertice[i], height, style);
            }
            return this;
        }

        this._fillArrays(vertice, height, style);
        return this;
    };

    ExtrudePainter.prototype._fillArrays = function _fillArrays(vertice, height, style) {
        var dimension = 3;

        var targetZ = getTargetZoom(this.map);
        var data = earcut_1.flatten(vertice);

        var bottom = [];
        var top = [];
        var c = void 0;

        for (var i = 0, l = data.vertices.length; i < l; i += 2) {
            if (i === l - 1) {
                if (this._equalCoord(data.vertices[i], data.vertices[0])) {
                    continue;
                }
            }
            if (this.options['project']) {
                c = this.map.coordinateToPoint(new maptalks.Coordinate(data.vertices[i], data.vertices[i + 1]), targetZ);
                bottom.push(c.x, c.y, 0);
                top.push(c.x, c.y, height);
            } else {
                bottom.push(data.vertices[i], data.vertices[i + 1], 0);
                top.push(data.vertices[i], data.vertices[i + 1], height);
            }
        }
        data.vertices = bottom;
        var triangles = earcut_1(data.vertices, data.holes, dimension);
        if (triangles.length <= 2) {
            return;
        }
        var deviation = earcut_1.deviation(data.vertices, data.holes, dimension, triangles);
        if (Math.round(deviation * 1E3) / 1E3 !== 0) {
            if (console) {
                console.warn('Failed triangluation.');
            }
            return;
        }

        var count = bottom.length / dimension;

        var preCount = this.vertexArray.length / dimension;
        if (preCount > 0) {
            triangles = triangles.map(function (e) {
                return e + preCount;
            });
        }

        maptalks.Util.pushIn(this.vertexArray, bottom);

        maptalks.Util.pushIn(this.elementArray, triangles);

        for (var _i = 0; _i < count; _i++) {
            this.normalArray.push(0, 0, -1);
        }

        if (count > 0) {
            triangles = triangles.map(function (e) {
                return e + count;
            });
        }

        maptalks.Util.pushIn(this.vertexArray, top);

        maptalks.Util.pushIn(this.elementArray, triangles);

        for (var _i2 = 0; _i2 < count; _i2++) {
            this.normalArray.push(0, 0, 1);
        }

        var vertexCount = this.vertexArray.length / dimension;
        for (var _i3 = 0, _l = count; _i3 < _l - 1; _i3++) {
            var ii = _i3 * dimension;
            var normal = new index$1(bottom[ii + 3], bottom[ii + 4]).sub(new index$1(bottom[ii], bottom[ii + 1]))._unit()._perp();
            this.vertexArray.push(bottom[ii], bottom[ii + 1], bottom[ii + 2]);
            this.vertexArray.push(bottom[ii + 3], bottom[ii + 4], bottom[ii + 5]);
            this.vertexArray.push(top[ii + 3], top[ii + 4], top[ii + 5]);
            this.vertexArray.push(top[ii], top[ii + 1], top[ii + 2]);
            for (var n = 0; n < 4; n++) {
                this.normalArray.push(normal.x, normal.y, 0);
            }
            var ei = _i3 * 4;
            this.elementArray.push(vertexCount + ei, vertexCount + ei + 1, vertexCount + ei + 2);
            this.elementArray.push(vertexCount + ei, vertexCount + ei + 2, vertexCount + ei + 3);
        }

        this._addTexCoords(this.vertexArray.length / dimension - preCount, style);
    };

    ExtrudePainter.prototype._getVertice = function _getVertice(geo) {
        if (geo.geometry) {
            geo = geo.geometry.coordinates;
        } else if (geo.coordinates) {
            geo = geo.coordinates;
        }
        return geo;
    };

    ExtrudePainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = style.index * 100 + (style.symbol['polygonOpacity'] || 1) * 10;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    ExtrudePainter.prototype._equalCoord = function _equalCoord(c1, c2) {
        return c1[0] === c2[0] && c1[1] === c2[1];
    };

    return ExtrudePainter;
}(Painter);

ExtrudePainter.mergeOptions(options$6);

var options$5 = {
    'lightPos': [10, 0, 35],
    'lightColor': [1, 1, 1],
    'lightIntensity': 0.5,
    'ambientLight': [0.02, 0.02, 0.02]
};

var ExtrudePolygonLayer = function (_BigDataLayer) {
    inherits(ExtrudePolygonLayer, _BigDataLayer);

    function ExtrudePolygonLayer() {
        classCallCheck(this, ExtrudePolygonLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return ExtrudePolygonLayer;
}(BigDataLayer);

ExtrudePolygonLayer.mergeOptions(options$5);

ExtrudePolygonLayer.registerJSONType('ExtrudePolygonLayer');

var ExtrudeRenderer = function (_PathRenderer) {
    inherits(ExtrudeRenderer, _PathRenderer);

    function ExtrudeRenderer() {
        classCallCheck(this, ExtrudeRenderer);
        return possibleConstructorReturn(this, _PathRenderer.apply(this, arguments));
    }

    ExtrudeRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_fill_styles[0]', 'u_lightcolor', 'u_lightpos', 'u_ambientlight', 'u_lightintensity'];
        this.program = this.createProgram(shaders.extrude.vertexSource, shaders.extrude.fragmentSource, uniforms);
        _PathRenderer.prototype.onCanvasCreate.call(this);
        var gl = this.gl;
        gl.enable(gl.DEPTH_TEST);

        gl.disable(gl.BLEND);
        gl.disable(gl.STENCIL_TEST);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    };

    ExtrudeRenderer.prototype.draw = function draw() {
        this.prepareCanvas();
        this._drawExtrudes();
        this.completeRender();
    };

    ExtrudeRenderer.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawExtrudes();
        this.completeRender();
    };

    ExtrudeRenderer.prototype.onRemove = function onRemove() {
        delete this._extrudeArrays;
        _PathRenderer.prototype.onRemove.apply(this, arguments);
    };

    ExtrudeRenderer.prototype.getTexture = function getTexture(symbol) {
        return this.getFillTexture(symbol);
    };

    ExtrudeRenderer.prototype._drawExtrudes = function _drawExtrudes() {
        var gl = this.gl,
            program = this.program;
        this.useProgram(program);
        this._checkSprites();

        this._prepareData();
        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program['u_matrix'], false, m);
        gl.uniform1fv(program['u_fill_styles'], this._uFillStyle);

        var lightpos = this.layer.options['lightPos'] || [0, 0, 35];
        gl.uniform3fv(gl.program['u_lightpos'], normalize$1([], lightpos));

        var lightColor = this.layer.options['lightColor'] || [1, 1, 1];
        gl.uniform3f(gl.program['u_lightcolor'], lightColor[0], lightColor[1], lightColor[2]);

        var ambient = this.layer.options['ambientLight'] || [0.02, 0.02, 0.02];
        gl.uniform3f(gl.program['u_ambientlight'], ambient[0], ambient[1], ambient[2]);

        var lightIntensity = this.layer.options['lightIntensity'] || 0.5;
        gl.uniform1f(gl.program['u_lightintensity'], lightIntensity);
        this._bufferExtrudeData(this._extrudeArrays);
        gl.drawElements(gl.TRIANGLES, this._elementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    ExtrudeRenderer.prototype._prepareData = function _prepareData() {
        if (this._extrudeArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();
        var targetZ = getTargetZoom(map);
        var data = this.layer.data;
        var painter = new ExtrudePainter(gl, map);
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                var symbol = this.getDataSymbol(data[i][1]);
                var height = data[i][1]['height'];
                var pHeight = map.distanceToPixel(height, 0, targetZ).width;
                painter.addPolygon(data[i][0], pHeight, symbol);
            } else if (data[i].type) {
                var _symbol = this.getDataSymbol(data[i].properties);
                var _height = data[i].properties['height'];
                var _pHeight = map.distanceToPixel(_height, 0, targetZ).width;
                painter.addPolygon(data[i], _pHeight, _symbol);
            }
        }
        var extrudeArrays = this._extrudeArrays = painter.getArrays();
        this._elementCount = extrudeArrays.elementArray.length;
    };

    ExtrudeRenderer.prototype._bufferExtrudeData = function _bufferExtrudeData(extrudeArrays) {
        var gl = this.gl;

        if (!this._vertexBuffer) {
            var vertexBuffer = this._vertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 3, 'FLOAT']);

        if (!this._normalBuffer) {
            var normalBuffer = this._normalBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.normalArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);
        }
        this.enableVertexAttrib(['a_normal', 3, 'FLOAT']);

        if (!this._texBuffer) {
            var texBuffer = this._texBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._texBuffer);
        }
        this.enableVertexAttrib([['a_fill_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._elementBuffer) {
            var elementBuffer = this._elementBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(extrudeArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._elementBuffer);
        }
    };

    return ExtrudeRenderer;
}(PathRenderer);

ExtrudePolygonLayer.registerRenderer('webgl', ExtrudeRenderer);

exports.webgl = index;
exports.BigDataLayer = BigDataLayer;
exports.BigPointLayer = BigPointLayer;
exports.BigLineLayer = BigLineLayer;
exports.BigPolygonLayer = BigPolygonLayer;
exports.ExtrudePolygonLayer = ExtrudePolygonLayer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwdGFsa3MuYmlnbGF5ZXIuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvbWF0My5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvbWF0NC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvcXVhdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjMi5qcyIsIi4uL3NyYy9wYWludGVyL1BhaW50ZXIuanMiLCIuLi9zcmMvUmVuZGVyZXIuanMiLCIuLi9zcmMvcGFpbnRlci9MaW5lQXRsYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCIuLi9zcmMvcGFpbnRlci9MaW5lUGFpbnRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lYXJjdXQvc3JjL2VhcmN1dC5qcyIsIi4uL3NyYy9wYWludGVyL1BvbHlnb25QYWludGVyLmpzIiwiLi4vc3JjL3NoYWRlci9saW5lLmZyYWdtZW50LmpzIiwiLi4vc3JjL3NoYWRlci9jb21tb24uanMiLCIuLi9zcmMvc2hhZGVyL2xpbmUudmVydGV4LmpzIiwiLi4vc3JjL3NoYWRlci9wb2ludC5mcmFnbWVudC5qcyIsIi4uL3NyYy9zaGFkZXIvcG9pbnQudmVydGV4LmpzIiwiLi4vc3JjL3NoYWRlci9wb2x5Z29uLmZyYWdtZW50LmpzIiwiLi4vc3JjL3NoYWRlci9wb2x5Z29uLnZlcnRleC5qcyIsIi4uL3NyYy9zaGFkZXIvZXh0cnVkZS5mcmFnbWVudC5qcyIsIi4uL3NyYy9zaGFkZXIvZXh0cnVkZS52ZXJ0ZXguanMiLCIuLi9zcmMvc2hhZGVyL1NoYWRlci5qcyIsIi4uL3NyYy9sYXllci9CaWdEYXRhTGF5ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvcmFuZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy93aXRoaW4uanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9rZGJ1c2guanMiLCIuLi9zcmMvbGF5ZXIvQmlnUG9pbnRMYXllci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMiLCIuLi9zcmMvbGF5ZXIvcmVuZGVyZXIvUGF0aFJlbmRlcmVyLmpzIiwiLi4vc3JjL2xheWVyL0JpZ0xpbmVMYXllci5qcyIsIi4uL3NyYy9sYXllci9CaWdQb2x5Z29uTGF5ZXIuanMiLCIuLi9zcmMvcGFpbnRlci9FeHRydWRlUGFpbnRlci5qcyIsIi4uL3NyYy9sYXllci9FeHRydWRlUG9seWdvbkxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG5hbWUgbWF0M1xuICogQGNsYXNzIDN4MyBNYXRyaXhcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xuICpcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSk7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAxO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzRdO1xuICAgIG91dFs0XSA9IGFbNV07XG4gICAgb3V0WzVdID0gYVs2XTtcbiAgICBvdXRbNl0gPSBhWzhdO1xuICAgIG91dFs3XSA9IGFbOV07XG4gICAgb3V0WzhdID0gYVsxMF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDkpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gQSBuZXcgbWF0M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSk7XG4gICAgb3V0WzBdID0gbTAwO1xuICAgIG91dFsxXSA9IG0wMTtcbiAgICBvdXRbMl0gPSBtMDI7XG4gICAgb3V0WzNdID0gbTEwO1xuICAgIG91dFs0XSA9IG0xMTtcbiAgICBvdXRbNV0gPSBtMTI7XG4gICAgb3V0WzZdID0gbTIwO1xuICAgIG91dFs3XSA9IG0yMTtcbiAgICBvdXRbOF0gPSBtMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0xMDtcbiAgICBvdXRbNF0gPSBtMTE7XG4gICAgb3V0WzVdID0gbTEyO1xuICAgIG91dFs2XSA9IG0yMDtcbiAgICBvdXRbN10gPSBtMjE7XG4gICAgb3V0WzhdID0gbTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMTtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMTIgPSBhWzVdO1xuICAgICAgICBvdXRbMV0gPSBhWzNdO1xuICAgICAgICBvdXRbMl0gPSBhWzZdO1xuICAgICAgICBvdXRbM10gPSBhMDE7XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGEwMjtcbiAgICAgICAgb3V0WzddID0gYTEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGFbMV07XG4gICAgICAgIG91dFs0XSA9IGFbNF07XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGFbMl07XG4gICAgICAgIG91dFs3XSA9IGFbNV07XG4gICAgICAgIG91dFs4XSA9IGFbOF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcblxuICAgICAgICBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjEsXG4gICAgICAgIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjAsXG4gICAgICAgIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMCxcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gICAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICAgIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICAgIG91dFszXSA9IGIxMSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gICAgb3V0WzZdID0gYjIxICogZGV0O1xuICAgIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgICBvdXRbMF0gPSAoYTExICogYTIyIC0gYTEyICogYTIxKTtcbiAgICBvdXRbMV0gPSAoYTAyICogYTIxIC0gYTAxICogYTIyKTtcbiAgICBvdXRbMl0gPSAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgICBvdXRbM10gPSAoYTEyICogYTIwIC0gYTEwICogYTIyKTtcbiAgICBvdXRbNF0gPSAoYTAwICogYTIyIC0gYTAyICogYTIwKTtcbiAgICBvdXRbNV0gPSAoYTAyICogYTEwIC0gYTAwICogYTEyKTtcbiAgICBvdXRbNl0gPSAoYTEwICogYTIxIC0gYTExICogYTIwKTtcbiAgICBvdXRbN10gPSAoYTAxICogYTIwIC0gYTAwICogYTIxKTtcbiAgICBvdXRbOF0gPSAoYTAwICogYTExIC0gYTAxICogYTEwKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gICAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF0sXG5cbiAgICAgICAgYjAwID0gYlswXSwgYjAxID0gYlsxXSwgYjAyID0gYlsyXSxcbiAgICAgICAgYjEwID0gYlszXSwgYjExID0gYls0XSwgYjEyID0gYls1XSxcbiAgICAgICAgYjIwID0gYls2XSwgYjIxID0gYls3XSwgYjIyID0gYls4XTtcblxuICAgIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gICAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuXG4gICAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICAgIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG5cbiAgICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gICAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICAgIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0MyBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcbiAgICAgICAgeCA9IHZbMF0sIHkgPSB2WzFdO1xuXG4gICAgb3V0WzBdID0gYTAwO1xuICAgIG91dFsxXSA9IGEwMTtcbiAgICBvdXRbMl0gPSBhMDI7XG5cbiAgICBvdXRbM10gPSBhMTA7XG4gICAgb3V0WzRdID0gYTExO1xuICAgIG91dFs1XSA9IGExMjtcblxuICAgIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICAgIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICAgIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdLFxuXG4gICAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICAgIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICAgIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gICAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gICAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gICAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgICBvdXRbNl0gPSBhMjA7XG4gICAgb3V0WzddID0gYTIxO1xuICAgIG91dFs4XSA9IGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IHggKiBhWzBdO1xuICAgIG91dFsxXSA9IHggKiBhWzFdO1xuICAgIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gICAgb3V0WzNdID0geSAqIGFbM107XG4gICAgb3V0WzRdID0geSAqIGFbNF07XG4gICAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAxO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gdlswXTtcbiAgICBvdXRbN10gPSB2WzFdO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLCBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGM7XG4gICAgb3V0WzFdID0gcztcbiAgICBvdXRbMl0gPSAwO1xuXG4gICAgb3V0WzNdID0gLXM7XG4gICAgb3V0WzRdID0gYztcbiAgICBvdXRbNV0gPSAwO1xuXG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gdlswXTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG5cbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHZbMV07XG4gICAgb3V0WzVdID0gMDtcblxuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDJkKG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSAwO1xuXG4gICAgb3V0WzNdID0gYVsyXTtcbiAgICBvdXRbNF0gPSBhWzNdO1xuICAgIG91dFs1XSA9IDA7XG5cbiAgICBvdXRbNl0gPSBhWzRdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuKlxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeXggPSB5ICogeDIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB6eCA9IHogKiB4MixcbiAgICAgICAgenkgPSB6ICogeTIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzNdID0geXggLSB3ejtcbiAgICBvdXRbNl0gPSB6eCArIHd5O1xuXG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbNF0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbN10gPSB6eSAtIHd4O1xuXG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbNV0gPSB6eSArIHd4O1xuICAgIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbipcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzIsXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG5cbiAgICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcblxuICAgIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgKyBhWzhdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gICAgcmV0dXJuIChNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpKSk7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3N1YnRyYWN0IGFzIHN1Yn07XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYjtcbiAgICBvdXRbMV0gPSBhWzFdICogYjtcbiAgICBvdXRbMl0gPSBhWzJdICogYjtcbiAgICBvdXRbM10gPSBhWzNdICogYjtcbiAgICBvdXRbNF0gPSBhWzRdICogYjtcbiAgICBvdXRbNV0gPSBhWzVdICogYjtcbiAgICBvdXRbNl0gPSBhWzZdICogYjtcbiAgICBvdXRbN10gPSBhWzddICogYjtcbiAgICBvdXRbOF0gPSBhWzhdICogYjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSk7XG4gICAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICAgIG91dFs0XSA9IGFbNF0gKyAoYls0XSAqIHNjYWxlKTtcbiAgICBvdXRbNV0gPSBhWzVdICsgKGJbNV0gKiBzY2FsZSk7XG4gICAgb3V0WzZdID0gYVs2XSArIChiWzZdICogc2NhbGUpO1xuICAgIG91dFs3XSA9IGFbN10gKyAoYls3XSAqIHNjYWxlKTtcbiAgICBvdXRbOF0gPSBhWzhdICsgKGJbOF0gKiBzY2FsZSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJlxuICAgICAgICAgICBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJlxuICAgICAgICAgICBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cbiIsIi8qKlxuICogQG5hbWUgbWF0NFxuICogQGNsYXNzIDR4NCBNYXRyaXhcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQ0IHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDMgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggOSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXG4gKiBAcGFyYW0ge051bWJlcn0gbTIzIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDMgcG9zaXRpb24gKGluZGV4IDExKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMCBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAxMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMyIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDIgcG9zaXRpb24gKGluZGV4IDE0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMyBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxNSlcbiAqIEByZXR1cm5zIHttYXQ0fSBBIG5ldyBtYXQ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBtMDA7XG4gICAgb3V0WzFdID0gbTAxO1xuICAgIG91dFsyXSA9IG0wMjtcbiAgICBvdXRbM10gPSBtMDM7XG4gICAgb3V0WzRdID0gbTEwO1xuICAgIG91dFs1XSA9IG0xMTtcbiAgICBvdXRbNl0gPSBtMTI7XG4gICAgb3V0WzddID0gbTEzO1xuICAgIG91dFs4XSA9IG0yMDtcbiAgICBvdXRbOV0gPSBtMjE7XG4gICAgb3V0WzEwXSA9IG0yMjtcbiAgICBvdXRbMTFdID0gbTIzO1xuICAgIG91dFsxMl0gPSBtMzA7XG4gICAgb3V0WzEzXSA9IG0zMTtcbiAgICBvdXRbMTRdID0gbTMyO1xuICAgIG91dFsxNV0gPSBtMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gICAgb3V0WzBdID0gbTAwO1xuICAgIG91dFsxXSA9IG0wMTtcbiAgICBvdXRbMl0gPSBtMDI7XG4gICAgb3V0WzNdID0gbTAzO1xuICAgIG91dFs0XSA9IG0xMDtcbiAgICBvdXRbNV0gPSBtMTE7XG4gICAgb3V0WzZdID0gbTEyO1xuICAgIG91dFs3XSA9IG0xMztcbiAgICBvdXRbOF0gPSBtMjA7XG4gICAgb3V0WzldID0gbTIxO1xuICAgIG91dFsxMF0gPSBtMjI7XG4gICAgb3V0WzExXSA9IG0yMztcbiAgICBvdXRbMTJdID0gbTMwO1xuICAgIG91dFsxM10gPSBtMzE7XG4gICAgb3V0WzE0XSA9IG0zMjtcbiAgICBvdXRbMTVdID0gbTMzO1xuICAgIHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICB2YXIgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgICAgIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICAgIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzIGV4cGxpY2l0bHlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdO1xuICAgIG91dFswXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFsxXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFszXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFs1XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFs3XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzldID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFsxMV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFsxM10gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzE1XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7bXVsdGlwbHkgYXMgbXVsfTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdLFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDsgb3V0WzldID0gYTIxOyBvdXRbMTBdID0gYTIyOyBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAobGVuID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzOyBiMTEgPSB5ICogeSAqIHQgKyBjOyBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzhdICA9IGFbOF07XG4gICAgICAgIG91dFs5XSAgPSBhWzldO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMzfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgICBvdXRbMF0gPSB2WzBdO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gdlsxXTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSB2WzJdO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGUgYXJvdW5kIGEgZ2l2ZW4gYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdDtcblxuICAgIGlmIChsZW4gPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0geCAqIHggKiB0ICsgYztcbiAgICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgICBvdXRbMl0gPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICAgIG91dFs1XSA9IHkgKiB5ICogdCArIGM7XG4gICAgb3V0WzZdID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4ICogeiAqIHQgKyB5ICogcztcbiAgICBvdXRbOV0gPSB5ICogeiAqIHQgLSB4ICogcztcbiAgICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gID0gMTtcbiAgICBvdXRbMV0gID0gMDtcbiAgICBvdXRbMl0gID0gMDtcbiAgICBvdXRbM10gID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGM7XG4gICAgb3V0WzZdID0gcztcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gLXM7XG4gICAgb3V0WzEwXSA9IGM7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlSb3RhdGlvbihvdXQsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdICA9IGM7XG4gICAgb3V0WzFdICA9IDA7XG4gICAgb3V0WzJdICA9IC1zO1xuICAgIG91dFszXSAgPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gcztcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSBjO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVaKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSAgPSBjO1xuICAgIG91dFsxXSAgPSBzO1xuICAgIG91dFsyXSAgPSAwO1xuICAgIG91dFszXSAgPSAwO1xuICAgIG91dFs0XSA9IC1zO1xuICAgIG91dFs1XSA9IGM7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbixcbiAqICB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgdHJhbnNsYXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICAgIG91dFswXSA9IG1hdFsxMl07XG4gICAgb3V0WzFdID0gbWF0WzEzXTtcbiAgICBvdXRbMl0gPSBtYXRbMTRdO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXG4gKiAgdGhlIHNhbWUgYXMgdGhlIHNjYWxpbmcgdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcbiAqIEBwYXJhbSAge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxpbmcob3V0LCBtYXQpIHtcbiAgICB2YXIgbTExID0gbWF0WzBdLFxuICAgICAgICBtMTIgPSBtYXRbMV0sXG4gICAgICAgIG0xMyA9IG1hdFsyXSxcbiAgICAgICAgbTIxID0gbWF0WzRdLFxuICAgICAgICBtMjIgPSBtYXRbNV0sXG4gICAgICAgIG0yMyA9IG1hdFs2XSxcbiAgICAgICAgbTMxID0gbWF0WzhdLFxuICAgICAgICBtMzIgPSBtYXRbOV0sXG4gICAgICAgIG0zMyA9IG1hdFsxMF07XG5cbiAgICBvdXRbMF0gPSBNYXRoLnNxcnQobTExICogbTExICsgbTEyICogbTEyICsgbTEzICogbTEzKTtcbiAgICBvdXRbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgICBvdXRbMl0gPSBNYXRoLnNxcnQobTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzKTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRpb24ob3V0LCBtYXQpIHtcbiAgLy8gQWxnb3JpdGhtIHRha2VuIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cbiAgICB2YXIgdHJhY2UgPSBtYXRbMF0gKyBtYXRbNV0gKyBtYXRbMTBdO1xuICAgIHZhciBTID0gMDtcblxuICAgIGlmICh0cmFjZSA+IDApIHtcbiAgICAgICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgICAgICBvdXRbM10gPSAwLjI1ICogUztcbiAgICAgICAgb3V0WzBdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgICAgICBvdXRbMV0gPSAobWF0WzhdIC0gbWF0WzJdKSAvIFM7XG4gICAgICAgIG91dFsyXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgICB9IGVsc2UgaWYgKChtYXRbMF0gPiBtYXRbNV0pICYgKG1hdFswXSA+IG1hdFsxMF0pKSB7XG4gICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzBdIC0gbWF0WzVdIC0gbWF0WzEwXSkgKiAyO1xuICAgICAgICBvdXRbM10gPSAobWF0WzZdIC0gbWF0WzldKSAvIFM7XG4gICAgICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgICAgICBvdXRbMV0gPSAobWF0WzFdICsgbWF0WzRdKSAvIFM7XG4gICAgICAgIG91dFsyXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgICB9IGVsc2UgaWYgKG1hdFs1XSA+IG1hdFsxMF0pIHtcbiAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbNV0gLSBtYXRbMF0gLSBtYXRbMTBdKSAqIDI7XG4gICAgICAgIG91dFszXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICAgICAgb3V0WzBdID0gKG1hdFsxXSArIG1hdFs0XSkgLyBTO1xuICAgICAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICAgICAgb3V0WzJdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzEwXSAtIG1hdFswXSAtIG1hdFs1XSkgKiAyO1xuICAgICAgICBvdXRbM10gPSAobWF0WzFdIC0gbWF0WzRdKSAvIFM7XG4gICAgICAgIG91dFswXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgICAgICAgb3V0WzFdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgICAgICBvdXRbMl0gPSAwLjI1ICogUztcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIHZhciBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyLFxuICAgICAgICBzeCA9IHNbMF0sXG4gICAgICAgIHN5ID0gc1sxXSxcbiAgICAgICAgc3ogPSBzWzJdO1xuXG4gICAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gICAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gICAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICAgIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICAgIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiwgdmVjdG9yIHRyYW5zbGF0aW9uIGFuZCB2ZWN0b3Igc2NhbGUsIHJvdGF0aW5nIGFuZCBzY2FsaW5nIGFyb3VuZCB0aGUgZ2l2ZW4gb3JpZ2luXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG9yaWdpbik7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgbmVnYXRpdmVPcmlnaW4pO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IG8gVGhlIG9yaWdpbiB2ZWN0b3IgYXJvdW5kIHdoaWNoIHRvIHNjYWxlIGFuZCByb3RhdGVcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVPcmlnaW4ob3V0LCBxLCB2LCBzLCBvKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyLFxuXG4gICAgICAgIHN4ID0gc1swXSxcbiAgICAgICAgc3kgPSBzWzFdLFxuICAgICAgICBzeiA9IHNbMl0sXG5cbiAgICAgICAgb3ggPSBvWzBdLFxuICAgICAgICBveSA9IG9bMV0sXG4gICAgICAgIG96ID0gb1syXTtcblxuICAgIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXRbMF0gKiBveCArIG91dFs0XSAqIG95ICsgb3V0WzhdICogb3opO1xuICAgIG91dFsxM10gPSB2WzFdICsgb3kgLSAob3V0WzFdICogb3ggKyBvdXRbNV0gKiBveSArIG91dFs5XSAqIG96KTtcbiAgICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dFsyXSAqIG94ICsgb3V0WzZdICogb3kgKyBvdXRbMTBdICogb3opO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgNHg0IG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtPYmplY3R9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApLFxuICAgICAgICByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCksXG4gICAgICAgIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gLTIgKiBscjtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IC0yICogYnQ7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMiAqIG5mO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICAgIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICAgIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpID09PSAwICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA9PT0gMCAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdtYXQ0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gICAgcmV0dXJuIChNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpICsgTWF0aC5wb3coYVs5XSwgMikgKyBNYXRoLnBvdyhhWzEwXSwgMikgKyBNYXRoLnBvdyhhWzExXSwgMikgKyBNYXRoLnBvdyhhWzEyXSwgMikgKyBNYXRoLnBvdyhhWzEzXSwgMikgKyBNYXRoLnBvdyhhWzE0XSwgMikgKyBNYXRoLnBvdyhhWzE1XSwgMikpKTtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSArIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSArIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gICAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdICsgYlsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdICsgYlsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICAgIG91dFs5XSA9IGFbOV0gLSBiWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXSAtIGJbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XSAtIGJbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0LnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIG91dFs0XSA9IGFbNF0gKiBiO1xuICAgIG91dFs1XSA9IGFbNV0gKiBiO1xuICAgIG91dFs2XSA9IGFbNl0gKiBiO1xuICAgIG91dFs3XSA9IGFbN10gKiBiO1xuICAgIG91dFs4XSA9IGFbOF0gKiBiO1xuICAgIG91dFs5XSA9IGFbOV0gKiBiO1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gICAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICAgIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gICAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gICAgb3V0WzRdID0gYVs0XSArIChiWzRdICogc2NhbGUpO1xuICAgIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgICBvdXRbNl0gPSBhWzZdICsgKGJbNl0gKiBzY2FsZSk7XG4gICAgb3V0WzddID0gYVs3XSArIChiWzddICogc2NhbGUpO1xuICAgIG91dFs4XSA9IGFbOF0gKyAoYls4XSAqIHNjYWxlKTtcbiAgICBvdXRbOV0gPSBhWzldICsgKGJbOV0gKiBzY2FsZSk7XG4gICAgb3V0WzEwXSA9IGFbMTBdICsgKGJbMTBdICogc2NhbGUpO1xuICAgIG91dFsxMV0gPSBhWzExXSArIChiWzExXSAqIHNjYWxlKTtcbiAgICBvdXRbMTJdID0gYVsxMl0gKyAoYlsxMl0gKiBzY2FsZSk7XG4gICAgb3V0WzEzXSA9IGFbMTNdICsgKGJbMTNdICogc2NhbGUpO1xuICAgIG91dFsxNF0gPSBhWzE0XSArIChiWzE0XSAqIHNjYWxlKTtcbiAgICBvdXRbMTVdID0gYVsxNV0gKyAoYlsxNV0gKiBzY2FsZSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmXG4gICAgICAgICAgIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiZcbiAgICAgICAgICAgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiZcbiAgICAgICAgICAgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuIiwiLyoqXG4gKiBAbmFtZSB2ZWMzXG4gKiBAY2xhc3MgMyBEaW1lbnNpb25hbCBWZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2RpdmlkZSBhcyBkaXZ9O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICAgIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtkaXN0YW5jZSBhcyBkaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWREaXN0YW5jZSBhcyBzcXJEaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2xlbmd0aCBhcyBsZW59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3F1YXJlZExlbmd0aCBhcyBzcXJMZW59O1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICAgIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gICAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgICAgICAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdO1xuXG4gICAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl07XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQsXG4gICAgICAgIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDEsXG4gICAgICAgIGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdCxcbiAgICAgICAgZmFjdG9yMyA9IGZhY3RvclRpbWVzMiAqICh0IC0gMSksXG4gICAgICAgIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcblxuICAgIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICAgIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICAgIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXppZXIob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdCxcbiAgICAgICAgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3IsXG4gICAgICAgIGZhY3RvclRpbWVzMiA9IHQgKiB0LFxuICAgICAgICBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcixcbiAgICAgICAgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvLFxuICAgICAgICBmYWN0b3IzID0gMyAqIGZhY3RvclRpbWVzMiAqIGludmVyc2VGYWN0b3IsXG4gICAgICAgIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuXG4gICAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gICAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gICAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuXG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMi4wICogTWF0aC5QSTtcbiAgICB2YXIgeiA9IChNYXRoLnJhbmRvbSgpICogMi4wKSAtIDEuMDtcbiAgICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMCAtIHogKiB6KSAqIHNjYWxlO1xuXG4gICAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGU7XG4gICAgb3V0WzJdID0geiAqIHNjYWxlO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICAgICAgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgICB3ID0gdyB8fCAxLjA7XG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gICAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gICAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gICAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XTtcbiAgICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYykge1xuICAgIHZhciBwID0gW10sIHIgPSBbXTtcbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXTtcbiAgICByWzFdID0gcFsxXSAqIE1hdGguY29zKGMpIC0gcFsyXSAqIE1hdGguc2luKGMpO1xuICAgIHJbMl0gPSBwWzFdICogTWF0aC5zaW4oYykgKyBwWzJdICogTWF0aC5jb3MoYyk7XG5cbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF07XG4gICAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gclsyXSArIGJbMl07XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpIHtcbiAgICB2YXIgcCA9IFtdLCByID0gW107XG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBwWzFdID0gYVsxXSAtIGJbMV07XG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMl0gKiBNYXRoLnNpbihjKSArIHBbMF0gKiBNYXRoLmNvcyhjKTtcbiAgICByWzFdID0gcFsxXTtcbiAgICByWzJdID0gcFsyXSAqIE1hdGguY29zKGMpIC0gcFswXSAqIE1hdGguc2luKGMpO1xuXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCBjKSB7XG4gICAgdmFyIHAgPSBbXSwgciA9IFtdO1xuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF07XG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIHBbMl0gPSBhWzJdIC0gYlsyXTtcblxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdICogTWF0aC5jb3MoYykgLSBwWzFdICogTWF0aC5zaW4oYyk7XG4gICAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihjKSArIHBbMV0gKiBNYXRoLmNvcyhjKTtcbiAgICByWzJdID0gcFsyXTtcblxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbnZhciB2ZWMgPSBjcmVhdGUoKTtcbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgICAgc3RyaWRlID0gMztcbiAgICB9XG5cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgICB2ZWNbMF0gPSBhW2ldOyB2ZWNbMV0gPSBhW2kgKyAxXTsgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgICBhW2ldID0gdmVjWzBdOyBhW2kgKyAxXSA9IHZlY1sxXTsgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG5cbiAgICB2YXIgdGVtcEEgPSBmcm9tVmFsdWVzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSk7XG5cbiAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKTtcbiAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKTtcblxuICAgIHZhciBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKTtcblxuICAgIGlmIChjb3NpbmUgPiAxLjApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSAgICBlbHNlIGlmIChjb3NpbmUgPCAtMS4wKSB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ3ZlYzMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbiIsIi8qKlxuICogQG5hbWUgdmVjNFxuICogQGNsYXNzIDQgRGltZW5zaW9uYWwgVmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6LCB3KSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgb3V0WzNdID0gdztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHosIHcpIHtcbiAgICBvdXRbMF0gPSB4O1xuICAgIG91dFsxXSA9IHk7XG4gICAgb3V0WzJdID0gejtcbiAgICBvdXRbM10gPSB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3N1YnRyYWN0IGFzIHN1Yn07XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSAqIGJbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHttdWx0aXBseSBhcyBtdWx9O1xuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC8gYlszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtkaXZpZGUgYXMgZGl2fTtcblxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgICBvdXRbM10gPSBNYXRoLmNlaWwoYVszXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICAgIG91dFszXSA9IE1hdGgubWluKGFbM10sIGJbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICAgIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gICAgb3V0WzNdID0gTWF0aC5yb3VuZChhWzNdKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gayB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBrKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogayk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogayk7XG4gICAgb3V0WzJdID0gYVsyXSArIChiWzJdICogayk7XG4gICAgb3V0WzNdID0gYVszXSArIChiWzNdICogayk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICAgICAgdyA9IGJbM10gLSBhWzNdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2Rpc3RhbmNlIGFzIGRpc3R9O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl0sXG4gICAgICAgIHcgPSBiWzNdIC0gYVszXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWREaXN0YW5jZSBhcyBzcXJEaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXSxcbiAgICAgICAgdyA9IGFbM107XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2xlbmd0aCBhcyBsZW59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXSxcbiAgICAgICAgdyA9IGFbM107XG4gICAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3F1YXJlZExlbmd0aCBhcyBzcXJMZW59O1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgb3V0WzNdID0gLWFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICAgIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gICAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdLFxuICAgICAgICB3ID0gYVszXTtcbiAgICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICBvdXRbMF0gPSB4ICogbGVuO1xuICAgICAgICBvdXRbMV0gPSB5ICogbGVuO1xuICAgICAgICBvdXRbMl0gPSB6ICogbGVuO1xuICAgICAgICBvdXRbM10gPSB3ICogbGVuO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICAgIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW2tdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgaykge1xuICAgIGsgPSBrIHx8IDEuMDtcblxuICAgIC8vVE9ETzogVGhpcyBpcyBhIHByZXR0eSBhd2Z1bCB3YXkgb2YgZG9pbmcgdGhpcy4gRmluZCBzb21ldGhpbmcgYmV0dGVyLlxuICAgIG91dFswXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgb3V0WzFdID0gTWF0aC5yYW5kb20oKTtcbiAgICBvdXRbMl0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIG91dFszXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgbm9ybWFsaXplKG91dCwgb3V0KTtcbiAgICBzY2FsZShvdXQsIG91dCwgayk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHc7XG4gICAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxudmFyIHZlYyA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDQ7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpICsgMV07IHZlY1syXSA9IGFbaSArIDJdOyB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICAgIGFbaV0gPSB2ZWNbMF07IGFbaSArIDFdID0gdmVjWzFdOyBhW2kgKyAyXSA9IHZlY1syXTsgYVtpICsgM10gPSB2ZWNbM107XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ3ZlYzQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4iLCJpbXBvcnQgKiBhcyBtYXQzIGZyb20gJy4vbWF0Myc7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gJy4vdmVjMyc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJy4vdmVjNCc7XG5cbi8qKlxuICogQG5hbWUgcXVhdFxuICogQGNsYXNzIFF1YXRlcm5pb25cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxuICpcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG5cbnZhciB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbnZhciB4VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCk7XG52YXIgeVVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xuXG4vKipcbiAqIFNldHMgYSBxdWF0ZXJuaW9uIHRvIHJlcHJlc2VudCB0aGUgc2hvcnRlc3Qgcm90YXRpb24gZnJvbSBvbmVcbiAqIHZlY3RvciB0byBhbm90aGVyLlxuICpcbiAqIEJvdGggdmVjdG9ycyBhcmUgYXNzdW1lZCB0byBiZSB1bml0IGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3RvclxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25UbyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgZG90ID0gdmVjMy5kb3QoYSwgYik7XG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIHhVbml0VmVjMywgYSk7XG4gICAgICAgIGlmICh2ZWMzLmxlbmd0aCh0bXB2ZWMzKSA8IDAuMDAwMDAxKVxuICAgICAgICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh0bXB2ZWMzLCB0bXB2ZWMzKTtcbiAgICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgICBvdXRbMF0gPSAwO1xuICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICBvdXRbMl0gPSAwO1xuICAgICAgICBvdXRbM10gPSAxO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgYSwgYik7XG4gICAgICAgIG91dFswXSA9IHRtcHZlYzNbMF07XG4gICAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICAgIG91dFsyXSA9IHRtcHZlYzNbMl07XG4gICAgICAgIG91dFszXSA9IDEgKyBkb3Q7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbn1cblxudmFyIG1hdHIgPSBtYXQzLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcbiAqIHBlcnBlbmRpY3VsYXIgdG8gYWxsIG90aGVyIHNwZWNpZmllZCBheGVzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGVzKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG5cbiAgICBtYXRyWzFdID0gdXBbMF07XG4gICAgbWF0cls0XSA9IHVwWzFdO1xuICAgIG1hdHJbN10gPSB1cFsyXTtcblxuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBjbG9uZVxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGNsb25lID0gdmVjNC5jbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGNvcHkgPSB2ZWM0LmNvcHk7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG5cbi8qKlxuICogU2V0IGEgcXVhdCB0byB0aGUgaWRlbnRpdHkgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldHMgYSBxdWF0IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFuZCByb3RhdGlvbiBheGlzLFxuICogdGhlbiByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHtcbiAgICByYWQgPSByYWQgKiAwLjU7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIG91dFswXSA9IHMgKiBheGlzWzBdO1xuICAgIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICAgIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICAgIG91dFszXSA9IE1hdGguY29zKHJhZCk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZSBmb3IgYSBnaXZlblxuICogIHF1YXRlcm5pb24uIElmIGEgcXVhdGVybmlvbiBpcyBjcmVhdGVkIHdpdGhcbiAqICBzZXRBeGlzQW5nbGUsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBzYW1lXG4gKiAgdmFsdWVzIGFzIHByb3ZpZGllZCBpbiB0aGUgb3JpZ2luYWwgcGFyYW1ldGVyIGxpc3RcbiAqICBPUiBmdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB2YWx1ZXMuXG4gKiBFeGFtcGxlOiBUaGUgcXVhdGVybmlvbiBmb3JtZWQgYnkgYXhpcyBbMCwgMCwgMV0gYW5kXG4gKiAgYW5nbGUgLTkwIGlzIHRoZSBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieVxuICogIFswLCAwLCAxXSBhbmQgMjcwLiBUaGlzIG1ldGhvZCBmYXZvcnMgdGhlIGxhdHRlci5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxuICogQHBhcmFtICB7cXVhdH0gcSAgICAgUXVhdGVybmlvbiB0byBiZSBkZWNvbXBvc2VkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBeGlzQW5nbGUob3V0LCBxKSB7XG4gICAgdmFyIHJhZCA9IE1hdGguYWNvcyhxWzNdKSAqIDIuMDtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCAvIDIuMCk7XG4gICAgaWYgKHMgIT09IDAuMCkge1xuICAgICAgICBvdXRbMF0gPSBxWzBdIC8gcztcbiAgICAgICAgb3V0WzFdID0gcVsxXSAvIHM7XG4gICAgICAgIG91dFsyXSA9IHFbMl0gLyBzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHMgaXMgemVybywgcmV0dXJuIGFueSBheGlzIChubyByb3RhdGlvbiAtIGF4aXMgZG9lcyBub3QgbWF0dGVyKVxuICAgICAgICBvdXRbMF0gPSAxO1xuICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICBvdXRbMl0gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gcmFkO1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBhZGQgPSB2ZWM0LmFkZDtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXSxcbiAgICAgICAgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXSwgYncgPSBiWzNdO1xuXG4gICAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gICAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieCA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICAgIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieSA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgLSBheiAqIGJ5O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheSAqIGJ5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieiA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICAgIG91dFsxXSA9IGF5ICogYncgLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgVyBjb21wb25lbnQgb2YgYSBxdWF0IGZyb20gdGhlIFgsIFksIGFuZCBaIGNvbXBvbmVudHMuXG4gKiBBc3N1bWVzIHRoYXQgcXVhdGVybmlvbiBpcyAxIHVuaXQgaW4gbGVuZ3RoLlxuICogQW55IGV4aXN0aW5nIFcgY29tcG9uZW50IHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBXIGNvbXBvbmVudCBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcblxuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICBvdXRbMl0gPSB6O1xuICAgIG91dFszXSA9IE1hdGguc3FydChNYXRoLmFicygxLjAgLSB4ICogeCAtIHkgKiB5IC0geiAqIHopKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGRvdCA9IHZlYzQuZG90O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGxlcnAgPSB2ZWM0LmxlcnA7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICAvLyBiZW5jaG1hcmtzOlxuICAgIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdLCBidyA9IGJbM107XG5cbiAgICB2YXIgICAgICAgIG9tZWdhLCBjb3NvbSwgc2lub20sIHNjYWxlMCwgc2NhbGUxO1xuXG4gICAgLy8gY2FsYyBjb3NpbmVcbiAgICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gICAgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXG4gICAgaWYgKGNvc29tIDwgMC4wKSB7XG4gICAgICAgIGNvc29tID0gLWNvc29tO1xuICAgICAgICBieCA9IC1ieDtcbiAgICAgICAgYnkgPSAtYnk7XG4gICAgICAgIGJ6ID0gLWJ6O1xuICAgICAgICBidyA9IC1idztcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuICAgIGlmICgoMS4wIC0gY29zb20pID4gMC4wMDAwMDEpIHtcbiAgICAgICAgLy8gc3RhbmRhcmQgY2FzZSAoc2xlcnApXG4gICAgICAgIG9tZWdhICA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgICAgIHNpbm9tICA9IE1hdGguc2luKG9tZWdhKTtcbiAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXG4gICAgICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICAgICAgc2NhbGUxID0gdDtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICAgIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gICAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICAgIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG52YXIgdGVtcDEgPSBjcmVhdGUoKTtcbnZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxbGVycChvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgICBzbGVycCh0ZW1wMSwgYSwgZCwgdCk7XG4gICAgc2xlcnAodGVtcDIsIGIsIGMsIHQpO1xuICAgIHNsZXJwKG91dCwgdGVtcDEsIHRlbXAyLCAyICogdCAqICgxIC0gdCkpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSxcbiAgICAgICAgZG90ID0gYTAgKiBhMCArIGExICogYTEgKyBhMiAqIGEyICsgYTMgKiBhMyxcbiAgICAgICAgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDtcblxuICAgIC8vIFRPRE86IFdvdWxkIGJlIGZhc3RlciB0byByZXR1cm4gWzAsMCwwLDBdIGltbWVkaWF0ZWx5IGlmIGRvdCA9PSAwXG5cbiAgICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gICAgb3V0WzFdID0gLWExICogaW52RG90O1xuICAgIG91dFsyXSA9IC1hMiAqIGludkRvdDtcbiAgICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbGVuID0gdmVjNC5sZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJMZW4gPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHttYXQzfSBtIHJvdGF0aW9uIG1hdHJpeFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAgIC8vIGFydGljbGUgXCJRdWF0ZXJuaW9uIENhbGN1bHVzIGFuZCBGYXN0IEFuaW1hdGlvblwiLlxuICAgIHZhciBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gICAgdmFyIGZSb290O1xuXG4gICAgaWYgKGZUcmFjZSA+IDAuMCkge1xuICAgICAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgICAgIGZSb290ID0gTWF0aC5zcXJ0KGZUcmFjZSArIDEuMCk7ICAvLyAyd1xuICAgICAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgIC8vIDEvKDR3KVxuICAgICAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHx3fCA8PSAxLzJcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBpZiAobVs0XSA+IG1bMF0pXG4gICAgICAgICAgICBpID0gMTtcbiAgICAgICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pXG4gICAgICAgICAgICBpID0gMjtcbiAgICAgICAgdmFyIGogPSAoaSArIDEpICUgMztcbiAgICAgICAgdmFyIGsgPSAoaSArIDIpICUgMztcblxuICAgICAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgICAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDtcbiAgICAgICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2pdID0gKG1baiAqIDMgKyBpXSArIG1baSAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2tdID0gKG1bayAqIDMgKyBpXSArIG1baSAqIDMgKyBrXSkgKiBmUm9vdDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBxdWF0ZW5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdxdWF0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7cXVhdH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgdmFyIGVxdWFscyA9IHZlYzQuZXF1YWxzO1xuIiwiLyoqXG4gKiBAbmFtZSB2ZWMyXG4gKiBAY2xhc3MgMiBEaW1lbnNpb25hbCBWZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcbiAqXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4O1xuICAgIG91dFsxXSA9IHk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2RpdmlkZSBhcyBkaXZ9O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICAgIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2Rpc3RhbmNlIGFzIGRpc3R9O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtzcXVhcmVkRGlzdGFuY2UgYXMgc3FyRGlzdH07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtsZW5ndGggYXMgbGVufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWRMZW5ndGggYXMgc3FyTGVufTtcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdO1xuICAgIG91dFsxXSA9IC1hWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHk7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICogTm90ZSB0aGF0IHRoZSBjcm9zcyBwcm9kdWN0IG11c3QgYnkgZGVmaW5pdGlvbiBwcm9kdWNlIGEgM0QgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICAgIG91dFswXSA9IG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV07XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJO1xuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJkfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxudmFyIHZlYyA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgICBhW2ldID0gdmVjWzBdOyBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAndmVjMignICsgYVswXSArICcsICcgKyBhWzFdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG4iLCJpbXBvcnQgKiBhcyBtYXB0YWxrcyBmcm9tICdtYXB0YWxrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBtYXB0YWxrcy5DbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZ2wsIG1hcCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRab29tKG1hcCkge1xuICAgIHJldHVybiBtYXAuZ2V0TWF4TmF0aXZlWm9vbSgpIC8gMjtcbn1cbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCB7IG1hdDQgfSBmcm9tICdAbWFwYm94L2dsLW1hdHJpeCc7XG5pbXBvcnQgeyBnZXRUYXJnZXRab29tIH0gZnJvbSAnLi9wYWludGVyL1BhaW50ZXInO1xuXG5jb25zdCBSQURJQU4gPSBNYXRoLlBJIC8gMTgwO1xuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvY29tcG9zaXRpbmcvI3BvcnRlcmR1ZmZjb21wb3NpdGluZ29wZXJhdG9yc1xuZnVuY3Rpb24gc2V0dXBCbGVuZChnbCwgY29tcE9wKSB7XG4gICAgc3dpdGNoIChjb21wT3ApIHtcbiAgICBjYXNlICdzb3VyY2Utb3Zlcic6XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdkZXN0aW5hdGlvbi1vdmVyJzpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORV9NSU5VU19EU1RfQUxQSEEsIGdsLk9ORSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NvdXJjZS1pbic6XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5EU1RfQUxQSEEsIGdsLlpFUk8pO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdkZXN0aW5hdGlvbi1pbic6XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5aRVJPLCBnbC5TUkNfQUxQSEEpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdzb3VyY2Utb3V0JzpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORV9NSU5VU19EU1RfQUxQSEEsIGdsLlpFUk8pO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdkZXN0aW5hdGlvbi1vdXQnOlxuICAgICAgICBnbC5ibGVuZEZ1bmMoZ2wuWkVSTywgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NvdXJjZS1hdG9wJzpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLkRTVF9BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rlc3RpbmF0aW9uLWF0b3AnOlxuICAgICAgICBnbC5ibGVuZEZ1bmMoZ2wuT05FX01JTlVTX0RTVF9BTFBIQSwgZ2wuU1JDX0FMUEhBKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAneG9yJzpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORV9NSU5VU19EU1RfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdsaWdodGVyJzpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORSwgZ2wuT05FKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29weSc6XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5PTkUsIGdsLlpFUk8pO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdkZXN0aW5hdGlvbic6XG4gICAgICAgIGdsLmJsZW5kRnVuYyhnbC5aRVJPLCBnbC5PTkUpO1xuICAgICAgICBicmVhaztcbiAgICAvLyBjYXNlICdtdWx0aXBseSc6XG4gICAgLy8gICAgIGdsLmJsZW5kRnVuYyhnbC5EU1RfQ09MT1IsIGdsLlpFUk8pO1xuICAgIC8vICAgICBicmVhaztcbiAgICAvLyBjYXNlICdzY3JlZW4nOlxuICAgIC8vICAgICBnbC5ibGVuZEZ1bmMoZ2wuT05FX01JTlVTX0RTVF9DT0xPUiwgZ2wuT05FKTtcbiAgICAvLyAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViZ2xSZW5kZXJlciBleHRlbmRzIG1hcHRhbGtzLnJlbmRlcmVyLkNhbnZhc1JlbmRlcmVyIHtcblxuICAgIG5lZWRUb1JlZHJhdygpIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICAgICAgaWYgKG1hcC5pc1pvb21pbmcoKSAmJiAhbWFwLmdldFBpdGNoKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIubmVlZFRvUmVkcmF3KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBtYXAuZ2V0U2l6ZSgpO1xuICAgICAgICBjb25zdCByID0gbWFwdGFsa3MuQnJvd3Nlci5yZXRpbmEgPyAyIDogMTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBtYXB0YWxrcy5DYW52YXMuY3JlYXRlQ2FudmFzKHIgKiBzaXplWyd3aWR0aCddLCByICogc2l6ZVsnaGVpZ2h0J10sIG1hcC5DYW52YXNDbGFzcyk7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCA9IHRoaXMuX2NyZWF0ZUdMQ29udGV4dCh0aGlzLmNhbnZhcywgdGhpcy5sYXllci5vcHRpb25zWydnbE9wdGlvbnMnXSk7XG5cbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAwLjApO1xuXG4gICAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICAgIGNvbnN0IGNvbXBPcCA9IHRoaXMubGF5ZXIub3B0aW9uc1snZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uJ10gfHwgJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgc2V0dXBCbGVuZChnbCwgY29tcE9wKTtcblxuICAgICAgICBnbC5kaXNhYmxlKGdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMub25DYW52YXNDcmVhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub25DYW52YXNDcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxheWVyLm9wdGlvbnNbJ2RvdWJsZUJ1ZmZlciddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG1hcHRhbGtzLkNhbnZhcy5jcmVhdGVDYW52YXModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgbWFwLkNhbnZhc0NsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuYnVmZmVyLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVDYW52YXMoY2FudmFzU2l6ZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNpemU7XG4gICAgICAgIGlmICghY2FudmFzU2l6ZSkge1xuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuZ2V0TWFwKCkuZ2V0U2l6ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZSA9IGNhbnZhc1NpemU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IG1hcHRhbGtzLkJyb3dzZXIucmV0aW5hID8gMiA6IDE7XG4gICAgICAgIC8vcmV0aW5hIHN1cHBvcnRcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gciAqIHNpemVbJ2hlaWdodCddO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHIgKiBzaXplWyd3aWR0aCddO1xuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZUNhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gdGhlIGxheWVyIGlzIGRvdWJsZSBidWZmZXJlZCwgY2xpcCB0aGUgY2FudmFzIHdpdGggbGF5ZXIncyBtYXNrLlxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIuZmlyZSgncmVuZGVyc3RhcnQnLCB7ICdjb250ZXh0JyA6IHRoaXMuY29udGV4dCwgJ2dsJyA6IHRoaXMuZ2wgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1lcmdlIHNwcml0ZXMgdG8gYSBsYXJnZSBzcHJpdGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gc3ByaXRlcyAgIC0gc3ByaXRlcyB0byBtZXJnZVxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvclBvaW50cyAgLSB3aGV0aGVyIHRoZSBtZXJnZWQgc3ByaXRlIGlzIGZvciBwb2ludHMsIHBvaW50J3Mgc3ByaXRlcyBuZWVkIHRvIGJlIHNxdWFyZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgc3ByaXRlcyBtZXJnZWRcbiAgICAgKi9cbiAgICBtZXJnZVNwcml0ZXMoc3ByaXRlcywgZm9yUG9pbnQpIHtcbiAgICAgICAgaWYgKCFzcHJpdGVzIHx8IHNwcml0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL2J1ZmZlciBiZXR3ZWVuIHNwcml0ZXNcbiAgICAgICAgY29uc3QgYnVmZmVyID0gMjtcbiAgICAgICAgbGV0IHcgPSAwLFxuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgaWYgKGZvclBvaW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgocy5jYW52YXMud2lkdGgsIHMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdyArPSBsZW4gKyBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKGxlbiA+IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHcgKz0gcy5jYW52YXMud2lkdGggKyBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKHMuY2FudmFzLmhlaWdodCA+IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IHMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vb3BlbmdsIHRleHR1cmUncyBzaXplIGhhcyB0byBiZSBeMi5cbiAgICAgICAgdyA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyh3KSAvIE1hdGguTE4yKSk7XG4gICAgICAgIGggPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2coaCkgLyBNYXRoLkxOMikpO1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIGNvbnN0IHNwcml0ZUNhbnZhcyA9IG1hcHRhbGtzLkNhbnZhcy5jcmVhdGVDYW52YXModywgaCwgbWFwLkNhbnZhc0NsYXNzKSxcbiAgICAgICAgICAgIGN0eCA9IHNwcml0ZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgICAgdGV4Q29vcmRzID0gW10sXG4gICAgICAgICAgICBvZmZzZXRzID0gW10sXG4gICAgICAgICAgICBzaXplcyA9IFtdO1xuICAgICAgICBsZXQgcG9pbnRlciA9IDA7XG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgbGV0IGR4ID0gMCwgZHkgPSAwLCBsZW47XG4gICAgICAgICAgICBpZiAoZm9yUG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdyA9IHMuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBjaCA9IHMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZW4gPSBNYXRoLm1heChjdywgY2gpO1xuICAgICAgICAgICAgICAgIGR4ID0gbGVuID4gY3cgPyAobGVuIC0gY3cpIC8gMiA6IDA7XG4gICAgICAgICAgICAgICAgZHkgPSBsZW4gPiBjaCA/IChsZW4gLSBjaCkgLyAyIDogMDtcbiAgICAgICAgICAgICAgICAvLzA6IG5vcnRod2VzdC54LCAxOiB3aWR0aCwgMjogaGVpZ2h0LCAzOiBzaXplXG4gICAgICAgICAgICAgICAgdGV4Q29vcmRzLnB1c2goW3BvaW50ZXIgLyB3LCBsZW4gLyB3LCBsZW4gLyBoLCBsZW5dKTtcbiAgICAgICAgICAgICAgICBzaXplcy5wdXNoKFtjdywgY2hdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVuID0gcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGV4Q29vcmRzLnB1c2goW3BvaW50ZXIgLyB3LCBzLmNhbnZhcy53aWR0aCAvIHcsIHMuY2FudmFzLmhlaWdodCAvIGhdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzLmNhbnZhcywgcG9pbnRlciArIGR4LCBkeSk7XG5cbiAgICAgICAgICAgIG9mZnNldHMucHVzaChzLm9mZnNldCk7XG4gICAgICAgICAgICBwb2ludGVyICs9IGxlbiArIGJ1ZmZlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICdjYW52YXMnIDogc3ByaXRlQ2FudmFzLFxuICAgICAgICAgICAgJ3RleENvb3JkcycgOiB0ZXhDb29yZHMsXG4gICAgICAgICAgICAnb2Zmc2V0cycgOiBvZmZzZXRzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChmb3JQb2ludCkge1xuICAgICAgICAgICAgcmVzdWx0WydzaXplcyddID0gc2l6ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjcmVhdGVCdWZmZXIoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBidWZmZXIgb2JqZWN0XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRoZSBidWZmZXIgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2J1ZmZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2goYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIGVuYWJsZVZlcnRleEF0dHJpYihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXR0cmlidXRlc1swXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzVGV4Q29vcmRzID0gbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDAuMF0pO1xuXG4gICAgICAgICAgICBjb25zdCBGU0laRSA9IHZlcnRpY2VzVGV4Q29vcmRzLkJZVEVTX1BFUl9FTEVNRU5UO1xuXG4gICAgICAgICAgICBsZXQgU1RSSURFID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIFNUUklERSArPSAoYXR0cmlidXRlc1tpXVsxXSB8fCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oZ2wucHJvZ3JhbSwgYXR0cmlidXRlc1tpXVswXSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0aGUgc3RvcmFnZSBsb2NhdGlvbiBvZiAnICsgYXR0cmlidXRlc1tpXVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0ciwgYXR0cmlidXRlc1tpXVsxXSwgZ2xbYXR0cmlidXRlc1tpXVsyXSB8fCAnRkxPQVQnXSwgZmFsc2UsIEZTSVpFICogU1RSSURFLCBGU0laRSAqIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IChhdHRyaWJ1dGVzW2ldWzFdIHx8IDApO1xuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKGdsLnByb2dyYW0sIGF0dHJpYnV0ZXNbMF0pO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhdHRyLCBhdHRyaWJ1dGVzWzFdLCBnbFthdHRyaWJ1dGVzWzJdIHx8ICdGTE9BVCddLCBmYWxzZSwgMCwgMCk7XG4gICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25SZW1vdmUoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgIGdsLmRlbGV0ZUJ1ZmZlcihiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2J1ZmZlcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGxpbmtlZCBwcm9ncmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSB2c2hhZGVyIGEgdmVydGV4IHNoYWRlciBwcm9ncmFtIChzdHJpbmcpXG4gICAgICogQHBhcmFtIGZzaGFkZXIgYSBmcmFnbWVudCBzaGFkZXIgcHJvZ3JhbSAoc3RyaW5nKVxuICAgICAqIEByZXR1cm4gY3JlYXRlZCBwcm9ncmFtIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZFxuICAgICAqL1xuICAgIGNyZWF0ZVByb2dyYW0odnNoYWRlciwgZnNoYWRlciwgdW5pZm9ybXMpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgLy8gQ3JlYXRlIHNoYWRlciBvYmplY3RcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gdGhpcy5fY29tcGlsZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNoYWRlcik7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5fY29tcGlsZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmc2hhZGVyKTtcbiAgICAgICAgaWYgKCF2ZXJ0ZXhTaGFkZXIgfHwgIWZyYWdtZW50U2hhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBwcm9ncmFtIG9iamVjdFxuICAgICAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgc2hhZGVyIG9iamVjdHNcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgIC8vIExpbmsgdGhlIHByb2dyYW0gb2JqZWN0XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgICAvLyBDaGVjayB0aGUgcmVzdWx0IG9mIGxpbmtpbmdcbiAgICAgICAgY29uc3QgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgICAgIGlmICghbGlua2VkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xuICAgICAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxpbmsgcHJvZ3JhbTogJyArIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRVbmlmb3Jtcyhwcm9ncmFtLCB1bmlmb3Jtcyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfVxuXG4gICAgdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxvYWRUZXh0dXJlKGltYWdlLCB0ZXhJZHgpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpOyAgIC8vIENyZWF0ZSBhIHRleHR1cmUgb2JqZWN0XG4gICAgICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGV4SWR4KSB7XG4gICAgICAgICAgICB0ZXhJZHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuYWJsZSB0ZXh0dXJlIHVuaXQwXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2xbJ1RFWFRVUkUnICsgdGV4SWR4XSk7XG4gICAgICAgIC8vIEJpbmQgdGhlIHRleHR1cmUgb2JqZWN0IHRvIHRoZSB0YXJnZXRcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgICAgIC8vIFNldCB0aGUgdGV4dHVyZSBwYXJhbWV0ZXJzXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0dXJlIGltYWdlXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBlbmFibGVTYW1wbGVyKHNhbXBsZXIsIHRleElkeCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IHVTYW1wbGVyID0gdGhpcy5fZ2V0VW5pZm9ybShnbC5wcm9ncmFtLCBzYW1wbGVyKTtcbiAgICAgICAgaWYgKCF0ZXhJZHgpIHtcbiAgICAgICAgICAgIHRleElkeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0dXJlIHVuaXQgdG8gdGhlIHNhbXBsZXJcbiAgICAgICAgZ2wudW5pZm9ybTFpKHVTYW1wbGVyLCB0ZXhJZHgpO1xuICAgICAgICByZXR1cm4gdVNhbXBsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBfY2FsY01hdHJpY2VzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHNjYWxlID0gbWFwLmdldFNjYWxlKCk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IG1hcC5fcHJqVG9Qb2ludChtYXAuX2dldFByakNlbnRlcigpLCBtYXAuZ2V0TWF4Wm9vbSgpKTtcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgY2FtZXJhVG9DZW50ZXJEaXN0YW5jZSA9IDAuNSAvIE1hdGgudGFuKGZvdiAvIDIpICogc2l6ZS5oZWlnaHQgKiBzY2FsZTtcblxuICAgICAgICBjb25zdCBtID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZShtLCBmb3YsIHNpemUud2lkdGggLyBzaXplLmhlaWdodCwgMSwgY2FtZXJhVG9DZW50ZXJEaXN0YW5jZSArIDFFOSk7XG4gICAgICAgIGlmICghbWFwdGFsa3MuVXRpbC5JU19OT0RFKSB7XG4gICAgICAgICAgICAvLyBkb2Vzbid0IG5lZWQgdG8gZmxpcCBZIHdpdGggaGVhZGxlc3MtZ2wsIHVua25vd24gcmVhc29uXG4gICAgICAgICAgICBtYXQ0LnNjYWxlKG0sIG0sIFsxLCAtMSwgMV0pO1xuICAgICAgICB9XG4gICAgICAgIG1hdDQudHJhbnNsYXRlKG0sIG0sIFswLCAwLCAtY2FtZXJhVG9DZW50ZXJEaXN0YW5jZV0pO1xuICAgICAgICBtYXQ0LnJvdGF0ZVgobSwgbSwgbWFwLmdldFBpdGNoKCkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbWF0NC5yb3RhdGVaKG0sIG0sIC1tYXAuZ2V0QmVhcmluZygpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIG1hdDQudHJhbnNsYXRlKG0sIG0sIFstY2VudGVyLngsIC1jZW50ZXIueSwgMF0pO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICBjYWxjTWF0cmljZXMoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIC8vIGdldCBwaXhlbCBzaXplIG9mIG1hcFxuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKTtcbiAgICAgICAgLy8gZ2V0IGZpZWxkIG9mIHZpZXdcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgbWF4U2NhbGUgPSBtYXAuZ2V0U2NhbGUobWFwLmdldE1pblpvb20oKSkgLyBtYXAuZ2V0U2NhbGUobWFwLmdldE1heE5hdGl2ZVpvb20oKSk7XG4gICAgICAgIGNvbnN0IGZhclogPSBtYXhTY2FsZSAqIHNpemUuaGVpZ2h0IC8gMiAvIHRoaXMuX2dldEZvdlJhdGlvKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnBlcnNwZWN0aXZlKG0sIGZvdiwgc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0LCAxLCBmYXJaKTtcbiAgICAgICAgY29uc3QgbTEgPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBpZiAoIW1hcHRhbGtzLlV0aWwuSVNfTk9ERSkge1xuICAgICAgICAgICAgLy8gZG9lc24ndCBuZWVkIHRvIGZsaXAgWSB3aXRoIGhlYWRsZXNzLWdsLCB1bmtub3duIHJlYXNvblxuICAgICAgICAgICAgbWF0NC5zY2FsZShtLCBtLCBbMSwgLTEsIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBtYXQ0LmNvcHkobTEsIG0pO1xuICAgICAgICBjb25zdCBtMiA9IHRoaXMuX2dldExvb2tBdE1hdCgpO1xuICAgICAgICBtYXQ0Lm11bHRpcGx5KG0sIG0xLCBtMik7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIF9nZXRMb29rQXRNYXQoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0WiA9IGdldFRhcmdldFpvb20obWFwKTtcblxuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHNjYWxlID0gbWFwLmdldFNjYWxlKCkgLyBtYXAuZ2V0U2NhbGUodGFyZ2V0Wik7XG4gICAgICAgIC8vIGNvbnN0IGNlbnRlciA9IHRoaXMuY2FtZXJhQ2VudGVyID0gbWFwLl9wcmpUb1BvaW50KG1hcC5fZ2V0UHJqQ2VudGVyKCksIG1hcC5nZXRNYXhOYXRpdmVab29tKCkpO1xuICAgICAgICBjb25zdCBjZW50ZXIyRCA9IHRoaXMuY2FtZXJhQ2VudGVyID0gbWFwLmNvb3JkaW5hdGVUb1BvaW50KG1hcC5nZXRDZW50ZXIoKSwgdGFyZ2V0Wik7XG4gICAgICAgIGNvbnN0IHBpdGNoID0gbWFwLmdldFBpdGNoKCkgKiBSQURJQU47XG4gICAgICAgIGNvbnN0IGJlYXJpbmcgPSAtbWFwLmdldEJlYXJpbmcoKSAqIFJBRElBTjtcblxuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMuX2dldEZvdlJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHogPSBzY2FsZSAqIHNpemUuaGVpZ2h0IC8gMiAvIHJhdGlvO1xuICAgICAgICBjb25zdCBjeiA9IHogKiBNYXRoLmNvcyhwaXRjaCk7XG4gICAgICAgIC8vIGFuZCBbZGlzdF0gYXdheSBmcm9tIG1hcCdzIGNlbnRlciBvbiBYWSBwbGFuZSB0byB0aWx0IHRoZSBzY2VuZS5cbiAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc2luKHBpdGNoKSAqIHo7XG4gICAgICAgIC8vIHdoZW4gbWFwIHJvdGF0ZXMsIHRoZSBjYW1lcmEncyB4eSBwb3NpdGlvbiBpcyByb3RhdGluZyB3aXRoIHRoZSBnaXZlbiBiZWFyaW5nIGFuZCBzdGlsbCBrZWVwcyBbZGlzdF0gYXdheSBmcm9tIG1hcCdzIGNlbnRlclxuICAgICAgICBjb25zdCBjeCA9IGNlbnRlcjJELnggKyBkaXN0ICogTWF0aC5zaW4oYmVhcmluZyk7XG4gICAgICAgIGNvbnN0IGN5ID0gY2VudGVyMkQueSArIGRpc3QgKiBNYXRoLmNvcyhiZWFyaW5nKTtcblxuICAgICAgICAvLyB3aGVuIG1hcCByb3RhdGVzLCBjYW1lcmEncyB1cCBheGlzIGlzIHBvaW50aW5nIHRvIGJlYXJpbmcgZnJvbSBzb3V0aCBkaXJlY3Rpb24gb2YgbWFwXG4gICAgICAgIC8vIGRlZmF1bHQgWzAsMSwwXSBpcyB0aGUgWSBheGlzIHdoaWxlIHRoZSBhbmdsZSBvZiBpbmNsaW5hdGlvbiBhbHdheXMgZXF1YWwgMFxuICAgICAgICAvLyBpZiB5b3Ugd2FudCB0byByb3RhdGUgdGhlIG1hcCBhZnRlciB1cCBhbiBpbmNsaW5lLHBsZWFzZSByb3RhdGVaIGxpa2UgdGhpczpcbiAgICAgICAgLy8gbGV0IHVwID0gbmV3IHZlYzMoMCwxLDApO1xuICAgICAgICAvLyB1cC5yb3RhdGVaKHRhcmdldCxyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgdXAgPSBbTWF0aC5zaW4oYmVhcmluZyksIE1hdGguY29zKGJlYXJpbmcpLCAwXTtcbiAgICAgICAgY29uc3QgbSA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQubG9va0F0KG0sIFtjeCwgY3ksIGN6XSwgW2NlbnRlcjJELngsIGNlbnRlcjJELnksIDBdLCB1cCk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIF9nZXRGb3ZSYXRpbygpIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpO1xuICAgICAgICByZXR1cm4gTWF0aC50YW4oZm92IC8gMiAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIGhpdERldGVjdChwb2ludCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaXhlbHMgPSBuZXcgVWludDhBcnJheSgxICogMSAqIDQpO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjcCA9IG1hcC5fcG9pbnRUb0NvbnRhaW5lclBvaW50KHBvaW50KS5fcm91bmQoKTtcbiAgICAgICAgZ2wucmVhZFBpeGVscyhjcC54LCBoIC0gY3AueSwgMSwgMSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzKTtcbiAgICAgICAgcmV0dXJuIChwaXhlbHNbM10gPiAwKTtcbiAgICB9XG5cbiAgICBnZXRDYW52YXNJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzSW1nID0gc3VwZXIuZ2V0Q2FudmFzSW1hZ2UoKTtcbiAgICAgICAgaWYgKGNhbnZhc0ltZyAmJiBjYW52YXNJbWcuaW1hZ2UgJiYgdGhpcy5idWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc0ltZy5pbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlci53aWR0aCAhPT0gY2FudmFzLndpZHRoIHx8IHRoaXMuYnVmZmVyLmhlaWdodCAhPT0gY2FudmFzLmhlaWdodCB8fCAhdGhpcy5fcHJlc2VydmVCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wcmVzZXJ2ZUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhc0ltZy5pbWFnZSA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNJbWc7XG4gICAgfVxuXG4gICAgb25ab29tU3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLm9uWm9vbVN0YXJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgb25ab29tRW5kKCkge1xuICAgICAgICBzdXBlci5vblpvb21FbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlR0xDb250ZXh0KGNhbnZhcywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbWFwdGFsa3MuVXRpbC5leHRlbmQoe1xuICAgICAgICAgICAgJ2FscGhhJzogdHJ1ZSxcbiAgICAgICAgICAgICdhbnRpYWxpYXMnOiB0cnVlLFxuICAgICAgICAgICAgJ3ByZXNlcnZlRHJhd2luZ0J1ZmZlcic6IHRydWVcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnLCAnd2Via2l0LTNkJywgJ21vei13ZWJnbCddO1xuICAgICAgICBsZXQgY29udGV4dCA9IG51bGw7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2ldLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2hhZGVyIG9iamVjdFxuICAgICAqIEBwYXJhbSBnbCBHTCBjb250ZXh0XG4gICAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIHNoYWRlciBvYmplY3QgdG8gYmUgY3JlYXRlZFxuICAgICAqIEBwYXJhbSBzb3VyY2Ugc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAgICAgKiBAcmV0dXJuIGNyZWF0ZWQgc2hhZGVyIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZC5cbiAgICAgKi9cbiAgICBfY29tcGlsZVNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7XG4gICAgICAvLyBDcmVhdGUgc2hhZGVyIG9iamVjdFxuICAgICAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgICAgIGlmIChzaGFkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gY3JlYXRlIHNoYWRlcicpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgc2hhZGVyIHByb2dyYW1cbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcblxuICAgICAgLy8gQ29tcGlsZSB0aGUgc2hhZGVyXG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgLy8gQ2hlY2sgdGhlIHJlc3VsdCBvZiBjb21waWxhdGlvblxuICAgICAgICBjb25zdCBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcbiAgICAgICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG5cbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXI6ICcgKyBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hhZGVyO1xuICAgIH1cblxuICAgIF9pbml0VW5pZm9ybXMocHJvZ3JhbSwgdW5pZm9ybXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1bmlmb3Jtc1tpXTtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtID0gdW5pZm9ybXNbaV07XG4gICAgICAgICAgICBjb25zdCBiID0gbmFtZS5pbmRleE9mKCdbJyk7XG4gICAgICAgICAgICBpZiAoYiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIGIpO1xuICAgICAgICAgICAgICAgIGlmICghbWFwdGFsa3MuVXRpbC5JU19OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIGJyb3dzZXIsIHJlbW92ZSBbMF0gZnJvbSB1bmlmb3JtYSBkZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5pZm9ybS5zdWJzdHJpbmcoMCwgYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZ3JhbVtuYW1lXSA9IHRoaXMuX2dldFVuaWZvcm0ocHJvZ3JhbSwgdW5pZm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0VW5pZm9ybShwcm9ncmFtLCB1bmlmb3JtTmFtZSkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IHVuaWZvcm0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybU5hbWUpO1xuICAgICAgICBpZiAoIXVuaWZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0aGUgc3RvcmFnZSBsb2NhdGlvbiBvZiAnICsgdW5pZm9ybU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmlmb3JtO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcblxuLyoqXG4gKiBBIExpbmVBdGxhcyBsZXRzIHVzIHJldXNlIHJlbmRlcmVkIGRhc2hlZCBsaW5lc1xuICogYnkgd3JpdGluZyBtYW55IG9mIHRoZW0gdG8gYSB0ZXh0dXJlIGFuZCB0aGVuIGZldGNoaW5nIHRoZWlyIHBvc2l0aW9uc1xuICogdXNpbmcgLmdldERhc2guXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQXRsYXMge1xuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5hdGxhcyA9IHt9O1xuICAgIH1cblxuICAgIGdldEF0bGFzKHN5bWJvbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShzeW1ib2wpO1xuXG4gICAgICAgIGlmICghdGhpcy5hdGxhc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBhdGxhcyA9IHRoaXMuYWRkQXRsYXMoc3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChhdGxhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXRsYXNba2V5XSA9IGF0bGFzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzW2tleV07XG4gICAgfVxuXG4gICAgYWRkQXRsYXMoc3ltYm9sKSB7XG4gICAgICAgIGlmICghc3ltYm9sWydsaW5lRGFzaGFycmF5J10gJiYgIXN5bWJvbFsnbGluZVBhdHRlcm5GaWxlJ10pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX2dldFNpemUoc3ltYm9sLCB0aGlzLnJlc291cmNlcyk7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5fY3JlYXRlQ2FudmFzKHNpemUpO1xuXG4gICAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgaW5pdGlhbGl6ZSBjYW52YXMgY29udGFpbmVyLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIG1hcHRhbGtzLkNhbnZhcy5wcmVwYXJlQ2FudmFzKGN0eCwgc3ltYm9sLCB0aGlzLnJlc291cmNlcyk7XG5cbiAgICAgICAgY3R4Lm1vdmVUbygwLCBzaXplWzFdIC8gMik7XG4gICAgICAgIGN0eC5saW5lVG8oc2l6ZVswXSwgc2l6ZVsxXSAvIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjYW52YXMnIDogY2FudmFzLFxuICAgICAgICAgICAgJ29mZnNldCcgOiBuZXcgbWFwdGFsa3MuUG9pbnQoMCwgMClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2l6ZSBvZiB0aGUgYXRsYXMgb2Ygc3ltYm9sLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc3ltYm9sIC0gYXRsYXMncyBzeW1ib2xcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgIHNpemUgOiBbd2lkdGgsIGhlaWdodF1cbiAgICAgKi9cbiAgICBfZ2V0U2l6ZShzeW1ib2wsIHJlc291cmNlcykge1xuICAgICAgICBsZXQgdyA9IDAsIGggPSAwO1xuICAgICAgICBjb25zdCBkYXNoQXJyYXkgPSBzeW1ib2xbJ2xpbmVEYXNoYXJyYXknXTtcbiAgICAgICAgaWYgKGRhc2hBcnJheSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXNoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3ICs9IGRhc2hBcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGFycmF5IGlzIG9kZCxcbiAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgZ2V0IGNvcGllZCBhbmQgY29uY2F0ZW5hdGVkLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIFs1LCAxNSwgMjVdIHdpbGwgYmVjb21lIFs1LCAxNSwgMjUsIDUsIDE1LCAyNV0uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL3NldExpbmVEYXNoXG4gICAgICAgICAgICBpZiAoZGFzaEFycmF5Lmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3ICo9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoID0gKHN5bWJvbFsnbGluZVdpZHRoJ10gPT0gbnVsbCA/IDIgOiBzeW1ib2xbJ2xpbmVXaWR0aCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ltYm9sWydsaW5lUGF0dGVybkZpbGUnXSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSByZXNvdXJjZXMuZ2V0SW1hZ2Uoc3ltYm9sWydsaW5lUGF0dGVybkZpbGUnXSk7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPiB3KSB7XG4gICAgICAgICAgICAgICAgdyA9IGltYWdlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGltYWdlLmhlaWdodCA+IGgpIHtcbiAgICAgICAgICAgICAgICBoID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdywgaF07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNhbnZhcyhzaXplKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2NhbnZhc0NsYXNzJ10pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5vcHRpb25zWydjYW52YXNDbGFzcyddKHNpemVbMF0sIHNpemVbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIGRvY3VtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZVswXTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbi8qKlxuICogQSBzdGFuZGFsb25lIHBvaW50IGdlb21ldHJ5IHdpdGggdXNlZnVsIGFjY2Vzc29yLCBjb21wYXJpc29uLCBhbmRcbiAqIG1vZGlmaWNhdGlvbiBtZXRob2RzLlxuICpcbiAqIEBjbGFzcyBQb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHgtY29vcmRpbmF0ZS4gdGhpcyBjb3VsZCBiZSBsb25naXR1ZGUgb3Igc2NyZWVuXG4gKiBwaXhlbHMsIG9yIGFueSBvdGhlciBzb3J0IG9mIHVuaXQuXG4gKiBAcGFyYW0ge051bWJlcn0geSB0aGUgeS1jb29yZGluYXRlLiB0aGlzIGNvdWxkIGJlIGxhdGl0dWRlIG9yIHNjcmVlblxuICogcGl4ZWxzLCBvciBhbnkgb3RoZXIgc29ydCBvZiB1bml0LlxuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludCA9IG5ldyBQb2ludCgtNzcsIDM4KTtcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlID0ge1xuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBwb2ludCwgcmV0dXJuaW5nIGEgbmV3IHBvaW50IHRoYXQgY2FuIGJlIG1vZGlmaWVkXG4gICAgICogd2l0aG91dCBhZmZlY3RpbmcgdGhlIG9sZCBvbmUuXG4gICAgICogQHJldHVybiB7UG9pbnR9IHRoZSBjbG9uZVxuICAgICAqL1xuICAgIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIHRvIGFub3RoZXIgcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdCB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgdG8gZnJvbSBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBzdWI6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3N1YihwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBtdWx0QnlQb2ludDogICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tdWx0QnlQb2ludChwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgYnkgcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgZGl2QnlQb2ludDogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fZGl2QnlQb2ludChwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBhIGZhY3RvcixcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBrIGZhY3RvclxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIGJ5IGEgZmFjdG9yLFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGsgZmFjdG9yXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIGRpdjogICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fZGl2KGspOyB9LFxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoaXMgcG9pbnQgYXJvdW5kIHRoZSAwLCAwIG9yaWdpbiBieSBhbiBhbmdsZSBhLFxuICAgICAqIGdpdmVuIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYSBhbmdsZSB0byByb3RhdGUgYXJvdW5kLCBpbiByYWRpYW5zXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoaXMgcG9pbnQgYXJvdW5kIHAgcG9pbnQgYnkgYW4gYW5nbGUgYSxcbiAgICAgKiBnaXZlbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGEgYW5nbGUgdG8gcm90YXRlIGFyb3VuZCwgaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgUG9pbnQgdG8gcm90YXRlIGFyb3VuZFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICByb3RhdGVBcm91bmQ6ICBmdW5jdGlvbihhLHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlQXJvdW5kKGEscCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHBvaW50IGJ5IGEgNHgxIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgICAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgbWF0TXVsdDogZnVuY3Rpb24obSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tYXRNdWx0KG0pOyB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoaXMgcG9pbnQgYnV0IGFzIGEgdW5pdCB2ZWN0b3IgZnJvbSAwLCAwLCBtZWFuaW5nXG4gICAgICogdGhhdCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgcmVzdWx0aW5nIHBvaW50IHRvIHRoZSAwLCAwXG4gICAgICogY29vcmRpbmF0ZSB3aWxsIGJlIGVxdWFsIHRvIDEgYW5kIHRoZSBhbmdsZSBmcm9tIHRoZSByZXN1bHRpbmdcbiAgICAgKiBwb2ludCB0byB0aGUgMCwgMCBjb29yZGluYXRlIHdpbGwgYmUgdGhlIHNhbWUgYXMgYmVmb3JlLlxuICAgICAqIEByZXR1cm4ge1BvaW50fSB1bml0IHZlY3RvciBwb2ludFxuICAgICAqL1xuICAgIHVuaXQ6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl91bml0KCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIGEgcGVycGVuZGljdWxhciBwb2ludCwgd2hlcmUgdGhlIG5ldyB5IGNvb3JkaW5hdGVcbiAgICAgKiBpcyB0aGUgb2xkIHggY29vcmRpbmF0ZSBhbmQgdGhlIG5ldyB4IGNvb3JkaW5hdGUgaXMgdGhlIG9sZCB5XG4gICAgICogY29vcmRpbmF0ZSBtdWx0aXBsaWVkIGJ5IC0xXG4gICAgICogQHJldHVybiB7UG9pbnR9IHBlcnBlbmRpY3VsYXIgcG9pbnRcbiAgICAgKi9cbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGlzIHBvaW50IHdpdGggdGhlIHggJiB5IGNvb3JkaW5hdGVzXG4gICAgICogcm91bmRlZCB0byBpbnRlZ2Vycy5cbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gcm91bmRlZCBwb2ludFxuICAgICAqL1xuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBtYWdpdHVkZSBvZiB0aGlzIHBvaW50OiB0aGlzIGlzIHRoZSBFdWNsaWRlYW5cbiAgICAgKiBkaXN0YW5jZSBmcm9tIHRoZSAwLCAwIGNvb3JkaW5hdGUgdG8gdGhpcyBwb2ludCdzIHggYW5kIHlcbiAgICAgKiBjb29yZGluYXRlcy5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IG1hZ25pdHVkZVxuICAgICAqL1xuICAgIG1hZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSnVkZ2Ugd2hldGhlciB0aGlzIHBvaW50IGlzIGVxdWFsIHRvIGFub3RoZXIgcG9pbnQsIHJldHVybmluZ1xuICAgICAqIHRydWUgb3IgZmFsc2UuXG4gICAgICogQHBhcmFtIHtQb2ludH0gb3RoZXIgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGUgcG9pbnRzIGFyZSBlcXVhbFxuICAgICAqL1xuICAgIGVxdWFsczogZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gb3RoZXIueCAmJlxuICAgICAgICAgICAgICAgdGhpcy55ID09PSBvdGhlci55O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50XG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGRpc3RhbmNlXG4gICAgICovXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQsXG4gICAgICogd2l0aG91dCB0aGUgc3F1YXJlIHJvb3Qgc3RlcC4gVXNlZnVsIGlmIHlvdSdyZSBjb21wYXJpbmdcbiAgICAgKiByZWxhdGl2ZSBkaXN0YW5jZXMuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGRpc3RhbmNlXG4gICAgICovXG4gICAgZGlzdFNxcjogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgZHggPSBwLnggLSB0aGlzLngsXG4gICAgICAgICAgICBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuZ2xlIGZyb20gdGhlIDAsIDAgY29vcmRpbmF0ZSB0byB0aGlzIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogY29vcmRpbmF0ZXMuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIGFuZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuZ2xlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtQb2ludH0gYiB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgYW5nbGVUbzogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnkgLSBiLnksIHRoaXMueCAtIGIueCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCBhbm90aGVyIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtQb2ludH0gYiB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgYW5nbGVXaXRoOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlV2l0aFNlcChiLngsIGIueSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvclxuICAgICAqIHRoZSBjcm9zcyBwcm9kdWN0IGEgeCBiID0gfGF8fGJ8c2luKM64KSBmb3IgzrguXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHgtY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IHRoZSB5LWNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gICAgICovXG4gICAgYW5nbGVXaXRoU2VwOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgdGhpcy54ICogeSAtIHRoaXMueSAqIHgsXG4gICAgICAgICAgICB0aGlzLnggKiB4ICsgdGhpcy55ICogeSk7XG4gICAgfSxcblxuICAgIF9tYXRNdWx0OiBmdW5jdGlvbihtKSB7XG4gICAgICAgIHZhciB4ID0gbVswXSAqIHRoaXMueCArIG1bMV0gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gbVsyXSAqIHRoaXMueCArIG1bM10gKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfYWRkOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCArPSBwLng7XG4gICAgICAgIHRoaXMueSArPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc3ViOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAtPSBwLng7XG4gICAgICAgIHRoaXMueSAtPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfbXVsdDogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggKj0gaztcbiAgICAgICAgdGhpcy55ICo9IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfZGl2OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAvPSBrO1xuICAgICAgICB0aGlzLnkgLz0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9tdWx0QnlQb2ludDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKj0gcC54O1xuICAgICAgICB0aGlzLnkgKj0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdkJ5UG9pbnQ6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54IC89IHAueDtcbiAgICAgICAgdGhpcy55IC89IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91bml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGl2KHRoaXMubWFnKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3BlcnA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAteTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gY29zICogdGhpcy54IC0gc2luICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IHNpbiAqIHRoaXMueCArIGNvcyAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGVBcm91bmQ6IGZ1bmN0aW9uKGFuZ2xlLCBwKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gcC54ICsgY29zICogKHRoaXMueCAtIHAueCkgLSBzaW4gKiAodGhpcy55IC0gcC55KSxcbiAgICAgICAgICAgIHkgPSBwLnkgKyBzaW4gKiAodGhpcy54IC0gcC54KSArIGNvcyAqICh0aGlzLnkgLSBwLnkpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29uc3RydWN0IGEgcG9pbnQgZnJvbSBhbiBhcnJheSBpZiBuZWNlc3NhcnksIG90aGVyd2lzZSBpZiB0aGUgaW5wdXRcbiAqIGlzIGFscmVhZHkgYSBQb2ludCwgb3IgYW4gdW5rbm93biB0eXBlLCByZXR1cm4gaXQgdW5jaGFuZ2VkXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj58UG9pbnR8Kn0gYSBhbnkga2luZCBvZiBpbnB1dCB2YWx1ZVxuICogQHJldHVybiB7UG9pbnR9IGNvbnN0cnVjdGVkIHBvaW50LCBvciBwYXNzZWQtdGhyb3VnaCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKiAvLyB0aGlzXG4gKiB2YXIgcG9pbnQgPSBQb2ludC5jb252ZXJ0KFswLCAxXSk7XG4gKiAvLyBpcyBlcXVpdmFsZW50IHRvXG4gKiB2YXIgcG9pbnQgPSBuZXcgUG9pbnQoMCwgMSk7XG4gKi9cblBvaW50LmNvbnZlcnQgPSBmdW5jdGlvbiAoYSkge1xuICAgIGlmIChhIGluc3RhbmNlb2YgUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoYVswXSwgYVsxXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4vUGFpbnRlcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAncG9pbnQtZ2VvbWV0cnknO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0Wm9vbSB9IGZyb20gJy4vUGFpbnRlcic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgJ3Byb2plY3QnIDogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIExpbmUgUGFpbnRlciB0byBwcm9kdWNlIHZlcnRleCBjb29yZGluYXRlcyBmb3IgV2ViR0wgc2hhZGVycy4gPGJyPlxuICpcbiAqIExpbmUgaXMgdHJpYW5nbGVkIGFzIGluIGh0dHBzOi8vbWF0dGRlc2wuc3ZidGxlLmNvbS9kcmF3aW5nLWxpbmVzLWlzLWhhcmQuIDxicj5cbiAqXG4gKiBJbnNwaXJlZCBieSBtYXB0YWxrcy1nbC1qc1xuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21hcGJveC9tYXBib3gtZ2wtanNcbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogICAgaHR0cDovL2xhYnMuaHlwZXJhbmRyb2lkLmNvbS9lZmZpY2llbnQtd2ViZ2wtc3Ryb2tpbmdcbiAqICAgIGh0dHBzOi8vbWF0dGRlc2wuc3ZidGxlLmNvbS9kcmF3aW5nLWxpbmVzLWlzLWhhcmRcbiAqICAgIGh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYmxvZy9kcmF3aW5nLWFudGlhbGlhc2VkLWxpbmVzL1xuICpcbiAqIEBhdXRob3IgZnV6aGVublxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVQYWludGVyIGV4dGVuZHMgUGFpbnRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgbWFwLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGdsLCBtYXAsIG9wdGlvbnMpO1xuICAgICAgICAvLyDnu5PmnpzmlbDnu4RcbiAgICAgICAgLy8tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gW107XG4gICAgICAgIHRoaXMubm9ybWFsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdHlsZUFycmF5ID0gW107XG4gICAgICAgIC8vLS0tLS0tLS0tLS1cblxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57nu5PmnpzmlbDnu4RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IOe7k+aenOaVsOe7hFxuICAgICAqL1xuICAgIGdldEFycmF5cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICd2ZXJ0ZXhBcnJheScgIDogdGhpcy52ZXJ0ZXhBcnJheSxcbiAgICAgICAgICAgICdub3JtYWxBcnJheScgIDogdGhpcy5ub3JtYWxBcnJheSxcbiAgICAgICAgICAgICdlbGVtZW50QXJyYXknIDogdGhpcy5lbGVtZW50QXJyYXksXG4gICAgICAgICAgICAnc3R5bGVBcnJheScgICA6IHRoaXMuc3R5bGVBcnJheVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOadoee6v+aVsOaNrueahOWdkOagh+aVsOe7hCwgIOWdkOagh+S4uue7j+e6rOW6puaIluiAhTJkIHBvaW50KOWdkOagh+aWueWQkeS4juWxj+W5leWdkOagh+ebuOWQjCkuXG4gICAgICog5b2T5pWw5o2u5Li657uP57qs5bqm5pe2LCDpnIDopoHmiopvcHRpb25z5Lit55qEcHJvamVjdOiuvuS4unRydWVcbiAgICAgKiDnur/mlbDmja7lj6/ku6XmmK8gTGluZVN0cmluZywg5Lmf5Y+v5Lul5pivIE11bHRpTGluZVN0cmluZy5cbiAgICAgKiDlpoLmnpzmmK9NdWx0aUxpbmVTdHJpbmcsIOaVsOe7hOW9ouW8j+S4ujogW1t4MCwgeTBdLFt4MSwgeTFdLCAuLl1cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnrKzkuIDmnaHnur/nmoTlnZDmoIfmlbDnu4QgICAgICDnrKzkuozmnaHnur/nmoTlnZDmoIfmlbDnu4RcbiAgICAgKiDlpoLmnpzmmK9NdWx0aUxpbmVTdHJpbmcsIOaVsOe7hOW9ouW8j+S4ujogW1tbeDAwLCB5MDBdLFt4MDEsIHkwMV0sIC4uXSwgW1t4MTAsIHkxMF0sW3gxMSwgeTExXSwgLi5dXVxuICAgICAqIHN0eWxl5Li657q/55qE5qC35byPLCDnlKjmnaXnlJ/miJDmoLflvI/mlbDmja4uXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXVtdfE51bWJlcltdW11bXX0gbGluZSAtIOe6v+WdkOagh+aVsOe7hFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSAtIOe6v+eahOagt+W8jywgbWFwdGFsa3MuanPnmoRTeW1ib2xcbiAgICAgKi9cbiAgICBhZGRMaW5lKGxpbmUsIHN0eWxlKSB7XG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlLnN5bWJvbFsnbGluZVdpZHRoJ10gPD0gMCB8fCBzdHlsZS5zeW1ib2xbJ2xpbmVPcGFjaXR5J10gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2T5YmN5bey5aSE55CG55qEZWxlbWVudCjkuInop5LlvaIp5pWw6YePXG4gICAgICAgIGNvbnN0IHByZVZlcnRleExlbiA9IHRoaXMudmVydGV4QXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2UgPSB0aGlzLl9nZXRWZXJ0aWNlKGxpbmUpO1xuXG4gICAgICAgIC8v6L6T5YWl5pivTXVsdGlMaW5lU3RyaW5n5pe2LCDpgY3ljoZjaGlsZHJlbiwg5bm25L6d5qyh5re75Yqg5aSE55CGXG4gICAgICAgIGlmICh2ZXJ0aWNlWzBdICYmIEFycmF5LmlzQXJyYXkodmVydGljZVswXVswXSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdmVydGljZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExpbmUodmVydGljZVtpXSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVwYXJlVG9BZGQoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbSh0aGlzLm1hcCk7XG5cbiAgICAgICAgLy/pgY3ljoYsIOS+neasoea3u+WKoOerr+eCuVxuICAgICAgICBsZXQgY3VycmVudFZlcnRleCwgbmV4dFZlcnRleDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB2ZXJ0aWNlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleCA9IHZlcnRpY2VbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zWydwcm9qZWN0J10pIHtcbiAgICAgICAgICAgICAgICAvL+i+k+WFpeaYr+e7j+e6rOW6puaXtiwg6L2s5YyW5Li6MmQgcG9pbnRcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLm1hcC5jb29yZGluYXRlVG9Qb2ludChuZXcgbWFwdGFsa3MuQ29vcmRpbmF0ZSh2ZXJ0ZXgpLCB0YXJnZXRaKS50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50VmVydGV4ID0gUG9pbnQuY29udmVydCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgaWYgKGkgPCBsIC0gMSkge1xuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Byb2plY3QnXSkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLm1hcC5jb29yZGluYXRlVG9Qb2ludChuZXcgbWFwdGFsa3MuQ29vcmRpbmF0ZSh2ZXJ0ZXgpLCB0YXJnZXRaKS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSBQb2ludC5jb252ZXJ0KHZlcnRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRDdXJyZW50VmVydGV4KGN1cnJlbnRWZXJ0ZXgsIG5leHRWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaWsOWinueahGVsZW1lbnTmlbDph49cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAtIHByZVZlcnRleExlbjtcbiAgICAgICAgLy8g5re75Yqg5qC35byP5pWw5o2uXG4gICAgICAgIHRoaXMuX2FkZFRleENvb3Jkcyhjb3VudCwgc3R5bGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIDmnaHnur/mrrXnlLHlm5vkuKrnq6/ngrksIOS4pOS4quS4ieinkuW9oue7hOaIkCwg5aaC5Zu+5omA56S6OlxuICAgICAqICAgICAgIGUwIF9fX19fX19fX19fXyBlMlxuICAgICAqICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgKiAgICBfXyAuX19fX19fX19fX19fX198XG4gICAgICogICAgICAgfFxcIGpvaW4gICAgICAgIHxcbiAgICAgKiAgIHwgICB8IFxcIF9fX19fX19fX19ffGUzXG4gICAgICogICB8ICAgfCAgfGUxXG4gICAgICogICB8ICAgISAgfFxuICAgICAqICAg5LiJ6KeS5b2iMTogW2UwLCBlMSwgZTJdXG4gICAgICogICDkuInop5LlvaIyOiBbZTEsIGUyLCBlM11cbiAgICAgKlxuICAgICAqICBlMOWSjGUx55qE56uv54K55Z2Q5qCH55u45ZCMLCBub3JtYWzlgLzkuI3lkIxcbiAgICAgKiAg5ZCM55CGZTLlkoxlM+eahOerr+eCueWdkOagh+ebuOWQjCwgbm9ybWFs5YC85LiN5ZCMXG4gICAgICpcbiAgICAgKiBhZGRDdXJyZW50VmVydGV45pa55rOV5qC55o2u5b2T5YmN56uv54K55ZKM5LiL5LiA5Liq56uv54K5LCDorqHnrpflh7plMC1lM+eahG5vcm1hbCwgbGluZXNvZmFy562JLCDmt7vliqDliLDnu5PmnpzmlbDnu4TkuK0uXG4gICAgICogQHBhcmFtIHtQb2ludH0gY3VycmVudFZlcnRleCAtIOW9k+WJjeerr+eCueWdkOagh1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IG5leHRWZXJ0ZXggICAgLSDkuIvkuIDkuKrnq6/ngrnlnZDmoIdcbiAgICAgKi9cbiAgICBhZGRDdXJyZW50VmVydGV4KGN1cnJlbnRWZXJ0ZXgsIG5leHRWZXJ0ZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZVZlcnRleCkge1xuICAgICAgICAgICAgLy8g6YeN572uZWxlbWVudOaVsOaNruWkhOeQhueahOi+heWKqeWPmOmHj1xuICAgICAgICAgICAgdGhpcy5lMSA9IHRoaXMuZTIgPSB0aGlzLmUzID0gLTE7XG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgdmVydGV4LlxuICAgICAgICAgICAgLy8g5L+d5a2Y56uv54K55YiwcHJlVmVydGV45LitLCDov5Tlm57nrYnlvoXkuIvkuIDkuKrnq6/ngrnmlbDmja5cbiAgICAgICAgICAgIHRoaXMuX3dhaXRGb3JMZWZ0Q2FwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJlVmVydGV4ID0gY3VycmVudFZlcnRleDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIG5vcm1hbOS4uuS4jue6v+auteihjOi/m+aWueWQkemAhuaXtumSiOWeguebtOeahG5vcm1hbGl6ZWTlgLxcbiAgICAgICAgICog57q/5pa55ZCR5Li65LuO5bem5Yiw5Y+z5pe2LCBub3JtYWzmlrnlkJHlkJHkuIpcbiAgICAgICAgICog57q/5pa55ZCR5Li65LuO5Y+z5Yiw5bem5pe2LCBub3JtYWzmlrnlkJHlkJHkuItcbiAgICAgICAgICogICAgICAgICAgICAgICAgICBuZXh0Tm9ybWFsXG4gICAgICAgICAqICAgIGN1cnJlbnRWZXJ0ZXggICAg4oaRXG4gICAgICAgICAqICAgICAgICAgICAgICAgIC5fX19fX19fXy4gbmV4dFZlcnRleFxuICAgICAgICAgKiAgICAgICAgICAgICAgICB8XFxcbiAgICAgICAgICogICAgIG5vcm1hbCAg4oaQICB8IFxcIGpvaW5Ob3JtYWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgcHJldlZlcnRleCAhXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIOiuoeeul+W9k+WJjee6v+auteeahG5vcm1hbFxuICAgICAgICBjb25zdCBub3JtYWwgPSBjdXJyZW50VmVydGV4LnN1Yih0aGlzLnByZVZlcnRleCkuX3VuaXQoKS5fcGVycCgpLl9tdWx0KC0xKTtcbiAgICAgICAgLy8g6K6h566X5LiL5LiA5p2h57q/5q6155qEbm9ybWFsXG4gICAgICAgIGxldCBuZXh0Tm9ybWFsO1xuICAgICAgICBpZiAobmV4dFZlcnRleCkge1xuICAgICAgICAgICAgbmV4dE5vcm1hbCA9IG5leHRWZXJ0ZXguc3ViKGN1cnJlbnRWZXJ0ZXgpLl91bml0KCkuX3BlcnAoKS5fbXVsdCgtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVKb2luTm9ybWFsID0gdGhpcy5fZ2V0U3RhcnROb3JtYWwobm9ybWFsLCB0aGlzLnByZU5vcm1hbCk7XG5cbiAgICAgICAgLy8gMS4g6K6h566X57q/5q615bem5L6n55qEam9pbk5vcm1hbFxuICAgICAgICAvLyAyLiDmt7vliqDnur/mrrXlt6bkvqfnq6/ngrkoZTAsIGUxKeWIsOe7k+aenOaVsOe7hOS4rVxuICAgICAgICB0aGlzLl9hZGRMaW5lRW5kVmVydGV4cyh0aGlzLnByZVZlcnRleCwgcHJlSm9pbk5vcm1hbCwgdGhpcy5kaXN0YW5jZSk7XG5cbiAgICAgICAgLy8g5aKe5Yqg57q/5q616ZW/5bqm5YiwbGluZXNvZmFy5LitXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gY3VycmVudFZlcnRleC5kaXN0KHRoaXMucHJlVmVydGV4KTtcblxuICAgICAgICBpZiAoIW5leHRWZXJ0ZXgpIHtcbiAgICAgICAgICAgIC8vIOexu+S8vOe6v+auteW3puS+p+err+eCueeahOWkhOeQhiwg5re75Yqg5Y+z5L6n56uv54K5KGUyLCBlMylcbiAgICAgICAgICAgIGNvbnN0IGVuZE5vcm1hbCA9IHRoaXMuX2dldEVuZE5vcm1hbChub3JtYWwsIG5leHROb3JtYWwpO1xuICAgICAgICAgICAgdGhpcy5fYWRkTGluZUVuZFZlcnRleHMoY3VycmVudFZlcnRleCwgZW5kTm9ybWFsLCB0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5wcmVOb3JtYWwgPSBub3JtYWw7XG4gICAgICAgIHRoaXMucHJlVmVydGV4ID0gY3VycmVudFZlcnRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4blpIfmt7vliqDmlrDnmoTnur9cbiAgICAgKi9cbiAgICBfcHJlcGFyZVRvQWRkKCkge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcblxuICAgICAgICBkZWxldGUgdGhpcy5wcmVWZXJ0ZXg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZU5vcm1hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDnur/nmoTnq6/ngrnlnZDmoIflkoxub3JtYWznrYnliLDnu5PmnpzmlbDnu4TkuK1cbiAgICAgKiBAcGFyYW0ge1BvaW50fSB2ZXJ0ZXggICAgICAtIOW9k+WJjeeahOerr+eCuVxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGpvaW5Ob3JtYWwgIC0gam9pbui/nuaOpeWkhOeahG5vcm1hbOWAvFxuICAgICAqIEBwYXJhbSB7UG9pbnR9IG5vcm1hbCAgICAgIC0g57q/5q6155qEbm9ybWFs5YC8XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVzb2ZhciAgLSDlvZPliY3nur/mgLvplb9cbiAgICAgKi9cbiAgICBfYWRkTGluZUVuZFZlcnRleHModmVydGV4LCBqb2luTm9ybWFsLCBsaW5lc29mYXIpIHtcbiAgICAgICAgLy91cCBleHRydWRlIGpvaW5Ob3JtYWxcbiAgICAgICAgbGV0IGV4dHJ1ZGUgPSBqb2luTm9ybWFsLm5vcm1hbFswXTtcblxuICAgICAgICB0aGlzLmUzID0gdGhpcy5fYWRkVmVydGV4KHZlcnRleCwgZXh0cnVkZSwgbGluZXNvZmFyKTtcbiAgICAgICAgaWYgKHRoaXMuZTEgPj0gMCAmJiB0aGlzLmUyID49IDApIHtcbiAgICAgICAgICAgIC8vIGFkZCB0byBlbGVtZW50IGFycmF5XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRBcnJheS5wdXNoKHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZTEgPSB0aGlzLmUyO1xuICAgICAgICB0aGlzLmUyID0gdGhpcy5lMztcblxuICAgICAgICAvLyBkb3duIGV4dHJ1ZGUgam9pbk5vcm1hbFxuICAgICAgICBleHRydWRlID0gam9pbk5vcm1hbC5ub3JtYWxbMV07XG5cbiAgICAgICAgdGhpcy5lMyA9IHRoaXMuX2FkZFZlcnRleCh2ZXJ0ZXgsIGV4dHJ1ZGUsIGxpbmVzb2Zhcik7XG4gICAgICAgIGlmICh0aGlzLmUxID49IDAgJiYgdGhpcy5lMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBhZGQgdG8gZWxlbWVudCBhcnJheVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkucHVzaCh0aGlzLmUxLCB0aGlzLmUyLCB0aGlzLmUzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmUxID0gdGhpcy5lMjtcbiAgICAgICAgdGhpcy5lMiA9IHRoaXMuZTM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgdmVydGV4IGRhdGEgdG8gdmVydGV4IGFycmF5XG4gICAgICogQHBhcmFtIHtQb2ludH0gY3VycmVudFZlcnRleCAgICAgLSBjdXJyZW50IHZlcnRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBub3JtYWwgIC0gdGhlIG5vcm1hbCBvZiBjdXJyZW50IGxpbmUgc2VnbWVudFxuICAgICAqL1xuICAgIF9hZGRWZXJ0ZXgoY3VycmVudFZlcnRleCwgbm9ybWFsLCBsaW5lc29mYXIpIHtcbiAgICAgICAgLy8gYWRkIHRvIHZlcnRleCBhcnJheVxuICAgICAgICB0aGlzLnZlcnRleEFycmF5LnB1c2goY3VycmVudFZlcnRleC54LCBjdXJyZW50VmVydGV4LnkpO1xuICAgICAgICAvLyBqb2luTm9ybWFs5LiO57q/5q61bm9ybWFs55qE5beu5YC8LCBqb2luTm9ybWFsLngsIGpvaW5Ob3JtYWwueSwgbm9ybWFsLngsIG5vcm1hbC55LCBsaW5lc29mYXJcbiAgICAgICAgY29uc3Qgbm9ybWFscyA9IFt0aGlzLl9wcmVjaXNlKG5vcm1hbC54KSwgdGhpcy5fcHJlY2lzZShub3JtYWwueSksIGxpbmVzb2Zhcl07XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vcm1hbEFycmF5Lmxlbmd0aCAvIG5vcm1hbHMubGVuZ3RoO1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLm5vcm1hbEFycmF5LCBub3JtYWxzKTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuXG5cbiAgICBfZ2V0VmVydGljZShsaW5lKSB7XG4gICAgICAgIGlmIChsaW5lLmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAvL0dlb0pTT04gZmVhdHVyZVxuICAgICAgICAgICAgbGluZSA9IGxpbmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5jb29yZGluYXRlcykge1xuICAgICAgICAgICAgLy9HZW9KU09OIGdlb21ldHJ5XG4gICAgICAgICAgICBsaW5lID0gbGluZS5jb29yZGluYXRlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlJ/miJDnur/nmoTmoLflvI/mlbDnu4Tlubbmt7vliqDliLDnu5PmnpzmlbDnu4TkuK1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbiAgICAgLSDnur/nmoRlbGVtZW505pWw6YePXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0g57q/55qE5qC35byPXG4gICAgICovXG4gICAgX2FkZFRleENvb3JkcyhuLCBzdHlsZSkge1xuICAgICAgICAvLyDnur/nmoTpgI/mmI7luqYsIOe6v+WuveeahDEvMihzaGFkZXLkuK3pg73mmK/nlKhsaW5lV2lkdGjnmoQxLzLlgZrorqHnrpcpXG4gICAgICAgIGxldCB2ID0gKHN0eWxlLnN5bWJvbFsnbGluZVdpZHRoJ10gfHwgMikgLyAyICogMTAwICsgKHN0eWxlLnN5bWJvbFsnbGluZU9wYWNpdHknXSB8fCAxKSAqIDEwO1xuICAgICAgICAvLyAobGluZV93aWR0aCAqIDEwMCArIG9wYWNpdHkgKiAxMCkgKiAxMDAwMCArIHRleF9pZHhcbiAgICAgICAgdiA9IHYgKiAxMDAwMCArIHN0eWxlLmluZGV4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZUFycmF5LnB1c2godik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpfnur/mrrXotbfngrnnmoRqb2luXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBub3JtYWwgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gcHJlTm9ybWFsIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgX2dldFN0YXJ0Tm9ybWFsKG5vcm1hbCwgcHJlTm9ybWFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRKb2luTm9ybWFsKG5vcm1hbCwgcHJlTm9ybWFsLCBub3JtYWwpO1xuICAgIH1cblxuICAgIF9nZXRFbmROb3JtYWwobm9ybWFsLCBuZXh0Tm9ybWFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRKb2luTm9ybWFsKG5vcm1hbCwgbm9ybWFsLCBuZXh0Tm9ybWFsKTtcbiAgICB9XG5cbiAgICBfZ2V0Sm9pbk5vcm1hbChjdXJyZW50Tm9ybWFsLCBwcmVOb3JtYWwsIG5vcm1hbCkge1xuICAgICAgICBpZiAoIXByZU5vcm1hbCB8fCAhbm9ybWFsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdub3JtYWwnIDogW2N1cnJlbnROb3JtYWwsIGN1cnJlbnROb3JtYWwubXVsdCgtMSldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGpvaW5Ob3JtYWwgPSBwcmVOb3JtYWwuYWRkKG5vcm1hbCkuX3VuaXQoKTtcbiAgICAgICAgY29uc3QgY29zSGFsZkFuZ2xlID0gam9pbk5vcm1hbC54ICogbm9ybWFsLnggKyBqb2luTm9ybWFsLnkgKiBub3JtYWwueTtcbiAgICAgICAgY29uc3QgbWl0ZXJMZW5ndGggPSAxIC8gY29zSGFsZkFuZ2xlO1xuICAgICAgICBqb2luTm9ybWFsLl9tdWx0KG1pdGVyTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdub3JtYWwnIDogW2pvaW5Ob3JtYWwsIGpvaW5Ob3JtYWwubXVsdCgtMSldXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3ByZWNpc2UoZikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmICogMUU3KSAvIDFFNztcbiAgICB9XG59XG5cbkxpbmVQYWludGVyLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBlYXJjdXQ7XG5cbmZ1bmN0aW9uIGVhcmN1dChkYXRhLCBob2xlSW5kaWNlcywgZGltKSB7XG5cbiAgICBkaW0gPSBkaW0gfHwgMjtcblxuICAgIHZhciBoYXNIb2xlcyA9IGhvbGVJbmRpY2VzICYmIGhvbGVJbmRpY2VzLmxlbmd0aCxcbiAgICAgICAgb3V0ZXJMZW4gPSBoYXNIb2xlcyA/IGhvbGVJbmRpY2VzWzBdICogZGltIDogZGF0YS5sZW5ndGgsXG4gICAgICAgIG91dGVyTm9kZSA9IGxpbmtlZExpc3QoZGF0YSwgMCwgb3V0ZXJMZW4sIGRpbSwgdHJ1ZSksXG4gICAgICAgIHRyaWFuZ2xlcyA9IFtdO1xuXG4gICAgaWYgKCFvdXRlck5vZGUpIHJldHVybiB0cmlhbmdsZXM7XG5cbiAgICB2YXIgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgeCwgeSwgc2l6ZTtcblxuICAgIGlmIChoYXNIb2xlcykgb3V0ZXJOb2RlID0gZWxpbWluYXRlSG9sZXMoZGF0YSwgaG9sZUluZGljZXMsIG91dGVyTm9kZSwgZGltKTtcblxuICAgIC8vIGlmIHRoZSBzaGFwZSBpcyBub3QgdG9vIHNpbXBsZSwgd2UnbGwgdXNlIHotb3JkZXIgY3VydmUgaGFzaCBsYXRlcjsgY2FsY3VsYXRlIHBvbHlnb24gYmJveFxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDgwICogZGltKSB7XG4gICAgICAgIG1pblggPSBtYXhYID0gZGF0YVswXTtcbiAgICAgICAgbWluWSA9IG1heFkgPSBkYXRhWzFdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBkaW07IGkgPCBvdXRlckxlbjsgaSArPSBkaW0pIHtcbiAgICAgICAgICAgIHggPSBkYXRhW2ldO1xuICAgICAgICAgICAgeSA9IGRhdGFbaSArIDFdO1xuICAgICAgICAgICAgaWYgKHggPCBtaW5YKSBtaW5YID0geDtcbiAgICAgICAgICAgIGlmICh5IDwgbWluWSkgbWluWSA9IHk7XG4gICAgICAgICAgICBpZiAoeCA+IG1heFgpIG1heFggPSB4O1xuICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSBtYXhZID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1pblgsIG1pblkgYW5kIHNpemUgYXJlIGxhdGVyIHVzZWQgdG8gdHJhbnNmb3JtIGNvb3JkcyBpbnRvIGludGVnZXJzIGZvciB6LW9yZGVyIGNhbGN1bGF0aW9uXG4gICAgICAgIHNpemUgPSBNYXRoLm1heChtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xuICAgIH1cblxuICAgIGVhcmN1dExpbmtlZChvdXRlck5vZGUsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIHJldHVybiB0cmlhbmdsZXM7XG59XG5cbi8vIGNyZWF0ZSBhIGNpcmN1bGFyIGRvdWJseSBsaW5rZWQgbGlzdCBmcm9tIHBvbHlnb24gcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgd2luZGluZyBvcmRlclxuZnVuY3Rpb24gbGlua2VkTGlzdChkYXRhLCBzdGFydCwgZW5kLCBkaW0sIGNsb2Nrd2lzZSkge1xuICAgIHZhciBpLCBsYXN0O1xuXG4gICAgaWYgKGNsb2Nrd2lzZSA9PT0gKHNpZ25lZEFyZWEoZGF0YSwgc3RhcnQsIGVuZCwgZGltKSA+IDApKSB7XG4gICAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IGRpbSkgbGFzdCA9IGluc2VydE5vZGUoaSwgZGF0YVtpXSwgZGF0YVtpICsgMV0sIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IGVuZCAtIGRpbTsgaSA+PSBzdGFydDsgaSAtPSBkaW0pIGxhc3QgPSBpbnNlcnROb2RlKGksIGRhdGFbaV0sIGRhdGFbaSArIDFdLCBsYXN0KTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCAmJiBlcXVhbHMobGFzdCwgbGFzdC5uZXh0KSkge1xuICAgICAgICByZW1vdmVOb2RlKGxhc3QpO1xuICAgICAgICBsYXN0ID0gbGFzdC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0O1xufVxuXG4vLyBlbGltaW5hdGUgY29saW5lYXIgb3IgZHVwbGljYXRlIHBvaW50c1xuZnVuY3Rpb24gZmlsdGVyUG9pbnRzKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXN0YXJ0KSByZXR1cm4gc3RhcnQ7XG4gICAgaWYgKCFlbmQpIGVuZCA9IHN0YXJ0O1xuXG4gICAgdmFyIHAgPSBzdGFydCxcbiAgICAgICAgYWdhaW47XG4gICAgZG8ge1xuICAgICAgICBhZ2FpbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcC5zdGVpbmVyICYmIChlcXVhbHMocCwgcC5uZXh0KSB8fCBhcmVhKHAucHJldiwgcCwgcC5uZXh0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocCk7XG4gICAgICAgICAgICBwID0gZW5kID0gcC5wcmV2O1xuICAgICAgICAgICAgaWYgKHAgPT09IHAubmV4dCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBhZ2FpbiA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHAgPSBwLm5leHQ7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChhZ2FpbiB8fCBwICE9PSBlbmQpO1xuXG4gICAgcmV0dXJuIGVuZDtcbn1cblxuLy8gbWFpbiBlYXIgc2xpY2luZyBsb29wIHdoaWNoIHRyaWFuZ3VsYXRlcyBhIHBvbHlnb24gKGdpdmVuIGFzIGEgbGlua2VkIGxpc3QpXG5mdW5jdGlvbiBlYXJjdXRMaW5rZWQoZWFyLCB0cmlhbmdsZXMsIGRpbSwgbWluWCwgbWluWSwgc2l6ZSwgcGFzcykge1xuICAgIGlmICghZWFyKSByZXR1cm47XG5cbiAgICAvLyBpbnRlcmxpbmsgcG9seWdvbiBub2RlcyBpbiB6LW9yZGVyXG4gICAgaWYgKCFwYXNzICYmIHNpemUpIGluZGV4Q3VydmUoZWFyLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIHZhciBzdG9wID0gZWFyLFxuICAgICAgICBwcmV2LCBuZXh0O1xuXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGVhcnMsIHNsaWNpbmcgdGhlbSBvbmUgYnkgb25lXG4gICAgd2hpbGUgKGVhci5wcmV2ICE9PSBlYXIubmV4dCkge1xuICAgICAgICBwcmV2ID0gZWFyLnByZXY7XG4gICAgICAgIG5leHQgPSBlYXIubmV4dDtcblxuICAgICAgICBpZiAoc2l6ZSA/IGlzRWFySGFzaGVkKGVhciwgbWluWCwgbWluWSwgc2l6ZSkgOiBpc0VhcihlYXIpKSB7XG4gICAgICAgICAgICAvLyBjdXQgb2ZmIHRoZSB0cmlhbmdsZVxuICAgICAgICAgICAgdHJpYW5nbGVzLnB1c2gocHJldi5pIC8gZGltKTtcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKGVhci5pIC8gZGltKTtcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKG5leHQuaSAvIGRpbSk7XG5cbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZWFyKTtcblxuICAgICAgICAgICAgLy8gc2tpcHBpbmcgdGhlIG5leHQgdmVydGljZSBsZWFkcyB0byBsZXNzIHNsaXZlciB0cmlhbmdsZXNcbiAgICAgICAgICAgIGVhciA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIHN0b3AgPSBuZXh0Lm5leHQ7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFyID0gbmV4dDtcblxuICAgICAgICAvLyBpZiB3ZSBsb29wZWQgdGhyb3VnaCB0aGUgd2hvbGUgcmVtYWluaW5nIHBvbHlnb24gYW5kIGNhbid0IGZpbmQgYW55IG1vcmUgZWFyc1xuICAgICAgICBpZiAoZWFyID09PSBzdG9wKSB7XG4gICAgICAgICAgICAvLyB0cnkgZmlsdGVyaW5nIHBvaW50cyBhbmQgc2xpY2luZyBhZ2FpblxuICAgICAgICAgICAgaWYgKCFwYXNzKSB7XG4gICAgICAgICAgICAgICAgZWFyY3V0TGlua2VkKGZpbHRlclBvaW50cyhlYXIpLCB0cmlhbmdsZXMsIGRpbSwgbWluWCwgbWluWSwgc2l6ZSwgMSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlkbid0IHdvcmssIHRyeSBjdXJpbmcgYWxsIHNtYWxsIHNlbGYtaW50ZXJzZWN0aW9ucyBsb2NhbGx5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBlYXIgPSBjdXJlTG9jYWxJbnRlcnNlY3Rpb25zKGVhciwgdHJpYW5nbGVzLCBkaW0pO1xuICAgICAgICAgICAgICAgIGVhcmN1dExpbmtlZChlYXIsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplLCAyKTtcblxuICAgICAgICAgICAgLy8gYXMgYSBsYXN0IHJlc29ydCwgdHJ5IHNwbGl0dGluZyB0aGUgcmVtYWluaW5nIHBvbHlnb24gaW50byB0d29cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFzcyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNwbGl0RWFyY3V0KGVhciwgdHJpYW5nbGVzLCBkaW0sIG1pblgsIG1pblksIHNpemUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2hlY2sgd2hldGhlciBhIHBvbHlnb24gbm9kZSBmb3JtcyBhIHZhbGlkIGVhciB3aXRoIGFkamFjZW50IG5vZGVzXG5mdW5jdGlvbiBpc0VhcihlYXIpIHtcbiAgICB2YXIgYSA9IGVhci5wcmV2LFxuICAgICAgICBiID0gZWFyLFxuICAgICAgICBjID0gZWFyLm5leHQ7XG5cbiAgICBpZiAoYXJlYShhLCBiLCBjKSA+PSAwKSByZXR1cm4gZmFsc2U7IC8vIHJlZmxleCwgY2FuJ3QgYmUgYW4gZWFyXG5cbiAgICAvLyBub3cgbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgb3RoZXIgcG9pbnRzIGluc2lkZSB0aGUgcG90ZW50aWFsIGVhclxuICAgIHZhciBwID0gZWFyLm5leHQubmV4dDtcblxuICAgIHdoaWxlIChwICE9PSBlYXIucHJldikge1xuICAgICAgICBpZiAocG9pbnRJblRyaWFuZ2xlKGEueCwgYS55LCBiLngsIGIueSwgYy54LCBjLnksIHAueCwgcC55KSAmJlxuICAgICAgICAgICAgYXJlYShwLnByZXYsIHAsIHAubmV4dCkgPj0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0Vhckhhc2hlZChlYXIsIG1pblgsIG1pblksIHNpemUpIHtcbiAgICB2YXIgYSA9IGVhci5wcmV2LFxuICAgICAgICBiID0gZWFyLFxuICAgICAgICBjID0gZWFyLm5leHQ7XG5cbiAgICBpZiAoYXJlYShhLCBiLCBjKSA+PSAwKSByZXR1cm4gZmFsc2U7IC8vIHJlZmxleCwgY2FuJ3QgYmUgYW4gZWFyXG5cbiAgICAvLyB0cmlhbmdsZSBiYm94OyBtaW4gJiBtYXggYXJlIGNhbGN1bGF0ZWQgbGlrZSB0aGlzIGZvciBzcGVlZFxuICAgIHZhciBtaW5UWCA9IGEueCA8IGIueCA/IChhLnggPCBjLnggPyBhLnggOiBjLngpIDogKGIueCA8IGMueCA/IGIueCA6IGMueCksXG4gICAgICAgIG1pblRZID0gYS55IDwgYi55ID8gKGEueSA8IGMueSA/IGEueSA6IGMueSkgOiAoYi55IDwgYy55ID8gYi55IDogYy55KSxcbiAgICAgICAgbWF4VFggPSBhLnggPiBiLnggPyAoYS54ID4gYy54ID8gYS54IDogYy54KSA6IChiLnggPiBjLnggPyBiLnggOiBjLngpLFxuICAgICAgICBtYXhUWSA9IGEueSA+IGIueSA/IChhLnkgPiBjLnkgPyBhLnkgOiBjLnkpIDogKGIueSA+IGMueSA/IGIueSA6IGMueSk7XG5cbiAgICAvLyB6LW9yZGVyIHJhbmdlIGZvciB0aGUgY3VycmVudCB0cmlhbmdsZSBiYm94O1xuICAgIHZhciBtaW5aID0gek9yZGVyKG1pblRYLCBtaW5UWSwgbWluWCwgbWluWSwgc2l6ZSksXG4gICAgICAgIG1heFogPSB6T3JkZXIobWF4VFgsIG1heFRZLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIC8vIGZpcnN0IGxvb2sgZm9yIHBvaW50cyBpbnNpZGUgdGhlIHRyaWFuZ2xlIGluIGluY3JlYXNpbmcgei1vcmRlclxuICAgIHZhciBwID0gZWFyLm5leHRaO1xuXG4gICAgd2hpbGUgKHAgJiYgcC56IDw9IG1heFopIHtcbiAgICAgICAgaWYgKHAgIT09IGVhci5wcmV2ICYmIHAgIT09IGVhci5uZXh0ICYmXG4gICAgICAgICAgICBwb2ludEluVHJpYW5nbGUoYS54LCBhLnksIGIueCwgYi55LCBjLngsIGMueSwgcC54LCBwLnkpICYmXG4gICAgICAgICAgICBhcmVhKHAucHJldiwgcCwgcC5uZXh0KSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHAgPSBwLm5leHRaO1xuICAgIH1cblxuICAgIC8vIHRoZW4gbG9vayBmb3IgcG9pbnRzIGluIGRlY3JlYXNpbmcgei1vcmRlclxuICAgIHAgPSBlYXIucHJldlo7XG5cbiAgICB3aGlsZSAocCAmJiBwLnogPj0gbWluWikge1xuICAgICAgICBpZiAocCAhPT0gZWFyLnByZXYgJiYgcCAhPT0gZWFyLm5leHQgJiZcbiAgICAgICAgICAgIHBvaW50SW5UcmlhbmdsZShhLngsIGEueSwgYi54LCBiLnksIGMueCwgYy55LCBwLngsIHAueSkgJiZcbiAgICAgICAgICAgIGFyZWEocC5wcmV2LCBwLCBwLm5leHQpID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcCA9IHAucHJldlo7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGdvIHRocm91Z2ggYWxsIHBvbHlnb24gbm9kZXMgYW5kIGN1cmUgc21hbGwgbG9jYWwgc2VsZi1pbnRlcnNlY3Rpb25zXG5mdW5jdGlvbiBjdXJlTG9jYWxJbnRlcnNlY3Rpb25zKHN0YXJ0LCB0cmlhbmdsZXMsIGRpbSkge1xuICAgIHZhciBwID0gc3RhcnQ7XG4gICAgZG8ge1xuICAgICAgICB2YXIgYSA9IHAucHJldixcbiAgICAgICAgICAgIGIgPSBwLm5leHQubmV4dDtcblxuICAgICAgICBpZiAoIWVxdWFscyhhLCBiKSAmJiBpbnRlcnNlY3RzKGEsIHAsIHAubmV4dCwgYikgJiYgbG9jYWxseUluc2lkZShhLCBiKSAmJiBsb2NhbGx5SW5zaWRlKGIsIGEpKSB7XG5cbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKGEuaSAvIGRpbSk7XG4gICAgICAgICAgICB0cmlhbmdsZXMucHVzaChwLmkgLyBkaW0pO1xuICAgICAgICAgICAgdHJpYW5nbGVzLnB1c2goYi5pIC8gZGltKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHR3byBub2RlcyBpbnZvbHZlZFxuICAgICAgICAgICAgcmVtb3ZlTm9kZShwKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocC5uZXh0KTtcblxuICAgICAgICAgICAgcCA9IHN0YXJ0ID0gYjtcbiAgICAgICAgfVxuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IHN0YXJ0KTtcblxuICAgIHJldHVybiBwO1xufVxuXG4vLyB0cnkgc3BsaXR0aW5nIHBvbHlnb24gaW50byB0d28gYW5kIHRyaWFuZ3VsYXRlIHRoZW0gaW5kZXBlbmRlbnRseVxuZnVuY3Rpb24gc3BsaXRFYXJjdXQoc3RhcnQsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKSB7XG4gICAgLy8gbG9vayBmb3IgYSB2YWxpZCBkaWFnb25hbCB0aGF0IGRpdmlkZXMgdGhlIHBvbHlnb24gaW50byB0d29cbiAgICB2YXIgYSA9IHN0YXJ0O1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGIgPSBhLm5leHQubmV4dDtcbiAgICAgICAgd2hpbGUgKGIgIT09IGEucHJldikge1xuICAgICAgICAgICAgaWYgKGEuaSAhPT0gYi5pICYmIGlzVmFsaWREaWFnb25hbChhLCBiKSkge1xuICAgICAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBwb2x5Z29uIGluIHR3byBieSB0aGUgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHNwbGl0UG9seWdvbihhLCBiKTtcblxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBjb2xpbmVhciBwb2ludHMgYXJvdW5kIHRoZSBjdXRzXG4gICAgICAgICAgICAgICAgYSA9IGZpbHRlclBvaW50cyhhLCBhLm5leHQpO1xuICAgICAgICAgICAgICAgIGMgPSBmaWx0ZXJQb2ludHMoYywgYy5uZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vIHJ1biBlYXJjdXQgb24gZWFjaCBoYWxmXG4gICAgICAgICAgICAgICAgZWFyY3V0TGlua2VkKGEsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKTtcbiAgICAgICAgICAgICAgICBlYXJjdXRMaW5rZWQoYywgdHJpYW5nbGVzLCBkaW0sIG1pblgsIG1pblksIHNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIgPSBiLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgYSA9IGEubmV4dDtcbiAgICB9IHdoaWxlIChhICE9PSBzdGFydCk7XG59XG5cbi8vIGxpbmsgZXZlcnkgaG9sZSBpbnRvIHRoZSBvdXRlciBsb29wLCBwcm9kdWNpbmcgYSBzaW5nbGUtcmluZyBwb2x5Z29uIHdpdGhvdXQgaG9sZXNcbmZ1bmN0aW9uIGVsaW1pbmF0ZUhvbGVzKGRhdGEsIGhvbGVJbmRpY2VzLCBvdXRlck5vZGUsIGRpbSkge1xuICAgIHZhciBxdWV1ZSA9IFtdLFxuICAgICAgICBpLCBsZW4sIHN0YXJ0LCBlbmQsIGxpc3Q7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBob2xlSW5kaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzdGFydCA9IGhvbGVJbmRpY2VzW2ldICogZGltO1xuICAgICAgICBlbmQgPSBpIDwgbGVuIC0gMSA/IGhvbGVJbmRpY2VzW2kgKyAxXSAqIGRpbSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICBsaXN0ID0gbGlua2VkTGlzdChkYXRhLCBzdGFydCwgZW5kLCBkaW0sIGZhbHNlKTtcbiAgICAgICAgaWYgKGxpc3QgPT09IGxpc3QubmV4dCkgbGlzdC5zdGVpbmVyID0gdHJ1ZTtcbiAgICAgICAgcXVldWUucHVzaChnZXRMZWZ0bW9zdChsaXN0KSk7XG4gICAgfVxuXG4gICAgcXVldWUuc29ydChjb21wYXJlWCk7XG5cbiAgICAvLyBwcm9jZXNzIGhvbGVzIGZyb20gbGVmdCB0byByaWdodFxuICAgIGZvciAoaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGltaW5hdGVIb2xlKHF1ZXVlW2ldLCBvdXRlck5vZGUpO1xuICAgICAgICBvdXRlck5vZGUgPSBmaWx0ZXJQb2ludHMob3V0ZXJOb2RlLCBvdXRlck5vZGUubmV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dGVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVgoYSwgYikge1xuICAgIHJldHVybiBhLnggLSBiLng7XG59XG5cbi8vIGZpbmQgYSBicmlkZ2UgYmV0d2VlbiB2ZXJ0aWNlcyB0aGF0IGNvbm5lY3RzIGhvbGUgd2l0aCBhbiBvdXRlciByaW5nIGFuZCBhbmQgbGluayBpdFxuZnVuY3Rpb24gZWxpbWluYXRlSG9sZShob2xlLCBvdXRlck5vZGUpIHtcbiAgICBvdXRlck5vZGUgPSBmaW5kSG9sZUJyaWRnZShob2xlLCBvdXRlck5vZGUpO1xuICAgIGlmIChvdXRlck5vZGUpIHtcbiAgICAgICAgdmFyIGIgPSBzcGxpdFBvbHlnb24ob3V0ZXJOb2RlLCBob2xlKTtcbiAgICAgICAgZmlsdGVyUG9pbnRzKGIsIGIubmV4dCk7XG4gICAgfVxufVxuXG4vLyBEYXZpZCBFYmVybHkncyBhbGdvcml0aG0gZm9yIGZpbmRpbmcgYSBicmlkZ2UgYmV0d2VlbiBob2xlIGFuZCBvdXRlciBwb2x5Z29uXG5mdW5jdGlvbiBmaW5kSG9sZUJyaWRnZShob2xlLCBvdXRlck5vZGUpIHtcbiAgICB2YXIgcCA9IG91dGVyTm9kZSxcbiAgICAgICAgaHggPSBob2xlLngsXG4gICAgICAgIGh5ID0gaG9sZS55LFxuICAgICAgICBxeCA9IC1JbmZpbml0eSxcbiAgICAgICAgbTtcblxuICAgIC8vIGZpbmQgYSBzZWdtZW50IGludGVyc2VjdGVkIGJ5IGEgcmF5IGZyb20gdGhlIGhvbGUncyBsZWZ0bW9zdCBwb2ludCB0byB0aGUgbGVmdDtcbiAgICAvLyBzZWdtZW50J3MgZW5kcG9pbnQgd2l0aCBsZXNzZXIgeCB3aWxsIGJlIHBvdGVudGlhbCBjb25uZWN0aW9uIHBvaW50XG4gICAgZG8ge1xuICAgICAgICBpZiAoaHkgPD0gcC55ICYmIGh5ID49IHAubmV4dC55KSB7XG4gICAgICAgICAgICB2YXIgeCA9IHAueCArIChoeSAtIHAueSkgKiAocC5uZXh0LnggLSBwLngpIC8gKHAubmV4dC55IC0gcC55KTtcbiAgICAgICAgICAgIGlmICh4IDw9IGh4ICYmIHggPiBxeCkge1xuICAgICAgICAgICAgICAgIHF4ID0geDtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gaHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh5ID09PSBwLnkpIHJldHVybiBwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHkgPT09IHAubmV4dC55KSByZXR1cm4gcC5uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtID0gcC54IDwgcC5uZXh0LnggPyBwIDogcC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfSB3aGlsZSAocCAhPT0gb3V0ZXJOb2RlKTtcblxuICAgIGlmICghbSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoaHggPT09IHF4KSByZXR1cm4gbS5wcmV2OyAvLyBob2xlIHRvdWNoZXMgb3V0ZXIgc2VnbWVudDsgcGljayBsb3dlciBlbmRwb2ludFxuXG4gICAgLy8gbG9vayBmb3IgcG9pbnRzIGluc2lkZSB0aGUgdHJpYW5nbGUgb2YgaG9sZSBwb2ludCwgc2VnbWVudCBpbnRlcnNlY3Rpb24gYW5kIGVuZHBvaW50O1xuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBwb2ludHMgZm91bmQsIHdlIGhhdmUgYSB2YWxpZCBjb25uZWN0aW9uO1xuICAgIC8vIG90aGVyd2lzZSBjaG9vc2UgdGhlIHBvaW50IG9mIHRoZSBtaW5pbXVtIGFuZ2xlIHdpdGggdGhlIHJheSBhcyBjb25uZWN0aW9uIHBvaW50XG5cbiAgICB2YXIgc3RvcCA9IG0sXG4gICAgICAgIG14ID0gbS54LFxuICAgICAgICBteSA9IG0ueSxcbiAgICAgICAgdGFuTWluID0gSW5maW5pdHksXG4gICAgICAgIHRhbjtcblxuICAgIHAgPSBtLm5leHQ7XG5cbiAgICB3aGlsZSAocCAhPT0gc3RvcCkge1xuICAgICAgICBpZiAoaHggPj0gcC54ICYmIHAueCA+PSBteCAmJlxuICAgICAgICAgICAgICAgIHBvaW50SW5UcmlhbmdsZShoeSA8IG15ID8gaHggOiBxeCwgaHksIG14LCBteSwgaHkgPCBteSA/IHF4IDogaHgsIGh5LCBwLngsIHAueSkpIHtcblxuICAgICAgICAgICAgdGFuID0gTWF0aC5hYnMoaHkgLSBwLnkpIC8gKGh4IC0gcC54KTsgLy8gdGFuZ2VudGlhbFxuXG4gICAgICAgICAgICBpZiAoKHRhbiA8IHRhbk1pbiB8fCAodGFuID09PSB0YW5NaW4gJiYgcC54ID4gbS54KSkgJiYgbG9jYWxseUluc2lkZShwLCBob2xlKSkge1xuICAgICAgICAgICAgICAgIG0gPSBwO1xuICAgICAgICAgICAgICAgIHRhbk1pbiA9IHRhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIGludGVybGluayBwb2x5Z29uIG5vZGVzIGluIHotb3JkZXJcbmZ1bmN0aW9uIGluZGV4Q3VydmUoc3RhcnQsIG1pblgsIG1pblksIHNpemUpIHtcbiAgICB2YXIgcCA9IHN0YXJ0O1xuICAgIGRvIHtcbiAgICAgICAgaWYgKHAueiA9PT0gbnVsbCkgcC56ID0gek9yZGVyKHAueCwgcC55LCBtaW5YLCBtaW5ZLCBzaXplKTtcbiAgICAgICAgcC5wcmV2WiA9IHAucHJldjtcbiAgICAgICAgcC5uZXh0WiA9IHAubmV4dDtcbiAgICAgICAgcCA9IHAubmV4dDtcbiAgICB9IHdoaWxlIChwICE9PSBzdGFydCk7XG5cbiAgICBwLnByZXZaLm5leHRaID0gbnVsbDtcbiAgICBwLnByZXZaID0gbnVsbDtcblxuICAgIHNvcnRMaW5rZWQocCk7XG59XG5cbi8vIFNpbW9uIFRhdGhhbSdzIGxpbmtlZCBsaXN0IG1lcmdlIHNvcnQgYWxnb3JpdGhtXG4vLyBodHRwOi8vd3d3LmNoaWFyay5ncmVlbmVuZC5vcmcudWsvfnNndGF0aGFtL2FsZ29yaXRobXMvbGlzdHNvcnQuaHRtbFxuZnVuY3Rpb24gc29ydExpbmtlZChsaXN0KSB7XG4gICAgdmFyIGksIHAsIHEsIGUsIHRhaWwsIG51bU1lcmdlcywgcFNpemUsIHFTaXplLFxuICAgICAgICBpblNpemUgPSAxO1xuXG4gICAgZG8ge1xuICAgICAgICBwID0gbGlzdDtcbiAgICAgICAgbGlzdCA9IG51bGw7XG4gICAgICAgIHRhaWwgPSBudWxsO1xuICAgICAgICBudW1NZXJnZXMgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwKSB7XG4gICAgICAgICAgICBudW1NZXJnZXMrKztcbiAgICAgICAgICAgIHEgPSBwO1xuICAgICAgICAgICAgcFNpemUgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcFNpemUrKztcbiAgICAgICAgICAgICAgICBxID0gcS5uZXh0WjtcbiAgICAgICAgICAgICAgICBpZiAoIXEpIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxU2l6ZSA9IGluU2l6ZTtcblxuICAgICAgICAgICAgd2hpbGUgKHBTaXplID4gMCB8fCAocVNpemUgPiAwICYmIHEpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHE7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBxU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocVNpemUgPT09IDAgfHwgIXEpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBwU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocC56IDw9IHEueikge1xuICAgICAgICAgICAgICAgICAgICBlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcCA9IHAubmV4dFo7XG4gICAgICAgICAgICAgICAgICAgIHBTaXplLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHE7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBxU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YWlsKSB0YWlsLm5leHRaID0gZTtcbiAgICAgICAgICAgICAgICBlbHNlIGxpc3QgPSBlO1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2WiA9IHRhaWw7XG4gICAgICAgICAgICAgICAgdGFpbCA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFpbC5uZXh0WiA9IG51bGw7XG4gICAgICAgIGluU2l6ZSAqPSAyO1xuXG4gICAgfSB3aGlsZSAobnVtTWVyZ2VzID4gMSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuLy8gei1vcmRlciBvZiBhIHBvaW50IGdpdmVuIGNvb3JkcyBhbmQgc2l6ZSBvZiB0aGUgZGF0YSBib3VuZGluZyBib3hcbmZ1bmN0aW9uIHpPcmRlcih4LCB5LCBtaW5YLCBtaW5ZLCBzaXplKSB7XG4gICAgLy8gY29vcmRzIGFyZSB0cmFuc2Zvcm1lZCBpbnRvIG5vbi1uZWdhdGl2ZSAxNS1iaXQgaW50ZWdlciByYW5nZVxuICAgIHggPSAzMjc2NyAqICh4IC0gbWluWCkgLyBzaXplO1xuICAgIHkgPSAzMjc2NyAqICh5IC0gbWluWSkgLyBzaXplO1xuXG4gICAgeCA9ICh4IHwgKHggPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgICB4ID0gKHggfCAoeCA8PCA0KSkgJiAweDBGMEYwRjBGO1xuICAgIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gICAgeCA9ICh4IHwgKHggPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICAgIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gICAgeSA9ICh5IHwgKHkgPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgICB5ID0gKHkgfCAoeSA8PCAyKSkgJiAweDMzMzMzMzMzO1xuICAgIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgICByZXR1cm4geCB8ICh5IDw8IDEpO1xufVxuXG4vLyBmaW5kIHRoZSBsZWZ0bW9zdCBub2RlIG9mIGEgcG9seWdvbiByaW5nXG5mdW5jdGlvbiBnZXRMZWZ0bW9zdChzdGFydCkge1xuICAgIHZhciBwID0gc3RhcnQsXG4gICAgICAgIGxlZnRtb3N0ID0gc3RhcnQ7XG4gICAgZG8ge1xuICAgICAgICBpZiAocC54IDwgbGVmdG1vc3QueCkgbGVmdG1vc3QgPSBwO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IHN0YXJ0KTtcblxuICAgIHJldHVybiBsZWZ0bW9zdDtcbn1cblxuLy8gY2hlY2sgaWYgYSBwb2ludCBsaWVzIHdpdGhpbiBhIGNvbnZleCB0cmlhbmdsZVxuZnVuY3Rpb24gcG9pbnRJblRyaWFuZ2xlKGF4LCBheSwgYngsIGJ5LCBjeCwgY3ksIHB4LCBweSkge1xuICAgIHJldHVybiAoY3ggLSBweCkgKiAoYXkgLSBweSkgLSAoYXggLSBweCkgKiAoY3kgLSBweSkgPj0gMCAmJlxuICAgICAgICAgICAoYXggLSBweCkgKiAoYnkgLSBweSkgLSAoYnggLSBweCkgKiAoYXkgLSBweSkgPj0gMCAmJlxuICAgICAgICAgICAoYnggLSBweCkgKiAoY3kgLSBweSkgLSAoY3ggLSBweCkgKiAoYnkgLSBweSkgPj0gMDtcbn1cblxuLy8gY2hlY2sgaWYgYSBkaWFnb25hbCBiZXR3ZWVuIHR3byBwb2x5Z29uIG5vZGVzIGlzIHZhbGlkIChsaWVzIGluIHBvbHlnb24gaW50ZXJpb3IpXG5mdW5jdGlvbiBpc1ZhbGlkRGlhZ29uYWwoYSwgYikge1xuICAgIHJldHVybiBhLm5leHQuaSAhPT0gYi5pICYmIGEucHJldi5pICE9PSBiLmkgJiYgIWludGVyc2VjdHNQb2x5Z29uKGEsIGIpICYmXG4gICAgICAgICAgIGxvY2FsbHlJbnNpZGUoYSwgYikgJiYgbG9jYWxseUluc2lkZShiLCBhKSAmJiBtaWRkbGVJbnNpZGUoYSwgYik7XG59XG5cbi8vIHNpZ25lZCBhcmVhIG9mIGEgdHJpYW5nbGVcbmZ1bmN0aW9uIGFyZWEocCwgcSwgcikge1xuICAgIHJldHVybiAocS55IC0gcC55KSAqIChyLnggLSBxLngpIC0gKHEueCAtIHAueCkgKiAoci55IC0gcS55KTtcbn1cblxuLy8gY2hlY2sgaWYgdHdvIHBvaW50cyBhcmUgZXF1YWxcbmZ1bmN0aW9uIGVxdWFscyhwMSwgcDIpIHtcbiAgICByZXR1cm4gcDEueCA9PT0gcDIueCAmJiBwMS55ID09PSBwMi55O1xufVxuXG4vLyBjaGVjayBpZiB0d28gc2VnbWVudHMgaW50ZXJzZWN0XG5mdW5jdGlvbiBpbnRlcnNlY3RzKHAxLCBxMSwgcDIsIHEyKSB7XG4gICAgaWYgKChlcXVhbHMocDEsIHExKSAmJiBlcXVhbHMocDIsIHEyKSkgfHxcbiAgICAgICAgKGVxdWFscyhwMSwgcTIpICYmIGVxdWFscyhwMiwgcTEpKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFyZWEocDEsIHExLCBwMikgPiAwICE9PSBhcmVhKHAxLCBxMSwgcTIpID4gMCAmJlxuICAgICAgICAgICBhcmVhKHAyLCBxMiwgcDEpID4gMCAhPT0gYXJlYShwMiwgcTIsIHExKSA+IDA7XG59XG5cbi8vIGNoZWNrIGlmIGEgcG9seWdvbiBkaWFnb25hbCBpbnRlcnNlY3RzIGFueSBwb2x5Z29uIHNlZ21lbnRzXG5mdW5jdGlvbiBpbnRlcnNlY3RzUG9seWdvbihhLCBiKSB7XG4gICAgdmFyIHAgPSBhO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKHAuaSAhPT0gYS5pICYmIHAubmV4dC5pICE9PSBhLmkgJiYgcC5pICE9PSBiLmkgJiYgcC5uZXh0LmkgIT09IGIuaSAmJlxuICAgICAgICAgICAgICAgIGludGVyc2VjdHMocCwgcC5uZXh0LCBhLCBiKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfSB3aGlsZSAocCAhPT0gYSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNoZWNrIGlmIGEgcG9seWdvbiBkaWFnb25hbCBpcyBsb2NhbGx5IGluc2lkZSB0aGUgcG9seWdvblxuZnVuY3Rpb24gbG9jYWxseUluc2lkZShhLCBiKSB7XG4gICAgcmV0dXJuIGFyZWEoYS5wcmV2LCBhLCBhLm5leHQpIDwgMCA/XG4gICAgICAgIGFyZWEoYSwgYiwgYS5uZXh0KSA+PSAwICYmIGFyZWEoYSwgYS5wcmV2LCBiKSA+PSAwIDpcbiAgICAgICAgYXJlYShhLCBiLCBhLnByZXYpIDwgMCB8fCBhcmVhKGEsIGEubmV4dCwgYikgPCAwO1xufVxuXG4vLyBjaGVjayBpZiB0aGUgbWlkZGxlIHBvaW50IG9mIGEgcG9seWdvbiBkaWFnb25hbCBpcyBpbnNpZGUgdGhlIHBvbHlnb25cbmZ1bmN0aW9uIG1pZGRsZUluc2lkZShhLCBiKSB7XG4gICAgdmFyIHAgPSBhLFxuICAgICAgICBpbnNpZGUgPSBmYWxzZSxcbiAgICAgICAgcHggPSAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHB5ID0gKGEueSArIGIueSkgLyAyO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKCgocC55ID4gcHkpICE9PSAocC5uZXh0LnkgPiBweSkpICYmIChweCA8IChwLm5leHQueCAtIHAueCkgKiAocHkgLSBwLnkpIC8gKHAubmV4dC55IC0gcC55KSArIHAueCkpXG4gICAgICAgICAgICBpbnNpZGUgPSAhaW5zaWRlO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IGEpO1xuXG4gICAgcmV0dXJuIGluc2lkZTtcbn1cblxuLy8gbGluayB0d28gcG9seWdvbiB2ZXJ0aWNlcyB3aXRoIGEgYnJpZGdlOyBpZiB0aGUgdmVydGljZXMgYmVsb25nIHRvIHRoZSBzYW1lIHJpbmcsIGl0IHNwbGl0cyBwb2x5Z29uIGludG8gdHdvO1xuLy8gaWYgb25lIGJlbG9uZ3MgdG8gdGhlIG91dGVyIHJpbmcgYW5kIGFub3RoZXIgdG8gYSBob2xlLCBpdCBtZXJnZXMgaXQgaW50byBhIHNpbmdsZSByaW5nXG5mdW5jdGlvbiBzcGxpdFBvbHlnb24oYSwgYikge1xuICAgIHZhciBhMiA9IG5ldyBOb2RlKGEuaSwgYS54LCBhLnkpLFxuICAgICAgICBiMiA9IG5ldyBOb2RlKGIuaSwgYi54LCBiLnkpLFxuICAgICAgICBhbiA9IGEubmV4dCxcbiAgICAgICAgYnAgPSBiLnByZXY7XG5cbiAgICBhLm5leHQgPSBiO1xuICAgIGIucHJldiA9IGE7XG5cbiAgICBhMi5uZXh0ID0gYW47XG4gICAgYW4ucHJldiA9IGEyO1xuXG4gICAgYjIubmV4dCA9IGEyO1xuICAgIGEyLnByZXYgPSBiMjtcblxuICAgIGJwLm5leHQgPSBiMjtcbiAgICBiMi5wcmV2ID0gYnA7XG5cbiAgICByZXR1cm4gYjI7XG59XG5cbi8vIGNyZWF0ZSBhIG5vZGUgYW5kIG9wdGlvbmFsbHkgbGluayBpdCB3aXRoIHByZXZpb3VzIG9uZSAoaW4gYSBjaXJjdWxhciBkb3VibHkgbGlua2VkIGxpc3QpXG5mdW5jdGlvbiBpbnNlcnROb2RlKGksIHgsIHksIGxhc3QpIHtcbiAgICB2YXIgcCA9IG5ldyBOb2RlKGksIHgsIHkpO1xuXG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHAucHJldiA9IHA7XG4gICAgICAgIHAubmV4dCA9IHA7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBwLm5leHQgPSBsYXN0Lm5leHQ7XG4gICAgICAgIHAucHJldiA9IGxhc3Q7XG4gICAgICAgIGxhc3QubmV4dC5wcmV2ID0gcDtcbiAgICAgICAgbGFzdC5uZXh0ID0gcDtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUocCkge1xuICAgIHAubmV4dC5wcmV2ID0gcC5wcmV2O1xuICAgIHAucHJldi5uZXh0ID0gcC5uZXh0O1xuXG4gICAgaWYgKHAucHJldlopIHAucHJldloubmV4dFogPSBwLm5leHRaO1xuICAgIGlmIChwLm5leHRaKSBwLm5leHRaLnByZXZaID0gcC5wcmV2Wjtcbn1cblxuZnVuY3Rpb24gTm9kZShpLCB4LCB5KSB7XG4gICAgLy8gdmVydGljZSBpbmRleCBpbiBjb29yZGluYXRlcyBhcnJheVxuICAgIHRoaXMuaSA9IGk7XG5cbiAgICAvLyB2ZXJ0ZXggY29vcmRpbmF0ZXNcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICAvLyBwcmV2aW91cyBhbmQgbmV4dCB2ZXJ0aWNlIG5vZGVzIGluIGEgcG9seWdvbiByaW5nXG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuXG4gICAgLy8gei1vcmRlciBjdXJ2ZSB2YWx1ZVxuICAgIHRoaXMueiA9IG51bGw7XG5cbiAgICAvLyBwcmV2aW91cyBhbmQgbmV4dCBub2RlcyBpbiB6LW9yZGVyXG4gICAgdGhpcy5wcmV2WiA9IG51bGw7XG4gICAgdGhpcy5uZXh0WiA9IG51bGw7XG5cbiAgICAvLyBpbmRpY2F0ZXMgd2hldGhlciB0aGlzIGlzIGEgc3RlaW5lciBwb2ludFxuICAgIHRoaXMuc3RlaW5lciA9IGZhbHNlO1xufVxuXG4vLyByZXR1cm4gYSBwZXJjZW50YWdlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcG9seWdvbiBhcmVhIGFuZCBpdHMgdHJpYW5ndWxhdGlvbiBhcmVhO1xuLy8gdXNlZCB0byB2ZXJpZnkgY29ycmVjdG5lc3Mgb2YgdHJpYW5ndWxhdGlvblxuZWFyY3V0LmRldmlhdGlvbiA9IGZ1bmN0aW9uIChkYXRhLCBob2xlSW5kaWNlcywgZGltLCB0cmlhbmdsZXMpIHtcbiAgICB2YXIgaGFzSG9sZXMgPSBob2xlSW5kaWNlcyAmJiBob2xlSW5kaWNlcy5sZW5ndGg7XG4gICAgdmFyIG91dGVyTGVuID0gaGFzSG9sZXMgPyBob2xlSW5kaWNlc1swXSAqIGRpbSA6IGRhdGEubGVuZ3RoO1xuXG4gICAgdmFyIHBvbHlnb25BcmVhID0gTWF0aC5hYnMoc2lnbmVkQXJlYShkYXRhLCAwLCBvdXRlckxlbiwgZGltKSk7XG4gICAgaWYgKGhhc0hvbGVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBob2xlSW5kaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gaG9sZUluZGljZXNbaV0gKiBkaW07XG4gICAgICAgICAgICB2YXIgZW5kID0gaSA8IGxlbiAtIDEgPyBob2xlSW5kaWNlc1tpICsgMV0gKiBkaW0gOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHBvbHlnb25BcmVhIC09IE1hdGguYWJzKHNpZ25lZEFyZWEoZGF0YSwgc3RhcnQsIGVuZCwgZGltKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJpYW5nbGVzQXJlYSA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgYSA9IHRyaWFuZ2xlc1tpXSAqIGRpbTtcbiAgICAgICAgdmFyIGIgPSB0cmlhbmdsZXNbaSArIDFdICogZGltO1xuICAgICAgICB2YXIgYyA9IHRyaWFuZ2xlc1tpICsgMl0gKiBkaW07XG4gICAgICAgIHRyaWFuZ2xlc0FyZWEgKz0gTWF0aC5hYnMoXG4gICAgICAgICAgICAoZGF0YVthXSAtIGRhdGFbY10pICogKGRhdGFbYiArIDFdIC0gZGF0YVthICsgMV0pIC1cbiAgICAgICAgICAgIChkYXRhW2FdIC0gZGF0YVtiXSkgKiAoZGF0YVtjICsgMV0gLSBkYXRhW2EgKyAxXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwb2x5Z29uQXJlYSA9PT0gMCAmJiB0cmlhbmdsZXNBcmVhID09PSAwID8gMCA6XG4gICAgICAgIE1hdGguYWJzKCh0cmlhbmdsZXNBcmVhIC0gcG9seWdvbkFyZWEpIC8gcG9seWdvbkFyZWEpO1xufTtcblxuZnVuY3Rpb24gc2lnbmVkQXJlYShkYXRhLCBzdGFydCwgZW5kLCBkaW0pIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQsIGogPSBlbmQgLSBkaW07IGkgPCBlbmQ7IGkgKz0gZGltKSB7XG4gICAgICAgIHN1bSArPSAoZGF0YVtqXSAtIGRhdGFbaV0pICogKGRhdGFbaSArIDFdICsgZGF0YVtqICsgMV0pO1xuICAgICAgICBqID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuLy8gdHVybiBhIHBvbHlnb24gaW4gYSBtdWx0aS1kaW1lbnNpb25hbCBhcnJheSBmb3JtIChlLmcuIGFzIGluIEdlb0pTT04pIGludG8gYSBmb3JtIEVhcmN1dCBhY2NlcHRzXG5lYXJjdXQuZmxhdHRlbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIGRpbSA9IGRhdGFbMF1bMF0ubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSB7dmVydGljZXM6IFtdLCBob2xlczogW10sIGRpbWVuc2lvbnM6IGRpbX0sXG4gICAgICAgIGhvbGVJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRpbTsgZCsrKSByZXN1bHQudmVydGljZXMucHVzaChkYXRhW2ldW2pdW2RdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGhvbGVJbmRleCArPSBkYXRhW2kgLSAxXS5sZW5ndGg7XG4gICAgICAgICAgICByZXN1bHQuaG9sZXMucHVzaChob2xlSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0ICogYXMgbWFwdGFsa3MgZnJvbSAnbWFwdGFsa3MnO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9QYWludGVyJztcbmltcG9ydCBlYXJjdXQgZnJvbSAnZWFyY3V0JztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuL1BhaW50ZXInO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgIC8v6L6T5YWl5pWw5o2u5Li657uP57qs5bqm5pe2LCDovazljJbkuLoyZCBwb2ludFxuICAgICdwcm9qZWN0JyA6IHRydWVcbn07XG5cbi8qKlxuICogQSBQb2x5Z29uIFBhaW50ZXIgdG8gcHJvZHVjZSB2ZXJ0ZXggY29vcmRpbmF0ZXMgZm9yIFdlYkdMIHNoYWRlcnMuIDxicj5cbiAqXG4gKiBAYXV0aG9yIGZ1emhlbm5cbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uUGFpbnRlciBleHRlbmRzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBtYXAsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZ2wsIG1hcCwgb3B0aW9ucyk7XG4gICAgICAgIC8vIOe7k+aenOaVsOe7hFxuICAgICAgICAvLy0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMudmVydGV4QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdHlsZUFycmF5ID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue57uT5p6c5pWw57uEXG4gICAgICogQHJldHVybiB7T2JqZWN0fSDnu5PmnpzmlbDnu4RcbiAgICAgKi9cbiAgICBnZXRBcnJheXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAndmVydGV4QXJyYXknICA6IHRoaXMudmVydGV4QXJyYXksXG4gICAgICAgICAgICAnZWxlbWVudEFycmF5JyA6IHRoaXMuZWxlbWVudEFycmF5LFxuICAgICAgICAgICAgJ3N0eWxlQXJyYXknICAgOiB0aGlzLnN0eWxlQXJyYXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuIDmnaFQb2x5Z29u5pWw5o2u55qE5Z2Q5qCH5pWw57uELCAg5Z2Q5qCH5Li657uP57qs5bqm5oiW6ICFMmQgcG9pbnQo5Z2Q5qCH5pa55ZCR5LiO5bGP5bmV5Z2Q5qCH55u45ZCMKS5cbiAgICAgKiDlvZPmlbDmja7kuLrnu4/nuqzluqbml7YsIOmcgOimgeaKim9wdGlvbnPkuK3nmoRwcm9qZWN06K6+5Li6dHJ1ZVxuICAgICAqIOWkmui+ueW9ouaVsOaNruWPr+S7peaYryBQb2x5Z29uLCDkuZ/lj6/ku6XmmK8gTXVsdGlQb2x5Z29uLlxuICAgICAqIOWmguaenOaYr011bHRpUG9seWdvbiwg5pWw57uE5b2i5byP5Li6OiBbW1t4MCwgeTBdLFt4MSwgeTFdLCAuLl1dXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg56ys5LiA5p2h5aSa6L655b2i55qE5Z2Q5qCH5pWw57uEICAgICAg56ys5LqM5p2h57q/55qE5Z2Q5qCH5pWw57uEXG4gICAgICog5aaC5p6c5pivTXVsdGlQb2x5Z29uLCDmlbDnu4TlvaLlvI/kuLo6IFtbW1t4MDAsIHkwMF0sW3gwMSwgeTAxXSwgLi5dXSwgW1tbeDEwLCB5MTBdLFt4MTEsIHkxMV0sIC4uXV1dXG4gICAgICogc3R5bGXkuLrlpJrovrnlvaLnmoTmoLflvI8sIOeUqOadpeeUn+aIkOagt+W8j+aVsOaNri5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdW118TnVtYmVyW11bXVtdfSBwb2x5Z29uIC0g5aSa6L655b2i5Z2Q5qCH5pWw57uEXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0g5aSa6L655b2i55qE5qC35byPLCBtYXB0YWxrcy5qc+eahFN5bWJvbFxuICAgICAqL1xuICAgIGFkZFBvbHlnb24ocG9seWdvbiwgc3R5bGUpIHtcbiAgICAgICAgaWYgKCFwb2x5Z29uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUuc3ltYm9sWydwb2x5Z29uT3BhY2l0eSddIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmVydGljZSA9IHRoaXMuX2dldFZlcnRpY2UocG9seWdvbik7XG5cbiAgICAgICAgLy/ovpPlhaXmmK9NdWx0aVBvbHlnb27ml7YsIOmBjeWOhmNoaWxkcmVuLCDlubbkvp3mrKHmt7vliqDlpITnkIZcbiAgICAgICAgaWYgKHZlcnRpY2VbMF0gJiYgQXJyYXkuaXNBcnJheSh2ZXJ0aWNlWzBdWzBdKSAmJiBBcnJheS5pc0FycmF5KHZlcnRpY2VbMF1bMF1bMF0pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHZlcnRpY2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2x5Z29uKHZlcnRpY2VbaV0sIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZlcnRpY2UuZm9yRWFjaChyaW5nID0+IHtcbiAgICAgICAgICAgIGlmICghcmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VxdWFsQ29vcmQocmluZ1swXSwgcmluZ1tyaW5nLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgIHJpbmcucHVzaChyaW5nWzBdLCByaW5nWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFogPSBnZXRUYXJnZXRab29tKHRoaXMubWFwKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVhcmN1dC5mbGF0dGVuKHZlcnRpY2UpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Byb2plY3QnXSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IFtdO1xuICAgICAgICAgICAgbGV0IGM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEudmVydGljZXMubGVuZ3RoOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYyA9IHRoaXMubWFwLmNvb3JkaW5hdGVUb1BvaW50KG5ldyBtYXB0YWxrcy5Db29yZGluYXRlKGRhdGEudmVydGljZXNbaV0sIGRhdGEudmVydGljZXNbaSArIDFdKSwgdGFyZ2V0Wik7XG4gICAgICAgICAgICAgICAgdi5wdXNoKGMueCwgYy55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEudmVydGljZXMgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0cmlhbmdsZXMgPSBlYXJjdXQoZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgMik7XG4gICAgICAgIGlmICh0cmlhbmdsZXMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldmlhdGlvbiA9IGVhcmN1dC5kZXZpYXRpb24oZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgMiwgdHJpYW5nbGVzKTtcbiAgICAgICAgaWYgKE1hdGgucm91bmQoZGV2aWF0aW9uICogMUUzKSAvIDFFMyAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0cmlhbmdsdWF0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAvIDI7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRyaWFuZ2xlcyA9IHRyaWFuZ2xlcy5tYXAoZSA9PiBlICsgY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIG1hcHRhbGtzLlV0aWwucHVzaEluKHRoaXMudmVydGV4QXJyYXksIGRhdGEudmVydGljZXMpO1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLmVsZW1lbnRBcnJheSwgdHJpYW5nbGVzKTtcblxuICAgICAgICAvLyDmt7vliqDmoLflvI/mlbDmja5cbiAgICAgICAgdGhpcy5fYWRkVGV4Q29vcmRzKGRhdGEudmVydGljZXMubGVuZ3RoIC8gMiwgc3R5bGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0VmVydGljZShnZW8pIHtcbiAgICAgICAgaWYgKGdlby5nZW9tZXRyeSkge1xuICAgICAgICAgICAgLy9HZW9KU09OIGZlYXR1cmVcbiAgICAgICAgICAgIGdlbyA9IGdlby5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIGlmIChnZW8uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIC8vR2VvSlNPTiBnZW9tZXRyeVxuICAgICAgICAgICAgZ2VvID0gZ2VvLmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW87XG4gICAgfVxuXG4gICAgX2FkZFRleENvb3JkcyhuLCBzdHlsZSkge1xuICAgICAgICAvLyB0ZXhfaWR4ICogMTAwICsgb3BhY2l0eSAqIDEwXG4gICAgICAgIGNvbnN0IHYgPSBzdHlsZS5pbmRleCAqIDEwMCArIChzdHlsZS5zeW1ib2xbJ3BvbHlnb25PcGFjaXR5J10gfHwgMSkgKiAxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVBcnJheS5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VxdWFsQ29vcmQoYzEsIGMyKSB7XG4gICAgICAgIHJldHVybiBjMVswXSA9PT0gYzJbMF0gJiYgYzFbMV0gPT09IGMyWzFdO1xuICAgIH1cbn1cblxuUG9seWdvblBhaW50ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuIiwiZXhwb3J0IGRlZmF1bHRcbmAjaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuI2Vsc2VcbiNkZWZpbmUgbG93cFxuI2RlZmluZSBtZWRpdW1wXG4jZGVmaW5lIGhpZ2hwXG4jZW5kaWZcblxudW5pZm9ybSBmbG9hdCB1X2JsdXI7XG51bmlmb3JtIHZlYzIgdV90ZXhfc2l6ZTtcblxuLy8gdmFyeWluZyBsb3dwIHZlYzQgdl9jb2xvcjtcbi8vIHZhcnlpbmcgdmVjMiB2X2xpbmVub3JtYWw7XG52YXJ5aW5nIHZlYzQgdl90ZXhjb29yZDtcbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudmFyeWluZyBmbG9hdCB2X2xpbmV3aWR0aDtcbnZhcnlpbmcgZmxvYXQgdl9zY2FsZTtcbnZhcnlpbmcgZmxvYXQgdl90ZXh0dXJlX25vcm1hbDtcbnZhcnlpbmcgZmxvYXQgdl9saW5lc29mYXI7XG4vLyB2YXJ5aW5nIGZsb2F0IHZfcnVsZXI7XG5cbnVuaWZvcm0gc2FtcGxlcjJEIHVfaW1hZ2U7XG5cbnZvaWQgbWFpbigpIHtcbiAgICB2ZWM0IGNvbG9yO1xuICAgIGlmICh2X3RleGNvb3JkLnEgPT0gLTEuMCkge1xuICAgICAgICAvLyBpcyBhIHRleHR1cmUgZnJhZ21lbnRcbiAgICAgICAgZmxvYXQgbGluZXNvZmFyID0gdl9saW5lc29mYXIgLyB2X3NjYWxlO1xuICAgICAgICBmbG9hdCB0ZXhXaWR0aCA9IHVfdGV4X3NpemUueCAqIHZfdGV4Y29vcmQudDtcbiAgICAgICAgZmxvYXQgeCA9IHZfdGV4Y29vcmQucyArIG1vZChsaW5lc29mYXIsIHRleFdpZHRoKSAvIHRleFdpZHRoICogdl90ZXhjb29yZC50O1xuICAgICAgICBmbG9hdCB5ID0gKHZfdGV4dHVyZV9ub3JtYWwgKyAxLjApIC8gMi4wICogdl90ZXhjb29yZC5wO1xuXG4gICAgICAgIGNvbG9yID0gdGV4dHVyZTJEKHVfaW1hZ2UsIHZlYzIoeCwgeSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sb3IgZnJhZ21lbnRcbiAgICAgICAgY29sb3IgPSB2X3RleGNvb3JkO1xuICAgIH1cbiAgICBmbG9hdCBhbHBoYSA9IDEuMDtcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvciAqIChhbHBoYSAqIHZfb3BhY2l0eSk7XG4jaWZkZWYgT1ZFUkRSQVdfSU5TUEVDVE9SXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xuI2VuZGlmXG59YDtcbiIsImltcG9ydCB7IEJyb3dzZXIsIFV0aWwgfSBmcm9tICdtYXB0YWxrcyc7XG5leHBvcnQgY29uc3QgbWF4VW5pZm9ybUxlbmd0aCA9IChCcm93c2VyLmllIHx8IEJyb3dzZXIuZWRnZSkgPyA1MDQgOiBVdGlsLklTX05PREUgPyAxMDE0IDogMjQwOyAvLyAzOTAwIGZvciA2NC1iaXQgY2hyb21lIDU2LjAsIDI0MCBmb3IgMzItYml0IGNocm9tZSA1Ni4wXG4iLCJpbXBvcnQgeyBtYXhVbmlmb3JtTGVuZ3RoIH0gZnJvbSAnLi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHRcbmAjaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiNlbHNlXG4jZGVmaW5lIGxvd3BcbiNkZWZpbmUgbWVkaXVtcFxuI2RlZmluZSBoaWdocFxuI2VuZGlmXG5cbmF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuYXR0cmlidXRlIG1lZGl1bXAgdmVjMiBhX25vcm1hbDtcbi8vIGF0dHJpYnV0ZSBtZWRpdW1wIHZlYzIgYV9saW5lbm9ybWFsO1xuYXR0cmlidXRlIGZsb2F0IGFfbGluZXNvZmFyO1xuLy8gKGxpbmVfd2lkdGggKiAxMDAgKyBvcGFjaXR5ICogMTApICogMTAwMDAgKyB0ZXhfaWR4XG5hdHRyaWJ1dGUgZmxvYXQgYV9zdHlsZTtcbi8vIGF0dHJpYnV0ZSBmbG9hdCBhX3NlZ2xlbjtcblxudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xudW5pZm9ybSBmbG9hdCB1X3NjYWxlO1xudW5pZm9ybSBmbG9hdCB1X3N0eWxlc1ske21heFVuaWZvcm1MZW5ndGh9XTtcblxudmFyeWluZyB2ZWMyIHZfbGluZW5vcm1hbDtcbnZhcnlpbmcgZmxvYXQgdl9saW5ld2lkdGg7XG52YXJ5aW5nIGZsb2F0IHZfb3BhY2l0eTtcbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xudmFyeWluZyBmbG9hdCB2X3NjYWxlO1xudmFyeWluZyBmbG9hdCB2X3RleHR1cmVfbm9ybWFsO1xuXG52YXJ5aW5nIGZsb2F0IHZfbGluZXNvZmFyO1xuLy8gdmFyeWluZyBmbG9hdCB2X3J1bGVyO1xuXG52b2lkIG1haW4oKSB7XG4gICAgaW50IHRleF9pZHggPSBpbnQobW9kKGFfc3R5bGUsIDEwMDAwLjApKTtcbiAgICBmbG9hdCBzID0gZmxvb3IoYV9zdHlsZSAvIDEwMDAwLjApO1xuICAgIHZfb3BhY2l0eSA9IG1vZChzLCAxMC4wKSAvIDEwLjA7XG4gICAgaWYgKHZfb3BhY2l0eSA9PSAwLjApIHtcbiAgICAgICAgdl9vcGFjaXR5ID0gMS4wO1xuICAgIH1cbiAgICB2X2xpbmV3aWR0aCA9IHMgLyAxMDAuMDtcbiAgICB2X3RleGNvb3JkID0gdmVjNCh1X3N0eWxlc1t0ZXhfaWR4XSwgdV9zdHlsZXNbdGV4X2lkeCArIDFdLCB1X3N0eWxlc1t0ZXhfaWR4ICsgMl0sIHVfc3R5bGVzW3RleF9pZHggKyAzXSk7XG5cbiAgICB2X3NjYWxlID0gdV9zY2FsZTtcblxuICAgIC8vIHZfbGluZW5vcm1hbCA9IGFfbGluZW5vcm1hbDtcblxuICAgIHZlYzQgcG9zID0gYV9wb3M7XG4gICAgcG9zLnggKz0gYV9ub3JtYWwueCAqIHZfbGluZXdpZHRoICogdV9zY2FsZTtcbiAgICBwb3MueSArPSBhX25vcm1hbC55ICogdl9saW5ld2lkdGggKiB1X3NjYWxlO1xuXG4gICAgLy8gYWRkIGxpbmVzb2ZhciB3aXRoIGNvcm5lciBsZW5ndGggY2F1c2VkIGJ5IGxpbmUtam9pblxuICAgIHZfbGluZXNvZmFyID0gYV9saW5lc29mYXI7XG5cblxuICAgIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBwb3M7XG4gICAgaWYgKGFfbm9ybWFsLnkgPT0gMC4wKSB7XG4gICAgICAgIC8vIHdpdGggYW4gdXBzaWRlIGRvd24gc3RyYWlnaHQgbGluZSwgYV9ub3JtYWwueSBpcyBhbHdheXMgMCwgdXNlIGFfbm9ybWFsLnggaW5zdGVhZFxuICAgICAgICB2X3RleHR1cmVfbm9ybWFsID0gLXNpZ24oYV9ub3JtYWwueCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9cbiAgICAgICAgdl90ZXh0dXJlX25vcm1hbCA9IHNpZ24oYV9ub3JtYWwueSk7XG4gICAgfVxuXG59YDtcbiIsImV4cG9ydCBkZWZhdWx0XG5gXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfc2FtcGxlcjtcbnZhcnlpbmcgdmVjMyB2X3RleENvb3JkO1xudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1X3NhbXBsZXIsIHZlYzIodl90ZXhDb29yZFswXSArIGdsX1BvaW50Q29vcmRbMF0gKiB2X3RleENvb3JkWzFdLCAxLjAgKyBnbF9Qb2ludENvb3JkWzFdICogdl90ZXhDb29yZFsyXSkpO1xufWA7XG4iLCJpbXBvcnQgeyBtYXhVbmlmb3JtTGVuZ3RoIH0gZnJvbSAnLi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHRcbmBcbi8vIG1hcmtlcidzIDJkIHBvaW50IGF0IG1heCB6b29tXG5hdHRyaWJ1dGUgdmVjNCBhX3Bvcztcbi8vIHRleHR1cmUgaWR4IGluIHVfc3ByaXRlXG5hdHRyaWJ1dGUgZmxvYXQgYV9zcHJpdGVfaWR4O1xudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xuLy8gc2NhbGUgb2YgY3VycmVudCB6b29tXG51bmlmb3JtIGZsb2F0IHVfc2NhbGU7XG4vLyBzcHJpdGVzLCBhbiBhcnJheSBvZiBzcHJpdGVzXG4vLyBhIHNwcml0ZSBoYXMgNiBpbnRlZ2Vyczpcbi8vIDAgOiBub3J0aHdlc3QncyB4LCAxIDogd2lkdGgsIDI6IGhlaWdodCwgMzogc3ByaXRlIHNpemUsIDQ6IG9mZnNldCB4LCA1OiBvZmZzZXQgeVxuLy8gYXJyYXkncyBsZW5ndGggaXMgbm90IGR5bmFtaWMsIHN1cHBvcnQgbWF4aW11bSBjb3VudCAvIDYgc3ByaXRlc1xudW5pZm9ybSBmbG9hdCB1X3Nwcml0ZVske21heFVuaWZvcm1MZW5ndGh9XTtcbnZhcnlpbmcgdmVjMyB2X3RleENvb3JkO1xudm9pZCBtYWluKCkge1xuICBpbnQgaWR4ID0gaW50KGFfc3ByaXRlX2lkeCkgKiA2O1xuICBmbG9hdCBzaXplID0gdV9zcHJpdGVbaWR4ICsgM107XG4gIHZlYzIgdGV4dE9mZnNldCA9IHZlYzIodV9zcHJpdGVbaWR4ICsgNF0sIHVfc3ByaXRlW2lkeCArIDVdKTtcbiAgdmVjNCBwb3MgPSB2ZWM0KGFfcG9zLnggKyB0ZXh0T2Zmc2V0LnggKiB1X3NjYWxlLCBhX3Bvcy55ICsgdGV4dE9mZnNldC55ICogdV9zY2FsZSwgYV9wb3MueiwgYV9wb3Mudyk7XG4gIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBwb3M7XG4gIGdsX1BvaW50U2l6ZSA9IHNpemU7XG4gIC8vIHRleHR1cmUgY29vcmRcbiAgdl90ZXhDb29yZCA9IHZlYzModV9zcHJpdGVbaWR4XSwgdV9zcHJpdGVbaWR4ICsgMV0sIHVfc3ByaXRlW2lkeCArIDJdKTtcbn1gO1xuIiwiZXhwb3J0IGRlZmF1bHRcbmBcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG52YXJ5aW5nIHZlYzQgdl90ZXhjb29yZDtcbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHZfdGV4Y29vcmQgKiB2X29wYWNpdHk7XG59YDtcbiIsImltcG9ydCB7IG1heFVuaWZvcm1MZW5ndGggfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZGVmYXVsdFxuYGF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuLy90ZXhfaWR4ICogMTAwICsgb3BhY2l0eSAqIDEwXG5hdHRyaWJ1dGUgZmxvYXQgYV9maWxsX3N0eWxlO1xuXG51bmlmb3JtIG1hdDQgdV9tYXRyaXg7XG51bmlmb3JtIGZsb2F0IHVfZmlsbF9zdHlsZXNbJHttYXhVbmlmb3JtTGVuZ3RofV07XG5cbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudmFyeWluZyB2ZWM0IHZfdGV4Y29vcmQ7XG5cbnZvaWQgbWFpbigpIHtcbiAgaW50IHRleF9pZHggPSBpbnQoZmxvb3IoYV9maWxsX3N0eWxlIC8gMTAwLjApKTtcbiAgdl9vcGFjaXR5ID0gbW9kKGFfZmlsbF9zdHlsZSwgMTAwLjApIC8gMTAuMDtcbiAgdl90ZXhjb29yZCA9IHZlYzQodV9maWxsX3N0eWxlc1t0ZXhfaWR4XSwgdV9maWxsX3N0eWxlc1t0ZXhfaWR4ICsgMV0sIHVfZmlsbF9zdHlsZXNbdGV4X2lkeCArIDJdLCB1X2ZpbGxfc3R5bGVzW3RleF9pZHggKyAzXSk7XG5cbiAgZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIGFfcG9zO1xufWA7XG4iLCJleHBvcnQgZGVmYXVsdFxuYFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xudmFyeWluZyBmbG9hdCB2X29wYWNpdHk7XG4vLyB2YXJ5aW5nIHZlYzQgdl9saWdodGluZztcblxudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHZfdGV4Y29vcmQgKiB2X29wYWNpdHk7XG59YDtcbiIsImltcG9ydCB7IG1heFVuaWZvcm1MZW5ndGggfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZGVmYXVsdFxuYGF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuYXR0cmlidXRlIHZlYzQgYV9ub3JtYWw7XG4vL3RleF9pZHggKiAxMDAgKyBvcGFjaXR5ICogMTBcbmF0dHJpYnV0ZSBmbG9hdCBhX2ZpbGxfc3R5bGU7XG5cbnVuaWZvcm0gdmVjMyB1X2xpZ2h0Y29sb3I7XG51bmlmb3JtIGxvd3AgdmVjMyB1X2xpZ2h0cG9zO1xudW5pZm9ybSBsb3dwIHZlYzMgdV9hbWJpZW50bGlnaHQ7XG51bmlmb3JtIGxvd3AgZmxvYXQgdV9saWdodGludGVuc2l0eTtcbi8vIHVuaWZvcm0gdmVjMyB1X2FtYmllbnRsaWdodDtcblxudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xudW5pZm9ybSBmbG9hdCB1X2ZpbGxfc3R5bGVzWyR7bWF4VW5pZm9ybUxlbmd0aH1dO1xuXG52YXJ5aW5nIGZsb2F0IHZfb3BhY2l0eTtcbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xuXG52YXJ5aW5nIHZlYzQgdl9saWdodGluZztcblxudm9pZCBtYWluKCkge1xuICBpbnQgdGV4X2lkeCA9IGludChhX2ZpbGxfc3R5bGUgLyAxMDAuMCkgKiA0O1xuICB2X29wYWNpdHkgPSBtb2QoYV9maWxsX3N0eWxlLCAxMDAuMCkgLyAxMC4wO1xuXG4gIHZlYzQgY29sb3IgPSB2ZWM0KHVfZmlsbF9zdHlsZXNbdGV4X2lkeF0sIHVfZmlsbF9zdHlsZXNbdGV4X2lkeCArIDFdLCB1X2ZpbGxfc3R5bGVzW3RleF9pZHggKyAyXSwgdV9maWxsX3N0eWxlc1t0ZXhfaWR4ICsgM10pO1xuXG4gIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBhX3BvcztcblxuICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZShhX25vcm1hbC54eXopO1xuICAvLyAvLyB2ZWMzIGxpZ2h0cG9zID0gbm9ybWFsaXplKHVfbGlnaHRwb3MpO1xuICAvLyBmbG9hdCBuRG90TCA9IG1heChkb3QodV9saWdodHBvcywgbm9ybWFsKSwgMC4wKTtcbiAgLy8gdmVjMyBkaWZmdXNlID0gdV9saWdodGNvbG9yICogY29sb3IucmdiICogbkRvdEw7XG5cbiAgLy8gdmVjMyBhbWJpZW50ID0gdV9hbWJpZW50bGlnaHQgKiBjb2xvci5yZ2I7XG5cbiAgLy8gdl90ZXhjb29yZCA9IHZlYzQoZGlmZnVzZSArIGFtYmllbnQsIGNvbG9yLmEpO1xuXG4gIC8vIFJlbGF0aXZlIGx1bWluYW5jZSAoaG93IGRhcmsvYnJpZ2h0IGlzIHRoZSBzdXJmYWNlIGNvbG9yPylcbiAgZmxvYXQgY29sb3J2YWx1ZSA9IGNvbG9yLnIgKiAwLjIxMjYgKyBjb2xvci5nICogMC43MTUyICsgY29sb3IuYiAqIDAuMDcyMjtcbiAgLy8gQWRkIHNsaWdodCBhbWJpZW50IGxpZ2h0aW5nIHNvIG5vIGV4dHJ1c2lvbnMgYXJlIHRvdGFsbHkgYmxhY2tcbiAgICB2ZWM0IGFtYmllbnRsaWdodCA9IHZlYzQodV9hbWJpZW50bGlnaHQsIDEuMCk7XG4gICAgY29sb3IgKz0gYW1iaWVudGxpZ2h0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIGNvcyh0aGV0YSksIHdoZXJlIHRoZXRhIGlzIHRoZSBhbmdsZSBiZXR3ZWVuIHN1cmZhY2Ugbm9ybWFsIGFuZCBkaWZmdXNlIGxpZ2h0IHJheVxuICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gY2xhbXAoZG90KG5vcm1hbCwgdV9saWdodHBvcyksIDAuMCwgMS4wKTtcblxuICAgIC8vIEFkanVzdCBkaXJlY3Rpb25hbCBzbyB0aGF0XG4gICAgLy8gdGhlIHJhbmdlIG9mIHZhbHVlcyBmb3IgaGlnaGxpZ2h0L3NoYWRpbmcgaXMgbmFycm93ZXJcbiAgICAvLyB3aXRoIGxvd2VyIGxpZ2h0IGludGVuc2l0eVxuICAgIC8vIGFuZCB3aXRoIGxpZ2h0ZXIvYnJpZ2h0ZXIgc3VyZmFjZSBjb2xvcnNcbiAgICBkaXJlY3Rpb25hbCA9IG1peCgoMS4wIC0gdV9saWdodGludGVuc2l0eSksIG1heCgoMS4wIC0gY29sb3J2YWx1ZSArIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApLCBkaXJlY3Rpb25hbCk7XG5cbiAgICAvLyBBZGQgZ3JhZGllbnQgYWxvbmcgeiBheGlzIG9mIHNpZGUgc3VyZmFjZXNcbiAgICAvLyBpZiAobm9ybWFsLnkgIT0gMC4wKSB7XG4gICAgLy8gICAgIGRpcmVjdGlvbmFsICo9IGNsYW1wKCh0ICsgYmFzZSkgKiBwb3coaGVpZ2h0IC8gMTUwLjAsIDAuNSksIG1peCgwLjcsIDAuOTgsIDEuMCAtIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApO1xuICAgIC8vIH1cblxuICAgIC8vIEFzc2lnbiBmaW5hbCBjb2xvciBiYXNlZCBvbiBzdXJmYWNlICsgYW1iaWVudCBsaWdodCBjb2xvciwgZGlmZnVzZSBsaWdodCBkaXJlY3Rpb25hbCwgYW5kIGxpZ2h0IGNvbG9yXG4gICAgLy8gd2l0aCBsb3dlciBib3VuZHMgYWRqdXN0ZWQgdG8gaHVlIG9mIGxpZ2h0XG4gICAgLy8gc28gdGhhdCBzaGFkaW5nIGlzIHRpbnRlZCB3aXRoIHRoZSBjb21wbGVtZW50YXJ5IChvcHBvc2l0ZSkgY29sb3IgdG8gdGhlIGxpZ2h0IGNvbG9yXG4gICAgdl90ZXhjb29yZC5yICs9IGNsYW1wKGNvbG9yLnIgKiBkaXJlY3Rpb25hbCAqIHVfbGlnaHRjb2xvci5yLCBtaXgoMC4wLCAwLjMsIDEuMCAtIHVfbGlnaHRjb2xvci5yKSwgMS4wKTtcbiAgICB2X3RleGNvb3JkLmcgKz0gY2xhbXAoY29sb3IuZyAqIGRpcmVjdGlvbmFsICogdV9saWdodGNvbG9yLmcsIG1peCgwLjAsIDAuMywgMS4wIC0gdV9saWdodGNvbG9yLmcpLCAxLjApO1xuICAgIHZfdGV4Y29vcmQuYiArPSBjbGFtcChjb2xvci5iICogZGlyZWN0aW9uYWwgKiB1X2xpZ2h0Y29sb3IuYiwgbWl4KDAuMCwgMC4zLCAxLjAgLSB1X2xpZ2h0Y29sb3IuYiksIDEuMCk7XG4gICAgdl90ZXhjb29yZC5hID0gY29sb3IuYTtcbiAgLy8gdmVjMyBub3JtYWwgPSBub3JtYWxpemUoYV9ub3JtYWwueHl6KTtcbiAgLy8gdmVjMyBsaWdodHBvcyA9IG5vcm1hbGl6ZSh1X2xpZ2h0cG9zLnh5eik7XG4gIC8vIC8vIGNvZGVzIGZyb20gbWFwYm94LWdsLWpzXG4gIC8vIHZfbGlnaHRpbmcgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gIC8vIGZsb2F0IGRpcmVjdGlvbmFsID0gY2xhbXAoZG90KG5vcm1hbCwgbGlnaHRwb3MpLCAwLjAsIDEuMCk7XG4gIC8vIGRpcmVjdGlvbmFsID0gbWl4KCgxLjAgLSB1X2xpZ2h0aW50ZW5zaXR5KSwgbWF4KCgwLjUgKyB1X2xpZ2h0aW50ZW5zaXR5KSwgMS4wKSwgZGlyZWN0aW9uYWwpO1xuXG4gIC8vIC8vIGlmIChhX25vcm1hbC55ICE9IDAuMCkge1xuICAvLyAvLyAgIGRpcmVjdGlvbmFsICo9IGNsYW1wKCh0ICsgYmFzZSkgKiBwb3coaGVpZ2h0IC8gMTUwLjAsIDAuNSksIG1peCgwLjcsIDAuOTgsIDEuMCAtIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApO1xuICAvLyAvLyB9XG5cbiAgLy8gdl9saWdodGluZy5yZ2IgKz0gY2xhbXAoZGlyZWN0aW9uYWwgKiB1X2xpZ2h0Y29sb3IsIG1peCh2ZWMzKDAuMCksIHZlYzMoMC4zKSwgMS4wIC0gdV9saWdodGNvbG9yKSwgdmVjMygxLjApKTtcbn1gO1xuIiwiaW1wb3J0IGxpbmVGcmFnbWVudCBmcm9tICcuL2xpbmUuZnJhZ21lbnQnO1xuaW1wb3J0IGxpbmVWZXJ0ZXggZnJvbSAnLi9saW5lLnZlcnRleCc7XG5pbXBvcnQgcG9pbnRGcmFnbWVudCBmcm9tICcuL3BvaW50LmZyYWdtZW50JztcbmltcG9ydCBwb2ludFZlcnRleCBmcm9tICcuL3BvaW50LnZlcnRleCc7XG5pbXBvcnQgcG9seWdvbkZyYWdtZW50IGZyb20gJy4vcG9seWdvbi5mcmFnbWVudCc7XG5pbXBvcnQgcG9seWdvblZlcnRleCBmcm9tICcuL3BvbHlnb24udmVydGV4JztcbmltcG9ydCBleHRydWRlRnJhZ21lbnQgZnJvbSAnLi9leHRydWRlLmZyYWdtZW50JztcbmltcG9ydCBleHRydWRlVmVydGV4IGZyb20gJy4vZXh0cnVkZS52ZXJ0ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgJ2xpbmUnOiB7XG4gICAgICAgICdmcmFnbWVudFNvdXJjZScgOiBsaW5lRnJhZ21lbnQsXG4gICAgICAgICd2ZXJ0ZXhTb3VyY2UnIDogbGluZVZlcnRleFxuICAgIH0sXG4gICAgJ3BvaW50Jzoge1xuICAgICAgICAnZnJhZ21lbnRTb3VyY2UnIDogcG9pbnRGcmFnbWVudCxcbiAgICAgICAgJ3ZlcnRleFNvdXJjZScgOiBwb2ludFZlcnRleFxuICAgIH0sXG4gICAgJ3BvbHlnb24nIDoge1xuICAgICAgICAnZnJhZ21lbnRTb3VyY2UnIDogcG9seWdvbkZyYWdtZW50LFxuICAgICAgICAndmVydGV4U291cmNlJyA6IHBvbHlnb25WZXJ0ZXhcbiAgICB9LFxuICAgICdleHRydWRlJyA6IHtcbiAgICAgICAgJ2ZyYWdtZW50U291cmNlJyA6IGV4dHJ1ZGVGcmFnbWVudCxcbiAgICAgICAgJ3ZlcnRleFNvdXJjZScgOiBleHRydWRlVmVydGV4XG4gICAgfVxufTtcbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAncmVuZGVyZXInIDogJ3dlYmdsJyxcbiAgICAnZG91YmxCdWZmZXInIDogZmFsc2UsXG4gICAgJ3JlbmRlck9uTW92aW5nJyA6IGZhbHNlLFxuICAgICdyZW5kZXJPblpvb21pbmcnIDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpZ0RhdGFMYXllciBleHRlbmRzIG1hcHRhbGtzLkxheWVyIHtcbiAgICAvKipcbiAgICAgKiBSZXByb2R1Y2UgYSBCaWdEYXRhTGF5ZXIgZnJvbSBsYXllcidzIHByb2ZpbGUgSlNPTi5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGxheWVySlNPTiAtIGxheWVyJ3MgcHJvZmlsZSBKU09OXG4gICAgICogQHJldHVybiB7bWFwdGFsa3MuQmlnRGF0YUxheWVyfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihwcm9maWxlKSB7XG4gICAgICAgIGlmICghcHJvZmlsZSB8fCBwcm9maWxlWyd0eXBlJ10gIT09IHRoaXMuZ2V0SlNPTlR5cGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgY29uc3RydWN0b3IocHJvZmlsZVsnaWQnXSwgcHJvZmlsZVsnZGF0YSddLCBwcm9maWxlWydvcHRpb25zJ10pO1xuICAgICAgICBpZiAocHJvZmlsZVsnc3R5bGUnXSkge1xuICAgICAgICAgICAgbGF5ZXIuc2V0U3R5bGUocHJvZmlsZVsnc3R5bGUnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGlkLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBtYXB0YWxrcy5VdGlsLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgIGxldCBzdHlsZTtcbiAgICAgICAgaWYgKG9wdHNbJ3N0eWxlJ10pIHtcbiAgICAgICAgICAgIHN0eWxlID0gb3B0c1snc3R5bGUnXTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRzWydzdHlsZSddO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGlkLCBvcHRzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cG9ydCB0aGUgQmlnRGF0YUxheWVyJ3MganNvbi4gPGJyPlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gbGF5ZXIncyBKU09OXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICAgICAgJ3R5cGUnOiB0aGlzLmdldEpTT05UeXBlKCksXG4gICAgICAgICAgICAnZGF0YScgOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICAnaWQnOiB0aGlzLmdldElkKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAganNvblsnb3B0aW9ucyddID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGpzb25bJ3N0eWxlJ10gPSBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBzZXRTdHlsZShzdHlsZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZSA9IFtzdHlsZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5fY29va2VkU3R5bGVzID0gbWFwdGFsa3MuTWFwYm94VXRpbC5jb21waWxlU3R5bGUoc3R5bGUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogc2V0c3R5bGUgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBtYXB0YWxrcy5CaWdEYXRhTGF5ZXIjc2V0c3R5bGVcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgLSBzZXRzdHlsZVxuICAgICAgICAgKiBAcHJvcGVydHkge21hcHRhbGtzLkJpZ0RhdGFMYXllcn0gdGFyZ2V0IC0gbGF5ZXJcbiAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R8T2JqZWN0W119ICAgICAgIHN0eWxlIC0gc3R5bGUgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcmUoJ3NldHN0eWxlJywgeyAnc3R5bGUnIDogc3R5bGUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxufVxuXG5CaWdEYXRhTGF5ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRLRDtcblxuZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgdmFyIG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgdmFyIG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICB2YXIgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgdmFyIHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgdmFyIHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdmFyIG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgdmFyIG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICB2YXIgaSA9IGxlZnQ7XG4gICAgICAgIHZhciBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgdmFyIHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmdlO1xuXG5mdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICB2YXIgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgdmFyIG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhpbjtcblxuZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgdmFyIHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIHZhciBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB2YXIgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB2YXIgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHZhciB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIHZhciBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICB2YXIgZHggPSBheCAtIGJ4O1xuICAgIHZhciBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc29ydCA9IHJlcXVpcmUoJy4vc29ydCcpO1xudmFyIHJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpO1xudmFyIHdpdGhpbiA9IHJlcXVpcmUoJy4vd2l0aGluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2RidXNoO1xuXG5mdW5jdGlvbiBrZGJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBLREJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKTtcbn1cblxuZnVuY3Rpb24gS0RCdXNoKHBvaW50cywgZ2V0WCwgZ2V0WSwgbm9kZVNpemUsIEFycmF5VHlwZSkge1xuICAgIGdldFggPSBnZXRYIHx8IGRlZmF1bHRHZXRYO1xuICAgIGdldFkgPSBnZXRZIHx8IGRlZmF1bHRHZXRZO1xuICAgIEFycmF5VHlwZSA9IEFycmF5VHlwZSB8fCBBcnJheTtcblxuICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZSB8fCA2NDtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgIHRoaXMuaWRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pZHNbaV0gPSBpO1xuICAgICAgICB0aGlzLmNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgIHRoaXMuY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgfVxuXG4gICAgc29ydCh0aGlzLmlkcywgdGhpcy5jb29yZHMsIHRoaXMubm9kZVNpemUsIDAsIHRoaXMuaWRzLmxlbmd0aCAtIDEsIDApO1xufVxuXG5LREJ1c2gucHJvdG90eXBlID0ge1xuICAgIHJhbmdlOiBmdW5jdGlvbiAobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9LFxuXG4gICAgd2l0aGluOiBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEdldFgocCkgeyByZXR1cm4gcFswXTsgfVxuZnVuY3Rpb24gZGVmYXVsdEdldFkocCkgeyByZXR1cm4gcFsxXTsgfVxuIiwiaW1wb3J0ICogYXMgbWFwdGFsa3MgZnJvbSAnbWFwdGFsa3MnO1xuaW1wb3J0IEJpZ0RhdGFMYXllciBmcm9tICcuL0JpZ0RhdGFMYXllcic7XG5pbXBvcnQgV2ViZ2xSZW5kZXJlciBmcm9tICcuLi9SZW5kZXJlcic7XG5pbXBvcnQgc2hhZGVycyBmcm9tICcuLi9zaGFkZXIvU2hhZGVyJztcbmltcG9ydCBrZGJ1c2ggZnJvbSAna2RidXNoJztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuLi9wYWludGVyL1BhaW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWdQb2ludExheWVyIGV4dGVuZHMgQmlnRGF0YUxheWVyIHtcbiAgICBpZGVudGlmeShjb29yZGluYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5fZ2V0UmVuZGVyZXIoKTtcbiAgICAgICAgaWYgKCFyZW5kZXJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmlkZW50aWZ5KGNvb3JkaW5hdGUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQmlnUG9pbnRMYXllci5yZWdpc3RlckpTT05UeXBlKCdCaWdQb2ludExheWVyJyk7XG5cbkJpZ1BvaW50TGF5ZXIucmVnaXN0ZXJSZW5kZXJlcignd2ViZ2wnLCBjbGFzcyBleHRlbmRzIFdlYmdsUmVuZGVyZXIge1xuXG4gICAgY29uc3RydWN0b3IobGF5ZXIpIHtcbiAgICAgICAgc3VwZXIobGF5ZXIpO1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX25lZWRDaGVja1Nwcml0ZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIGNoZWNrUmVzb3VyY2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX25lZWRDaGVja1N0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgdGhpcy5sYXllci5nZXRTdHlsZSgpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBtYXB0YWxrcy5VdGlsLmdldEV4dGVybmFsUmVzb3VyY2VzKHNbJ3N5bWJvbCddLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlcy5wdXNoKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTcHJpdGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gcmVzb3VyY2VzO1xuICAgIH1cblxuICAgIG9uQ2FudmFzQ3JlYXRlKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gWyd1X21hdHJpeCcsICd1X3NjYWxlJywgJ3Vfc3ByaXRlWzBdJ107XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oc2hhZGVycy5wb2ludC52ZXJ0ZXhTb3VyY2UsIHNoYWRlcnMucG9pbnQuZnJhZ21lbnRTb3VyY2UsIHVuaWZvcm1zKTtcbiAgICAgICAgdGhpcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoW1xuICAgICAgICAgICAgWydhX3BvcycsIDJdLFxuICAgICAgICAgICAgWydhX3Nwcml0ZV9pZHgnLCAxXVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTcHJpdGVzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJ0ZXhDb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbShtYXApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGF5ZXIuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgICAgICB0aGlzLl92ZXJ0ZXhDb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICBjb25zdCBtYXhJY29uU2l6ZSA9IFswLCAwXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwb2ludDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhW2ldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuX2dldFZlcnRpY2UoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZ2VvanNvblxuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IFt2WzBdLCB2WzFdLCBkYXRhW2ldLnByb3BlcnRpZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0ZXggPSB0aGlzLl9nZXRUZXhDb29yZCh7ICdwcm9wZXJ0aWVzJyA6IHBvaW50WzJdIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGV4Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3AgPSBtYXAuY29vcmRpbmF0ZVRvUG9pbnQobmV3IG1hcHRhbGtzLkNvb3JkaW5hdGUocG9pbnQpLCB0YXJnZXRaKTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4VGV4Q29vcmRzLnB1c2goY3AueCwgY3AueSwgdGV4LmlkeCk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjcC54LCBjcC55LCB0ZXguc2l6ZSwgdGV4Lm9mZnNldCwgcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBtYXggc2l6ZSBvZiBpY29ucywgd2lsbCB1c2UgaXQgZm9yIGlkZW50aWZ5IHRvbGVyYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleC5zaXplWzBdID4gbWF4SWNvblNpemVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEljb25TaXplWzBdID0gdGV4LnNpemVbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleC5zaXplWzFdID4gbWF4SWNvblNpemVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEljb25TaXplWzFdID0gdGV4LnNpemVbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhUZXhDb29yZHMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21heEljb25TaXplID0gbWF4SWNvblNpemU7XG4gICAgICAgICAgICB0aGlzLl9pbmRleERhdGEocG9pbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RyYXdNYXJrZXJzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkcmF3T25JbnRlcmFjdGluZygpIHtcbiAgICAgICAgdGhpcy5fZHJhd01hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nwcml0ZXM7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl91U3ByaXRlO1xuICAgICAgICBzdXBlci5vblJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGlkZW50aWZ5KGNvb3JkaW5hdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9rZEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbShtYXApO1xuICAgICAgICBjb25zdCBjID0gbWFwLmNvb3JkaW5hdGVUb1BvaW50KGNvb3JkaW5hdGUsIHRhcmdldFopO1xuICAgICAgICAvLyBzY2FsZSB0aGUgaWNvbiBzaXplIHRvIHRoZSBtYXggem9vbSBsZXZlbC5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBtYXAuZ2V0U2NhbGUoKSAvIG1hcC5nZXRTY2FsZSh0YXJnZXRaKTtcbiAgICAgICAgbGV0IHcgPSBzY2FsZSAqIHRoaXMuX21heEljb25TaXplWzBdLFxuICAgICAgICAgICAgaCA9IHNjYWxlICogdGhpcy5fbWF4SWNvblNpemVbMV07XG4gICAgICAgIGlmICh3IDwgMSkge1xuICAgICAgICAgICAgdyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGggPCAxKSB7XG4gICAgICAgICAgICBoID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLl9rZEluZGV4LnJhbmdlKGMueCAtIHcsIGMueSAtIGgsIGMueCArIHcsIGMueSArIGgpO1xuICAgICAgICBsZXQgZmlsdGVyLCBsaW1pdDtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydmaWx0ZXInXSkge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IG9wdGlvbnNbJ2ZpbHRlciddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2NvdW50J10pIHtcbiAgICAgICAgICAgICAgICBsaW1pdCA9IG9wdGlvbnNbJ2NvdW50J107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5faW5kZXhQb2ludHNbaWRzW2ldXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwWzBdLFxuICAgICAgICAgICAgICAgIHkgPSBwWzFdO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBbMl0sXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcFszXTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVudCA9IFtcbiAgICAgICAgICAgICAgICBzY2FsZSAqICgtc2l6ZVswXSAvIDIgKyBvZmZzZXQueCksXG4gICAgICAgICAgICAgICAgc2NhbGUgKiAoLXNpemVbMV0gLyAyICsgb2Zmc2V0LnkpLFxuICAgICAgICAgICAgICAgIHNjYWxlICogKHNpemVbMF0gLyAyICsgb2Zmc2V0LngpLFxuICAgICAgICAgICAgICAgIHNjYWxlICogKHNpemVbMV0gLyAyICsgb2Zmc2V0LnkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGMueCA+PSAoeCArIGV4dGVudFswXSkgJiZcbiAgICAgICAgICAgICAgICBjLnggPD0gKHggKyBleHRlbnRbMl0pICYmXG4gICAgICAgICAgICAgICAgYy55ID49ICh5ICsgZXh0ZW50WzFdKSAmJlxuICAgICAgICAgICAgICAgIGMueSA8PSAoeSArIGV4dGVudFszXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIocFs0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcFs0XSBpcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBbNF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGltaXQgJiYgcmVzdWx0Lmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9pbmRleERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9pbmRleFBvaW50cyA9IGRhdGE7XG4gICAgICAgIHRoaXMuX2tkSW5kZXggPSBrZGJ1c2goZGF0YSwgbnVsbCwgbnVsbCwgNjQsIEludDMyQXJyYXkpO1xuICAgIH1cblxuICAgIF9nZXRUZXhDb29yZChwcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlc1tpXS5maWx0ZXIocHJvcHMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCcgOiBpLFxuICAgICAgICAgICAgICAgICAgICAndGV4Q29vcmQnIDogdGhpcy5fc3ByaXRlcy50ZXhDb29yZHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnICAgOiB0aGlzLl9zcHJpdGVzLm9mZnNldHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICdzaXplJyAgICAgOiB0aGlzLl9zcHJpdGVzLnNpemVzW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY2hlY2tTcHJpdGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX25lZWRDaGVja1Nwcml0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSB0aGlzLnJlc291cmNlcztcbiAgICAgICAgY29uc3Qgc3ByaXRlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5sYXllci5nZXRTdHlsZSgpLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBtYXB0YWxrcy5NYXJrZXIoWzAsIDBdLCB7XG4gICAgICAgICAgICAgICAgICAgICdzeW1ib2wnIDogc3R5bGVbJ3N5bWJvbCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gbWFya2VyLl9nZXRTcHJpdGUocmVzb3VyY2VzLCBtYXAuQ2FudmFzQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zcHJpdGVzID0gdGhpcy5tZXJnZVNwcml0ZXMoc3ByaXRlcywgdHJ1ZSk7XG4gICAgICAgIGlmICghdGhpcy5fc3ByaXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAod2luZG93KSAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTUFQVEFMS1NfV0VCR0xfREVCVUdfQ0FOVkFTKSB7XG4gICAgICAgICAgICB3aW5kb3cuTUFQVEFMS1NfV0VCR0xfREVCVUdfQ0FOVkFTLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25lZWRDaGVja1Nwcml0ZXMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RleHR1cmVMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX3Nwcml0ZXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3Nwcml0ZXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fc3ByaXRlcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2FtcGxlcigndV9zYW1wbGVyJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgdVNwcml0ZSA9IHRoaXMuX3VTcHJpdGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1U3ByaXRlLnB1c2guYXBwbHkodVNwcml0ZSwgdGhpcy5fc3ByaXRlcy50ZXhDb29yZHNbaV0pO1xuICAgICAgICAgICAgICAgIHVTcHJpdGUucHVzaCh0aGlzLl9zcHJpdGVzLm9mZnNldHNbaV0ueCwgdGhpcy5fc3ByaXRlcy5vZmZzZXRzW2ldLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldFZlcnRpY2UocG9pbnQpIHtcbiAgICAgICAgaWYgKHBvaW50Lmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAvL0dlb0pTT04gZmVhdHVyZVxuICAgICAgICAgICAgcG9pbnQgPSBwb2ludC5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludC5jb29yZGluYXRlcykge1xuICAgICAgICAgICAgLy9HZW9KU09OIGdlb21ldHJ5XG4gICAgICAgICAgICBwb2ludCA9IHBvaW50LmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG5cbiAgICBfZHJhd01hcmtlcnMoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuY2FsY01hdHJpY2VzKCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoZ2wucHJvZ3JhbS51X21hdHJpeCwgZmFsc2UsIG0pO1xuICAgICAgICBnbC51bmlmb3JtMWYoZ2wucHJvZ3JhbS51X3NjYWxlLCB0aGlzLmdldE1hcCgpLmdldFNjYWxlKCkpO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KGdsLnByb2dyYW0udV9zcHJpdGUsIHRoaXMuX3VTcHJpdGUpO1xuXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCB0aGlzLl92ZXJ0ZXhDb3VudCk7XG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9uKCdzZXRzdHlsZScsIHRoaXMuX29uU3R5bGVDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9mZignc2V0c3R5bGUnLCB0aGlzLl9vblN0eWxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgX29uU3R5bGVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IHRydWU7XG4gICAgfVxufSk7XG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTsiLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbi8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIGdldFJnYmE6IGdldFJnYmEsXG4gICBnZXRIc2xhOiBnZXRIc2xhLFxuICAgZ2V0UmdiOiBnZXRSZ2IsXG4gICBnZXRIc2w6IGdldEhzbCxcbiAgIGdldEh3YjogZ2V0SHdiLFxuICAgZ2V0QWxwaGE6IGdldEFscGhhLFxuXG4gICBoZXhTdHJpbmc6IGhleFN0cmluZyxcbiAgIHJnYlN0cmluZzogcmdiU3RyaW5nLFxuICAgcmdiYVN0cmluZzogcmdiYVN0cmluZyxcbiAgIHBlcmNlbnRTdHJpbmc6IHBlcmNlbnRTdHJpbmcsXG4gICBwZXJjZW50YVN0cmluZzogcGVyY2VudGFTdHJpbmcsXG4gICBoc2xTdHJpbmc6IGhzbFN0cmluZyxcbiAgIGhzbGFTdHJpbmc6IGhzbGFTdHJpbmcsXG4gICBod2JTdHJpbmc6IGh3YlN0cmluZyxcbiAgIGtleXdvcmQ6IGtleXdvcmRcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgYWJiciA9ICAvXiMoW2EtZkEtRjAtOV17M30pJC8sXG4gICAgICAgaGV4ID0gIC9eIyhbYS1mQS1GMC05XXs2fSkkLyxcbiAgICAgICByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAga2V5d29yZCA9IC8oXFxEKykvO1xuXG4gICB2YXIgcmdiID0gWzAsIDAsIDBdLFxuICAgICAgIGEgPSAxLFxuICAgICAgIG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcbiAgICAgIGlmIChtYXRjaFsxXSA9PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcbiAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICB9XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZ2JbaV0gPSBzY2FsZShyZ2JbaV0sIDAsIDI1NSk7XG4gICB9XG4gICBpZiAoIWEgJiYgYSAhPSAwKSB7XG4gICAgICBhID0gMTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgYSA9IHNjYWxlKGEsIDAsIDEpO1xuICAgfVxuICAgcmdiWzNdID0gYTtcbiAgIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEhzbGEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHMgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBsID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHMsIGwsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRId2Ioc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcbiAgIGlmIChtYXRjaCkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgdyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGIgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgdywgYiwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldFJnYihzdHJpbmcpIHtcbiAgIHZhciByZ2JhID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgcmV0dXJuIHJnYmEgJiYgcmdiYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsKHN0cmluZykge1xuICB2YXIgaHNsYSA9IGdldEhzbGEoc3RyaW5nKTtcbiAgcmV0dXJuIGhzbGEgJiYgaHNsYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxwaGEoc3RyaW5nKSB7XG4gICB2YXIgdmFscyA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIGlmICh2YWxzKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRIc2xhKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEh3YihzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbn1cblxuLy8gZ2VuZXJhdG9yc1xuZnVuY3Rpb24gaGV4U3RyaW5nKHJnYikge1xuICAgcmV0dXJuIFwiI1wiICsgaGV4RG91YmxlKHJnYlswXSkgKyBoZXhEb3VibGUocmdiWzFdKVxuICAgICAgICAgICAgICArIGhleERvdWJsZShyZ2JbMl0pO1xufVxuXG5mdW5jdGlvbiByZ2JTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2IoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl0gKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKHJnYmFbM10gIT09IHVuZGVmaW5lZCA/IHJnYmFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl1cbiAgICAgICAgICAgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50U3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcblxuICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUsIFwiICsgKGFscGhhIHx8IHJnYmFbM10gfHwgMSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gaHNsU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChoc2xhWzNdICYmIGhzbGFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGhzbGFbM10gIT09IHVuZGVmaW5lZCA/IGhzbGFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlLCBcIlxuICAgICAgICAgICArIGFscGhhICsgXCIpXCI7XG59XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5mdW5jdGlvbiBod2JTdHJpbmcoaHdiLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGh3YlszXSAhPT0gdW5kZWZpbmVkID8gaHdiWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJod2IoXCIgKyBod2JbMF0gKyBcIiwgXCIgKyBod2JbMV0gKyBcIiUsIFwiICsgaHdiWzJdICsgXCIlXCJcbiAgICAgICAgICAgKyAoYWxwaGEgIT09IHVuZGVmaW5lZCAmJiBhbHBoYSAhPT0gMSA/IFwiLCBcIiArIGFscGhhIDogXCJcIikgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24ga2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBzY2FsZShudW0sIG1pbiwgbWF4KSB7XG4gICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gXCIwXCIgKyBzdHIgOiBzdHI7XG59XG5cblxuLy9jcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuICAgcmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIGNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG52YXIgc3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0cmdiYUFycmF5Tm9ybWFsaXplZDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIGdsUmdiYSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRnbFJnYmFbaV0gPSByZ2JbaV0gLyAyNTU7XG5cdFx0fVxuXHRcdGdsUmdiYS5wdXNoKHRoaXMudmFsdWVzLmFscGhhKTtcblx0XHRyZXR1cm4gZ2xSZ2JhO1xuXHR9LFxuXHRoc2xhQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaHNsID0gdGhpcy52YWx1ZXMuaHNsO1xuXHRcdHJldHVybiBoc2wuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHR9LFxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzLmFscGhhO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB2YWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDAsIHZhbCk7XG5cdH0sXG5cdGdyZWVuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMSwgdmFsKTtcblx0fSxcblx0Ymx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDIsIHZhbCk7XG5cdH0sXG5cdGh1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHZhbCAlPSAzNjA7XG5cdFx0XHR2YWwgPSB2YWwgPCAwID8gMzYwICsgdmFsIDogdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAwLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMSwgdmFsKTtcblx0fSxcblx0bGlnaHRuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMiwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbnY6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAxLCB2YWwpO1xuXHR9LFxuXHR3aGl0ZW5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibGFja25lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAyLCB2YWwpO1xuXHR9LFxuXHR2YWx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDIsIHZhbCk7XG5cdH0sXG5cdGN5YW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMCwgdmFsKTtcblx0fSxcblx0bWFnZW50YTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAxLCB2YWwpO1xuXHR9LFxuXHR5ZWxsb3c6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMiwgdmFsKTtcblx0fSxcblx0YmxhY2s6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMywgdmFsKTtcblx0fSxcblxuXHRoZXhTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpO1xuXHR9LFxuXHRyZ2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cmdiYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbGFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGh3YlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3YiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRrZXl3b3JkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAodGhpcy52YWx1ZXMucmdiWzBdIDw8IDE2KSB8ICh0aGlzLnZhbHVlcy5yZ2JbMV0gPDwgOCkgfCB0aGlzLnZhbHVlcy5yZ2JbMl07XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0ZGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRsaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5kYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSAyNTUgLSB0aGlzLnZhbHVlcy5yZ2JbaV07XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCByZ2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSArPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSAtPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdICs9IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSAtPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsxXSArPSB0aGlzLnZhbHVlcy5od2JbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMl0gKz0gdGhpcy52YWx1ZXMuaHdiWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z3JleXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgW3ZhbCwgdmFsLCB2YWxdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbGVhcmVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSAtICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgKyAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHVlID0gdGhpcy52YWx1ZXMuaHNsWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdHRoaXMudmFsdWVzLmhzbFswXSA9IGh1ZTtcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHQvKipcblx0ICogUG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHQgKi9cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0dmFyIGNvbG9yMSA9IHRoaXM7XG5cdFx0dmFyIGNvbG9yMiA9IG1peGluQ29sb3I7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpXG5cdFx0XHQpXG5cdFx0XHQuYWxwaGEoY29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZ2IoKTtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjb2wgPSBuZXcgQ29sb3IoKTtcblx0XHRjb2wudmFsdWVzID0gY2xvbmUodGhpcy52YWx1ZXMpO1xuXHRcdHJldHVybiBjb2w7XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UpIHtcblx0dmFyIHZhbHMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsc1tzcGFjZS5jaGFyQXQoaSldID0gdGhpcy52YWx1ZXNbc3BhY2VdW2ldO1xuXHR9XG5cblx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0dmFscy5hID0gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdH1cblxuXHQvLyB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMC40fVxuXHRyZXR1cm4gdmFscztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UsIHZhbHMpIHtcblx0dmFyIHNwYWNlcyA9IHtcblx0XHRyZ2I6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSxcblx0XHRoc2w6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJ10sXG5cdFx0aHN2OiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ3ZhbHVlJ10sXG5cdFx0aHdiOiBbJ2h1ZScsICd3aGl0ZW5lc3MnLCAnYmxhY2tuZXNzJ10sXG5cdFx0Y215azogWydjeWFuJywgJ21hZ2VudGEnLCAneWVsbG93JywgJ2JsYWNrJ11cblx0fTtcblxuXHR2YXIgbWF4ZXMgPSB7XG5cdFx0cmdiOiBbMjU1LCAyNTUsIDI1NV0sXG5cdFx0aHNsOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHN2OiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHdiOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0Y215azogWzEwMCwgMTAwLCAxMDAsIDEwMF1cblx0fTtcblxuXHR2YXIgaTtcblx0dmFyIGFscGhhID0gMTtcblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0YWxwaGEgPSB2YWxzO1xuXHR9IGVsc2UgaWYgKHZhbHMubGVuZ3RoKSB7XG5cdFx0Ly8gWzEwLCAxMCwgMTBdXG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdID0gdmFscy5zbGljZSgwLCBzcGFjZS5sZW5ndGgpO1xuXHRcdGFscGhhID0gdmFsc1tzcGFjZS5sZW5ndGhdO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2UuY2hhckF0KDApXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3I6IDEwLCBnOiAxMCwgYjogMTB9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW3NwYWNlLmNoYXJBdChpKV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmE7XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZXNbc3BhY2VdWzBdXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3JlZDogMTAsIGdyZWVuOiAxMCwgYmx1ZTogMTB9XG5cdFx0dmFyIGNoYW5zID0gc3BhY2VzW3NwYWNlXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tjaGFuc1tpXV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmFscGhhO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoYWxwaGEgPT09IHVuZGVmaW5lZCA/IHRoaXMudmFsdWVzLmFscGhhIDogYWxwaGEpKSk7XG5cblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGNhcHBlZDtcblxuXHQvLyBjYXAgdmFsdWVzIG9mIHRoZSBzcGFjZSBwcmlvciBjb252ZXJ0aW5nIGFsbCB2YWx1ZXNcblx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc3BhY2VdW2ldLCB0aGlzLnZhbHVlc1tzcGFjZV1baV0pKTtcblx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdH1cblxuXHQvLyBjb252ZXJ0IHRvIGFsbCB0aGUgb3RoZXIgY29sb3Igc3BhY2VzXG5cdGZvciAodmFyIHNuYW1lIGluIHNwYWNlcykge1xuXHRcdGlmIChzbmFtZSAhPT0gc3BhY2UpIHtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXSA9IGNvbnZlcnRbc3BhY2VdW3NuYW1lXSh0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXHRcdH1cblxuXHRcdC8vIGNhcCB2YWx1ZXNcblx0XHRmb3IgKGkgPSAwOyBpIDwgc25hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NuYW1lXVtpXSwgdGhpcy52YWx1ZXNbc25hbWVdW2ldKSk7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0U3BhY2UgPSBmdW5jdGlvbiAoc3BhY2UsIGFyZ3MpIHtcblx0dmFyIHZhbHMgPSBhcmdzWzBdO1xuXG5cdGlmICh2YWxzID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZ2IoKVxuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlcyhzcGFjZSk7XG5cdH1cblxuXHQvLyBjb2xvci5yZ2IoMTAsIDEwLCAxMClcblx0aWYgKHR5cGVvZiB2YWxzID09PSAnbnVtYmVyJykge1xuXHRcdHZhbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcblx0fVxuXG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB2YWxzKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIChzcGFjZSwgaW5kZXgsIHZhbCkge1xuXHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZWQoKVxuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSkge1xuXHRcdC8vIGNvbG9yLnJlZChjb2xvci5yZWQoKSlcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIGNvbG9yLnJlZCgxMDApXG5cdHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0gPSB2YWw7XG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCBXZWJnbFJlbmRlcmVyIGZyb20gJy4uLy4uL1JlbmRlcmVyJztcbmltcG9ydCBMaW5lQXRsYXMgZnJvbSAnLi4vLi4vcGFpbnRlci9MaW5lQXRsYXMnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aFJlbmRlcmVyIGV4dGVuZHMgV2ViZ2xSZW5kZXJlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihsYXllcikge1xuICAgICAgICBzdXBlcihsYXllcik7XG4gICAgICAgIHRoaXMuX25lZWRDaGVja1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3ByaXRlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSZXNvdXJjZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbmVlZENoZWNrU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXllci5fY29va2VkU3R5bGVzKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHNbJ3N5bWJvbCddID0gbWFwdGFsa3MuVXRpbC5jb252ZXJ0UmVzb3VyY2VVcmwoc1snc3ltYm9sJ10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG1hcHRhbGtzLlV0aWwuZ2V0RXh0ZXJuYWxSZXNvdXJjZXMoc1snc3ltYm9sJ10sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzLnB1c2gocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3R5bGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTcHJpdGVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90ZXh0dXJlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgb25DYW52YXNDcmVhdGUoKSB7XG4gICAgICAgIC8vIGVuYWJsZSBkcmF3RWxlbWVudHMgdG8gdXNlIFVOU0lHTkVEX0lOVCBhcyB0aGUgdHlwZSBvZiBlbGVtZW50IGFycmF5IGJ1ZmZlclxuICAgICAgICAvLyBkZWZhdWx0IHR5cGUgaXMgVU5TSUdORURfU0hPUlQoMCB+IDY1NTM2KVxuICAgICAgICB0aGlzLmdsLmdldEV4dGVuc2lvbignT0VTX2VsZW1lbnRfaW5kZXhfdWludCcpO1xuICAgIH1cblxuXG4gICAgb25SZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50cygpO1xuICAgICAgICBkZWxldGUgdGhpcy5fZmlsbFNwcml0ZXM7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpdGVzO1xuICAgICAgICBzdXBlci5vblJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGdldERhdGFTeW1ib2wocHJvcHMpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sYXllci5fY29va2VkU3R5bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKHN0eWxlLnN5bWJvbCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3R5bGUuZmlsdGVyKHsgJ3Byb3BlcnRpZXMnIDogcHJvcHMgfSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N5bWJvbCcgOiBzdHlsZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4Q29vcmQnIDogdGhpcy5fZmlsbFNwcml0ZXMudGV4Q29vcmRzW2NvdW50XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbmRleCcgOiBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzeW1ib2wnIDogc3R5bGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2luZGV4JyA6IGlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRMaW5lVGV4dHVyZShzeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0bGFzLmdldEF0bGFzKHN5bWJvbCk7XG4gICAgfVxuXG4gICAgZ2V0RmlsbFRleHR1cmUoc3ltYm9sKSB7XG4gICAgICAgIGNvbnN0IGZpbGxQYXR0ZXJuID0gc3ltYm9sID8gc3ltYm9sWydwb2x5Z29uUGF0dGVybkZpbGUnXSA6IG51bGw7XG4gICAgICAgIGlmIChmaWxsUGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmdldEltYWdlKGZpbGxQYXR0ZXJuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY2hlY2tTcHJpdGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX25lZWRDaGVja1Nwcml0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdGxhcyA9IG5ldyBMaW5lQXRsYXModGhpcy5yZXNvdXJjZXMpO1xuICAgICAgICBjb25zdCBzcHJpdGVzID0gW107XG4gICAgICAgIGNvbnN0IGZpbGxTcHJpdGVzID0gW107XG4gICAgICAgIGlmICh0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcy5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmdldExpbmVUZXh0dXJlKHMuc3ltYm9sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmaWxsIHRleHVyZVxuICAgICAgICAgICAgICAgIHNwcml0ZSA9IHRoaXMuZ2V0RmlsbFRleHR1cmUocy5zeW1ib2wpO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFNwcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY2FudmFzJyA6IHNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXQnIDogbmV3IG1hcHRhbGtzLlBvaW50KDAsIDApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3ByaXRlcyA9IHRoaXMubWVyZ2VTcHJpdGVzKHNwcml0ZXMpO1xuICAgICAgICB0aGlzLl9maWxsU3ByaXRlcyA9IHRoaXMubWVyZ2VTcHJpdGVzKGZpbGxTcHJpdGVzKTtcblxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlcyAmJiB0eXBlb2YgKHdpbmRvdykgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1BUFRBTEtTX1dFQkdMX0RFQlVHX0NBTlZBUykge1xuICAgICAgICAgICAgY29uc3QgZGVidWdDYW52YXMgPSB3aW5kb3cuTUFQVEFMS1NfV0VCR0xfREVCVUdfQ0FOVkFTO1xuICAgICAgICAgICAgZGVidWdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5maWxsUmVjdCgwLCAwLCBkZWJ1Z0NhbnZhcy53aWR0aCwgZGVidWdDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRlYnVnQ2FudmFzLmdldENvbnRleHQoJzJkJykuZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgICAgICAgICBkZWJ1Z0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmZpbGxSZWN0KDAsIDAsIHRoaXMuX3Nwcml0ZXMuY2FudmFzLndpZHRoLCB0aGlzLl9zcHJpdGVzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgZGVidWdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5fc3ByaXRlcy5jYW52YXMsIDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3ByaXRlcyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGVzICYmICF0aGlzLl90ZXh0dXJlTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMuX3Nwcml0ZXMuY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2FtcGxlcigndV9pbWFnZScpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZUxvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZmlsbFNwcml0ZXMgJiYgIXRoaXMuX2ZpbGxUZXh0dXJlTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMuX2ZpbGxTcHJpdGVzLmNhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVNhbXBsZXIoJ3VfZmlsbF9pbWFnZScpO1xuICAgICAgICAgICAgdGhpcy5fZmlsbFRleHR1cmVMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJlcGFyZSBhcnJheSBmb3IgdW5pZm9ybSB1X3N0eWxlc1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IHVTdHlsZSA9IHRoaXMuX3VTdHlsZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5sYXllci5fY29va2VkU3R5bGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdldExpbmVUZXh0dXJlKHN0eWxlLnN5bWJvbCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIC8vIOaooeW8j+Whq+WFheaIluaciWRhc2hhcnJheeaXtiwg5re75Yqg5LiJ5L2N57q555CG5Z2Q5qCHXG4gICAgICAgICAgICAgICAgLy8gMDogeOWdkOaghywgMTog57q555CG6ZW/5bqmLCAyOiDnurnnkIblrr3luqYsIDM6IC0xXG4gICAgICAgICAgICAgICAgdVN0eWxlLnB1c2guYXBwbHkodVN0eWxlLCB0aGlzLl9zcHJpdGVzLnRleENvb3Jkc1tjb3VudGVyKytdKTtcbiAgICAgICAgICAgICAgICB1U3R5bGUucHVzaCgtMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOe6v+aYr+eugOWNleeahOminOiJsuWhq+WFhVxuICAgICAgICAgICAgICAgIC8vIDA6IHIsIDE6IGcsIDI6IGIsIDM6IGFcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBzdHlsZS5zeW1ib2xbJ2xpbmVDb2xvciddIHx8ICcjMDAwMDAwJztcbiAgICAgICAgICAgICAgICBjb2xvciA9IENvbG9yKGNvbG9yKS5yZ2JhQXJyYXlOb3JtYWxpemVkKCk7XG4gICAgICAgICAgICAgICAgdVN0eWxlLnB1c2guYXBwbHkodVN0eWxlLCBjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGFycmF5IGZvciB1bmlmb3JtIHVfZmlsbF9zdHlsZXNcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IHVGaWxsU3R5bGUgPSB0aGlzLl91RmlsbFN0eWxlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5sYXllci5fY29va2VkU3R5bGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuZ2V0RmlsbFRleHR1cmUoc3R5bGUuc3ltYm9sKTtcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgLy8g5qih5byP5aGr5YWF5oiW5pyJZGFzaGFycmF55pe2LCDmt7vliqDkuInkvY3nurnnkIblnZDmoIdcbiAgICAgICAgICAgICAgICAvLyAwOiB45Z2Q5qCHLCAxOiDnurnnkIbplb/luqYsIDI6IOe6ueeQhuWuveW6piwgMzogLTFcbiAgICAgICAgICAgICAgICB1RmlsbFN0eWxlLnB1c2guYXBwbHkodUZpbGxTdHlsZSwgdGhpcy5fZmlsbFNwcml0ZXMudGV4Q29vcmRzW2NvdW50ZXIrK10pO1xuICAgICAgICAgICAgICAgIHVGaWxsU3R5bGUucHVzaCgtMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOe6v+aYr+eugOWNleeahOminOiJsuWhq+WFhVxuICAgICAgICAgICAgICAgIC8vIDA6IHIsIDE6IGcsIDI6IGIsIDM6IGFcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBzdHlsZS5zeW1ib2xbJ3BvbHlnb25GaWxsJ10gfHwgJyNmZmYnO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gQ29sb3IoY29sb3IpLnJnYmFBcnJheU5vcm1hbGl6ZWQoKTtcbiAgICAgICAgICAgICAgICB1RmlsbFN0eWxlLnB1c2guYXBwbHkodUZpbGxTdHlsZSwgY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9uKCdzZXRzdHlsZScsIHRoaXMuX29uU3R5bGVDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9mZignc2V0c3R5bGUnLCB0aGlzLl9vblN0eWxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgX29uU3R5bGVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHNoYWRlcnMgZnJvbSAnLi4vc2hhZGVyL1NoYWRlcic7XG5pbXBvcnQgTGluZVBhaW50ZXIgZnJvbSAnLi4vcGFpbnRlci9MaW5lUGFpbnRlcic7XG5pbXBvcnQgQmlnRGF0YUxheWVyIGZyb20gJy4vQmlnRGF0YUxheWVyJztcbmltcG9ydCBQYXRoUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlci9QYXRoUmVuZGVyZXInO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0Wm9vbSB9IGZyb20gJy4uL3BhaW50ZXIvUGFpbnRlcic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgJ2JsdXInIDogMlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlnTGluZUxheWVyIGV4dGVuZHMgQmlnRGF0YUxheWVyIHtcblxufVxuXG5CaWdMaW5lTGF5ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5CaWdMaW5lTGF5ZXIucmVnaXN0ZXJKU09OVHlwZSgnQmlnTGluZUxheWVyJyk7XG5cbi8qY29uc3QgZGVmYXVsdFN5bWJvbCA9IHtcbiAgICAnbGluZVdpZHRoJyA6IDEyLFxuICAgICdsaW5lT3BhY2l0eScgOiAxLFxuICAgICdsaW5lQ29sb3InIDogJ3JnYigwLCAwLCAwKScsXG4gICAgJ2xpbmVEYXNoYXJyYXknIDogWzIwLCAxMCwgMzAsIDIwXVxufTsqL1xuXG5leHBvcnQgY2xhc3MgQmlnTGluZVJlbmRlcmVyIGV4dGVuZHMgUGF0aFJlbmRlcmVyIHtcblxuXG4gICAgb25DYW52YXNDcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gWyd1X21hdHJpeCcsICd1X3NjYWxlJywgJ3VfdGV4X3NpemUnLCAvKid1X2JsdXInLCovICd1X3N0eWxlc1swXSddO1xuICAgICAgICB0aGlzLl9saW5lUHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShzaGFkZXJzLmxpbmUudmVydGV4U291cmNlLCBzaGFkZXJzLmxpbmUuZnJhZ21lbnRTb3VyY2UsIHVuaWZvcm1zKTtcbiAgICAgICAgc3VwZXIub25DYW52YXNDcmVhdGUoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYW52YXMoKTtcblxuICAgICAgICB0aGlzLl9kcmF3TGluZXMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIGRyYXdPbkludGVyYWN0aW5nKCkge1xuICAgICAgICB0aGlzLl9kcmF3TGluZXMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGluZUFycmF5cztcbiAgICAgICAgc3VwZXIub25SZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBnZXRUZXh0dXJlKHN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaW5lVGV4dHVyZShzeW1ib2wpO1xuICAgIH1cblxuICAgIF9kcmF3TGluZXMoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCksXG4gICAgICAgICAgICBwcm9ncmFtID0gdGhpcy5fbGluZVByb2dyYW07XG4gICAgICAgIHRoaXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTcHJpdGVzKCk7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZUxpbmVEYXRhKCk7XG4gICAgICAgIHRoaXMuX2J1ZmZlckxpbmVEYXRhKHRoaXMuX2xpbmVBcnJheXMpO1xuXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmNhbGNNYXRyaWNlcygpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGdsLnByb2dyYW0udV9tYXRyaXgsIGZhbHNlLCBtKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udV9zY2FsZSwgbWFwLmdldFNjYWxlKCkgLyBtYXAuZ2V0U2NhbGUoZ2V0VGFyZ2V0Wm9vbShtYXApKSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZnYocHJvZ3JhbS51X3N0eWxlcywgdGhpcy5fdVN0eWxlKTtcbiAgICAgICAgLy8gZ2wudW5pZm9ybTFmKHByb2dyYW0udV9saW5ld2lkdGgsIHN5bWJvbFsnbGluZVdpZHRoJ10gLyAyKTtcbiAgICAgICAgLy8gdmFyIGNvbG9yID0gQ29sb3Ioc3ltYm9sWydsaW5lQ29sb3InXSkucmdiYUFycmF5KCkubWFwKGZ1bmN0aW9uIChjLCBpKSB7IGlmIChpPT09MykgeyByZXR1cm4gYzsgfSBlbHNlIHtyZXR1cm4gYyAvIDI1NTt9fSk7XG4gICAgICAgIC8vIGdsLnVuaWZvcm00ZnYocHJvZ3JhbS51X2NvbG9yLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9yKSk7XG4gICAgICAgIC8vIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVfb3BhY2l0eSwgc3ltYm9sWydsaW5lT3BhY2l0eSddKTtcbiAgICAgICAgLy8gZ2wudW5pZm9ybTFmKHByb2dyYW0udV9ibHVyLCB0aGlzLmxheWVyLm9wdGlvbnNbJ2JsdXInXSk7XG4gICAgICAgIGxldCB0ZXhTaXplID0gWzAsIDBdO1xuICAgICAgICBpZiAodGhpcy5fc3ByaXRlcykge1xuICAgICAgICAgICAgdGV4U2l6ZSA9IFt0aGlzLl9zcHJpdGVzLmNhbnZhcy53aWR0aCwgdGhpcy5fc3ByaXRlcy5jYW52YXMuaGVpZ2h0XTtcbiAgICAgICAgfVxuICAgICAgICBnbC51bmlmb3JtMmZ2KHByb2dyYW0udV90ZXhfc2l6ZSwgbmV3IEZsb2F0MzJBcnJheSh0ZXhTaXplKSk7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHRoaXMuX2VsZW1lbnRDb3VudCwgZ2wuVU5TSUdORURfSU5ULCAwKTtcbiAgICAgICAgLy9yZWxlYXNlIGVsZW1lbnQgYnVmZmVyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xuICAgIH1cblxuICAgIF9wcmVwYXJlTGluZURhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLl9saW5lQXJyYXlzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsLFxuICAgICAgICAgICAgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGF5ZXIuZGF0YTtcbiAgICAgICAgY29uc3QgcGFpbnRlciA9IG5ldyBMaW5lUGFpbnRlcihnbCwgbWFwKTtcbiAgICAgICAgbGV0IHN5bWJvbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFkYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2ldKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0RGF0YVN5bWJvbChkYXRhW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBwYWludGVyLmFkZExpbmUoZGF0YVtpXVswXSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgLy9nZW9qc29uXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gdGhpcy5nZXREYXRhU3ltYm9sKGRhdGFbaV0ucHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgcGFpbnRlci5hZGRMaW5lKGRhdGFbaV0sIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyDlpITnkIbnurnnkIblnZDmoIdcbiAgICAgICAgY29uc3QgbGluZUFycmF5cyA9IHRoaXMuX2xpbmVBcnJheXMgPSBwYWludGVyLmdldEFycmF5cygpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnRDb3VudCA9IGxpbmVBcnJheXMuZWxlbWVudEFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBfYnVmZmVyTGluZURhdGEobGluZUFycmF5cykge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIC8vYnVmZmVyIHZlcnRleCBkYXRhXG4gICAgICAgIGlmICghdGhpcy5fdmVydGV4QnVmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShsaW5lQXJyYXlzLnZlcnRleEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3ZlcnRleEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoXG4gICAgICAgICAgICBbJ2FfcG9zJywgMiwgJ0ZMT0FUJ11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMuX25vcm1hbEJ1ZmZlcikge1xuICAgICAgICAgICAgLy9idWZmZXIgbm9ybWFsIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbEJ1ZmZlciA9IHRoaXMuX25vcm1hbEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbm9ybWFsQnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGxpbmVBcnJheXMubm9ybWFsQXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fbm9ybWFsQnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYihbXG4gICAgICAgICAgICBbJ2Ffbm9ybWFsJywgMiwgJ0ZMT0FUJ10sXG4gICAgICAgICAgICBbJ2FfbGluZXNvZmFyJywgMSwgJ0ZMT0FUJ11cbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90ZXhCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vdGV4dHVyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgY29uc3QgdGV4QnVmZmVyID0gdGhpcy5fdGV4QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobGluZUFycmF5cy5zdHlsZUFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3RleEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoW1xuICAgICAgICAgICAgWydhX3N0eWxlJywgMSwgJ0ZMT0FUJ11cbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gcmVsZWFzZSBiaW5kZWQgYnVmZmVyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vYnVmZmVyIGVsZW1lbnQgZGF0YVxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEJ1ZmZlciA9IHRoaXMuX2VsZW1lbnRCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgZWxlbWVudEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgVWludDMyQXJyYXkobGluZUFycmF5cy5lbGVtZW50QXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9lbGVtZW50QnVmZmVyKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgfVxufVxuXG5CaWdMaW5lTGF5ZXIucmVnaXN0ZXJSZW5kZXJlcignd2ViZ2wnLCBCaWdMaW5lUmVuZGVyZXIpO1xuIiwiaW1wb3J0IHNoYWRlcnMgZnJvbSAnLi4vc2hhZGVyL1NoYWRlcic7XG5pbXBvcnQgQmlnRGF0YUxheWVyIGZyb20gJy4vQmlnRGF0YUxheWVyJztcbmltcG9ydCBQb2x5Z29uUGFpbnRlciBmcm9tICcuLi9wYWludGVyL1BvbHlnb25QYWludGVyJztcbmltcG9ydCB7IEJpZ0xpbmVSZW5kZXJlciB9IGZyb20gJy4vQmlnTGluZUxheWVyJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAnYmx1cicgOiAyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWdQb2x5Z29uTGF5ZXIgZXh0ZW5kcyBCaWdEYXRhTGF5ZXIge1xuXG59XG5cbkJpZ1BvbHlnb25MYXllci5tZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cbkJpZ1BvbHlnb25MYXllci5yZWdpc3RlckpTT05UeXBlKCdCaWdQb2x5Z29uTGF5ZXInKTtcblxuQmlnUG9seWdvbkxheWVyLnJlZ2lzdGVyUmVuZGVyZXIoJ3dlYmdsJywgY2xhc3MgZXh0ZW5kcyBCaWdMaW5lUmVuZGVyZXIge1xuXG4gICAgb25DYW52YXNDcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gWyd1X21hdHJpeCcsICd1X2ZpbGxfc3R5bGVzWzBdJ107XG4gICAgICAgIHRoaXMuX3BvbHlnb25Qcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKHNoYWRlcnMucG9seWdvbi52ZXJ0ZXhTb3VyY2UsIHNoYWRlcnMucG9seWdvbi5mcmFnbWVudFNvdXJjZSwgdW5pZm9ybXMpO1xuICAgICAgICBzdXBlci5vbkNhbnZhc0NyZWF0ZSgpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUNhbnZhcygpO1xuICAgICAgICB0aGlzLl9kcmF3UG9seWdvbnMoKTtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICB0aGlzLl9kcmF3TGluZXMoKTtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkcmF3T25JbnRlcmFjdGluZygpIHtcbiAgICAgICAgdGhpcy5fZHJhd1BvbHlnb25zKCk7XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgdGhpcy5fZHJhd0xpbmVzKCk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0VGV4dHVyZShzeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsbFRleHR1cmUoc3ltYm9sKTtcbiAgICB9XG5cbiAgICBfZHJhd1BvbHlnb25zKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICBwcm9ncmFtID0gdGhpcy5fcG9seWdvblByb2dyYW07XG4gICAgICAgIHRoaXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTcHJpdGVzKCk7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZVBvbHlnb25EYXRhKCk7XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyUG9seWdvbkRhdGEodGhpcy5fcG9seWdvbkFycmF5cyk7XG5cbiAgICAgICAgY29uc3QgbSA9IHRoaXMuY2FsY01hdHJpY2VzKCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoZ2wucHJvZ3JhbVsndV9tYXRyaXgnXSwgZmFsc2UsIG0pO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KHByb2dyYW1bJ3VfZmlsbF9zdHlsZXMnXSwgdGhpcy5fdUZpbGxTdHlsZSk7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHRoaXMuX3BvbHlnb25FbGVtZW50Q291bnQsIGdsLlVOU0lHTkVEX0lOVCwgMCk7XG4gICAgICAgIC8vcmVsZWFzZSBlbGVtZW50IGJ1ZmZlclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICB9XG5cbiAgICBfcHJlcGFyZVBvbHlnb25EYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fcG9seWdvbkFycmF5cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGF5ZXIuZGF0YTtcbiAgICAgICAgY29uc3QgcGFpbnRlciA9IG5ldyBQb2x5Z29uUGFpbnRlcihnbCwgbWFwKTtcbiAgICAgICAgbGV0IHN5bWJvbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFkYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2ldKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0RGF0YVN5bWJvbChkYXRhW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBwYWludGVyLmFkZFBvbHlnb24oZGF0YVtpXVswXSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgLy9nZW9qc29uXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gdGhpcy5nZXREYXRhU3ltYm9sKGRhdGFbaV0ucHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgcGFpbnRlci5hZGRQb2x5Z29uKGRhdGFbaV0sIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2x5Z29uQXJyYXlzID0gdGhpcy5fcG9seWdvbkFycmF5cyA9IHBhaW50ZXIuZ2V0QXJyYXlzKCk7XG4gICAgICAgIHRoaXMuX3BvbHlnb25FbGVtZW50Q291bnQgPSBwb2x5Z29uQXJyYXlzLmVsZW1lbnRBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgX2J1ZmZlclBvbHlnb25EYXRhKHBvbHlnb25BcnJheXMpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBpZiAoIXRoaXMuX3BvbHlnb25WZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vYnVmZmVyIHZlcnRleCBkYXRhXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLl9wb2x5Z29uVmVydGV4QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9seWdvbkFycmF5cy52ZXJ0ZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9wb2x5Z29uVmVydGV4QnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYihcbiAgICAgICAgICAgIFsnYV9wb3MnLCAyLCAnRkxPQVQnXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghdGhpcy5fcG9seWdvblRleEJ1ZmZlcikge1xuICAgICAgICAgICAgLy90ZXh0dXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBjb25zdCB0ZXhCdWZmZXIgPSB0aGlzLl9wb2x5Z29uVGV4QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9seWdvbkFycmF5cy5zdHlsZUFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3BvbHlnb25UZXhCdWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVmVydGV4QXR0cmliKFtcbiAgICAgICAgICAgIFsnYV9maWxsX3N0eWxlJywgMSwgJ0ZMT0FUJ11cbiAgICAgICAgXSk7XG4gICAgICAgIC8vIHJlbGVhc2UgYmluZGVkIGJ1ZmZlclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9wb2x5Z29uRWxlbUJ1ZmZlcikge1xuICAgICAgICAgICAgLy9idWZmZXIgZWxlbWVudCBkYXRhXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50QnVmZmVyID0gdGhpcy5fcG9seWdvbkVsZW1CdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgZWxlbWVudEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgVWludDMyQXJyYXkocG9seWdvbkFycmF5cy5lbGVtZW50QXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9wb2x5Z29uRWxlbUJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbW92ZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BvbHlnb25BcnJheXM7XG4gICAgICAgIHN1cGVyLm9uUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG59KTtcblxuIiwiaW1wb3J0ICogYXMgbWFwdGFsa3MgZnJvbSAnbWFwdGFsa3MnO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9QYWludGVyJztcbmltcG9ydCBlYXJjdXQgZnJvbSAnZWFyY3V0JztcbmltcG9ydCBQb2ludCBmcm9tICdwb2ludC1nZW9tZXRyeSc7XG5pbXBvcnQgeyBnZXRUYXJnZXRab29tIH0gZnJvbSAnLi9QYWludGVyJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAvL+i+k+WFpeaVsOaNruS4uue7j+e6rOW6puaXtiwg6L2s5YyW5Li6MmQgcG9pbnRcbiAgICAncHJvamVjdCcgOiB0cnVlXG59O1xuXG4vKipcbiAqIEEgUG9seWdvbiBQYWludGVyIHRvIHByb2R1Y2UgdmVydGV4IGNvb3JkaW5hdGVzIGZvciBXZWJHTCBzaGFkZXJzLiA8YnI+XG4gKlxuICogQGF1dGhvciBmdXpoZW5uXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cnVkZVBhaW50ZXIgZXh0ZW5kcyBQYWludGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgbWFwLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGdsLCBtYXAsIG9wdGlvbnMpO1xuICAgICAgICAvLyDnu5PmnpzmlbDnu4RcbiAgICAgICAgLy8tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gW107XG4gICAgICAgIHRoaXMubm9ybWFsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdHlsZUFycmF5ID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue57uT5p6c5pWw57uEXG4gICAgICogQHJldHVybiB7T2JqZWN0fSDnu5PmnpzmlbDnu4RcbiAgICAgKi9cbiAgICBnZXRBcnJheXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAndmVydGV4QXJyYXknICA6IHRoaXMudmVydGV4QXJyYXksXG4gICAgICAgICAgICAnbm9ybWFsQXJyYXknIDogdGhpcy5ub3JtYWxBcnJheSxcbiAgICAgICAgICAgICdlbGVtZW50QXJyYXknIDogdGhpcy5lbGVtZW50QXJyYXksXG4gICAgICAgICAgICAnc3R5bGVBcnJheScgICA6IHRoaXMuc3R5bGVBcnJheVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOadoVBvbHlnb27mlbDmja7nmoTlnZDmoIfmlbDnu4QsICDlnZDmoIfkuLrnu4/nuqzluqbmiJbogIUyZCBwb2ludCjlnZDmoIfmlrnlkJHkuI7lsY/luZXlnZDmoIfnm7jlkIwpLlxuICAgICAqIOW9k+aVsOaNruS4uue7j+e6rOW6puaXtiwg6ZyA6KaB5oqKb3B0aW9uc+S4reeahHByb2plY3Torr7kuLp0cnVlXG4gICAgICog5aSa6L655b2i5pWw5o2u5Y+v5Lul5pivIFBvbHlnb24sIOS5n+WPr+S7peaYryBNdWx0aVBvbHlnb24uXG4gICAgICog5aaC5p6c5pivTXVsdGlQb2x5Z29uLCDmlbDnu4TlvaLlvI/kuLo6IFtbW3gwLCB5MF0sW3gxLCB5MV0sIC4uXV1cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnrKzkuIDmnaHlpJrovrnlvaLnmoTlnZDmoIfmlbDnu4QgICAgICDnrKzkuozmnaHnur/nmoTlnZDmoIfmlbDnu4RcbiAgICAgKiDlpoLmnpzmmK9NdWx0aVBvbHlnb24sIOaVsOe7hOW9ouW8j+S4ujogW1tbW3gwMCwgeTAwXSxbeDAxLCB5MDFdLCAuLl1dLCBbW1t4MTAsIHkxMF0sW3gxMSwgeTExXSwgLi5dXV1cbiAgICAgKiBzdHlsZeS4uuWkmui+ueW9oueahOagt+W8jywg55So5p2l55Sf5oiQ5qC35byP5pWw5o2uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyW11bXXxOdW1iZXJbXVtdW119IHBvbHlnb24gLSDlpJrovrnlvaLlnZDmoIfmlbDnu4RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSDlpJrovrnlvaLnmoTmoLflvI8sIG1hcHRhbGtzLmpz55qEU3ltYm9sXG4gICAgICovXG4gICAgYWRkUG9seWdvbihwb2x5Z29uLCBoZWlnaHQsIHN0eWxlKSB7XG4gICAgICAgIGlmICghcG9seWdvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlLnN5bWJvbFsncG9seWdvbk9wYWNpdHknXSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZlcnRpY2UgPSB0aGlzLl9nZXRWZXJ0aWNlKHBvbHlnb24pO1xuXG4gICAgICAgIC8v6L6T5YWl5pivTXVsdGlQb2x5Z29u5pe2LCDpgY3ljoZjaGlsZHJlbiwg5bm25L6d5qyh5re75Yqg5aSE55CGXG4gICAgICAgIGlmICh2ZXJ0aWNlWzBdICYmIEFycmF5LmlzQXJyYXkodmVydGljZVswXVswXSkgJiYgQXJyYXkuaXNBcnJheSh2ZXJ0aWNlWzBdWzBdWzBdKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB2ZXJ0aWNlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9seWdvbih2ZXJ0aWNlW2ldLCBoZWlnaHQsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsbEFycmF5cyh2ZXJ0aWNlLCBoZWlnaHQsIHN0eWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2ZpbGxBcnJheXModmVydGljZSwgaGVpZ2h0LCBzdHlsZSkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSAzO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFogPSBnZXRUYXJnZXRab29tKHRoaXMubWFwKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVhcmN1dC5mbGF0dGVuKHZlcnRpY2UpO1xuXG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IFtdO1xuICAgICAgICBjb25zdCB0b3AgPSBbXTtcbiAgICAgICAgbGV0IGM7XG4gICAgICAgIC8vcHVzaCAzZCBwb2ludHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBkYXRhLnZlcnRpY2VzLmxlbmd0aDsgaSA8IGw7IGkgKz0gMikge1xuICAgICAgICAgICAgaWYgKGkgPT09IGwgLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VxdWFsQ29vcmQoZGF0YS52ZXJ0aWNlc1tpXSwgZGF0YS52ZXJ0aWNlc1swXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sncHJvamVjdCddKSB7XG4gICAgICAgICAgICAgICAgYyA9IHRoaXMubWFwLmNvb3JkaW5hdGVUb1BvaW50KG5ldyBtYXB0YWxrcy5Db29yZGluYXRlKGRhdGEudmVydGljZXNbaV0sIGRhdGEudmVydGljZXNbaSArIDFdKSwgdGFyZ2V0Wik7XG4gICAgICAgICAgICAgICAgYm90dG9tLnB1c2goYy54LCBjLnksIDApO1xuICAgICAgICAgICAgICAgIHRvcC5wdXNoKGMueCwgYy55LCBoZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3R0b20ucHVzaChkYXRhLnZlcnRpY2VzW2ldLCBkYXRhLnZlcnRpY2VzW2kgKyAxXSwgMCk7XG4gICAgICAgICAgICAgICAgdG9wLnB1c2goZGF0YS52ZXJ0aWNlc1tpXSwgZGF0YS52ZXJ0aWNlc1tpICsgMV0sIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS52ZXJ0aWNlcyA9IGJvdHRvbTtcbiAgICAgICAgbGV0IHRyaWFuZ2xlcyA9IGVhcmN1dChkYXRhLnZlcnRpY2VzLCBkYXRhLmhvbGVzLCBkaW1lbnNpb24pO1xuICAgICAgICBpZiAodHJpYW5nbGVzLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGV2aWF0aW9uID0gZWFyY3V0LmRldmlhdGlvbihkYXRhLnZlcnRpY2VzLCBkYXRhLmhvbGVzLCBkaW1lbnNpb24sIHRyaWFuZ2xlcyk7XG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGRldmlhdGlvbiAqIDFFMykgLyAxRTMgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdHJpYW5nbHVhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYm90dG9tLmxlbmd0aCAvIGRpbWVuc2lvbjtcblxuICAgICAgICBjb25zdCBwcmVDb3VudCA9IHRoaXMudmVydGV4QXJyYXkubGVuZ3RoIC8gZGltZW5zaW9uO1xuICAgICAgICBpZiAocHJlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0cmlhbmdsZXMgPSB0cmlhbmdsZXMubWFwKGUgPT4gZSArIHByZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwdXNoIGJvdHRvbSB2ZXJ0aWNlXG4gICAgICAgIG1hcHRhbGtzLlV0aWwucHVzaEluKHRoaXMudmVydGV4QXJyYXksIGJvdHRvbSk7XG4gICAgICAgIC8vIHB1c2ggYm90dG9tIGVsZW1lbnRzXG4gICAgICAgIG1hcHRhbGtzLlV0aWwucHVzaEluKHRoaXMuZWxlbWVudEFycmF5LCB0cmlhbmdsZXMpO1xuICAgICAgICAvLyBwdXNoIGJvdHRvbSBub3JtYWxzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxBcnJheS5wdXNoKDAsIDAsIC0xKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgdHJpYW5nbGVzID0gdHJpYW5nbGVzLm1hcChlID0+IGUgKyBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVzaCB0b3AgdmVydGljZVxuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLnZlcnRleEFycmF5LCB0b3ApO1xuICAgICAgICAvLyBwdXNoIHRvcCBlbGVtZW50c1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLmVsZW1lbnRBcnJheSwgdHJpYW5nbGVzKTtcbiAgICAgICAgLy8gcHVzaCB0b3Agbm9ybWFsc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9ybWFsQXJyYXkucHVzaCgwLCAwLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHB1c2ggd2FsbCBlbGVtZW50c1xuICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHRoaXMudmVydGV4QXJyYXkubGVuZ3RoIC8gZGltZW5zaW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNvdW50OyBpIDwgbCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWkgPSBpICogZGltZW5zaW9uO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsID0gbmV3IFBvaW50KGJvdHRvbVtpaSArIDNdLCBib3R0b21baWkgKyA0XSkuc3ViKG5ldyBQb2ludChib3R0b21baWldLCBib3R0b21baWkgKyAxXSkpLl91bml0KCkuX3BlcnAoKTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4QXJyYXkucHVzaChib3R0b21baWldLCBib3R0b21baWkgKyAxXSwgYm90dG9tW2lpICsgMl0pO1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheS5wdXNoKGJvdHRvbVtpaSArIDNdLCBib3R0b21baWkgKyA0XSwgYm90dG9tW2lpICsgNV0pO1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheS5wdXNoKHRvcFtpaSArIDNdLCB0b3BbaWkgKyA0XSwgdG9wW2lpICsgNV0pO1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheS5wdXNoKHRvcFtpaV0sIHRvcFtpaSArIDFdLCB0b3BbaWkgKyAyXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDQ7IG4rKykge1xuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsQXJyYXkucHVzaChub3JtYWwueCwgbm9ybWFsLnksIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWkgPSBpICogNDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudEFycmF5LnB1c2godmVydGV4Q291bnQgKyBlaSwgdmVydGV4Q291bnQgKyBlaSArIDEsIHZlcnRleENvdW50ICsgZWkgKyAyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudEFycmF5LnB1c2godmVydGV4Q291bnQgKyBlaSwgdmVydGV4Q291bnQgKyBlaSArIDIsIHZlcnRleENvdW50ICsgZWkgKyAzKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gcHVzaCBzdHlsZXNcbiAgICAgICAgdGhpcy5fYWRkVGV4Q29vcmRzKHRoaXMudmVydGV4QXJyYXkubGVuZ3RoIC8gZGltZW5zaW9uIC0gcHJlQ291bnQsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBfZ2V0VmVydGljZShnZW8pIHtcbiAgICAgICAgaWYgKGdlby5nZW9tZXRyeSkge1xuICAgICAgICAgICAgLy9HZW9KU09OIGZlYXR1cmVcbiAgICAgICAgICAgIGdlbyA9IGdlby5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIGlmIChnZW8uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIC8vR2VvSlNPTiBnZW9tZXRyeVxuICAgICAgICAgICAgZ2VvID0gZ2VvLmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW87XG4gICAgfVxuXG4gICAgX2FkZFRleENvb3JkcyhuLCBzdHlsZSkge1xuICAgICAgICAvLyB0ZXhfaWR4ICogMTAwICsgb3BhY2l0eSAqIDEwXG4gICAgICAgIGNvbnN0IHYgPSBzdHlsZS5pbmRleCAqIDEwMCArIChzdHlsZS5zeW1ib2xbJ3BvbHlnb25PcGFjaXR5J10gfHwgMSkgKiAxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVBcnJheS5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VxdWFsQ29vcmQoYzEsIGMyKSB7XG4gICAgICAgIHJldHVybiBjMVswXSA9PT0gYzJbMF0gJiYgYzFbMV0gPT09IGMyWzFdO1xuICAgIH1cbn1cblxuRXh0cnVkZVBhaW50ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuIiwiaW1wb3J0IHNoYWRlcnMgZnJvbSAnLi4vc2hhZGVyL1NoYWRlcic7XG5pbXBvcnQgRXh0cnVkZVBhaW50ZXIgZnJvbSAnLi4vcGFpbnRlci9FeHRydWRlUGFpbnRlcic7XG5pbXBvcnQgQmlnRGF0YUxheWVyIGZyb20gJy4vQmlnRGF0YUxheWVyJztcbmltcG9ydCBQYXRoUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlci9QYXRoUmVuZGVyZXInO1xuaW1wb3J0IHsgdmVjMyB9IGZyb20gJ0BtYXBib3gvZ2wtbWF0cml4JztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuLi9wYWludGVyL1BhaW50ZXInO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgICdsaWdodFBvcycgOiBbMTAsIDAsIDM1XSxcbiAgICAnbGlnaHRDb2xvcicgOiBbMSwgMSwgMV0sXG4gICAgJ2xpZ2h0SW50ZW5zaXR5JyA6IDAuNSxcbiAgICAnYW1iaWVudExpZ2h0JyA6IFswLjAyLCAwLjAyLCAwLjAyXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cnVkZVBvbHlnb25MYXllciBleHRlbmRzIEJpZ0RhdGFMYXllciB7XG5cbn1cblxuRXh0cnVkZVBvbHlnb25MYXllci5tZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cbkV4dHJ1ZGVQb2x5Z29uTGF5ZXIucmVnaXN0ZXJKU09OVHlwZSgnRXh0cnVkZVBvbHlnb25MYXllcicpO1xuXG5leHBvcnQgY2xhc3MgRXh0cnVkZVJlbmRlcmVyIGV4dGVuZHMgUGF0aFJlbmRlcmVyIHtcblxuICAgIG9uQ2FudmFzQ3JlYXRlKCkge1xuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IFsndV9tYXRyaXgnLCAndV9maWxsX3N0eWxlc1swXScsICd1X2xpZ2h0Y29sb3InLCAndV9saWdodHBvcycsICd1X2FtYmllbnRsaWdodCcsICd1X2xpZ2h0aW50ZW5zaXR5J107XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShzaGFkZXJzLmV4dHJ1ZGUudmVydGV4U291cmNlLCBzaGFkZXJzLmV4dHJ1ZGUuZnJhZ21lbnRTb3VyY2UsIHVuaWZvcm1zKTtcbiAgICAgICAgc3VwZXIub25DYW52YXNDcmVhdGUoKTtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgIC8vIGdsLmRlcHRoRnVuYyhnbC5FUVVBTCk7XG4gICAgICAgIC8vIGdsLmN1bGxGYWNlKGdsLkZST05UX0FORF9CQUNLKTtcbiAgICAgICAgLy8gSWYgYmxlbmQgaXMgZW5hYmxlZCwgZXh0cnVzaW9uJ3Mgd2FsbCB3aWxsIGJlIHRyYW5zcGFyZW50XG4gICAgICAgIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuICAgICAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUNhbnZhcygpO1xuICAgICAgICB0aGlzLl9kcmF3RXh0cnVkZXMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIGRyYXdPbkludGVyYWN0aW5nKCkge1xuICAgICAgICB0aGlzLl9kcmF3RXh0cnVkZXMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fZXh0cnVkZUFycmF5cztcbiAgICAgICAgc3VwZXIub25SZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBnZXRUZXh0dXJlKHN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxsVGV4dHVyZShzeW1ib2wpO1xuICAgIH1cblxuICAgIF9kcmF3RXh0cnVkZXMoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG4gICAgICAgIHRoaXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTcHJpdGVzKCk7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZURhdGEoKTtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuY2FsY01hdHJpY2VzKCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoZ2wucHJvZ3JhbVsndV9tYXRyaXgnXSwgZmFsc2UsIG0pO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KHByb2dyYW1bJ3VfZmlsbF9zdHlsZXMnXSwgdGhpcy5fdUZpbGxTdHlsZSk7XG5cbiAgICAgICAgY29uc3QgbGlnaHRwb3MgPSB0aGlzLmxheWVyLm9wdGlvbnNbJ2xpZ2h0UG9zJ10gfHwgWzAsIDAsIDM1XTtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihnbC5wcm9ncmFtWyd1X2xpZ2h0cG9zJ10sIHZlYzMubm9ybWFsaXplKFtdLCBsaWdodHBvcykpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0Q29sb3IgPSB0aGlzLmxheWVyLm9wdGlvbnNbJ2xpZ2h0Q29sb3InXSB8fCBbMSwgMSwgMV07XG4gICAgICAgIGdsLnVuaWZvcm0zZihnbC5wcm9ncmFtWyd1X2xpZ2h0Y29sb3InXSwgbGlnaHRDb2xvclswXSwgbGlnaHRDb2xvclsxXSwgbGlnaHRDb2xvclsyXSk7XG5cbiAgICAgICAgY29uc3QgYW1iaWVudCA9IHRoaXMubGF5ZXIub3B0aW9uc1snYW1iaWVudExpZ2h0J10gfHwgWzAuMDIsIDAuMDIsIDAuMDJdO1xuICAgICAgICBnbC51bmlmb3JtM2YoZ2wucHJvZ3JhbVsndV9hbWJpZW50bGlnaHQnXSwgYW1iaWVudFswXSwgYW1iaWVudFsxXSwgYW1iaWVudFsyXSk7XG5cbiAgICAgICAgY29uc3QgbGlnaHRJbnRlbnNpdHkgPSB0aGlzLmxheWVyLm9wdGlvbnNbJ2xpZ2h0SW50ZW5zaXR5J10gfHwgMC41O1xuICAgICAgICBnbC51bmlmb3JtMWYoZ2wucHJvZ3JhbVsndV9saWdodGludGVuc2l0eSddLCBsaWdodEludGVuc2l0eSk7XG4gICAgICAgIHRoaXMuX2J1ZmZlckV4dHJ1ZGVEYXRhKHRoaXMuX2V4dHJ1ZGVBcnJheXMpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCB0aGlzLl9lbGVtZW50Q291bnQsIGdsLlVOU0lHTkVEX0lOVCwgMCk7XG4gICAgICAgIC8vIGdsLmRyYXdFbGVtZW50cyhnbC5MSU5FUywgdGhpcy5fZWxlbWVudENvdW50LCBnbC5VTlNJR05FRF9JTlQsIDApO1xuICAgICAgICAvL3JlbGVhc2UgZWxlbWVudCBidWZmZXJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgfVxuXG4gICAgX3ByZXBhcmVEYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fZXh0cnVkZUFycmF5cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFogPSBnZXRUYXJnZXRab29tKG1hcCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxheWVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgRXh0cnVkZVBhaW50ZXIoZ2wsIG1hcCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghZGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtpXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLmdldERhdGFTeW1ib2woZGF0YVtpXVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YVtpXVsxXVsnaGVpZ2h0J107XG4gICAgICAgICAgICAgICAgY29uc3QgcEhlaWdodCA9IG1hcC5kaXN0YW5jZVRvUGl4ZWwoaGVpZ2h0LCAwLCB0YXJnZXRaKS53aWR0aDtcbiAgICAgICAgICAgICAgICBwYWludGVyLmFkZFBvbHlnb24oZGF0YVtpXVswXSwgcEhlaWdodCwgc3ltYm9sKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgLy9nZW9qc29uXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5nZXREYXRhU3ltYm9sKGRhdGFbaV0ucHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YVtpXS5wcm9wZXJ0aWVzWydoZWlnaHQnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwSGVpZ2h0ID0gbWFwLmRpc3RhbmNlVG9QaXhlbChoZWlnaHQsIDAsIHRhcmdldFopLndpZHRoO1xuICAgICAgICAgICAgICAgIHBhaW50ZXIuYWRkUG9seWdvbihkYXRhW2ldLCBwSGVpZ2h0LCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dHJ1ZGVBcnJheXMgPSB0aGlzLl9leHRydWRlQXJyYXlzID0gcGFpbnRlci5nZXRBcnJheXMoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudENvdW50ID0gZXh0cnVkZUFycmF5cy5lbGVtZW50QXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIF9idWZmZXJFeHRydWRlRGF0YShleHRydWRlQXJyYXlzKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgLy9idWZmZXIgdmVydGV4IGRhdGFcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuX3ZlcnRleEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGV4dHJ1ZGVBcnJheXMudmVydGV4QXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fdmVydGV4QnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYihcbiAgICAgICAgICAgIFsnYV9wb3MnLCAzLCAnRkxPQVQnXVxuICAgICAgICApO1xuXG4gICAgICAgIC8vYnVmZmVyIG5vcm1hbCBkYXRhXG4gICAgICAgIGlmICghdGhpcy5fbm9ybWFsQnVmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxCdWZmZXIgPSB0aGlzLl9ub3JtYWxCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG5vcm1hbEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShleHRydWRlQXJyYXlzLm5vcm1hbEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX25vcm1hbEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoXG4gICAgICAgICAgICBbJ2Ffbm9ybWFsJywgMywgJ0ZMT0FUJ11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RleEJ1ZmZlcikge1xuICAgICAgICAgICAgLy90ZXh0dXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBjb25zdCB0ZXhCdWZmZXIgPSB0aGlzLl90ZXhCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShleHRydWRlQXJyYXlzLnN0eWxlQXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fdGV4QnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYihbXG4gICAgICAgICAgICBbJ2FfZmlsbF9zdHlsZScsIDEsICdGTE9BVCddXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIHJlbGVhc2UgYmluZGVkIGJ1ZmZlclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50QnVmZmVyKSB7XG4gICAgICAgICAgICAvL2J1ZmZlciBlbGVtZW50IGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRCdWZmZXIgPSB0aGlzLl9lbGVtZW50QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGVsZW1lbnRCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KGV4dHJ1ZGVBcnJheXMuZWxlbWVudEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5fZWxlbWVudEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkV4dHJ1ZGVQb2x5Z29uTGF5ZXIucmVnaXN0ZXJSZW5kZXJlcignd2ViZ2wnLCBFeHRydWRlUmVuZGVyZXIpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZSIsIm91dCIsIkZsb2F0MzJBcnJheSIsImNvcHkiLCJhIiwiaWRlbnRpdHkiLCJtdWx0aXBseSIsImIiLCJhMDAiLCJhMDEiLCJhMDIiLCJhMDMiLCJhMTAiLCJhMTEiLCJhMTIiLCJhMTMiLCJhMjAiLCJhMjEiLCJhMjIiLCJhMjMiLCJhMzAiLCJhMzEiLCJhMzIiLCJhMzMiLCJiMCIsImIxIiwiYjIiLCJiMyIsInRyYW5zbGF0ZSIsInYiLCJ4IiwieSIsInoiLCJzY2FsZSIsInJvdGF0ZVgiLCJyYWQiLCJzIiwiTWF0aCIsInNpbiIsImMiLCJjb3MiLCJyb3RhdGVaIiwicGVyc3BlY3RpdmUiLCJmb3Z5IiwiYXNwZWN0IiwibmVhciIsImZhciIsImYiLCJ0YW4iLCJuZiIsImxvb2tBdCIsImV5ZSIsImNlbnRlciIsInVwIiwieDAiLCJ4MSIsIngyIiwieTAiLCJ5MSIsInkyIiwiejAiLCJ6MSIsInoyIiwibGVuIiwiZXlleCIsImV5ZXkiLCJleWV6IiwidXB4IiwidXB5IiwidXB6IiwiY2VudGVyeCIsImNlbnRlcnkiLCJjZW50ZXJ6IiwiYWJzIiwic3FydCIsImZyb21WYWx1ZXMiLCJub3JtYWxpemUiLCJ2ZWMiLCJ2ZWM0IiwidG1wdmVjMyIsInZlYzMiLCJ4VW5pdFZlYzMiLCJ5VW5pdFZlYzMiLCJtYXRyIiwibWF0MyIsImNsb25lIiwic2V0IiwiYWRkIiwiZG90IiwibGVycCIsInRlbXAxIiwidGVtcDIiLCJsZW5ndGgiLCJzcXVhcmVkTGVuZ3RoIiwic3FyTGVuIiwiZXF1YWxzIiwiUGFpbnRlciIsImdsIiwibWFwIiwib3B0aW9ucyIsIm1hcHRhbGtzIiwiZ2V0VGFyZ2V0Wm9vbSIsImdldE1heE5hdGl2ZVpvb20iLCJSQURJQU4iLCJQSSIsInNldHVwQmxlbmQiLCJjb21wT3AiLCJibGVuZEZ1bmMiLCJPTkUiLCJPTkVfTUlOVVNfU1JDX0FMUEhBIiwiT05FX01JTlVTX0RTVF9BTFBIQSIsIkRTVF9BTFBIQSIsIlpFUk8iLCJTUkNfQUxQSEEiLCJXZWJnbFJlbmRlcmVyIiwibmVlZFRvUmVkcmF3IiwiZ2V0TWFwIiwiaXNab29taW5nIiwiZ2V0UGl0Y2giLCJjcmVhdGVDYW52YXMiLCJjYW52YXMiLCJzaXplIiwiZ2V0U2l6ZSIsInIiLCJyZXRpbmEiLCJDYW52YXNDbGFzcyIsIl9jcmVhdGVHTENvbnRleHQiLCJsYXllciIsImNsZWFyQ29sb3IiLCJlbmFibGUiLCJCTEVORCIsImRpc2FibGUiLCJERVBUSF9URVNUIiwicGl4ZWxTdG9yZWkiLCJVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wiLCJvbkNhbnZhc0NyZWF0ZSIsImJ1ZmZlciIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVDYW52YXMiLCJjYW52YXNTaXplIiwidmlld3BvcnQiLCJjbGVhckNhbnZhcyIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJjbGVhclJlY3QiLCJwcmVwYXJlQ2FudmFzIiwiZmlyZSIsIm1lcmdlU3ByaXRlcyIsInNwcml0ZXMiLCJmb3JQb2ludCIsInciLCJoIiwiZm9yRWFjaCIsIm1heCIsInBvdyIsImNlaWwiLCJsb2ciLCJMTjIiLCJzcHJpdGVDYW52YXMiLCJjdHgiLCJ0ZXhDb29yZHMiLCJvZmZzZXRzIiwic2l6ZXMiLCJwb2ludGVyIiwiZHgiLCJkeSIsImN3IiwiY2giLCJwdXNoIiwiZHJhd0ltYWdlIiwib2Zmc2V0IiwicmVzdWx0IiwiY3JlYXRlQnVmZmVyIiwiRXJyb3IiLCJfYnVmZmVycyIsImVuYWJsZVZlcnRleEF0dHJpYiIsImF0dHJpYnV0ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJ2ZXJ0aWNlc1RleENvb3JkcyIsIkZTSVpFIiwiQllURVNfUEVSX0VMRU1FTlQiLCJTVFJJREUiLCJpIiwiYXR0ciIsImdldEF0dHJpYkxvY2F0aW9uIiwicHJvZ3JhbSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsIm9uUmVtb3ZlIiwiZGVsZXRlQnVmZmVyIiwiY3JlYXRlUHJvZ3JhbSIsInZzaGFkZXIiLCJmc2hhZGVyIiwidW5pZm9ybXMiLCJ2ZXJ0ZXhTaGFkZXIiLCJfY29tcGlsZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwibGlua2VkIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZXJyb3IiLCJnZXRQcm9ncmFtSW5mb0xvZyIsImRlbGV0ZVByb2dyYW0iLCJkZWxldGVTaGFkZXIiLCJfaW5pdFVuaWZvcm1zIiwidXNlUHJvZ3JhbSIsImxvYWRUZXh0dXJlIiwiaW1hZ2UiLCJ0ZXhJZHgiLCJ0ZXh0dXJlIiwiY3JlYXRlVGV4dHVyZSIsImFjdGl2ZVRleHR1cmUiLCJiaW5kVGV4dHVyZSIsIlRFWFRVUkVfMkQiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiTkVBUkVTVCIsInRleEltYWdlMkQiLCJSR0JBIiwiVU5TSUdORURfQllURSIsImVuYWJsZVNhbXBsZXIiLCJzYW1wbGVyIiwidVNhbXBsZXIiLCJfZ2V0VW5pZm9ybSIsInVuaWZvcm0xaSIsIl9jYWxjTWF0cmljZXMiLCJnZXRTY2FsZSIsIl9wcmpUb1BvaW50IiwiX2dldFByakNlbnRlciIsImdldE1heFpvb20iLCJmb3YiLCJnZXRGb3YiLCJjYW1lcmFUb0NlbnRlckRpc3RhbmNlIiwibSIsIm1hdDQiLCJJU19OT0RFIiwiZ2V0QmVhcmluZyIsImNhbGNNYXRyaWNlcyIsIm1heFNjYWxlIiwiZ2V0TWluWm9vbSIsImZhcloiLCJfZ2V0Rm92UmF0aW8iLCJtMSIsIm0yIiwiX2dldExvb2tBdE1hdCIsInRhcmdldFoiLCJjZW50ZXIyRCIsImNhbWVyYUNlbnRlciIsImNvb3JkaW5hdGVUb1BvaW50IiwiZ2V0Q2VudGVyIiwicGl0Y2giLCJiZWFyaW5nIiwicmF0aW8iLCJjeiIsImRpc3QiLCJjeCIsImN5IiwiaGl0RGV0ZWN0IiwicG9pbnQiLCJwaXhlbHMiLCJVaW50OEFycmF5IiwiY3AiLCJfcG9pbnRUb0NvbnRhaW5lclBvaW50IiwiX3JvdW5kIiwicmVhZFBpeGVscyIsImdldENhbnZhc0ltYWdlIiwiY2FudmFzSW1nIiwiX3ByZXNlcnZlQnVmZmVyIiwib25ab29tU3RhcnQiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9uWm9vbUVuZCIsImV4dGVuZCIsIm5hbWVzIiwiZSIsInR5cGUiLCJzb3VyY2UiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZWQiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJuYW1lIiwidW5pZm9ybSIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJ1bmlmb3JtTmFtZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsIkNhbnZhc1JlbmRlcmVyIiwiTGluZUF0bGFzIiwicmVzb3VyY2VzIiwiYXRsYXMiLCJnZXRBdGxhcyIsInN5bWJvbCIsImtleSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRBdGxhcyIsIl9nZXRTaXplIiwiX2NyZWF0ZUNhbnZhcyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRhc2hBcnJheSIsImdldEltYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUG9pbnQiLCJwcm90b3R5cGUiLCJwIiwiX2FkZCIsIl9zdWIiLCJfbXVsdEJ5UG9pbnQiLCJfZGl2QnlQb2ludCIsImsiLCJfbXVsdCIsIl9kaXYiLCJfcm90YXRlIiwiX3JvdGF0ZUFyb3VuZCIsIl9tYXRNdWx0IiwiX3VuaXQiLCJfcGVycCIsIm90aGVyIiwiZGlzdFNxciIsImF0YW4yIiwiYW5nbGVXaXRoU2VwIiwibWFnIiwiYW5nbGUiLCJyb3VuZCIsImNvbnZlcnQiLCJMaW5lUGFpbnRlciIsInZlcnRleEFycmF5Iiwibm9ybWFsQXJyYXkiLCJlbGVtZW50QXJyYXkiLCJzdHlsZUFycmF5IiwiZGlzdGFuY2UiLCJnZXRBcnJheXMiLCJhZGRMaW5lIiwibGluZSIsInN0eWxlIiwicHJlVmVydGV4TGVuIiwidmVydGljZSIsIl9nZXRWZXJ0aWNlIiwibCIsIl9wcmVwYXJlVG9BZGQiLCJjdXJyZW50VmVydGV4IiwibmV4dFZlcnRleCIsInZlcnRleCIsInRvQXJyYXkiLCJhZGRDdXJyZW50VmVydGV4IiwiY291bnQiLCJfYWRkVGV4Q29vcmRzIiwicHJlVmVydGV4IiwiZTEiLCJlMiIsImUzIiwiX3dhaXRGb3JMZWZ0Q2FwIiwibm9ybWFsIiwic3ViIiwibmV4dE5vcm1hbCIsInByZUpvaW5Ob3JtYWwiLCJfZ2V0U3RhcnROb3JtYWwiLCJwcmVOb3JtYWwiLCJfYWRkTGluZUVuZFZlcnRleHMiLCJlbmROb3JtYWwiLCJfZ2V0RW5kTm9ybWFsIiwiam9pbk5vcm1hbCIsImxpbmVzb2ZhciIsImV4dHJ1ZGUiLCJfYWRkVmVydGV4Iiwibm9ybWFscyIsIl9wcmVjaXNlIiwibiIsInB1c2hJbiIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJpbmRleCIsIl9nZXRKb2luTm9ybWFsIiwiY3VycmVudE5vcm1hbCIsIm11bHQiLCJjb3NIYWxmQW5nbGUiLCJtaXRlckxlbmd0aCIsIm1lcmdlT3B0aW9ucyIsImVhcmN1dCIsImRhdGEiLCJob2xlSW5kaWNlcyIsImRpbSIsImhhc0hvbGVzIiwib3V0ZXJMZW4iLCJvdXRlck5vZGUiLCJsaW5rZWRMaXN0IiwidHJpYW5nbGVzIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImVsaW1pbmF0ZUhvbGVzIiwic3RhcnQiLCJlbmQiLCJjbG9ja3dpc2UiLCJsYXN0Iiwic2lnbmVkQXJlYSIsImluc2VydE5vZGUiLCJuZXh0IiwiZmlsdGVyUG9pbnRzIiwiYWdhaW4iLCJzdGVpbmVyIiwiYXJlYSIsInByZXYiLCJlYXJjdXRMaW5rZWQiLCJlYXIiLCJwYXNzIiwiaW5kZXhDdXJ2ZSIsInN0b3AiLCJpc0Vhckhhc2hlZCIsImlzRWFyIiwiY3VyZUxvY2FsSW50ZXJzZWN0aW9ucyIsInBvaW50SW5UcmlhbmdsZSIsIm1pblRYIiwibWluVFkiLCJtYXhUWCIsIm1heFRZIiwibWluWiIsInpPcmRlciIsIm1heFoiLCJuZXh0WiIsInByZXZaIiwiaW50ZXJzZWN0cyIsImxvY2FsbHlJbnNpZGUiLCJzcGxpdEVhcmN1dCIsImlzVmFsaWREaWFnb25hbCIsInNwbGl0UG9seWdvbiIsInF1ZXVlIiwibGlzdCIsImdldExlZnRtb3N0Iiwic29ydCIsImNvbXBhcmVYIiwiZWxpbWluYXRlSG9sZSIsImhvbGUiLCJmaW5kSG9sZUJyaWRnZSIsImh4IiwiaHkiLCJxeCIsIkluZmluaXR5IiwibXgiLCJteSIsInRhbk1pbiIsInNvcnRMaW5rZWQiLCJxIiwidGFpbCIsIm51bU1lcmdlcyIsInBTaXplIiwicVNpemUiLCJpblNpemUiLCJsZWZ0bW9zdCIsImF4IiwiYXkiLCJieCIsImJ5IiwicHgiLCJweSIsImludGVyc2VjdHNQb2x5Z29uIiwibWlkZGxlSW5zaWRlIiwicDEiLCJwMiIsInExIiwicTIiLCJpbnNpZGUiLCJhMiIsIk5vZGUiLCJhbiIsImJwIiwicmVtb3ZlTm9kZSIsImRldmlhdGlvbiIsInBvbHlnb25BcmVhIiwidHJpYW5nbGVzQXJlYSIsInN1bSIsImoiLCJmbGF0dGVuIiwidmVydGljZXMiLCJob2xlcyIsImRpbWVuc2lvbnMiLCJob2xlSW5kZXgiLCJkIiwiUG9seWdvblBhaW50ZXIiLCJhZGRQb2x5Z29uIiwicG9seWdvbiIsInJpbmciLCJfZXF1YWxDb29yZCIsImNvbnNvbGUiLCJ3YXJuIiwiZ2VvIiwiYzEiLCJjMiIsIm1heFVuaWZvcm1MZW5ndGgiLCJCcm93c2VyIiwiaWUiLCJlZGdlIiwiVXRpbCIsImxpbmVGcmFnbWVudCIsImxpbmVWZXJ0ZXgiLCJwb2ludEZyYWdtZW50IiwicG9pbnRWZXJ0ZXgiLCJwb2x5Z29uRnJhZ21lbnQiLCJwb2x5Z29uVmVydGV4IiwiZXh0cnVkZUZyYWdtZW50IiwiZXh0cnVkZVZlcnRleCIsIkJpZ0RhdGFMYXllciIsImZyb21KU09OIiwicHJvZmlsZSIsImdldEpTT05UeXBlIiwiY29uc3RydWN0b3IiLCJzZXRTdHlsZSIsImlkIiwib3B0cyIsInRvSlNPTiIsImpzb24iLCJnZXRJZCIsImNvbmZpZyIsImdldFN0eWxlIiwiX3N0eWxlIiwiX2Nvb2tlZFN0eWxlcyIsImNvbXBpbGVTdHlsZSIsInNvcnRLRCIsImlkcyIsImNvb3JkcyIsIm5vZGVTaXplIiwibGVmdCIsInJpZ2h0IiwiZGVwdGgiLCJmbG9vciIsInNlbGVjdCIsImluYyIsImV4cCIsInNkIiwibmV3TGVmdCIsIm5ld1JpZ2h0IiwibWluIiwidCIsInN3YXBJdGVtIiwic3dhcCIsImFyciIsInRtcCIsInJhbmdlIiwic3RhY2siLCJheGlzIiwicG9wIiwibmV4dEF4aXMiLCJ3aXRoaW4iLCJxeSIsInIyIiwic3FEaXN0IiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwia2RidXNoIiwicG9pbnRzIiwiZ2V0WCIsImdldFkiLCJBcnJheVR5cGUiLCJLREJ1c2giLCJkZWZhdWx0R2V0WCIsImRlZmF1bHRHZXRZIiwiQmlnUG9pbnRMYXllciIsImlkZW50aWZ5IiwiY29vcmRpbmF0ZSIsInJlbmRlcmVyIiwiX2dldFJlbmRlcmVyIiwicmVnaXN0ZXJKU09OVHlwZSIsInJlZ2lzdGVyUmVuZGVyZXIiLCJfbmVlZENoZWNrU3R5bGUiLCJfbmVlZENoZWNrU3ByaXRlcyIsIl9yZWdpc3RlckV2ZW50cyIsImNoZWNrUmVzb3VyY2VzIiwicmVzIiwiZ2V0RXh0ZXJuYWxSZXNvdXJjZXMiLCJfdGV4dHVyZUxvYWRlZCIsInNoYWRlcnMiLCJ2ZXJ0ZXhTb3VyY2UiLCJmcmFnbWVudFNvdXJjZSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJkcmF3IiwiX2NoZWNrU3ByaXRlcyIsIl92ZXJ0ZXhDb3VudCIsInZlcnRleFRleENvb3JkcyIsIm1heEljb25TaXplIiwicHJvcGVydGllcyIsInRleCIsIl9nZXRUZXhDb29yZCIsImlkeCIsImJ1ZmZlckRhdGEiLCJTVEFUSUNfRFJBVyIsIl9tYXhJY29uU2l6ZSIsIl9pbmRleERhdGEiLCJfZHJhd01hcmtlcnMiLCJjb21wbGV0ZVJlbmRlciIsImRyYXdPbkludGVyYWN0aW5nIiwiX3JlbW92ZUV2ZW50cyIsIl9zcHJpdGVzIiwiX3VTcHJpdGUiLCJfa2RJbmRleCIsImZpbHRlciIsImxpbWl0IiwiX2luZGV4UG9pbnRzIiwiZXh0ZW50IiwiSW50MzJBcnJheSIsInByb3BzIiwibWFya2VyIiwic3ByaXRlIiwiX2dldFNwcml0ZSIsIndpbmRvdyIsIk1BUFRBTEtTX1dFQkdMX0RFQlVHX0NBTlZBUyIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInVTcHJpdGUiLCJ1bmlmb3JtTWF0cml4NGZ2IiwidV9tYXRyaXgiLCJ1bmlmb3JtMWYiLCJ1X3NjYWxlIiwidW5pZm9ybTFmdiIsInVfc3ByaXRlIiwiZHJhd0FycmF5cyIsIlBPSU5UUyIsIm9uIiwiX29uU3R5bGVDaGFuZ2VkIiwib2ZmIiwicGFyZW50IiwiY2lyY3VsYXIiLCJhbGxQYXJlbnRzIiwiYWxsQ2hpbGRyZW4iLCJ1c2VCdWZmZXIiLCJCdWZmZXIiLCJfY2xvbmUiLCJjaGlsZCIsInByb3RvIiwiX19pc0FycmF5IiwiX19pc1JlZ0V4cCIsIlJlZ0V4cCIsIl9fZ2V0UmVnRXhwRmxhZ3MiLCJsYXN0SW5kZXgiLCJfX2lzRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNCdWZmZXIiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImF0dHJzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2xvbmVQcm90b3R5cGUiLCJfX29ialRvU3RyIiwibyIsInRvU3RyaW5nIiwiY2FsbCIsInJlIiwiZmxhZ3MiLCJnbG9iYWwiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImNzc0tleXdvcmRzIiwicmV2ZXJzZUtleXdvcmRzIiwiaGFzT3duUHJvcGVydHkiLCJjaGFubmVscyIsImxhYmVscyIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInJnYiIsImhzbCIsImciLCJkZWx0YSIsImhzdiIsImh3YiIsImNteWsiLCJjb21wYXJhdGl2ZURpc3RhbmNlIiwia2V5d29yZCIsInJldmVyc2VkIiwiY3VycmVudENsb3Nlc3REaXN0YW5jZSIsImN1cnJlbnRDbG9zZXN0S2V5d29yZCIsInh5eiIsImxhYiIsInQxIiwidDIiLCJ0MyIsInZhbCIsInNtaW4iLCJsbWluIiwic3YiLCJoaSIsInZtaW4iLCJzbCIsIndoIiwiYmwiLCJsY2giLCJociIsImFuc2kxNiIsImFyZ3MiLCJhbnNpIiwiYW5zaTI1NiIsImNvbG9yIiwicmVtIiwiaGV4IiwiaW50ZWdlciIsInN0cmluZyIsInRvVXBwZXJDYXNlIiwibWF0Y2giLCJwYXJzZUludCIsImhjZyIsImNocm9tYSIsImdyYXlzY2FsZSIsImh1ZSIsInB1cmUiLCJtZyIsImFwcGxlIiwiZ3JheSIsImNvbnZlcnNpb25zIiwibW9kZWxzIiwia2V5cyIsImJ1aWxkR3JhcGgiLCJncmFwaCIsImRlcml2ZUJGUyIsImZyb21Nb2RlbCIsImN1cnJlbnQiLCJhZGphY2VudHMiLCJhZGphY2VudCIsIm5vZGUiLCJ1bnNoaWZ0IiwibGluayIsImZyb20iLCJ0byIsIndyYXBDb252ZXJzaW9uIiwidG9Nb2RlbCIsInBhdGgiLCJmbiIsImN1ciIsImNvbnZlcnNpb24iLCJyb3V0ZSIsIndyYXBSYXciLCJ3cmFwcGVkRm4iLCJ1bmRlZmluZWQiLCJzbGljZSIsIndyYXBSb3VuZGVkIiwicm91dGVzIiwicm91dGVNb2RlbHMiLCJyYXciLCJjb2xvck5hbWVzIiwiZ2V0UmdiYSIsImdldEhzbGEiLCJnZXRSZ2IiLCJnZXRIc2wiLCJnZXRId2IiLCJnZXRBbHBoYSIsImhleFN0cmluZyIsInJnYlN0cmluZyIsInJnYmFTdHJpbmciLCJwZXJjZW50U3RyaW5nIiwicGVyY2VudGFTdHJpbmciLCJoc2xTdHJpbmciLCJoc2xhU3RyaW5nIiwiaHdiU3RyaW5nIiwiYWJiciIsInJnYmEiLCJwZXIiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJpc05hTiIsImhzbGEiLCJ2YWxzIiwiaGV4RG91YmxlIiwicmV2ZXJzZU5hbWVzIiwibnVtIiwic3RyIiwiQ29sb3IiLCJvYmoiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJyZWQiLCJsaWdodG5lc3MiLCJ3aGl0ZW5lc3MiLCJjeWFuIiwic2V0U3BhY2UiLCJjb25jYXQiLCJnbFJnYmEiLCJzZXRDaGFubmVsIiwibHVtIiwiY2hhbiIsImNvbG9yMiIsImx1bTEiLCJsdW1pbm9zaXR5IiwibHVtMiIsImNvbnRyYXN0UmF0aW8iLCJjb250cmFzdCIsInlpcSIsImRhcmsiLCJkZWdyZWVzIiwibWl4aW5Db2xvciIsIndlaWdodCIsImNvbG9yMSIsIncxIiwidzIiLCJncmVlbiIsImJsdWUiLCJjb2wiLCJnZXRWYWx1ZXMiLCJzcGFjZSIsImNoYXJBdCIsInNwYWNlcyIsIm1heGVzIiwiY2hhbnMiLCJjYXBwZWQiLCJzbmFtZSIsIlBhdGhSZW5kZXJlciIsImNvbnZlcnRSZXNvdXJjZVVybCIsImdldEV4dGVuc2lvbiIsIl9maWxsU3ByaXRlcyIsImdldERhdGFTeW1ib2wiLCJnZXRUZXh0dXJlIiwiZ2V0TGluZVRleHR1cmUiLCJfYXRsYXMiLCJnZXRGaWxsVGV4dHVyZSIsImZpbGxQYXR0ZXJuIiwiZmlsbFNwcml0ZXMiLCJkZWJ1Z0NhbnZhcyIsImZpbGxSZWN0IiwiZmlsbFN0eWxlIiwiX2ZpbGxUZXh0dXJlTG9hZGVkIiwiY291bnRlciIsInVTdHlsZSIsIl91U3R5bGUiLCJyZ2JhQXJyYXlOb3JtYWxpemVkIiwidUZpbGxTdHlsZSIsIl91RmlsbFN0eWxlIiwiQmlnTGluZUxheWVyIiwiQmlnTGluZVJlbmRlcmVyIiwiX2xpbmVQcm9ncmFtIiwiX2RyYXdMaW5lcyIsIl9saW5lQXJyYXlzIiwiX3ByZXBhcmVMaW5lRGF0YSIsIl9idWZmZXJMaW5lRGF0YSIsInVfc3R5bGVzIiwidGV4U2l6ZSIsInVuaWZvcm0yZnYiLCJ1X3RleF9zaXplIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiX2VsZW1lbnRDb3VudCIsIlVOU0lHTkVEX0lOVCIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwicGFpbnRlciIsImxpbmVBcnJheXMiLCJfdmVydGV4QnVmZmVyIiwidmVydGV4QnVmZmVyIiwiX25vcm1hbEJ1ZmZlciIsIm5vcm1hbEJ1ZmZlciIsIl90ZXhCdWZmZXIiLCJ0ZXhCdWZmZXIiLCJfZWxlbWVudEJ1ZmZlciIsImVsZW1lbnRCdWZmZXIiLCJVaW50MzJBcnJheSIsIkJpZ1BvbHlnb25MYXllciIsIl9wb2x5Z29uUHJvZ3JhbSIsIl9kcmF3UG9seWdvbnMiLCJfcHJlcGFyZVBvbHlnb25EYXRhIiwiX2J1ZmZlclBvbHlnb25EYXRhIiwiX3BvbHlnb25BcnJheXMiLCJfcG9seWdvbkVsZW1lbnRDb3VudCIsInBvbHlnb25BcnJheXMiLCJfcG9seWdvblZlcnRleEJ1ZmZlciIsIl9wb2x5Z29uVGV4QnVmZmVyIiwiX3BvbHlnb25FbGVtQnVmZmVyIiwiRXh0cnVkZVBhaW50ZXIiLCJfZmlsbEFycmF5cyIsImRpbWVuc2lvbiIsImJvdHRvbSIsInRvcCIsInByZUNvdW50IiwidmVydGV4Q291bnQiLCJpaSIsImVpIiwiRXh0cnVkZVBvbHlnb25MYXllciIsIkV4dHJ1ZGVSZW5kZXJlciIsIlNURU5DSUxfVEVTVCIsIl9kcmF3RXh0cnVkZXMiLCJfZXh0cnVkZUFycmF5cyIsIl9wcmVwYXJlRGF0YSIsImxpZ2h0cG9zIiwidW5pZm9ybTNmdiIsImxpZ2h0Q29sb3IiLCJ1bmlmb3JtM2YiLCJhbWJpZW50IiwibGlnaHRJbnRlbnNpdHkiLCJfYnVmZmVyRXh0cnVkZURhdGEi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
