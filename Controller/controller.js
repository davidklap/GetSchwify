export class Controller {
    
    constructor(model,view) {
        this.Model = model;
        this.View = view;
    }

    start() {
        this.View.registerStartButtonEvent(()=>alert("start the game"))
    }
}


