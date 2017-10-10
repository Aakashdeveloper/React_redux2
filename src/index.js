import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import JSON from './db.json'


const App=() =>{
    console.log(JSON)
    return(
    <div>
        <Header />
        <div className="container">
           
            <h1> This is index</h1>
            <input/>
        </div>
    </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));


/*function add(a,b){
    return a+b
}

var add =(a,b)=> a+b*/

