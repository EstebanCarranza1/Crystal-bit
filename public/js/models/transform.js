class ec_md_transform {
    constructor(tX, tY, tZ, sX, sY, sZ, rX, rY, rZ) {
        
        this.translate = {
            x:tX, y:tY, z:tZ
        };
        this.scale = {
            x: sX, y: sY, z: sZ
        };
        this.rotate = {
            x: rX, y: rY, z: rZ
        };
        /*
        this.translate = [];
        this.translate[0] = tX;
        this.translate[1] = tY;
        this.translate[2] = tZ;
        */
/*
        this.translate.x = tX;
        this.translate.y = tY;
        this.translate.z = tZ;

        this.scale.x = sX;
        this.scale.y = sY;
        this.scale.z = sZ;
        
        this.rotation.x = rX;
        this.rotation.y = rY;
        this.rotation.z = rZ;
        */
    }
}