
/*
function animationFBX()
{
    var objs = [];
    var loader = new THREE.FBXLoader();
    loader.load("./xsi_man_skinning.fbx", model => {
        var mixer = new THREE.AnimationMixer(model);
        var action = mixer.clipAction(model.animations[0]);
        screen.add(model);
        action.play();
        action.setLoop(THREE.LoopOnce);
        action.timeScale = 500;
        objs.push({model, mixer});
        model.name = "objFBX";
    });
}
function animationFBX2()
{
    // load fbx model and texture                                               
    const objs = [];
    const loader = new THREE.FBXLoader();
    loader.load("./xsi_man_skinning.fbx", model => {
        // model is a THREE.Group (THREE.Object3D)                              
        const mixer = new THREE.AnimationMixer(model);
        // animations is a list of THREE.AnimationClip                          
        mixer.clipAction(model.animations[0]).play();
        scene.add(model);
        objs.push({ model, mixer });
    });
     
}
*/