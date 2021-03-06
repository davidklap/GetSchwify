import { Board } from "../Model/borad.js";

export class View {
    constructor() {

    }
    // the functiuon that regster the event to the start button buttonn
    registerStartButtonEvent(event) {
        document.getElementById("start-game-button").addEventListener("click", event)
    }

    registerShiftButtonEvent(event) {
        document.getElementById("shift-button").addEventListener("click",event);
    }

    getUserNumberInput(msg) {
        let input = 0;
        do {
            input = window.prompt(msg);

        } while (isNaN(input));
        return input;
    }

    DisplayBoard(board) {
        let msg = "";
        for (let row = 0; row < board.dimnationSize; row++) {
            msg += '|';
            for (let col = 0; col < board.dimnationSize; col++) {
                let val = board.pazzlePieces[row][col].val;
                msg += val > 0 ? val.toString() : " ";
            }
            msg += "|\n";
        }
        document.getElementById("board").innerHTML  =  msg;
        document.getElementById("shift-button").style.display = "block";
    }

    displayGame(gameManager) {
        this.DisplayBoard(gameManager.borad);
        this.displayGameStatus(gameManager.gameStatus);
    }

    displayGameStatus(gameStatus) {
        if (gameStatus.status == "win") {
            alert("good job u win the game");
        }
        document.getElementById("status").innerHTML  = gameStatus.status;
        document.getElementById("score").innerHTML  = `Score  : ${gameStatus.score}`;
    }


}