class MyLake extends CGFobject {

    constructor(scene, size, tex, b, r){
        super(scene);
        this.size = size;
        this.tex = tex;
        this.b = b;
        this.r = r;
        this.initObjectsAndTextures();
    };

    initObjectsAndTextures(){
        this.quad = new MyQuad(this.scene, [0, this.size, this.size, this.size, 0, 0, this.size, 0]);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setSpecular(0.9, 0.9, 0.9, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture(this.tex);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    };

    display(){
        this.material.apply();
        for (let i  = -1 * this.size; i <= this.size; i++)
            for(let j = -1 * this.size; j <= this.size; j++){
                if(Math.abs(i) + Math.abs(j) == 2*this.size) continue;
                this.scene.pushMatrix();
                this.scene.translate(this.r + i*this.size, 0.09, this.b + j*this.size);
                this.scene.scale(this.size, this.size, this.size);
                this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
                this.quad.display();
                this.scene.popMatrix();
            }

        /*
        this.scene.pushMatrix();
        this.scene.translate(this.r, 0.09, this.b);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r + this.size, 0.09, this.b);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r + this.size, 0.09, this.b + this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r, 0.09, this.b + this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r - this.size, 0.09, this.b);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r - this.size, 0.09, this.b + this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r, 0.09, this.b - this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r + this.size, 0.09, this.b - this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.r + this.size, 0.09, this.b - this.size);
        this.scene.scale(this.size, this.size, this.size);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();*/
    }

}