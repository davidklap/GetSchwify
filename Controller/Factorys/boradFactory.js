import { BaseBordFactory } from "./Abstrucions/baseBoradFactory.js";


export class BoardFactory extends BaseBordFactory {


    genrateBord(size) {
        let emptyBoard  = this.#createEmptyBord(size);
        console.log(emptyBoard);

    }

    #createEmptyBord(size) {
        let emptyBoard= [];  
        for(let i=  0;i <  size ; i++) {
            emptyBoard[i] =[];
            for (let j =0;j<size; j++) {
                emptyBoard[i][j] = -1;
            }
        }
        return emptyBoard;
    }

   

   



}