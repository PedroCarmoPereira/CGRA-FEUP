class MyPrism extends CGFobject{

    constructor(scene, slices, stacks){
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    };


    initBuffers(){
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        
        var angle = 2*Math.PI/this.slices;
        for(let j =0; j <= this.stacks; j++){
            for(let i=0; i < this.slices; i++){

                this.vertices.push(Math.cos(angle *i),Math.sin(angle*i),j*1/this.stacks);
                this.vertices.push(Math.cos((i+1)*angle),Math.sin((i+1)*angle),j*1/this.stacks);
      
                this.normals.push(Math.cos(angle*i+angle/2),Math.sin(angle*i+angle/2),0);
                this.normals.push(Math.cos(angle*i+angle/2),Math.sin(angle*i+angle/2),0);
        
                this.texCoords.push(0+j%2, 0);
                this.texCoords.push(0+j%2, 1);
            }
        }

        var numPontos= 2*this.stacks*this.slices;
    
        for (let i =0; i < numPontos; i+=2 ){
            this.indices.push(i, i+1, i+1+this.slices*2);
            this.indices.push(i, i+1+this.slices*2, i+this.slices*2);
        }
    
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
}