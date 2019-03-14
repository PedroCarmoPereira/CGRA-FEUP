class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			1, -1, 0,	//1
			-1, 1, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
		];

		this.normals = [];
		for (var i = 0; i <= 2 * this.nDivs + 1; i++) {
				this.normals.push(0, 0, 1);
		}
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
