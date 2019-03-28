class MyTangram extends CGFobject {
	constructor(scene) {
    super(scene);
    this.initObjects();
}

initObjects() {
    this.parallelogram = new MyParallelogram(this.scene);
    this.bluetriangle = new MyBigTriangle(this.scene, [0.5, 0.5, 1, 1, 1, 0, 0.5, 0.5, 1, 1, 1, 0]);
    this.pinktriangle = new MyTriangle(this.scene);
    this.orangetriangle = new MyBigTriangle(this.scene, [0.5, 0.5, 1, 0, 0, 0,0.5, 0.5, 1, 0, 0, 0]);
    this.purpletriangle = new MySmallTriangle(this.scene, [0.25, 0.25, 0, 0.5, 0, 0, 0.25, 0.25, 0, 0.5, 0, 0]);
    this.redtriangle = new MySmallTriangle(this.scene, [0.5, 0.5, 0.25, 0.75, 0.75, 0.75,0.5, 0.5, 0.25, 0.75, 0.75, 0.75]);
    this.diamond = new MyDiamond(this.scene);
}
  
	display(){
  
    this.scene.pushMatrix();
    this.scene.tangramMaterial.apply();
    this.scene.translate(-2.4, 2.75, 0);
    this.scene.rotate(Math.PI/6, 0, 0, 1);
    this.diamond.display();
    this.scene.popMatrix();

    
    this.scene.pushMatrix(); //BLUE
    this.scene.translate(-2.75, 0, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    this.bluetriangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //PINK
    this.scene.translate(1.4 , 0, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    this.pinktriangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //ORANGE
    this.scene.translate(-1, 0, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.orangetriangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //YELLOW
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.tangramMaterial.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //PURPLE
    this.scene.translate(3.1, 0, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.purpletriangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix(); //RED
    this.scene.translate(1, 3.25, 0);
    this.scene.rotate(Math.PI-Math.PI/4, 0, 0, 1);
    this.redtriangle.display();
    this.scene.popMatrix();

  }

  enableNormalViz(){
    this.diamond.enableNormalViz();
    this.pinktriangle.enableNormalViz();
    this.bluetriangle.enableNormalViz();
    this.orangetriangle.enableNormalViz();
    this.purpletriangle.enableNormalViz();
    this.redtriangle.enableNormalViz();
    this.parallelogram.enableNormalViz();
  }

  disableNormalViz(){
    this.diamond.disableNormalViz();
    this.pinktriangle.disableNormalViz();
    this.bluetriangle.disableNormalViz();
    this.orangetriangle.disableNormalViz();
    this.purpletriangle.disableNormalViz();
    this.redtriangle.disableNormalViz();
    this.parallelogram.disableNormalViz();
  }
}
