class MyWings extends CGFobject{
    constructor(scene){
        super(scene);     
        this.initBuffers();  
    };

    initBuffers() {
		this.vertices = [
			0, 1.2, 0.5,	        
			0, 1.2, 0,	        
			0.4, 1, 0.25,	
            -0.4, 1, 0,
            -0.4, 1, 0.5,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 0,
            0, 1, 3,
            3, 1, 0,
            0, 3, 4,
            4, 3, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

    updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}