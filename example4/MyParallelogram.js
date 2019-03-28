class MyParallelogram extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined) this.updateTexCoords(coords);
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

  initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
			1, 1, 0,	//2
     		2, 0, 0,  	//3
      		2, 1, 0,  	//4
			3, 1, 0,  	//5	

			0, 0, 0,	//6
			1, 0, 0,	//7
			1, 1, 0,	//8
     		2, 0, 0,  	//9
      		2, 1, 0,  	//10
			3, 1, 0,  	//11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
      		1, 3, 2,
      		2, 3, 4,
			5, 4, 3,
			  
      		8, 7, 6,
      		8, 9, 7,
      		10, 9, 8,
      		9, 10, 11,
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
		];

		this.texCoords = [
			0.25, 0.75,
			0.5, 0.75,
			0.5, 1,
			0.75, 0.75,
			0.75, 1,
			1, 1,
			0.25, 0.75,
			0.5, 0.75,
			0.5, 1,
			0.75, 0.75,
			0.75, 1,
			1, 1,
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
