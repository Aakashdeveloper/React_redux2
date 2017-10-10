class car{
    anyfunction(){
        console.log("hiii")
    }
}

const audi = new car();
audi.anyfunction();


class ford extends car{
    constructor(){
        super();
    }
}

var eco = new ford();
