class MyFramedTangram extends CGFobject{
    constructor(scene) {
		super(scene);
		this.initBuffers();
    }
    
    display(){
        this.scene.translate(6.5, 0.5, 6.5);
        
        this.scene.pushMatrix();
        this.scene.scale(10, 0.2, 10);
        this.scene.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0);
        this.scene.rotate(3*Math.PI/2, 1, 0, 0);
        this.scene.tangram.display();
        this.scene.popMatrix();
    }
}