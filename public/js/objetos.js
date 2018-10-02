


function cargar_items_y_obstaculos() {

    //---------------------------------------- ITEMS --------------------------------------------------------------------------------
    var items_pathItemsFolder = [];
    var items_pathItemsOBJ = [];
    var items_pathItemsMTL = [];
    var items_scaleMaster = 0.2;

    items_pathItemsFolder[0] = "media/assets/item/";
    items_pathItemsOBJ[0] = "item_change.obj";
    items_pathItemsMTL[0] = "item_change.mtl";

    items_pathItemsFolder[1] = "media/assets/item/";
    items_pathItemsOBJ[1] = "item_movent.obj";
    items_pathItemsMTL[1] = "item_movent.mtl";

    items_pathItemsFolder[2] = "media/assets/item/";
    items_pathItemsOBJ[2] = "item_speed.obj";
    items_pathItemsMTL[2] = "item_speed.mtl";

    loadOBJWithMTL(items_pathItemsFolder[0], items_pathItemsOBJ[0], items_pathItemsMTL[0], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster, items_scaleMaster, items_scaleMaster);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 5, 0);
       object.name = "item_change";
        scene.add(object);
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[1], items_pathItemsOBJ[1], items_pathItemsMTL[1], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster, items_scaleMaster, items_scaleMaster);
        object.rotation.set(0, 0, 0);
        object.position.set(10, 5, 0);
        object.name = "item_movent";
        scene.add(object);
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[2], items_pathItemsOBJ[2], items_pathItemsMTL[2], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster, items_scaleMaster, items_scaleMaster);
        object.rotation.set(0, 0, 0);
        object.position.set(-10, 5, 0);
        object.name = "item_speed";
        scene.add(object);
        if (mode_debug)
            debugger;
    });

    //---------------------------------------- OBSTACULOS --------------------------------------------------------------------------------
    var obstaculos_pathItemsFolder = [];
    var obstaculos_pathItemsOBJ = [];
    var obstaculos_pathItemsMTL = [];
    var obstaculos_scaleMaster = 0.04;

    obstaculos_pathItemsFolder[0] = "media/assets/maps/rock/";
    obstaculos_pathItemsOBJ[0] = "rock.obj";
    obstaculos_pathItemsMTL[0] = "rock.mtl";
    loadOBJWithMTL(obstaculos_pathItemsFolder[0], obstaculos_pathItemsOBJ[0], obstaculos_pathItemsMTL[0], (object) => {
        if (mode_debug) debugger;

        object.scale.set(obstaculos_scaleMaster, obstaculos_scaleMaster, obstaculos_scaleMaster);
        object.rotation.set(0, 0, 0);
        object.position.set(0,0, 0);
        object.name = "rock";

        for(var i = 0; i < 10; i++)
            

        scene.add(object);
        if (mode_debug)
            debugger;
    });

}