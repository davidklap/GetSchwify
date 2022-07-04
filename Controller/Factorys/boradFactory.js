import { BaseBordFactory } from "./Abstrucions/baseBoradFactory.js";
import { NumberPazzelePice } from "../../Model/pazzlePices/NumberPazzlePice.js";


export class BoardFactory extends BaseBordFactory {


    genrateBord(size) {
        let emptyBoard = this.#createEmptyBord(size);

        let values = this.#createShuffleValues(size);

        
    }


    #createEmptyBord(size) {
        let emptyBoard = [];
        for (let i = 0; i < size; i++) {
            emptyBoard[i] = [];
            for (let j = 0; j < size; j++) {
                emptyBoard[i][j] = -1;
            }
        }
        return emptyBoard;
    }

    #createShuffleValues(size) {

        let values = this.#createTheValuesArray(size);
        let shuffleValues;
        do {
            shuffleValues = this.#shuffle(values);
        } while (!this.#chekIfBordCanBeSolve(shuffleValues, size));

        return shuffleValues;
    }

    #createTheValuesArray(size) {
        let values = [];
        for (let i = 1; i < size * size; i++) {
            values[i - 1] = i;
        }
        values[size * size - 1] = -1;

        return values;
    }


    #shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    #chekIfBordCanBeSolve(values, rowsNumber) {
        let swapCount = this.#calcSwapCount(values);

        if (rowsNumber % 2 == 0) {
            let emptyIndex = values.indexOf(-1);
            let emptyRowNumber = Math.floor(emptyIndex / rowsNumber) + 1;
            swapCount += emptyIndex; // this is the formola
        }

        return swapCount % 2 == 0;
    }


    #calcSwapCount(values) {
        let length = values.length;
        let swapCount = 0;

        for (let i = 0; i < length; i++) {
            if (values[i] == -1) { continue; }

            for (let j = i; j < length; j++) {
                if (values[j] == -1) { continue; }
                if (values[j] < values[i]) {
                    swapCount++;
                }
            }
        }
        return swapCount;
    }
}