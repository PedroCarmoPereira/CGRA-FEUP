class MyTreeBranch extends CGFobject{
    constructor(scene){
        super(scene, 10);

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture("images/column.jpg");
        this.material.setTextureWrap('REPEAT', 'REPEAT');

        this.branch = new MyCylinder(this.scene, 10);
    }

    display(){
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.1, 0.1, 1.5)
        this.branch.display();
        this.scene.popMatrix();
    }


}