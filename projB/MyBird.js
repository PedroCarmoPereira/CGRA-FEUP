class MyBird extends CGFobject{
    constructor(scene){
        super(scene);       
        this.initObjects();
    };

    wingMov = false; //FALSE = DOWN, TRUE = UP
    wingAng = 0;
    br = false;
    
    initObjects(){
        this.head = new MyHead(this.scene);
        this.body = new MyUnitCubeQuad(this.scene);
        this.belly = new MyQuad(this.scene);
        this.wing1 = new MyWings(this.scene);
        this.wing2 = new MyWings(this.scene);
        this.tail = new MyTail(this.scene);
        this.branch = new MyTreeBranch(this.scene);

        var color = this.scene.hexToRgbA('#FFFFFF');
        this.white = new CGFappearance(this.scene);
        this.white.setAmbient(color[0], color[1], color[2], 1.0);
        this.white.setDiffuse(color[0], color[1], color[2], 1.0);
        this.white.setSpecular(color[0], color[1], color[2], 1.0);
        this.white.setShininess(10.0);
    };

    grab(check){
        this.br = check;
    }

    display(){

        this.scene.pushMatrix();
        this.scene.translate(0, 2.9, 0.1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.scene.rotate(-Math.PI/2, 0, 2, 0);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, -0.75);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.scene.scale(1, 0.75, 1.75);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 2.25, -1);
        this.scene.scale(1.75, 3, 1.75);
        this.scene.rotate(this.wingAng, 0, 0, 1);
        this.wing1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 2.25, -0.1);
        this.scene.scale(1.75, 3, 1.75);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(this.wingAng, 0, 0, 1);
        this.wing2.display();
        this.scene.popMatrix();  
        
        this.scene.pushMatrix();
        this.scene.translate(0, 1, -2.25);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.scale(0.5, 0.6, 0.5);
        this.tail.display();
        this.scene.popMatrix();

        this.white.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 2, -0.2);
        this.scene.scale(0.8, 1.4, 0.8);
        this.scene.rotate(Math.PI/3 , 1, 0, 0);
        this.belly.display();
        this.scene.popMatrix();

        if(this.br){
            this.scene.pushMatrix();
            this.scene.translate(-0.75, 3, 1);
            this.scene.rotate(Math.PI/2, 0, 1, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
    }
}