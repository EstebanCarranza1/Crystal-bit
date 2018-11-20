
var scene;
var camera;
var renderer;
var controls;
var objects = [];
var clock;
var deltaTime;
var keys = {};
var cube;
var player = [];
var total_players = 2;
var cristales = [];
var obstaculos = [];
var limites = [];
var pause = false;
//Considerar darle la libertad al jugador de elegir el numero

var total_limites = 4;
var _PAUSE_GAME = false;

//var cristal_model;


function setTotalCristalesGUI() {
    $("#lblTotalCristalesRestantes").html("&nbsp;" + total_cristales);
    if(player != null)
    {
        $("#lblPlayer_01_Points").html("&nbsp;" + player[0].puntuacion);
        $("#lblPlayer_02_Points").html("&nbsp;" + player[1].puntuacion);
    }
    
}

function updateGUI()
{
    setTotalCristalesGUI();
}
function crear_obstaculos() {
    
 
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshLambertMaterial
        (
        {
                color: new THREE.Color(0, 0, 1), opacity: 0.0, transparent: true
        }
        );
    
    var obstaculo = new THREE.Mesh(geometry, material);
    if (console_out) console.log("crear_obstaculos - MasterOBJ (var obstaculo)");
    for (var i = 0; i < total_obstaculos; i++) {
        obstaculo.name = "obstaculo-" + i;
        obstaculos.push(obstaculo.clone());
        scene.add(obstaculos[i]);
        if (console_out) console.log("crear_obstaculos - (obstaculos["+i+"]/"+total_obstaculos+")");
    }
  
}
function crear_limites()
{
    var geometry = new THREE.BoxGeometry(1,2,1);
    var material = new THREE.MeshLambertMaterial
        (
        {
            color: new THREE.Color(0, 1, 0), opacity: 0.0, transparent: true

        }
        );
    var limite = new THREE.Mesh(geometry, material);
    for (var i = 0; i < 4; i++) {
        limite.name = "limite-" + i;
        limites.push(limite.clone());
        scene.add(limites[i]);
    }
    var height = 90;
    //arriba
    limites[0].position.set(0,0,-45);
    limites[0].scale.x = height;
    //derecha
    limites[1].position.set(45,0,0);
    limites[1].scale.z = height;
    //abajo
    limites[2].position.set(0,0,32);
    limites[2].scale.x = height;
    ///izquierda
    limites[3].position.set(-45,0,0);
    limites[3].scale.z = height;
}
function crear_cristales() {
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshLambertMaterial
        (
        {
                color: new THREE.Color(0, 1, 0), opacity: 0.0, transparent: true
            
        }
        );
    
    var cristal = new THREE.Mesh(geometry, material);
    for (var i = 0; i < total_cristales; i++) {
        cristal.name = "cristal-" + i;
        cristales.push(cristal.clone());
        scene.add(cristales[i]);
    }
}

