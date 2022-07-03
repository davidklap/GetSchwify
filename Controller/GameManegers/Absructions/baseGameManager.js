class BaseGameManager {
    constructor(boradFactory,boradDaimntaionSize) {
        this.boradFactory = boradFactory;
        this.borad = boradFactory.genrateBord(boradDaimntaionSize);
        this.turnCount =0;
    }

    shift(source , distantion)  {}

    checkIfWin(){}

}