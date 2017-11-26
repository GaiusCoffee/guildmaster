class engine {
    constructor(){
        this.t = new terminal();
        // Test Button
        $("#btnTest").click(() => {this.t.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")});
        // Check if there's a save file
        if (localStorage.getItem("gameState")){
            this.gameState = localStorage.getItem("gameState");
        } else {
            this.gameState = {};
        }
        // Start Game Loop
    }
}
const game = new engine();