function posicionar_cristales() {
    for (var i = 0; i < total_cristales; i++) {
        cristales[i].position.set(getRandomPos(60, 0, 0), 0, getRandomPos(50, 0));
    }
}
function posicionar_obstaculos() {
    for (var i = 0; i < total_obstaculos; i++) {
        obstaculos[i].position.set(getRandomPos(60, 0, 0), 0, getRandomPos(50, 0));
    }
}
var raycaster = [];
function crear_rayos_para_objeto() {
    for (var i = 0; i < total_players; i++) {
        player[i].rayos =
            [
                new THREE.Vector3(0, 0, 1), 	// rayo en +z (hacia atrás)
                new THREE.Vector3(0, 0, -1), 	// rayo en -z (hacia adelante)
                new THREE.Vector3(1, 0, 0), 	// rayo en +x (hacia la izquierda)
                new THREE.Vector3(-1, 0, 0), 	// rayo en -x (hacia la derecha)
                new THREE.Vector3(0,1,0),        // rayo en +y (hacia arriba)
                new THREE.Vector3(0,-1,0)        // rayo en -y (hacia abajo )

            ];
        raycaster[i] = new THREE.Raycaster();
    }
    /*
    player[1].rayos = 
    [
        new THREE.Vector3(0,0,1),
        new THREE.Vector3(0,0,-1),
        new THREE.Vector3(1,0,0),
        new THREE.Vector3(-1,0,0)
    ];*/
    //raycaster[0] = new THREE.Raycaster();
    //raycaster[1] = new THREE.Raycaster();
}
var colision_cristales;
var colision_obstaculos;
var colision_items;
var colision_limites;
function validar_colision(idPlayer) {
    for (var i = 0; i < player[idPlayer].rayos.length; i++) {
        raycaster[idPlayer].set(player[idPlayer].position, player[idPlayer].rayos[i]);
        colision_cristales = raycaster[idPlayer].intersectObjects(cristales, false);
        colision_obstaculos = raycaster[idPlayer].intersectObjects(obstaculos, false);
        colision_items = raycaster[idPlayer].intersectObjects(master_items, true);
        colision_limites = raycaster[idPlayer].intersectObjects(limites, true);
        if (colision_cristales.length > 0 && colision_cristales[0].distance < 2) {
            console.log("colision_cristales");

            scene.remove(colision_cristales[0].object);
            for(var j = 0; j < cristales.length; j++)
            {
               
                if (cristales[j].name == colision_cristales[0].object.name)
                {
                    //debugger;
                    cristales.splice(j, 1);
                    total_cristales--;
                    if(player != null)
                    {
                        player[idPlayer].puntuacion++;
                        localStorage.setItem("gamepoints_01", player[0].puntuacion);
                        localStorage.setItem("gamepoints_02", player[1].puntuacion);
                        localStorage.setItem("total_cristales", total_cristales);
                    }
                    setTotalCristalesGUI();
                }
                    

            }

                
            //total_cristales--;
            //setTotalCristalesGUI();
        }

        if (colision_obstaculos.length > 0 && colision_obstaculos[0].distance < 2) {

            console.log("colision_obstaculos");
            //debugger;
            var rebote = 0.5;
            if (player[idPlayer].control.forward > 0)
                player[idPlayer].control.forward = (-player[idPlayer].control.velocity) * rebote;
            else
                player[idPlayer].control.forward = (player[idPlayer].control.velocity) * rebote;
            //scene.remove(colision_obstaculos[0].object);


        }
        if (colision_items.length > 0 && colision_items[0].distance < 1) {

            console.log("colision_items " + colision_items[0].object.parent.name);

            colision_items[0].object.parent.position.set(getRandomPos(60, 0, 0), master_items[0].position.y, getRandomPos(50, 0));
        
            $(".clsGUI_MasterMessage").append( "Obtenido [" + colision_items[0].object.parent.name + "] <br>");
            if (colision_items[0].object.parent.name === "item_change")
            {
                var aux_cristal = 0;
                aux_cristal = player[0].puntuacion;
                player[0].puntuacion = player[1].puntuacion;
                player[1].puntuacion = aux_cristal;
            }
            if(colision_items[0].object.parent.name === "item_movent")
            {
                if(idPlayer == 0)
                    player[1].move = false;
                if (idPlayer == 1)
                    player[0].move = false;
            } 
            if (colision_items[0].object.parent.name === "item_speed")
            {
                player[idPlayer].control.velocity+=5;
            }

        }
        if (colision_limites.length > 0 && colision_limites[0].distance < 1) {
            var rebote = 2;
            if (player[idPlayer].control.forward > 0)
                player[idPlayer].control.forward = (-player[idPlayer].control.velocity) * rebote;
            else
                player[idPlayer].control.forward = (player[idPlayer].control.velocity) * rebote;
        }

    }
}
function crear_cubo_principal() {
    var material = new THREE.MeshLambertMaterial({ color: new THREE.Color(0.5, 0.0, 0.0), opacity: 0.0, transparent: true });
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    player[0] = new THREE.Mesh(geometry, material);
    if(console_out) console.log("player[0] BOX - created");
    //player[0].position.y = 0;

    player[1] = player[0].clone();
    if (console_out) console.log("player[1] BOX.clone() - created");

    //Creando coordenada inicial
    player[0].initialPos =
        {
            position: new THREE.Vector3(-35, 0, -26),
            rotation: new THREE.Vector3(0, 29.2, 0)
        };
    if (console_out) console.log("player[0] - initialPos");
    //position : new THREE.Vector3(-35,0,-26);
    //position : new THREE.Vector3(26,0,17);

    player[1].initialPos =
        {
            position: new THREE.Vector3(35, 0, 26),
            rotation: new THREE.Vector3(0, 0.6, 0)
        };
    if (console_out) console.log("player[1] - initialPos");


    for (var i = 0; i < total_players; i++) {
        //Asignando la posición de los jugadores en el escenario de acuerdo a la posición inicial
        player[i].position.x = player[i].initialPos.position.x;
        player[i].position.y = player[i].initialPos.position.y;
        player[i].position.z = player[i].initialPos.position.z;

        player[i].rotation.x = player[i].initialPos.rotation.x;
        player[i].rotation.y = player[i].initialPos.rotation.y;
        player[i].rotation.z = player[i].initialPos.rotation.z;

        player[i].iVelocity = 10;
        player[i].iRot = 0.25;
        player[i].puntuacion = 0;
        player[i].move = true;
        if (console_out) console.log("player["+i+"] - position, rotation and data");
    }
    //new controller (yaw, forward, velocity, rot, btnLeft, btnUp, btnDown, btnRight);
    player[0].control = new controller(0, 0, player[0].iVelocity, player[0].iRot, "A", "W", "S", "D");
    if (console_out) console.log("player[0] - controller asign");
    player[1].control = new controller(0, 0, player[1].iVelocity, player[1].iRot, "%", "&", "(", "'");
    if (console_out) console.log("player[1] - controller asign");
}
var P_idAudioControl;
function activar_menu_pause(activar, idAudioControl) {
    _PAUSE_GAME = activar;
    P_idAudioControl = idAudioControl;
    if (activar) {
        $(".clsP_MenuPause").show();
        $(idAudioControl).trigger('pause');
        $(".clsP_ContinuarJuego").show();
        $(".clsP_ComoJugar").show();
        $(".clsP_CambiarMusica").show();
        $(".clsP_Regresar").hide();
        $(".clsP_Salir").show();
    }
    else {
        $(".clsP_MenuPause").hide();
        $(".clsP_ContinuarJuego").hide();
        $(".clsP_ComoJugar").hide();
        $(".clsP_CambiarMusica").hide();
        $(".clsP_Regresar").hide();
        $(".clsP_Salir").hide();
        $(idAudioControl).trigger('play');
    }

}
var pajaros = [];
function crear_varios_pajaros()
{
    /*
    pajaros[0] = new THREE.Object3D();
    loadOBJWithMTL("media/assets/ave/", "ave_0" + ".obj", "ave_0" + ".mtl", (object) => {
        object.scale.set(0.1, 0.1, 0.1);
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        object.scale.set(0.1, 0.1, 0.1);
        object.visible = true;
        object.name = "ave_0";
        pajaros[0].add(object);
    });
    loadOBJWithMTL("media/assets/ave/", "ave_1" + ".obj", "ave_1" + ".mtl", (object) => {
        object.scale.set(0.1, 0.1, 0.1);
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        
        object.visible = true;
        object.name = "ave_1";
        pajaros[0].add(object);

    });
    loadOBJWithMTL("media/assets/ave/", "ave_2" + ".obj", "ave_2" + ".mtl", (object) => {
        object.scale.set(0.1, 0.1, 0.1);
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        
        object.visible = true;
        object.name = "ave_2";
        pajaros[0].add(object);
    });
    pajaros[0].scale.set(10,10,10);
    pajaros[1] = pajaros[0].clone();
    pajaros[1].position.x = 50;
    scene.add(pajaros[0]);
    scene.add(pajaros[1]);
    */
}
function crear_pajaro()
{
    loadOBJWithMTL("media/assets/ave/", "ave_0" + ".obj", "ave_0" + ".mtl", (object) => {
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        object.scale.set(0.1, 0.1, 0.1);
        object.visible = true;
        object.name = "ave_0";
        aveAnim.objectMain.add(object);
        //scene.add(aveAnim.objectMain[0]);

    });
    loadOBJWithMTL("media/assets/ave/", "ave_1" + ".obj", "ave_1" + ".mtl", (object) => {
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        object.scale.set(0.1, 0.1, 0.1);
        object.visible = true;
        object.name = "ave_1";
        aveAnim.objectMain.add(object);

    });
    loadOBJWithMTL("media/assets/ave/", "ave_2" + ".obj", "ave_2" + ".mtl", (object) => {
        object.rotation.y = THREE.Math.degToRad(90);
        object.position.set(0, 0, 0);
        object.scale.set(0.1, 0.1, 0.1);
        object.visible = true;
        object.name = "ave_2";
        aveAnim.objectMain.add(object);
    });
    scene.add(aveAnim.objectMain);
}
$(document).ready(function () {
    
    crear_cubo_principal();
    if (console_out) console.log("crear_cubo_principal() - OK");
    setupScene();
    setupShaders();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    
   

    crear_cristales();
    if (console_out) console.log("crear_cristales() - OK");
    
    crear_obstaculos();
    if (console_out) console.log("crear_obstaculos() - OK");
    
    posicionar_cristales();
    if (console_out) console.log("posicionar_cristales() - OK");
    
    posicionar_obstaculos();
    if (console_out) console.log("posicionar_obstaculos() - OK");
    
    crear_rayos_para_objeto();
    if (console_out) console.log("crear_rayos_para_objeto() - OK");
    
    cargar_escenario();
    if (console_out) console.log("cargar_escenario() - OK");
    
    cargar_items_y_obstaculos();
    if (console_out) console.log("cargar_items_y_obstaculos() - OK");
    
    cargar_animaciones();
    if (console_out) console.log("cargar_animaciones() - OK");

    crear_limites();
    if (console_out) console.log("crear_limites() - OK");

    crear_pajaro();
    if (console_out) console.log("crear_pajaro() - OK");

    crear_varios_pajaros();
    render();
});

