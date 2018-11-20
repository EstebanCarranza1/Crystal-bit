// Este memtodo leera todo el texto dentro de los tags script de los shaders que estan 
// arriba y va a crear los shaders con el metodo "createShader" de WebGL
function getShader(gl, shaderScript) {
if (!shaderScript) {
    return null;
}

var str = "";
var k = shaderScript.firstChild;
while (k) {
    if (k.nodeType == 3) {
        str += k.textContent;
    }
    k = k.nextSibling;
}

var shader;
if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
} else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
} else {
    return null;
}

gl.shaderSource(shader, str);
gl.compileShader(shader);

if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    return null;
}

return shader;
}