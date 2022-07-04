import { BaseGameManagerFactory } from "./Abstrucions/BaseGameManagerFactory.js";
import { GameManager } from "../GameManegers/gameManager.js";
import { BoardFactory } from "./boradFactory.js";

export class GameManagerFactory extends BaseGameManagerFactory {
    

    createGameManager(size) {
        return new GameManager(new BoardFactory(),size);
    }
}