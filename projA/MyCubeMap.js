class MyCubeMap extends MyUnitCubeQuad {
    constructor(scene, mode){
        super(scene);
        this.initTex(mode);
    };

    

    initDay(){
        this.topMaterial.loadTexture('images/day/dayup.jpg');
        this.frontMaterial.loadTexture('images/day/dayfront.jpg');
        this.backMaterial.loadTexture('images/day/dayback.jpg');
        this.botMaterial.loadTexture('images/day/daydown.jpg');
        this.rightMaterial.loadTexture('images/day/dayright.jpg');
        this.leftMaterial.loadTexture('images/day/dayleft.jpg');
    };

    initNight(){
        this.topMaterial.loadTexture('images/night/nightup.jpg');
        this.frontMaterial.loadTexture('images/night/nightfront.jpg');
        this.backMaterial.loadTexture('images/night/nightback.jpg');
        this.botMaterial.loadTexture('images/night/nightdown.jpg');
        this.rightMaterial.loadTexture('images/night/nightright.jpg');
        this.leftMaterial.loadTexture('images/night/nightleft.jpg');
    }

    setMode(mode){
        if (mode == "Day") this.initDay();
        else this.initNight();
    }

    initTex(mode){
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.frontMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setShininess(10.0);
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.backMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.backMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.backMaterial.setShininess(10.0);
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.botMaterial = new CGFappearance(this.scene);
        this.botMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.botMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.botMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.botMaterial.setShininess(10.0);
        this.botMaterial.setTextureWrap('REPEAT', 'REPEAT');
                
        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rightMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setShininess(10.0);
        this.rightMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leftMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setShininess(10.0);
        this.leftMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.setMode(mode);
    }

    insideOutDisplay(){
        this.frontMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.front.display();
        this.scene.popMatrix();

        this.backMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.back.display();
        this.scene.popMatrix();

        this.botMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.bot.display();
        this.scene.popMatrix();

        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        this.rightMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.right.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.left.display();
        this.scene.popMatrix();
    };

    display(){
        this.scene.pushMatrix();
        this.scene.scale(45, 45, 45);
        this.insideOutDisplay();
        this.scene.popMatrix();
    }
};