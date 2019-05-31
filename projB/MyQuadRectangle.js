class MyQuadRectangle extends MyQuad {
    constructor(scene, coords){
        super(scene, coords);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.2, 1, 1);
        super.display();
        this.scene.popMatrix();
    }
}