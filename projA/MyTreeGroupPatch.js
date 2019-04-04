class MyTreeGroupPatch extends CGFobject {
	constructor(scene) {
    super(scene);
    this.initObjects();
}

initObjects() {
    this.rand = [];
    this.trees = [];

    for(let i = 0; i < 9; i++){
        this.trees.push(new MyTree(this.scene, Math.random()*0.5 + 1.5, Math.random()*0.7 + 0.5, Math.random()*4 + 2, Math.random()*2 + 1, 'images/bark.jpg', 'images/folliage.jpeg'));   
    }
    
    for(let i = 0; i < 18; i++){
        this.rand.push(Math.random()*3);
    }
}
  
	display(){
    var x = 0;

    for(let i = 0; i < 3; i++){
        this.scene.pushMatrix();
        this.scene.translate(0+this.rand[6*i], 0, x+this.rand[6*i+1]);
        this.trees[3*i].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7+this.rand[6*i+2], 0, x+this.rand[6*i+3]);
        this.trees[3*i+1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14+this.rand[6*i+4], 0, x+this.rand[6*i+5]);       
        this.trees[3*i+2].display();
        this.scene.popMatrix();

        x += 7;
    }
  }
}
