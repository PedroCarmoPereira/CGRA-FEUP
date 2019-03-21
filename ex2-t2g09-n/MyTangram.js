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
                -2.4, 2.75, 0.0, 1.0];
    this.scene.multMatrix(dt);
    var dr = [ Math.cos(Math.PI/6), Math.sin(Math.PI/6), 0.0, 0.0,
                -Math.sin(Math.PI/6), Math.cos(Math.PI/6), 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 1.0];
    this.scene.multMatrix(dr);
    if (this.scene.displayDiamond)
    this.scene.diamond.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //PINK
    this.scene.translate(1.4 , 0, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //BLUE
    this.scene.translate(-2.75, 0, 0);
    this.scene.scale(1.5, 1.5, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //ORANGE
    this.scene.translate(-1, 0, 0);
    this.scene.scale(1.5, 1.5, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //YELLOW
    this.scene.translate(0.0, 0.0, 0);
    this.scene.scale(-1, 1, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    if (this.scene.displayParallelogram)
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //PURPLE
    this.scene.translate(3.1, 0, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.scene.scale(0.5, 0.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //RED
    this.scene.translate(1, 3.25, 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
    this.scene.scale(-0.5, -0.5, 0);
    if (this.scene.displayTriangle)
    this.scene.triangle.display();
    this.scene.popMatrix();
  }
}
