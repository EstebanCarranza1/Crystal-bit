class coord {
    constructor(position, rotation, scale) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}

function getRandomPos(max, min) {
    var nAux = 0;
    nAux = Math.random() * (max - min) + min;
    if (nAux > (max / 2))
        nAux = (nAux / 2 * -1);
    return nAux.toFixed(2);
}
/*
var numRan = [];
function getCoord() {
    numRan.push(new coord(
        new THREE.Vector3(getRandomPos(60, 0), 0, getRandomPos(26, 0)),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, 1, 1)
    ));
}
*/
/*
for (var i = 0; i < 10; i++) {

    getCoord();
    console.log("Position [x, z] [" + numRan[i].position.x + "," + numRan[i].position.z + "]");
}
*/
/*
class cristal_model {
    constructor(pathFOLDER, pathOBJ, pathMTL, transform) {

        if (mode_debug) debugger;
        this.model = 0;
        loadOBJWithMTL(pathFOLDER, pathOBJ, pathMTL, (object) => {
            if (mode_debug) debugger;
            object.scale.x = transform.scale.x;
            object.scale.y = transform.scale.y;
            object.scale.z = transform.scale.z;

            object.rotation.x = transform.rotation.x;
            object.rotation.y = transform.rotation.y;
            object.rotation.z = transform.rotation.z;

            object.position.x = transform.position.x;
            object.position.y = transform.position.y;
            object.position.z = transform.position.z;

            cristal_model = object.clone();
            if (mode_debug)
                debugger;
        });

    }
}
*/
/*
new cristal_model(
    "media/assets/cristal/", "cristal.obj", "cristal.mtl",
    {
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Vector3(0, THREE.Math.degToRad(0), 0),
        scale: new THREE.Vector3(0.5, 0.5, 0.5)
    });

cristales[0].add = cristal_model.clone();
    */