export class BaseGameManager {
    constructor(boradFactory, boradDaimntaionSize) {
        this.boradFactory = boradFactory;
        this.boradDaimntaionSize = boradDaimntaionSize;
        this.borad = boradFactory.genrateBord(boradDaimntaionSize);
        console.log(this.borad);
        this.turnCount = 0;
    }

    createBorad(boradDaimntionSize) {
        this.bor
    }

    shift(source, distantion) { }

    checkIfWin() { }

}