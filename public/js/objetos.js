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
    var item_transforms = [];

    items_pathItemsFolder[0] = "media/assets/item/";
    items_pathItemsOBJ[0] = "item_change.obj";
    items_pathItemsMTL[0] = "item_change.mtl";
    items_scaleMaster[0] = 0.2;
    item_transforms[0] = new ec_md_transform(0, 1.5, 0, 0.2 ,0.2 ,0.2 ,0 ,0 ,0);


    items_pathItemsFolder[1] = "media/assets/item/";
    items_pathItemsOBJ[1] = "item_movent.obj";
    items_pathItemsMTL[1] = "item_movent.mtl";
    items_scaleMaster[1] = 0.2;
    item_transforms[1] = new ec_md_transform(0, 1.5, 0, 0.2, 0.2, 0.2, 0, 0, 0);

    items_pathItemsFolder[2] = "media/assets/item/";
    items_pathItemsOBJ[2] = "item_speed.obj";
    items_pathItemsMTL[2] = "item_speed.mtl";
    items_scaleMaster[2] = 0.2;
    item_transforms[2] = new ec_md_transform(0, 1.5, 0, 0.2, 0.2, 0.2, 0, 0, 0);

    //debugger;
  
    loadOBJWithMTL(items_pathItemsFolder[0], items_pathItemsOBJ[0], items_pathItemsMTL[0], (object) => {
        if (mode_debug) debugger;

       
        object.scale.set(item_transforms[0].scale.x, item_transforms[0].scale.y, item_transforms[0].scale.z);
        object.rotation.set(item_transforms[0].rotate.x, item_transforms[0].rotate.y, item_transforms[0].rotate.z);
        object.position.set(item_transforms[0].translate.x, item_transforms[0].translate.y, item_transforms[0].translate.z);
        
       object.name = "item_change";
       
        
       master_items.push(object.clone());
       master_items[0].Adata = 0;
        scene.add(master_items[0]);
        
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[1], items_pathItemsOBJ[1], items_pathItemsMTL[1], (object) => {
        if (mode_debug) debugger;

        object.scale.set(item_transforms[1].scale.x, item_transforms[1].scale.y, item_transforms[1].scale.z);
        object.rotation.set(item_transforms[1].rotate.x, item_transforms[1].rotate.y, item_transforms[1].rotate.z);
        object.position.set(item_transforms[1].translate.x, item_transforms[1].translate.y, item_transforms[1].translate.z);
        
        
        object.name = "item_movent";
        //master_items[1].push(object.clone());
        master_items.push(object.clone());
        scene.add(master_items[1]);
        
        if (mode_debug)
            debugger;
    });
    loadOBJWithMTL(items_pathItemsFolder[2], items_pathItemsOBJ[2], items_pathItemsMTL[2], (object) => {
        if (mode_debug) debugger;

        object.scale.set(item_transforms[2].scale.x, item_transforms[2].scale.y, item_transforms[2].scale.z);
        object.rotation.set(item_transforms[2].rotate.x, item_transforms[2].rotate.y, item_transforms[2].rotate.z);
        object.position.set(item_transforms[2].translate.x, item_transforms[2].translate.y, item_transforms[2].translate.z);
        
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
        

        for (var i = 0; i < total_cristales; i++) {
            //object.name = cristal_name + "-" + i;
            cristales[i].add(object.clone());
        }

        //scene.add(object);
        if (mode_debug)
            debugger;
    });

}