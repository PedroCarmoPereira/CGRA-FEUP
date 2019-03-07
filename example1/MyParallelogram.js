class MyParallelogram extends CGFobject{

    constructor(scene){
        super(scene);
        this.initBuffers();
    }

    initBuffers(){
        this.vertices = [
            0, 0, 0,
            1, 0, 0,
            1, 1, 0,
            2, 0, 0,
            2, 1, 0,
            3, 1, 0
        ];

        this.indices = [
            0, 1, 2,
            2, 1, 4,
            4, 1, 3,
            4, 3, 5,
            2, 1, 0,
            4, 1, 2,
            3, 1, 4, 
            5, 3, 4
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }

}