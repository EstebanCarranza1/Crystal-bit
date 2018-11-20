var total_cristales = localStorage.getItem("total_cristales") - localStorage.getItem("gamepoints_01") - localStorage.getItem("gamepoints_02");
var total_obstaculos = localStorage.getItem("total_obstaculos");
var cristal_name = "cristal";
var master_items = [];
var MasterMessage = [];
MasterMessage[0] = "Item obtenido";
var console_out = false;
var aveAnim =
{
    objectMain: new THREE.Object3D(),
    animOBJ: { ini: 0, frames: 2, con: 0, vel: 20, inc: 0 },
    animMOV: { angulo: 0, mover: -30, minMov: -30, maxMov: 30 }
};

