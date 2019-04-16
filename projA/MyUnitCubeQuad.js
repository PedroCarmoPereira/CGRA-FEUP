class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initObjects();
    };

    initObjects(){
        this.top = new MyQuad(this.scene);
        this.bot = new MyQuad(this.scene);
        this.front = new MyQuad(this.scene);
        this.back = new MyQuad(this.scene);
        this.left = new MyQuad(this.scene);
        this.right = new MyQuad(this.scene);
    };

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bot.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.right.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.left.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.front.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.display();
        this.scene.popMatrix();
        
    };
}