class MyTail extends CGFobject{
    constructor(scene){
        super(scene);
        this.feather = new MyTriangle(this.scene);
        var color = this.scene.hexToRgbA('#CC0000');
        this.featherColor = new CGFappearance(this.scene);
        this.featherColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.featherColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.featherColor.setSpecular(color[0], color[1], color[2], 1.0);
        this.featherColor.setShininess(10.0);
    }

    display(){
        this.featherColor.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.5, 1.5, 0.5);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.feather.display();
        this.scene.popMatrix();

        this.featherColor.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.2, 0, 0);
        this.scene.scale(0.5, 1.5, 0.5);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.feather.display();
        this.scene.popMatrix();

        this.featherColor.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.4, 0, 0);
        this.scene.scale(0.5, 1.5, 0.5);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.feather.display();
        this.scene.popMatrix();

    }



}