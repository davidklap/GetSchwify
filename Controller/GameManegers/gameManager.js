import { GameStatus } from "../../Model/gameStatus.js";
import { BaseGameManager } from "./Absructions/baseGameManager.js";

export class GameManager extends BaseGameManager {

    constructor(boradFactory, boradDaimntaionSize) {
        super(boradFactory, boradDaimntaionSize);
    }

    shift(source, distantion) { 
        [this.borad.pazzlePieces[source.x][source.y],this.borad.pazzlePieces[distantion.x][distantion.y]] =
         [this.borad.pazzlePieces[distantion.x][distantion.y],this.borad.pazzlePieces[source.x][source.y]];
        
        this.gameStatus =  new GameStatus("keep-play",this.gameStatus.score++);

        
    }

    checkIfWin() { }

}