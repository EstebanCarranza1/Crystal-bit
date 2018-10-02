
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
var pause = false;
//Considerar darle la libertad al jugador de elegir el numero
var total_cristales = 50;
var total_obstaculos = 50;
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

function crear_obstaculos() {
    
 
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshLambertMaterial
        (
        {
                color: new THREE.Color(0, 0, 1), opacity: 0.0, transparent: true
        }
        );

    var obstaculo = new THREE.Mesh(geometry, material);
    for (var i = 0; i < total_obstaculos; i++) {
        obstaculo.name = "obstaculo-" + i;
        obstaculos.push(obstaculo.clone());
        scene.add(obstaculos[i]);
    }
  
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
                new THREE.Vector3(-1, 0, 0)	// rayo en -x (hacia la derecha)
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
function validar_colision(idPlayer) {
    for (var i = 0; i < player[idPlayer].rayos.length; i++) {
        raycaster[idPlayer].set(player[idPlayer].position, player[idPlayer].rayos[i]);
        colision_cristales = raycaster[idPlayer].intersectObjects(cristales, false);
        colision_obstaculos = raycaster[idPlayer].intersectObjects(obstaculos, false);


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

    }
}
function crear_cubo_principal() {
    var material = new THREE.MeshLambertMaterial({ color: new THREE.Color(0.5, 0.0, 0.0), opacity: 0.0, transparent: true });
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    player[0] = new THREE.Mesh(geometry, material)
    //player[0].position.y = 0;

    player[1] = player[0].clone();

    //Creando coordenada inicial
    player[0].initialPos =
        {
            position: new THREE.Vector3(-35, 0, -26),
            rotation: new THREE.Vector3(0, 29.2, 0)
        };

    //position : new THREE.Vector3(-35,0,-26);
    //position : new THREE.Vector3(26,0,17);

    player[1].initialPos =
        {
            position: new THREE.Vector3(35, 0, 26),
            rotation: new THREE.Vector3(0, 0.6, 0)
        };



    for (var i = 0; i < total_players; i++) {
        //Asignando la posición de los jugadores en el escenario de acuerdo a la posición inicial
        player[i].position.x = player[i].initialPos.position.x;
        player[i].position.y = player[i].initialPos.position.y;
        player[i].position.z = player[i].initialPos.position.z;

        player[i].rotation.x = player[i].initialPos.rotation.x;
        player[i].rotation.y = player[i].initialPos.rotation.y;
        player[i].rotation.z = player[i].initialPos.rotation.z;

        player[i].puntuacion = 0;

    }

    player[0].control = new controller(0, 0, 10, 0.25, "A", "W", "S", "D");
    player[1].control = new controller(0, 0, 10, 0.25, "%", "&", "(", "'");

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

$(document).ready(function () {
    crear_cubo_principal();
    setupScene();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    crear_cristales();
    crear_obstaculos();
    posicionar_cristales();
    posicionar_obstaculos();
    crear_rayos_para_objeto();
    cargar_escenario();
    cargar_items_y_obstaculos();
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
function render() {

    if(!endgame)
    {
        requestAnimationFrame(render);
        deltaTime = clock.getDelta();

    }
    
    //if (scene.getObjectByName("skydome") != null) {
        scene.getObjectByName("skydome").rotation.x += 0.001;
        scene.getObjectByName("skydome").rotation.y += 0.001;
        (scene.getObjectByName("item_change").rotation.y < 360) ? scene.getObjectByName("item_change").rotation.y += 0.1 : scene.getObjectByName("item_change").rotation.y = 0;
        (scene.getObjectByName("item_movent").rotation.y < 360) ? scene.getObjectByName("item_movent").rotation.y += 0.1 : scene.getObjectByName("item_movent").rotation.y = 0;
        (scene.getObjectByName("item_speed").rotation.y < 360) ? scene.getObjectByName("item_speed").rotation.y += 0.1 : scene.getObjectByName("item_speed").rotation.y = 0;

    //}
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



    /*Efecto de camara*/
    //camera.lookAt(player[0].position);
    //FIJAR POSICION DE LA CAMARA
    camera.position.y = 25;
    camera.position.z = 40;
    camera.rotation.x = THREE.Math.degToRad(-35);

    if(total_cristales == 0)
        finalizar_juego();
    
    renderer.render(scene, camera);
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
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(new THREE.Color(1, 1, 0), 0.4);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
    grid.position.y = -1;
    scene.add(grid);


    for (var i = 0; i < total_players; i++)
        scene.add(player[i]);

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
}
