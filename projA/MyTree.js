class MyTree extends CGFobject {

    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexPath, ttTexPath){
        super(scene);
        this.trunkH = trunkHeight;
        this.trunkR = trunkRadius;
        this.ttH = treeTopHeight;
        this.ttR = treeTopRadius;
        this.trunkTexPath = trunkTexPath;
        this.ttTexPath = ttTexPath;
        this.slices = Math.floor(Math.random() * 5 + 5);
        this.stacks = this.slices;
        this.initObjects();
        this.initTextures();
    };

    initObjects(){
        this.trunk = new MyCylinder(this.scene, this.slices, this.stacks);
        this.ttop = new MyCone(this.scene, this.slices, this.stacks);
    };

    initTextures(){
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture(this.ttTexPath);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture(this.trunkTexPath);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');
    };

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.trunkR, this.trunkH, this.trunkR);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.trunkMaterial.apply();
        this.trunk.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkH, 0);
        this.scene.scale(this.ttR, this.ttH, this.ttR);
        this.topMaterial.apply();
        this.ttop.display();
        this.scene.popMatrix();

    };
};