function onKeyDown(event) {
    keys[String.fromCharCode(event.keyCode)] = true;
}
function onKeyUp(event) {
    keys[String.fromCharCode(event.keyCode)] = false;
}

class controller {
    constructor(yaw, forward, velocity, rot, btnLeft, btnUp, btnDown, btnRight) {
        this.yaw = yaw;
        this.forward = forward;
        this.velocity = velocity;
        this.rot = rot;
        this.btnLeft = btnLeft;
        this.btnUp = btnUp;
        this.btnDown = btnDown;
        this.btnRight = btnRight;

    }
}
var endgame = false;
var passDebugg = 0;
function finalizar_juego()
{
    if(!endgame)
    {
        passDebugg++;
        $(".clsP_MenuPause").show();
        $(".clsPanelPuntuaciones").show();
        //$(".clsP_ContinuarJuego").show();
        $(".clsP_Salir").show();
        //$(".clsP_TestInsert").show();
        $(".PUN_row").remove();
        $("#idPun_CabeceraText").html("FIN DE LA PARTIDA");
        agregarPartida
            (
            localStorage.getItem("gamename_01"),
            localStorage.getItem("gamepoints_01"),
            localStorage.getItem("gamename_02"),
            localStorage.getItem("gamepoints_02")
            );

        setTimeout(function () {
            obtenerPuntuaciones(0, 1, '#bodyTab01');
        }, 1000);
       
        endgame = true;
        
    }
        
}
var spawnTimeChange = 0;
var spawnTimeSpeed = 0;
var spawnTimeMovent = 0;
var showMasterMessage = 0;
var moventTime = 0;
var moventTimeMax = 4;
var topDirectionalLight = false;
var maxDirectionalLight = 1;
var minDirectionalLight = 0;
var incDirectionalLight = 0.001;

