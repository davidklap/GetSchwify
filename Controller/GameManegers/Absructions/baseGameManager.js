export class BaseGameManager {
    constructor(boradFactory, boradDaimntaionSize) {
        this.boradFactory = boradFactory;
        this.boradDaimntaionSize = boradDaimntaionSize;
        this.borad = boradFactory.genrateBord(boradDaimntaionSize);
    }

    shift(source, distantion) { }

    checkIfWin() { }


}