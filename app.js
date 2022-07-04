import {Model} from "/Model/model.js";
import {View} from "/View/view.js";
import {Controller} from "/Controller/controller.js"


let model = new Model();
let view = new View();
let controller = new Controller(model, view);

controller.start();