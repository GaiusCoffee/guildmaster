class engine {
    constructor(){
        // Constants
        this.c = {};
        this.c.updateInMS = 500;
        this.c.updateEvents = 4;
        // Debug Button
        $("#btnTest").click(() => {this.t.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")});
        // UI
        this.t = new terminal();
        this.b = new buttons(this.c.updateEvents);
        // Gamedata
        this.l = new city();
        this.s = new gameState();
        // Start Game Loop
        this.p = false; // Pause parameter
        this.j = 1;     // Jump UI/Event updates parameter
        this.i = setInterval(this.update.bind(this), this.c.updateInMS);
    }
    update(){
        if (!this.p) { // Pause
            if (this.j == this.c.updateEvents) {
                this.j = 0;
                // Update Events
            }
            // Update UI
            this.b.updateButtons();
            this.s.updateView(this.l);
            this.j++;
        }
    }
}
const game = new engine();
