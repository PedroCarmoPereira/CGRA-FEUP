class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			0.5, -0.5, -0.5,	//2
			0.5, -0.5, 0.5,		//3

      0.5, 0.5, 0.5,    //4
      0.5, 0.5, -0.5,   //5
      -0.5, 0.5, 0.5,   //6
      -0.5, 0.5, -0.5   //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 7,
      7, 2, 5,
      7, 2, 0,
      5, 2, 7,

      0, 1, 3,
      0, 3, 2,
      3, 1, 0,
      2, 3, 0,

      1, 0, 6,
      6, 0, 7,
      6, 0, 1,
      7, 0, 6,

      2, 3, 4,
      4, 5, 2,
      4, 3, 2,
      2, 5, 4,

      4, 5, 7,
      6, 4, 7,
      7, 5, 4,
      7, 4, 6,

      1, 3, 6,
      3, 4, 6,
      6, 3, 1,
      6, 4, 3,
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
