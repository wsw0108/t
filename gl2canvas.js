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
        gl_Position = vec4(position, 1.0);
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

let output = (canvas) => {
    let ps = canvas.createPNGStream();
    let out = fs.createWriteStream('gl2canvas.png');
    ps.pipe(out);
    out.on('close', () => {
        console.log('done');
    });
}

let gl2canvas = (gl) => {
    let pixels = new Uint8Array(4 * width * height);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    let clamped = new Uint8ClampedArray(pixels);
    let imageData = new Canvas.ImageData(clamped, width, height);
    let canvas = new Canvas(width, height);
    let ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);

    output(canvas);
}

let png = new PNG();
png.on('parsed', () => {
    let width = png.width;
    let height = png.height;
    let data = png.data;

    let dataTexture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
    dataTexture.needsUpdate = true;

    let gl = render(dataTexture);

    gl2canvas(gl);
});

let input = fs.createReadStream('emacs.png');
input.pipe(png);
