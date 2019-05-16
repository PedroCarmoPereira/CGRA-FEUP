class MyUnitCubeQuad extends CGFobject {
    constructor(scene, texOn, texTop, texBot, texSide) {
        super(scene);
        this.texOn = texOn;
        this.initObjects();
        if (texOn == true) this.initTextures(texTop, texBot, texSide);
    };

    initObjects(){
        this.top = new MyQuad(this.scene);
        this.bot = new MyQuad(this.scene);
        this.front = new MyQuad(this.scene);
        this.back = new MyQuad(this.scene);
        this.left = new MyQuad(this.scene);
        this.right = new MyQuad(this.scene);
    };

    initTextures(texTop, texBot, texSide){
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture(texTop);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT'); 

        this.botMaterial = new CGFappearance(this.scene);
        this.botMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.botMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.botMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.botMaterial.setShininess(10.0);
        this.botMaterial.loadTexture(texBot);
        this.botMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture(texSide);
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        if(this.texOn) this.botMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bot.display();
        this.scene.popMatrix();
        
        if(this.texOn) this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2 + Math.PI, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        if(this.texOn) this.sideMaterial.apply();
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