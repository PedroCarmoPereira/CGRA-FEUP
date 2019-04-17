/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        this.gui.add(this.scene, 'skyboxMode', ["Day", "Night"]).name('Skybox').onChange(this.scene.updateSkybox.bind(this.scene));
        this.gui.add(this.scene, 'displayTextures').name('Textures');
        var obj = this;

        return true;
    }
}