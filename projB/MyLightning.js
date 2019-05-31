class MyLightning extends MyLSystem{

    constructor(scene){
        super(scene);
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = ["F[-X][X]F[-X]+FX", "F[-X][X]+X",  "F[+X]-X"];
        this.angle = 25;
        this.iterations = 3;
        this.scale = 0.5;
        this.productions = {"F": [ this.ruleF ],"X":  this.ruleX };
        this.initGrammar();
        this.iterate();
    }

    initGrammar(){
        this.grammar = {
            "F":new MyQuadRectangle(this.scene),
            "X":new MyQuadRectangle(this.scene)
        }
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 5, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        super.display();
        this.scene.rotate(Math.PI, 0, 1, 0);
        super.display();
        this.scene.popMatrix();
    }
    
}