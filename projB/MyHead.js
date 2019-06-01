class MyHead extends CGFobject{

    constructor(scene){
        super(scene);
        this.initObjects();
    }
    //main color 
    initObjects(){
        var color = this.scene.hexToRgbA('#CC0000');
        this.mainColor = new CGFappearance(this.scene);
        this.mainColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.mainColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.mainColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.mainColor.setShininess(10.0);

        color = this.scene.hexToRgbA('#FFFFFF');
        this.scleraColor = new CGFappearance(this.scene);
        this.scleraColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.scleraColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.scleraColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.scleraColor.setShininess(10.0);

        color = this.scene.hexToRgbA('#000000');
        this.irisColor = new CGFappearance(this.scene);
        this.irisColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.irisColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.irisColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.irisColor.setShininess(10.0);
        
        
        color = this.scene.hexToRgbA('#FF9933');
        this.beakColor = new CGFappearance(this.scene);
        this.beakColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.beakColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.beakColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.beakColor.setShininess(10.0);

        color = this.scene.hexToRgbA('#CC0000');
        this.featherColor = new CGFappearance(this.scene);
        this.featherColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.featherColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.featherColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.featherColor.setShininess(10.0);



        this.cube = new MyUnitCubeQuad(this.scene, false);
        this.pyramid = new MyPyramid(this.scene, 4, 4);
        this.feather = new MyTriangle(this.scene);
    }

    display(){
        this.mainColor.apply();
        this.scene.pushMatrix();
        this.scene.scale(3, 3, 3);
        this.cube.display();
        this.scene.popMatrix();
        
        this.scleraColor.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.translate(1.51, 0.6, 1.51);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.translate(1.51, 0.6, -1.51);
        this.cube.display();
        this.scene.popMatrix();

        this.irisColor.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0.5, -1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        this.irisColor.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0.5, 1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        this.beakColor.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.75, 5, 0.75);
        this.pyramid.display();
        this.scene.popMatrix();

        this.featherColor.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 2, 0.5);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.feather.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 2, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.feather.display();
        this.scene.popMatrix();
    }
}