import {Model} from "/Model/model.js";
import {View} from "/View/view.js";
import {Controller} from "/Controller/controller.js";
import {GameManagerFactory} from "/Controller/Factorys/gameManagerFactory.js";

let model = new Model();
let view = new View();

let gameManagerFactory = new GameManagerFactory();
let controller = new Controller(model, view,gameManagerFactory);
