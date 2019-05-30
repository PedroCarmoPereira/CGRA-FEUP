class MyLPlant extends MyLSystem {
    constructor(scene){
        super(scene);
        this.axiom = "X"; //
        this.ruleF = "FF"; //
        this.ruleX = ["F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\\\X]+X", " F[\\X][X]/X", "F[/X]\\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"];
        this.angle = 30.0;
        this.iterations = 4;
        this.initGrammar();
        this.productions = {"F": [ this.ruleF ],"X":  this.ruleX };
        this.scale = 0.1;
        this.iterate();
    }
        

    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}