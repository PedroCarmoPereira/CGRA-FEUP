class MyVoxelHill extends CGFobject {
	constructor(scene, level) {
    super(scene);
    this.level = level;
    this.initObjects();
}

    initObjects() {

        this.cube = new MyUnitCubeQuad(this.scene);
    }
  
    display(){

        for(var i = 0; i < this.level; i++){
            this.scene.pushMatrix();
            this.scene.translate(0, -1*i, 0);
            this.cube.display();
            this.scene.popMatrix();
        }
        for(var i = 1; i < this.level; i++){
            for(var j = 0; j < (i+1+i); j++){
                for(var k = i; k < this.level; k++){
                    this.scene.pushMatrix();
                    this.scene.translate(j-i, -1*k, i);
                    this.cube.display();
                    this.scene.popMatrix();
                    this.scene.pushMatrix();
                    this.scene.translate(j-i, -1*k, -i);
                    this.cube.display();
                    this.scene.popMatrix();
                    if(j != 0 && j != (i+1+i)){
                        this.scene.pushMatrix();
                        this.scene.translate(i, -1*k, j-i);
                        this.cube.display();
                        this.scene.popMatrix();
                        this.scene.pushMatrix();
                        this.scene.translate(-i, -1*k, j-i);
                        this.cube.display();
                        this.scene.popMatrix();
                    }                   
                }
            }
        }

        /*for(var i = 1; i < this.level; i++){
            for(var j = 0; j < (i+1+i); j++){
                if(j != 0 && j != (i+1+i)){
                    this.scene.pushMatrix();
                    this.scene.translate(i, -1*i, j-i);
                    this.cube.display();
                    this.scene.popMatrix();
                    this.scene.pushMatrix();
                    this.scene.translate(-i, -1*i, j-i);
                    this.cube.display();
                    this.scene.popMatrix();
                }
            }   
        } */   
    }
}
