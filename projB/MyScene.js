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
    speed = 0;
    catch = false;
    branch_num;
    pos = [5, 4.2, -15, 10, 4.2, -12, -5, 4.2, -10, -12, 4.2, -4]; //x, y, z... posição dos branches
    check = [1,1,1,1,0,0,0,0]; //verifica se faz display do branch


    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        
        //Background color
        this.gl.clearColor(0, 0, 0, 1.0);
        
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 'images/wall.png', 'images/column.jpg', 'images/roof.png', 'images/door.jpeg')
        this.bird = new MyBird(this);
        this.tail = new MyTail(this);
        this.skybox = new MyCubeMap(this, "Night");
        this.branch = [];
        for (let i = 0; i < 8; i++) this.branch.push(new MyTreeBranch(this));
        this.nest = new MyNest(this);
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
            this.accelerate(0.2);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.accelerate(-0.2);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" S ";
            keysPressed=true;
            this.turn((Math.PI * 10) / 180);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" S ";
            keysPressed=true;
            this.turn(-(Math.PI * 10) / 180);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" S ";
            keysPressed=true;
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.speed = 0;
            this.ang = 0;
        }

        if(this.gui.isKeyPressed("KeyL")){
            this.strike = true;
            keysPressed=true;
        }

        if(this.gui.isKeyPressed("KeyP")){
            keysPressed=true;
            this.catch = true;
        }

        if (keysPressed)
            console.log(text);
    }

    accelerate(speed){
        this.speed += speed * this.speedFactor;
    }

    turn(alpha){
        this.ang += alpha * this.speedFactor;
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

    grabBranch(){
        for(let i = 0; i < 4; i++){
            if(this.x < (this.pos[3*i] + 3) && this.x > (this.pos[3*i] - 3) && this.z < (this.pos[3*i+2] + 3) && this.z > (this.pos[3*i+2] - 3)){
                this.bird.grab(true);
                this.check[i] = 0;
                this.branch_num = i;
                this.catch = true;
            }
        }  
    }

    dropBranch(){
        if(this.x < (4.5 + 3) && this.x > (4.5 - 3) && this.z < (7 + 3) && this.z > (7 - 3)){
            this.bird.grab(false);
            if(this.check)
            this.check[this.branch_num + 4] = 1;
            this.catch = false;
        }
    }

    update(t){
        this.checkKeys();
       /* if (this.temp == 0){
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
        }*/

        
        if(this.strike && !this.lightning.strikeStart) {
            console.log("START");
            this.endAnim = true;
            this.lightning.startAnimation(t);
        }
        
        if(this.strike) this.lightning.update(t);

        if(this.catch){
            this.y -= 0.5;
        }

        if(!this.catch && (9+this.y) < 9){
            this.y +=0.5;
        }

        if((9+this.y) < 4 && this.catch){
            this.catch = false;
        }
            

        this.bird.wingAng = Math.sin((t*this.speedFactor)/1000*Math.PI);

        this.z = this.z + (this.speed * Math.cos(this.ang)) * this.speedFactor;
        this.x = this.x + (this.speed * Math.sin(this.ang)) * this.speedFactor;

        if((9 + this.y) < 5 && (9 + this.y) > 3 && !this.catch){
            this.grabBranch();
        }

        if((9 + this.y) < 5 && (9 + this.y) > 3 && this.catch){
            this.dropBranch();
        }
    }

    displayBranches(){
        if(this.check[0]){
            this.pushMatrix();
            this.translate(this.pos[0], this.pos[1], this.pos[2]);  
            this.branch[0].display();
            this.popMatrix();
        }

        if(this.check[1]){
            this.pushMatrix();
            this.translate(this.pos[3], this.pos[4], this.pos[5]);  
            this.branch[1].display();
            this.popMatrix();
        }

        if(this.check[2]){
            this.pushMatrix();
            this.translate(this.pos[6], this.pos[7], this.pos[8]);  
            this.branch[2].display();
            this.popMatrix();
        }

        if(this.check[3]){
            this.pushMatrix();
            this.translate(this.pos[9], this.pos[10], this.pos[11]);  
            this.branch[3].display();
            this.popMatrix();
        }

        if(this.check[4]){
            this.pushMatrix();
            this.translate(4.5, 4.2, 7);
            this.rotate(-Math.PI/4, 1, 0, 0);
            this.branch[4].display();
            this.popMatrix();
        }

        if(this.check[5]){
            this.pushMatrix();
            this.translate(4.5, 4.2, 7);
            this.rotate(Math.PI/2, 0, 1, 0);
            this.rotate(-Math.PI/4, 1, 0, 0);
            this.branch[5].display();
            this.popMatrix();
        }

        if(this.check[6]){
            this.pushMatrix();
            this.translate(4.5, 4.2, 7);
            this.rotate(Math.PI, 0, 1, 0);
            this.rotate(-Math.PI/4, 1, 0, 0);
            this.branch[6].display();
            this.popMatrix();
        }

        if(this.check[7]){
            this.pushMatrix();
            this.translate(4.5, 4.2, 7);
            this.rotate(-Math.PI/2, 0, 1, 0);
            this.rotate(-Math.PI/4, 1, 0, 0);
            this.branch[7].display();
            this.popMatrix();
        }        
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
        this.displayBranches();
        this.displayForest();

        this.pushMatrix();
        this.translate(0, 4 , 10);
        this.house.display();
        this.popMatrix();
            
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 10);
        this.setActiveShader(this.terrainShader);
        this.plane.display();
        this.popMatrix();

        this.setActiveShader(this.defaultShader);
        
        this.pushMatrix();
        this.translate(this.x, 9 + this.y , this.z);
        this.rotate(this.ang, 0, 1, 0);
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.bird.display();
        this.popMatrix();
       
        this.pushMatrix();
        this.translate(4.5, 4.2, 7);
        this.nest.display();
        this.popMatrix();

        if(this.strike){
            this.pushMatrix();
            this.translate(0, 15, 0);
            this.rotate(Math.PI, 0, 0, 1);
            this.lightning.display();
            this.popMatrix();
        }
        
        // ---- END Primitive drawing section
    }
}