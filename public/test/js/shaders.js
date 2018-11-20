
var shaders = [];

function setupShaders()
{
    shaders[0] = {
        uniforms: {
            color_dark: {
                type: "v4",
                value: new THREE.Vector4(0.5, 0.5, 0.5, 0.5)
            },
        },
        vertexShader: document.getElementById("shader-vs").textContent,
        fragmentShader: document.getElementById("shader-fs").textContent,
        transparent: true
    };

   

    createCubeWithShaderMaterial(0);
}
function createCubeWithShaderMaterial(shaderID) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    var shaderMaterial = new THREE.ShaderMaterial(shaders[shaderID]);
    var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
    cube.position.set(0, 5, -5);
    cube.name = "cubeX";
    scene.add(cube);
}