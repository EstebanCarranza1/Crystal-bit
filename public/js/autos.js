var autos = [];

class auto_model {
    constructor(pathFOLDER, pathOBJ, pathMTL, transform, index) {
        
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
//debugger;
object.name = "player-" + index;
            player[index].add(object);
            if (mode_debug)
            debugger;
        });

    }
}
if (mode_debug) debugger;

var carModelPath = [];
var carMaterial = [];
var carFolderPath = [];
carMaterial[0] = "auto_low_poly.mtl";
carModelPath[0] = "auto_low_poly.obj";
carMaterial[1] = "auto_low_poly_p2.mtl";
carModelPath[1] = "auto_low_poly_p2.obj";
carFolderPath[0] = "media/assets/cars/lowpoly/";
carFolderPath[1] = "media/assets/cars/lowpoly/";


for(var i =0; i < 2; i++)
autos[i] = new auto_model(
    "media/assets/cars/lowpoly/", carModelPath[i],carMaterial[i], 
        {
            position: new THREE.Vector3(0, 0, 0),
            rotation: new THREE.Vector3(0, THREE.Math.degToRad(-90), 0),
            scale: new THREE.Vector3(0.5,0.5,0.5)
            
        },
        i
    );

if (mode_debug) debugger;
