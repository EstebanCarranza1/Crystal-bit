
var shaders = [];

function setupShaders() {
    shaders[0] = {
        uniforms: {
            color_dark: {
                type: "v4",
                value: new THREE.Vector4(0.1, 0.1, 0.1, 0.4)
            },
        },
        vertexShader: document.getElementById("shader-vs").textContent,
        fragmentShader: document.getElementById("shader-fs").textContent,
        transparent: true
    };



    createCubeWithShaderMaterial(0);
}
function createCubeWithShaderMaterial(shaderID) {
    var boxGeometry = new THREE.BoxGeometry(30,30,30);
    var shaderMaterial = new THREE.ShaderMaterial(shaders[shaderID]);
    var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
    cube.position.set(0, 5, -5);
    cube.rotation.x = THREE.Math.degToRad(45);
    cube.name = "cubeX";
    scene.add(cube);
}