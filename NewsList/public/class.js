class React{
    constructor(){
        this.wheel = 4
    }
    anyfunction(){
        console.log("hiii")
    }
}




class Header extends React{
    constructor(){
        super();
    }
}


const react = new React();
var header = new Header();

react.anyfunction();

console.log(header.wheel)