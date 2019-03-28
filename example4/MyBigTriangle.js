class MyBigTriangle extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined) this.updateTexCoords(coords);
	}
	initBuffers() {
		this.vertices = [
			-1.5, -1.5, 0,	//0
			1.5, -1.5, 0,	//1
			-1.5, 1.5, 0,	//2

			-1.5, -1.5, 0,	//3
			1.5, -1.5, 0,	//4
			-1.5, 1.5, 0,	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3,
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
		]
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}