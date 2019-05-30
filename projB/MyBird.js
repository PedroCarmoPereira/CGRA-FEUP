class MyBird extends CGFobject{
    constructor(scene){
        super(scene);       
        this.initObjects();
    };

    wingMov = false; //FALSE = DOWN, TRUE = UP
    wingAng = 0;
    
    initObjects(){
        this.head = new MyUnitCubeQuad(this.scene);
        this.body = new MyUnitCubeQuad(this.scene);
        this.wing1 = new MyWings(this.scene);
        this.wing2 = new MyWings(this.scene);
        this.beak = new MyPyramid(this.scene, 4, 4);
    };

    display(){

        this.scene.pushMatrix();
        this.scene.translate(0, 3, 0);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, -0.5);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 2, -1);
        this.scene.rotate(this.wingAng, 0, 0, 1);
        this.wing1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 2, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(this.wingAng, 0, 0, 1);
        this.wing2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 3, 0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.25, 0.25, 0.25)
        this.beak.display();
        this.scene.popMatrix();
    }
}