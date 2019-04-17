class MyCampfire extends MyUnitCubeQuad {

    constructor(scene, tex, r, g, b){
        super(scene, true, tex, tex, tex);
        this.r = r;
        this.g = g;
        this.b = b;
        this.initTex();
    };

    initTex(){
        this.front = new MyQuad(this.scene, [0, 0.5, 0.5, 0.5, 0, 0, 0.5, 0]);
        this.back = new MyQuad(this.scene, [0, 1, 0.5, 1, 0, 0.5, 0.5, 0.5]);
        this.left = new MyQuad(this.scene, [0, 1, 0.5, 1, 0, 0.5, 0.5, 0.5]);
        this.right = new MyQuad(this.scene, [0, 1, 0.5, 1, 0, 0.5, 0.5, 0.5]);
        this.top = new MyQuad(this.scene, [ 0, 1, 0.5, 1, 0, 0.5, 0.5, 0.5]);
        this.bot = new MyQuad(this.scene, [ 0, 1, 0.5, 1, 0, 0.5, 0.5, 0.5]);
        
    };

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.r, this.g, this.b);
        super.display();
        this.scene.popMatrix();

    }

};