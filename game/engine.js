class engine {
    constructor(){
        // UI
        this.t = new terminal();
        // Test Button
        $("#btnTest").click(() => {this.t.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")});
        // Gamedata
        this.c = new city();
        this.s = new gameState();
        // TODO: Start Game Loop
        // 
        this.s.updateView(this.c);
    }
}
const game = new engine();
