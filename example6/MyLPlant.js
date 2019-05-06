class MyLPlant extends MyLSystem {
    constructor(scene){
        super(scene);
        this.initGrammar();
    }

    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}