function ecObjAnim(dTime) {
    if (aveAnim.animOBJ.inc < 1) {
        aveAnim.animOBJ.inc += dTime * aveAnim.animOBJ.vel;
    }
    else {
        aveAnim.animOBJ.inc = 0;
        if (aveAnim.animOBJ.con < aveAnim.animOBJ.frames) aveAnim.animOBJ.con++; else aveAnim.animOBJ.con = 0;
        if (
            aveAnim.objectMain.children.length > 0
        ) {
            for (var i = 0; i < aveAnim.animOBJ.frames + 1; i++)
                aveAnim.objectMain.children[i].visible = false;
            aveAnim.objectMain.children[aveAnim.animOBJ.con].visible = true;
        }
    }
    aveAnim.objectMain.position.set(
        Math.sin(aveAnim.animMOV.angulo) + aveAnim.animMOV.mover, 
        15 + Math.sin(aveAnim.animMOV.angulo), 
        30 + Math.sin(aveAnim.animMOV.angulo));
    aveAnim.animMOV.angulo += dTime;
    aveAnim.animMOV.mover += dTime;
    if (aveAnim.animMOV.mover > aveAnim.animMOV.maxMov) aveAnim.animMOV.mover = aveAnim.animMOV.minMov;
}
var composer;
var renderPass;
var activar_glitch = false;
function render() {
   
    if(!endgame)
    {
        requestAnimationFrame(render);
        deltaTime = clock.getDelta();

    }
    updateGUI();
    ecObjAnim(deltaTime);

    /*
    var master_items_render = scene.getObjectByName("master_items");
    var item_change = scene.getObjectByName("master_items").children[0];
    cristales[i].position.set(getRandomPos(60, 0, 0), 0, getRandomPos(50, 0));*/
    //var itemX2 = itemX1;

    //itemX2.position.y = 4;
    //scene.add(itemX2);
    for(var i = 0; i< 2;i++)
    {
        if(!player[i].move)
        {
            if(moventTime < moventTimeMax)
            {
                player[i].control.velocity = 0;
                moventTime+= deltaTime;  
                $("#lblEstado_0"+ (i+1)).html("&nbsp; Bloqueado");             
               // $("#lblEstado_0"+(i+1)+"_barra").attr('value', 4-moventTime);
            }
            else
            {
                moventTime = 0; 
                player[i].control.velocity = player[i].iVelocity;
                player[i].move = true;
                ///$("#lblEstado_01_barra").attr('value',4);
                $("#lblEstado_0" + (i + 1)).html("&nbsp; Normal");
            }
                
        }
        $("#lblVelocity_0" + (i+1)).html("&nbsp; Velocidad: " + player[i].control.velocity);
        
    }

    var skydome = scene.getObjectByName("skydome");
    if (skydome != null) {
        skydome.rotation.x += 0.001;
        skydome.rotation.y += 0.001;
    }
    
    
    var item_change = scene.getObjectByName("item_change");
    if(item_change != null)
    {
        (item_change.rotation.y < 360) ? item_change.rotation.y += 0.1 : item_change.rotation.y = 0;
        if(spawnTimeChange > 5)
        {
            
            //item_change.position.set(getRandomPos(60, 0, 0), 5, getRandomPos(50, 0));
            item_change.position.set(getRandomPos(60, 0, 0), item_change.position.y, getRandomPos(50, 0));
            spawnTimeChange = 0;
        }
        
    }
    var directionalLight = scene.getObjectByName("directionalLight_0");
    //debugger;
    if (directionalLight != undefined)
    {
        //intensity
        if (directionalLight.intensity <= maxDirectionalLight && !topDirectionalLight) 
            directionalLight.intensity += (incDirectionalLight);
        else 
        { 
            topDirectionalLight = true;
            if (directionalLight.intensity >= minDirectionalLight )
                directionalLight.intensity -= (incDirectionalLight);
            else topDirectionalLight = false;
        }
        if (directionalLight.intensity >= 0.8 && directionalLight.intensity <= 1.0) {
            directionalLight.color.r = 0.5;
            directionalLight.color.g = 0.5;
            directionalLight.color.b = 0.5;
        } else if (directionalLight.intensity >= 0.4 && directionalLight.intensity <= 0.7) {
            directionalLight.color.r = 1;
            directionalLight.color.g = 0.2705882352941176;
            directionalLight.color.b = 0;
        }else if(directionalLight.intensity >= 0 && directionalLight.intensity <= 0.3)
        {
            directionalLight.color.r = 0.0;
            directionalLight.color.g = 0.0;
            directionalLight.color.b = 0.0;
        }
        
    }
    //debugger;
    spawnTimeChange+=deltaTime;

    var item_movent = scene.getObjectByName("item_movent");
    if(item_movent != null)
    {
        (item_movent.rotation.y < 360) ? item_movent.rotation.y += 0.1 : item_movent.rotation.y = 0;
        if (spawnTimeMovent > 5) {
           
            //item_movent.position.set(getRandomPos(60, 0, 0), 5, getRandomPos(50, 0));
            item_movent.position.set(getRandomPos(60, 0, 0), item_movent.position.y, getRandomPos(50, 0));
            spawnTimeMovent = 0;
        }
    }
    spawnTimeMovent += deltaTime;
    var item_speed =  scene.getObjectByName("item_speed");
    if(item_speed != null)
    {
        (item_speed.rotation.y < 360) ? item_speed.rotation.y += 0.1 : item_speed.rotation.y = 0;
        if (spawnTimeSpeed > 5) {
           // item_speed.position.set(getRandomPos(60, 0, 0), 5, getRandomPos(50, 0));
            item_speed.position.set(getRandomPos(60, 0, 0), item_speed.position.y, getRandomPos(50, 0));
            spawnTimeSpeed = 0;
        }
    }
    spawnTimeSpeed += deltaTime;
    
    if (cristales!=null)
    for (var i = 0; i < cristales.length; i++)
   {
       if(scene.getObjectByName(cristal_name+ "-" + i) != null)
       (scene.getObjectByName(cristal_name + "-" + i).rotation.y < 360) ? scene.getObjectByName(cristal_name + "-" + i).rotation.y += 0.1 : scene.getObjectByName(cristal_name + "-" + i).rotation.y = 0;
   }
    

    for (var i = 0; i < total_players; i++) {
        //Hay que inicializar yaw y forward a 0 para evitar que el 
        //personaje se quede moviendose
        player[i].control.yaw = 0;
        player[i].control.forward = 0;
    }

    /*
            var yaw = 0;
            var forward = 0;
            var velocity = 30;
            var rot = 0.25;
    
            if (keys["A"]) {
                yaw = velocity * rot;
            } else if (keys["D"]) {
                yaw = (-velocity)*rot;
            }
            if (keys["W"]) {
                forward = -velocity;
            } else if (keys["S"]) {
                forward = velocity;
            }
    
            validar_colision();
    
            player[0].rotation.y += yaw * deltaTime;
            player[0].translateZ(forward * deltaTime);
    */
    if (keys["L"]) {
       finalizar_juego();
    }
    if (keys["P"]) {
        activar_menu_pause(true, "#musicList");
        /*
        pause = true;
        if(pause)
        {
        	
            P_idAudioControl = "musicList";
            $(".clsP_MenuPause").show();
            $("#"+idAudioControl).trigger('pause');
             
        }
        /*
        else
        {
            $("#musicList").trigger('play');
        }
        */



    }

    for (var i = 0; i < total_players; i++) {
        if (keys[player[i].control.btnLeft]) {
            player[i].control.yaw = player[i].control.velocity * player[i].control.rot;
        } else if (keys[player[i].control.btnRight]) {
            player[i].control.yaw = (-player[i].control.velocity) * player[i].control.rot;
        }
        if (keys[player[i].control.btnUp]) {
            player[i].control.forward = -player[i].control.velocity;
        } else if (keys[player[i].control.btnDown]) {
            player[i].control.forward = player[i].control.velocity;
        }
        validar_colision(i);
        player[i].rotation.y += player[i].control.yaw * deltaTime;
        player[i].translateZ(player[i].control.forward * deltaTime);
    }


    if (showMasterMessage > 5) {
        $(".clsGUI_MasterMessage").html("");
        showMasterMessage = 0;
    }
    showMasterMessage += deltaTime;

    /*Efecto de camara*/
    //camera.lookAt(player[0].position);
    //FIJAR POSICION DE LA CAMARA
    camera.position.y = 25;
    camera.position.z = 40;
    camera.rotation.x = THREE.Math.degToRad(-35);

    if(total_cristales == 0)
        finalizar_juego();

    
    if(total_cristales < 5 && !activar_glitch)
    {
        activar_glitch=true;
        renderPass.renderToScreen = false;
        var glitchPass = new THREE.GlitchPass(0);
        composer.addPass(glitchPass);
        glitchPass.renderToScreen = true;
    }
        
    
    //renderer.render(scene, camera);
    composer.render();
   // sepiaComposer.render();
}

