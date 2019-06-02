class MyNest extends CGFobject{
    constructor(scene){
        super(scene);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture("images/twigs.jpg");
        this.material.setTextureWrap('REPEAT', 'REPEAT');
        this.outside = new MyCylinder(this.scene, 6);
        this.base = new MyQuad(this.scene);
        
    }

    display(){
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.outside.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.base.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.base.display();
        this.scene.popMatrix();


    }
}