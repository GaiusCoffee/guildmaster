class city {
    constructor(loadJSON) {
        if (!loadJSON) {
            this.load(this.defaultCity());
        } else {
            this.load(loadJSON);
        }
    }
    load(city){
        this.name = city.name;
    }
    defaultCity(){
        let r = {};
        r.name = "Incipio";
        return r;
    }
}
