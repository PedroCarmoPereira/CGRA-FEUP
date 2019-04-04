class MyTreeRowPatch extends CGFobject{
    constructor(scene, x){
        super(scene);
        this.xline = x;
        this.initObjects();
    };

    initObjects(){
        this.trees = [];
        this.treesZs = [];
        for(let i = 0; i < 6; i++){
            this.trees.push(new MyTree(this.scene, Math.random()*0.5 + 1.5, Math.random()*0.7 + 0.5, Math.random()*4 + 2, Math.random()*2 + 1, 'images/bark.jpg', 'images/folliage.jpeg'));
            this.treesZs.push(Math.random()*5);
        }
    };

    display(){
        var i;
        for(i in this.trees){
            this.scene.pushMatrix();
            this.scene.translate(this.xline + i * this.xline, 0, this.treesZs[i]);
            this.trees[i].display();
            this.scene.popMatrix();
        }
    };
};

