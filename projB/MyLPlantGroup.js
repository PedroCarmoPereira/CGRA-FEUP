class MyLPlantGroup extends CGFobject{
    constructor(scene){
        super(scene);
        this.initObjects();
    }

    initObjects(){
        this.rand = [];
        this.plants = [];
        
        for(let i = 0; i < 9; i++) this.plants.push(new MyLPlant(this.scene));
        
        for(let j = 0; j < 18; j++) this.rand.push(Math.random() * 3);
    }

    display(){
        var mod = 0;
        for(let i = 0; i < 3; i++){
            this.scene.pushMatrix();
            this.scene.translate(0+this.rand[6*i], 0, mod+this.rand[6*i+1]);
            this.plants[3*i].display();
            this.scene.popMatrix();
    
            this.scene.pushMatrix();
            this.scene.translate(2+this.rand[6*i+2], 0, mod+this.rand[6*i+3]);
            this.plants[3*i+1].display();
            this.scene.popMatrix();
    
            this.scene.pushMatrix();
            this.scene.translate(4+this.rand[6*i+4], 0, mod+this.rand[6*i+5]);       
            this.plants[3*i+2].display();
            this.scene.popMatrix();

            mod += 2;
        }
    }
}