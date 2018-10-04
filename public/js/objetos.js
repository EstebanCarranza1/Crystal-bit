//var master_items = [];

function spawnear_items()
{
    
}

function cargar_items_y_obstaculos() {
    
    //---------------------------------------- ITEMS --------------------------------------------------------------------------------
    var items_pathItemsFolder = [];
    var items_pathItemsOBJ = [];
    var items_pathItemsMTL = [];
    var items_scaleMaster = [];

    items_pathItemsFolder[0] = "media/assets/item/";
    items_pathItemsOBJ[0] = "item_change.obj";
    items_pathItemsMTL[0] = "item_change.mtl";
    items_scaleMaster[0] = 0.2;

    items_pathItemsFolder[1] = "media/assets/item/";
    items_pathItemsOBJ[1] = "item_movent.obj";
    items_pathItemsMTL[1] = "item_movent.mtl";
    items_scaleMaster[1] = 0.2;

    items_pathItemsFolder[2] = "media/assets/item/";
    items_pathItemsOBJ[2] = "item_speed.obj";
    items_pathItemsMTL[2] = "item_speed.mtl";
    items_scaleMaster[2] = 0.2;

  
    loadOBJWithMTL(items_pathItemsFolder[0], items_pathItemsOBJ[0], items_pathItemsMTL[0], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster[0], items_scaleMaster[0], items_scaleMaster[0]);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
       object.name = "item_change";
       master_items.push(object.clone());
        scene.add(master_items[0]);
        
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[1], items_pathItemsOBJ[1], items_pathItemsMTL[1], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster[1], items_scaleMaster[1], items_scaleMaster[1]);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
        object.name = "item_movent";
        //master_items[1].push(object.clone());
        master_items.push(object.clone());
        scene.add(master_items[1]);
        
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[2], items_pathItemsOBJ[2], items_pathItemsMTL[2], (object) => {
        if (mode_debug) debugger;

        object.scale.set(items_scaleMaster[2], items_scaleMaster[2], items_scaleMaster[2]);
        object.rotation.set(0,0, 0);
        object.position.set(0, 0, 0);
        object.name = "item_speed";
        master_items.push(object.clone());
        scene.add(master_items[2]);
        
        if (mode_debug)
            debugger;
    });

    //---------------------------------------- OBSTACULOS --------------------------------------------------------------------------------
    
    
    var obstaculos_pathItemsFolder = [];
    var obstaculos_pathItemsOBJ = [];
    var obstaculos_pathItemsMTL = [];
    var obstaculos_scaleMaster = [];

    obstaculos_pathItemsFolder[0] = "media/assets/maps/rock/";
    obstaculos_pathItemsOBJ[0] = "rock.obj";
    obstaculos_pathItemsMTL[0] = "rock.mtl";
    obstaculos_scaleMaster[0] = 0.03;
    loadOBJWithMTL(obstaculos_pathItemsFolder[0], obstaculos_pathItemsOBJ[0], obstaculos_pathItemsMTL[0], (object) => {
        if (mode_debug) debugger;

        object.scale.set(obstaculos_scaleMaster[0], obstaculos_scaleMaster[0], obstaculos_scaleMaster[0]);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
        

        for (var i = 0; i < total_obstaculos; i++) {
            object.name = "rock-" + i;
            obstaculos[i].add(object.clone());
        }

        //scene.add(object);
        if (mode_debug)
            debugger;
    });

    obstaculos_pathItemsFolder[1] = "media/assets/maps/cristal/";
    obstaculos_pathItemsOBJ[1] = "crystal.obj";
    obstaculos_pathItemsMTL[1] = "crystal.mtl";
    obstaculos_scaleMaster[1] = 0.1;
    loadOBJWithMTL(obstaculos_pathItemsFolder[1], obstaculos_pathItemsOBJ[1], obstaculos_pathItemsMTL[1], (object) => {
        if (mode_debug) debugger;

        object.scale.set(obstaculos_scaleMaster[1], obstaculos_scaleMaster[1], obstaculos_scaleMaster[1]);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
        

        for (var i = 0; i < total_obstaculos; i++) {
            //object.name = cristal_name + "-" + i;
            cristales[i].add(object.clone());
        }

        //scene.add(object);
        if (mode_debug)
            debugger;
    });

}