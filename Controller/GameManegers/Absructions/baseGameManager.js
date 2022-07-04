import { GameStatus } from "../../../Model/gameStatus.js";

export class BaseGameManager {
    constructor(boradFactory, boradDaimntaionSize) {
        this.boradFactory = boradFactory;
        this.boradDaimntaionSize = boradDaimntaionSize;
        this.borad = boradFactory.genrateBord(boradDaimntaionSize);
        this.gameStatus = new GameStatus("keep-play",0);
    }

    shift(source, distantion) { }

    checkIfWin() { }


}