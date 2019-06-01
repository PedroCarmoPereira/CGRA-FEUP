/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.strike = false;
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
        this.skybox = new MyCubeMap(this, "Day");
        this.plants = [];
        this.plantIndexes = [];
        for (let i = 0; i < 3; i++) this.plants.push(new MyLPlantGroup(this));
        this.scaleFactor = 0.5;
        this.speedFactor = 1.0;
        
        this.lightning = new MyLightning(this);
        //Objects connected to MyInterface

        this.terrainTex = new CGFtexture(this, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this, "images/heightmap2.jpg");
        this.terrainAlt = new CGFtexture(this, "images/altimetry.png");

        this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");

        this.terrainShader.setUniformsValues({ uSamplerTerrainMap: 1 });
        this.terrainShader.setUniformsValues({ uSamplerTerrainTex: 2 });
        this.terrainShader.setUniformsValues({ uSamplerTerrainAlt: 3 });
        this.setUpdatePeriod(50); //Runs update() every 50 ms
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.z = this.z + (this.speedFactor * Math.cos(this.ang));
            this.x = this.x + (this.speedFactor * Math.sin(this.ang));
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.z = this.z - (this.speedFactor * Math.cos(this.ang));
            this.x = this.x - (this.speedFactor * Math.sin(this.ang));
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" S ";
            keysPressed=true;
            this.ang += (Math.PI * 10) / 180 * this.speedFactor;;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" S ";
            keysPressed=true;
            this.ang -= (Math.PI * 10) / 180 * this.speedFactor;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" S ";
            keysPressed=true;
            this.x = 0;
            this.z = 0;
                }

        if(this.gui.isKeyPressed("KeyL")){
            this.strike = true;
            keysPressed=true;
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

    
    hexToRgbA(hex){
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
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
        if(this.strike && !this.lightning.strikeStart) {
            console.log("START");
            this.endAnim = true;
            this.lightning.startAnimation(t);
        }
        
        if(this.strike) this.lightning.update(t);
        this.bird.wingAng = Math.sin((t*this.speedFactor)/1000*Math.PI);
    }

    displayForest(){
        this.pushMatrix();
        this.translate(-11, 4, 7);
        this.plants[0].display();
        this.plants[1].display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(6, 4, 6);
        this.plants[0].display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(12, 4, 6);
        this.plants[1].display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(10, 4, -5);
        this.plants[0].display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10, 4, -10);
        this.plants[1].display();
        this.popMatrix();


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
        this.skybox.display();
        this.displayForest();

        this.pushMatrix();
        this.translate(0, 4 , 10);
        this.house.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(this.x, 9 + this.y , this.z);
        this.rotate(this.ang, 0, 1, 0);
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.bird.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 10);
        this.setActiveShader(this.terrainShader);
        this.plane.display();
        this.popMatrix();

        this.setActiveShader(this.defaultShader);

        this.pushMatrix();
        this.translate(0, 12, 0);
        this.rotate(Math.PI, 0, 0, 1);
        this.lightning.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}