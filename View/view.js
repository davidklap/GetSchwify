export class View {
    constructor() {

    }
    // the functiuon that regster the event to the start button buttonn
    registerStartButtonEvent(event) {
        document.getElementById("start-game-button").addEventListener("click", event)
    }

    getUserNumberInput(msg) {
        let input = 0;
        do {
            input = window.prompt(msg);

        } while (isNaN(input));
        return input;
    }
}