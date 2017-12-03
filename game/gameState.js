class gameState {
    constructor(){
        // Check if there's a save file
        if (localStorage.getItem("gameState")){
            this.load(JSON.parse(localStorage.getItem("gameState")));
        } else {
            this.load(this.newGame());
        }
        // Clear & Initialize View
        $("#treasury").empty();
        $("#treasuryLabel").css("display","none");
        $("#armory").empty();
        $("#armoryLabel").css("display","none");
        $("#guildmates").empty();
        $("#guildmatesLabel").css("display","none");
        $("#guildname").text("Unnamed");
        $("#cityname").text("Unknown");
    }
    load(state){

    }
    newGame(){
        let r = {};

        return r;
    }
    save(){
        localStorage.setItem("gameState", JSON.stringify(this.export));
    }
    updateView(city){
        $("#cityname").text(city.name);
        
    }
}