function setupScene() {
    var visibleSize = { width: window.innerWidth - 10, height: window.innerHeight - 10 };
    //var visibleSize = { width: 900 , height: 550};
    clock = new THREE.Clock();
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, visibleSize.width / visibleSize.height, 0.1, 500);
    //camera.position.z = 0;
    //camera.position.y = 1;
    //camera.rotation.x = 90;

    renderer = new THREE.WebGLRenderer({ precision: "mediump" });
    renderer.setClearColor(new THREE.Color(0.2, 0.5, 0.7));
    renderer.setPixelRatio(visibleSize.width / visibleSize.height);
    renderer.setSize(visibleSize.width, visibleSize.height);

    var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 1.0);
    ambientLight.name = "ambientLight_0";
    scene.add(ambientLight);
    if (console_out) console.log("AmbientLight - OK");

    var directionalLight = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 0.4);
    directionalLight.position.set(0, 0, 1);
    directionalLight.name = "directionalLight_0";
    scene.add(directionalLight);
    if (console_out) console.log("DirectionalLight - OK");

    var pointLight = new THREE.PointLight(new THREE.Color(1,1,1), 1, 100);
    pointLight.name= "pointLight_0";
    scene.add(pointLight);
    if (console_out) console.log("PointLight - OK");
    var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
    grid.position.y = -1;
    scene.add(grid);


    for (var i = 0; i < total_players; i++)
        scene.add(player[i]);
    if (console_out) console.log("scene.add(player["+i+"]/"+total_players+") - OK");

    // camara 3era persona (anclar la camara al cubo)
    /*
        Camara en 3era persona 
        agregando la camara al cubo
        y moviendo solo el cubo
    
        camera.position.y = 1;
        player[0].add(camera);
    */

    //camera.position.y = 5;

    $("#scene-section").append(renderer.domElement);

    composer = new THREE.EffectComposer(renderer);
    renderPass = new THREE.RenderPass(scene, camera);
    composer.addPass(renderPass);
    renderPass.renderToScreen = true;

   
    
}
