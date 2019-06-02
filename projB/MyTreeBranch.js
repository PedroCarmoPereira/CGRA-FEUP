class MyTreeBranch extends MyCylinder{
    constructor(scene, x, z){
        super(scene, 10);
        this.y = 4;
        this.x = x;
        this.z = z;

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture("images/column.jpg");
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.scale(0.4, 0.4, 1.75);
        super.display();
        this.scene.popMatrix();
    }


}