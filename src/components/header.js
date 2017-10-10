import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            keyword:'',
            title:'This Is React Demo'
        }
    }

    inputChange(event){
        console.log({keyword:event.target.value})
    }

    render(){

        const styles ={
            header:{
                background:'blue'
            }
        }

        return(
            <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span> 
                    </button>
                    <a className="navbar-brand" href="#">React App</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li> 
                        
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            <button className="btn btn-primary" onClick={()=> console.log("clicked")}>Click</button>
            <input onChange={this.inputChange.bind(this)}/>
            <div>{this.state.title}</div>
            <div>{this.state.keyword}</div>
            </header>
        )
    }
}

export default Header;