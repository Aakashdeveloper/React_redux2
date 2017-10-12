import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

/*const App=() =>{
    console.log(JSON)
    return(
    <div>
        <Header />
        
    </div>
    )
    
}*/

ReactDOM.render(<App />, document.getElementById('root'));


/*function add(a,b){
    return a+b
}

var add =(a,b)=> a+b*/

