class MyHouse extends CGFobject{
    constructor(scene, wallTexPath, colTexPath, roofTexPath, doorTexPath){
        super(scene);
        this.wallTexPath = wallTexPath;
        this.colTexPath = colTexPath;
        this.roofTexPath = roofTexPath;
        this.doorTexPath = doorTexPath;
        this.initObjects();
        this.initTextures();
    };

    initObjects(){
        this.block = new MyUnitCubeQuad(this.scene);
        let sides = Math.ceil(Math.random()*5 + 5);
        console.log("Num sides: " + sides);
        this.col0 = new MyPrism(this.scene, sides, sides);
        this.col1 = new MyPrism(this.scene, sides, sides);
        this.col2 = new MyPrism(this.scene, sides, sides);
        this.col3 = new MyPrism(this.scene, sides, sides);
        this.roof = new MyPyramid(this.scene, 4, 4);
        this.door = new MyQuad(this.scene);
    };

    initTextures(){
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.loadTexture(this.roofTexPath);
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.doorMaterial = new CGFappearance(this.scene);
        this.doorMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.doorMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.doorMaterial.setShininess(10.0);
        this.doorMaterial.loadTexture(this.doorTexPath);
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.loadTexture(this.wallTexPath);
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.colMaterial = new CGFappearance(this.scene);
        this.colMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.colMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.colMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.colMaterial.setShininess(10.0);
        this.colMaterial.loadTexture(this.colTexPath);
        this.colMaterial.setTextureWrap('REPEAT', 'REPEAT');

    };

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 1.3, 0);
        this.scene.scale(2.6, 2.6, 2.6);
        this.wallMaterial.apply();
        this.block.display();
        this.scene.popMatrix();
        
        this.colMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.8, -0.1, 1.8);
        this.scene.scale(0.3, 2.6, 0.3);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.col0.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.8, -0.1, 1.8);
        this.scene.scale(0.3, 2.6, 0.3);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.col1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.8, -0.1, -1.8);
        this.scene.scale(0.3, 2.6, 0.3);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.col2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.8, -0.1, -1.8);
        this.scene.scale(0.3, 2.6, 0.3);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.col3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2.5, 0);
        this.scene.scale(3.3, 2, 3.3);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.roofMaterial.apply();
        this.roof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1.1, 1.4);
        this.scene.scale(1, 2.2, 1);
        this.doorMaterial.apply();
        this.door.display();
        this.scene.popMatrix();

    };

};