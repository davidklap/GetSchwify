import { GameStatus } from "../../Model/gameStatus.js";
import { BaseGameManager } from "./Absructions/baseGameManager.js";

export class GameManager extends BaseGameManager {

    constructor(boradFactory, boradDaimntaionSize) {
        super(boradFactory, boradDaimntaionSize);
    }

    shift(source, distantion) {
        if (this.checkIfLigelIndex(source, distantion)) {
            [this.borad.pazzlePieces[source.x][source.y], this.borad.pazzlePieces[distantion.x][distantion.y]] =
                [this.borad.pazzlePieces[distantion.x][distantion.y], this.borad.pazzlePieces[source.x][source.y]];

            this.gameStatus.status = this.checkIfWin() ? "win" : "keep-play";
            this.gameStatus.score += 1;
        }
    }

    checkIfWin() {
        let corectBordPiceValue = 1;
        for (let row = 0; row < this.boradDaimntaionSize; row++) {
            for (let col = 0; col < this.boradDaimntaionSize; col++) {
                let pieceVal = this.borad.pazzlePieces[row][col].val;
                console.log(`${corectBordPiceValue} ${pieceVal}`);
                if (pieceVal != corectBordPiceValue++ && pieceVal != -1) {
                    return false;
                }
            }
        }
        return true;
    }

    checkIfLigelIndex(source, distantion) {

        if ((source.x < 0 || source.x >= this.boradDaimntaionSize) || (source.y < 0 || source.y >= this.boradDaimntaionSize)) {
            return false;
        }

        if ((distantion.x < 0 || distantion.x >= this.boradDaimntaionSize) || (distantion.y < 0 || distantion.y >= this.boradDaimntaionSize)) {
            return false;
        }

        if (this.borad.pazzlePieces[source.x][source.y].val == -1) {
            return false;
        }

        if (this.borad.pazzlePieces[distantion.x][distantion.y].val != -1) {
            return false;
        }
        return true;
    }

}