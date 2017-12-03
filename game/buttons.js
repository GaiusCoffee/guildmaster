class buttons {
    constructor(updateEvents) {
        this.updateEvents = updateEvents;
        $("#buttons").empty();
        this.buttonIds = [];
    }
    createButton(id,text,cooldown,callback){
        var li = $("<li>")
            .css("margin-top","10px");
        var a = $("<a>")
            .attr("href","#")
            .attr("data-id",id)
            .attr("data-on-cooldown","false")
            .attr("data-cooldown-current","0")
            .attr("data-cooldown-target",cooldown * this.updateEvents)
            .addClass("btn")
            .addClass("btn-light")
            .addClass("btn-sm")
            .addClass("btn-block")
            .append(text);
        a.on("click",()=>{
            if ($("a[data-id='" + id +"']").attr("data-on-cooldown") == "false"){
                $("a[data-id='" + id +"']").attr("data-on-cooldown","true");
                $("a[data-id='" + id +"']").attr("data-cooldown-current","0");
                $("a[data-id='" + id +"']").addClass("disabled");
                $(".progress[data-id='" + id +"']").css("display","");
                $(".progress-bar[data-id='" + id +"']").attr("aria-valuenow","0");
                $(".progress-bar[data-id='" + id +"']").css("width","0%");
                if (callback) callback();
            }
        });
        var progressWrapper = $("<div>")
            .attr("data-id",id)
            .addClass("progress")
            .css("height", "5px")
            .css("display", "none");
        var progressBar = $("<div>")
            .attr("role","progressbar")
            .attr("aria-valuenow","30")
            .attr("aria-valuemin","0")
            .attr("aria-valuemax","100")
            .attr("data-id",id)
            .addClass("progress-bar")
            .addClass("progress-bar-striped")
            .addClass("progress-bar-animated")
            .css("width","30%");
        progressWrapper.append(progressBar);
        a.append(progressWrapper);
        li.append(a);
        $("#buttons").append(li);
        this.buttonIds.push(id);
    }
    updateButtons(){
        this.buttonIds.forEach((id)=>{
            if ($("a[data-id='" + id +"']").attr("data-on-cooldown") == "true"){
                var target = Number($("a[data-id='" + id +"']").attr("data-cooldown-target")),
                    current = Number($("a[data-id='" + id +"']").attr("data-cooldown-current")) + 1;
                var percent = Math.round((current / target) * 100);
                $(".progress-bar[data-id='" + id +"']").attr("aria-valuenow",percent);
                $(".progress-bar[data-id='" + id +"']").css("width",percent + "%");
                if (current == target) {
                    $("a[data-id='" + id +"']").attr("data-on-cooldown","false");
                    $("a[data-id='" + id +"']").removeClass("disabled");
                    $(".progress[data-id='" + id +"']").css("display","none");
                } else {
                    $("a[data-id='" + id +"']").attr("data-cooldown-current", current);
                }
            }
        });
    }
}
