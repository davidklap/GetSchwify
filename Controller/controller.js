import { GameManager } from "./GameManegers/gameManager.js";
import { Index } from "../Model/index.js";

export class Controller {
    
    constructor(model,view,gameMangerFactory) {
        this.Model = model;
        this.View = view;
        this.gameManagerFactory = gameMangerFactory;
        this.View.registerStartButtonEvent(()=>this.start());
    }

    start() {
        let boardSize = this.View.getUserNumberInput("What is the size of the board that you want to play on ?");
        var gameManager = this.gameManagerFactory.createGameManager(boardSize);

        this.startGame(gameManager)
    }

    startGame(gameManager) {
        this.View.displayGame(gameManager);
        this.View.registerShiftButtonEvent(()=>this.shift(gameManager));
    }

    shift(gameManager) {
        let sourceIndex = new Index(this.View.getUserNumberInput("start row"),this.View.getUserNumberInput("start col"));
        let distantionIndex = new Index(this.View.getUserNumberInput("end row"),this.View.getUserNumberInput("end col"));
        gameManager.shift(sourceIndex,distantionIndex);
        this.View.displayGame(gameManager);
    }
}


