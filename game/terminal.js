class terminal {
    constructor(){
        // Clear & Initialize Terminal
        $("#terminal").empty();
        for(let i=0;i<20;i++) {
            $("#terminal").append($("<li>"));
        }
        this.scroll();
    }
    log(message){
        $('#terminal li').first().remove();
        $("#terminal").append(
            $("<li>").append(message)
        );
        this.scroll();
    }
    scroll(){
        $('#terminalWrapper').stop().animate({
            scrollTop: $('#terminalWrapper')[0].scrollHeight
        }, 800);
    }
}
