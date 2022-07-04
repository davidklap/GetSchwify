import { BaseGameManager } from "./Absructions/baseGameManager.js";

export class GameManager extends BaseGameManager {

    constructor(boradFactory, boradDaimntaionSize) {
        super(boradFactory, boradDaimntaionSize);
    }

    shift(source, distantion) { 
        [this.borad.pazzlePieces[source.x][source.y],this.borad.pazzlePieces[distantion.x][distantion.y]] =
         [this.borad.pazzlePieces[distantion.x][distantion.y],this.borad.pazzlePieces[source.x][source.y]];
        
        

        
    }

    checkIfWin() { }

}