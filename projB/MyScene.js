/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    x = 5;
    y = 0;
    z = 2;
    ang = 0;
    temp = 0;

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        
        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 'images/wall.png', 'images/column.jpg', 'images/roof.png', 'images/door.jpeg')
        this.bird = new MyBird(this);
        this.wings = new MyWings(this);
        
        //Objects connected to MyInterface

        this.terrainTex = new CGFtexture(this, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this, "images/heightmap.jpg");
        this.terrainAlt = new CGFtexture(this, "images/altimetry.png");

        this.terrainShader = new CGFshader(this.gl, "terrain.vert", "terrain.frag");

        this.terrainShader.setUniformsValues({ uSamplerTerrainMap: 1 });
        this.terrainShader.setUniformsValues({ uSamplerTerrainTex: 2 });
        this.terrainShader.setUniformsValues({ uSamplerTerrainAlt: 3 });
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.z = this.z + (1 * Math.cos(this.ang));
            this.x = this.x + (1 * Math.sin(this.ang));
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.z = this.z - (1 * Math.cos(this.ang));
            this.x = this.x - (1 * Math.sin(this.ang));
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" S ";
            keysPressed=true;
            this.ang += (Math.PI * 10) / 180;;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" S ";
            keysPressed=true;
            this.ang -= (Math.PI * 10) / 180;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" S ";
            keysPressed=true;
            this.x = 0;
            this.z = 0;
                }
        if (keysPressed)
            console.log(text);
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){
        this.checkKeys();
        if (this.temp == 0){
            this.y = this.y + 0.1;
            if(this.y >= 1){
                this.temp = 1;
            }
        }
        if (this.temp == 1){
            this.y = this.y - 0.1;
            if(this.y <= -1){
                this.temp = 0;
            }
        }

        this.bird.wingAng = Math.sin(t/1000*Math.PI);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();
        
        this.terrainMap.bind(1);
        this.terrainTex.bind(2);
        this.terrainAlt.bind(3);
        
        // ---- BEGIN Primitive drawing section
        
        this.pushMatrix();
        this.rotate(Math.PI, 0, 1, 0);
        this.house.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(this.x, 5 + this.y , this.z);
        this.rotate(this.ang, 0, 1, 0);
        this.scale(0.5, 0.5, 0.5);
        this.bird.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 10);
        this.setActiveShader(this.terrainShader);
        this.plane.display();
        this.popMatrix();

        this.setActiveShader(this.defaultShader);

        // ---- END Primitive drawing section
    }
}