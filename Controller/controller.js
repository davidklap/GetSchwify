import { GameManager } from "./GameManegers/gameManager.js";

export class Controller {
    
    constructor(model,view,gameMangerFactory) {
        this.Model = model;
        this.View = view;
        this.gameManagerFactory = gameMangerFactory;
        this.View.registerStartButtonEvent(()=>this.start());
    }

    start() {
        let boardSize = this.View.getUserNumberInput("What is the size of the board that you want to play on ?");
        let gameManager = this.gameManagerFactory.createGameManager(boardSize);

        this.startGame(gameManager)
    }

    startGame(gameManager) {
        this.View.DisplayBoard(gameManager.borad);
    }
}


