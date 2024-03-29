class MyBranch extends MyCylinder {
    constructor(scene) {
        super(scene, 4);
        let tmpcolor = this.scene.hexToRgbA('#8B4513');
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(tmpcolor[0], tmpcolor[1], tmpcolor[2], 1.0);
        this.material.setDiffuse(tmpcolor[0], tmpcolor[1], tmpcolor[2], 1.0);
        this.material.setSpecular(tmpcolor[0], tmpcolor[1], tmpcolor[2], 1.0);
        this.material.setShininess(10.0);
    }

    display(){

        this.material.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        super.display();
        this.scene.popMatrix();
    }
}