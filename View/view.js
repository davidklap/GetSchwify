class View  {
    constructor () {

    }
    // the functiuon that regster the event to the start button buttonn
    registerStartButtonEvent(event){
        document.getElementById("start-game-button").addEventListener("click",event)
    }
}