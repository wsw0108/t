const Canvas = require('canvas');
const createContext = require('gl');
const THREE = require('three');
const PNG = require('pngjs').PNG;
const fs = require('fs');

let width = 256;
let height = 256;

let render = (dataTexture) => {
    let scene = new THREE.Scene();

    let VIEW_ANGLE = 45;
    let ASPECT = width / height;
    let NEAR = 0.1;
    let FAR  = 100;

    let camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

    scene.add(camera);
    camera.position.set(0, 2, 2);
    camera.lookAt(scene.position);

    let fake = new Object();
    let gl = createContext(width, height);

    let renderer = new THREE.WebGLRenderer({
        antialias: true,
        width: 0,
        height: 0,
        canvas: fake,
        context: gl
    });

    let geometry = new THREE.BoxGeometry(1, 1, 1);

    let material = new THREE.ShaderMaterial();

    material.vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `;
    material.fragmentShader = `
    uniform sampler2D dataTexture;
    varying vec2 vUv;
    void main() {
        gl_FragColor = texture2D(dataTexture, vUv);
    }
    `;
    material.uniforms = {
        dataTexture: { type: "t", value: dataTexture }
    };

    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let target = new THREE.WebGLRenderTarget(
        width, height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat
    });

    renderer.render(scene, camera, target, true);

    return renderer.getContext();
}

let output = (gl) => {
    let pixels = new Uint8Array(4 * width * height);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    let png = new PNG({width: width, height: height});
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            k = j * width + i;
            r = pixels[4*k];
            g = pixels[4*k + 1];
            b = pixels[4*k + 2];
            a = pixels[4*k + 3];

            m = (height - j + 1) * width + i;
            png.data[4*m]     = r;
            png.data[4*m + 1] = g;
            png.data[4*m + 2] = b;
            png.data[4*m + 3] = a;
        }
    }
    let out = fs.createWriteStream('canvas2gl.png');
    png.pack().pipe(out);
    out.on('close', () => {
        console.log('done');
    });
}

let canvas2gl = (canvas) => {
    let ctx = canvas.getContext('2d');
    let imageData = ctx.getImageData(0, 0, width, height);
    let data = imageData.data;
    let dataTexture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
    let gl = render(dataTexture);

    output(gl);
}

let canvas = new Canvas(width, height);
var ctx = canvas.getContext('2d');

let img = new Canvas.Image();
img.src = fs.readFileSync('emacs.png');

ctx.drawImage(img, 0, 0, width, height);

canvas2gl(canvas);
