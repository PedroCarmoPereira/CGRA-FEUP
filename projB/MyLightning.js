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
    }

    initGrammar(){
        this.grammar = {
            "F":new MyQuadRectangle(this.scene),
            "X":new MyQuadRectangle(this.scene)
        }
    }

    startAnimation(t){
        if(this.scene.strike && this.scene.endAnim){
            this.axiom ="X";
            this.iterate();
            this.scene.endAnim = false;
            this.strikeStart = t;
            this.segPerUD = this.axiom.length/8; //QUANTOS SEGMENTOS POR UPDATE?
            this.depth = 0;
        }
    }

    update(t){
        if(this.scene.strike){
            this.depth += this.segPerUD;
            if (t - this.strikeStart > 1000){
                this.scene.strike = false;
                this.strikeStart = undefined;
                this.depth = 0;
                this.scene.endAnim = true;

            }
        } 

    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length && i <= Math.floor(this.depth) && this.scene.strike; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
    
}