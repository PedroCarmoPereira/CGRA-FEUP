class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	display(){
    this.scene.pushMatrix();
    var dt = [ 1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                2.25, 2.12, 0.0, 1.0];
    this.scene.multMatrix(dt);
    var dr = [ Math.cos(Math.PI/6), Math.sin(Math.PI/6), 0.0, 0.0,
                -Math.sin(Math.PI/6), Math.cos(Math.PI/6), 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 1.0];
    this.scene.multMatrix(dr);
    if (this.scene.displayDiamond)
    this.scene.diamond.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.scene.translate(0.5, 0.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.1, -0.7, 0);
    this.scene.scale(1.5, 1.5, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-1.5, 0.8, 0);
    this.scene.scale(1.5, 1.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(5.5, 0.0, 0);
    this.scene.scale(-1, 1, 0);
    if (this.scene.displayParallelogram)
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-3, 2.3, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.scale(0.5, 0.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-3.7, 0.4, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.scene.scale(-0.5, -0.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();
  }
}
