class engine {
    constructor(){
        $("#btnTest").click(() => {this.c("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")});
        $("#console").empty();
        for(let i=0;i<20;i++) {
            $("#console").append($("<li>"));
        }
        $('#consoleWrapper').stop().animate({
            scrollTop: $('#consoleWrapper')[0].scrollHeight
        }, 800);
    }
    c(message){
        $('#console li').first().remove();
        $("#console").append(
            $("<li>").append(message)
        );
        $('#consoleWrapper').stop().animate({
            scrollTop: $('#consoleWrapper')[0].scrollHeight
        }, 800);
    }
}
const game = new engine();
