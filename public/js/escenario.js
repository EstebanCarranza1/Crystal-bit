//var lista_piezas_escenario = [];
var escenario = [];
var rotar_skydome = 0;

function cargar_escenario()
{

    loadOBJWithMTL("media/assets/maps/escenario_03/", "escenario_03.obj", "escenario_03.mtl", (object) => {
            if (mode_debug) debugger;

            object.scale.set(0.3, 0.3, 0.3);
            object.rotation.set(0,0,0);
            object.position.set(0,0,0);
            escenario[0] = object.clone();
            scene.add(escenario[0]);
            if (mode_debug)
                debugger;
        });
    loadOBJWithMTL("media/assets/maps/sky/", "skysphere.obj", "skysphere.mtl", (object) => {
        if (mode_debug) debugger;

        object.scale.set(10, 10, 10);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
        object.name = "skydome";
        escenario[0] = object.clone();
        scene.add(escenario[0]);
        if (mode_debug)
            debugger;
    });




}
