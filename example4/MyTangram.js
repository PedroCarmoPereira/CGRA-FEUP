class MyTangram extends CGFobject {
	constructor(scene) {
    super(scene);
    this.initObjects();
}

initObjects() {
    this.parallelogram = new MyParallelogram(this.scene);
    this.bluetriangle = new MyBigTriangle(this.scene);
    this.pinktriangle = new MyTriangle(this.scene);
    this.orangetriangle = new MyBigTriangle(this.scene);
    this.purpletriangle = new MySmallTriangle(this.scene);
    this.redtriangle = new MySmallTriangle(this.scene);
    this.diamond = new MyDiamond(this.scene);
}
  
	display(){
    var pieceColor;
    this.scene.pushMatrix();
    this.scene.tangramMaterial.apply();
    this.scene.translate(-2.4, 2.75, 0);
    this.scene.rotate(Math.PI/6, 0, 0, 1);
    this.diamond.display();
    this.scene.popMatrix();

    
    pieceColor = this.scene.hexToRgbA('#0066CC')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //BLUE
    this.scene.materialColor.apply();
    this.scene.translate(-2.75, 0, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    this.bluetriangle.display();
    this.scene.popMatrix();

    pieceColor = this.scene.hexToRgbA('#FF66CC')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //PINK
    this.scene.materialColor.apply();
    this.scene.translate(1.4 , 0, 0);
    this.scene.rotate(-Math.PI/2-Math.PI/4, 0, 0, 1);
    this.pinktriangle.display();
    this.scene.popMatrix();

    pieceColor = this.scene.hexToRgbA('#FF9933')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //ORANGE
    this.scene.materialColor.apply();
    this.scene.translate(-1, 0, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.orangetriangle.display();
    this.scene.popMatrix();

    pieceColor = this.scene.hexToRgbA('#FFFF00')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //YELLOW
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.materialColor.apply();
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.parallelogram.display();
    this.scene.popMatrix();

    pieceColor = this.scene.hexToRgbA('#660066')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //PURPLE
    this.scene.materialColor.apply()
    this.scene.translate(3.1, 0, 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.purpletriangle.display();
    this.scene.popMatrix();

    pieceColor = this.scene.hexToRgbA('#FF0000')
    this.scene.materialColor = new CGFappearance(this.scene);
    this.scene.materialColor.setAmbient(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setDiffuse(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setSpecular(pieceColor[0], pieceColor[1], pieceColor[2], 1.0);
    this.scene.materialColor.setShininess(10.0);
    this.scene.pushMatrix(); //RED
    this.scene.materialColor.apply()
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
