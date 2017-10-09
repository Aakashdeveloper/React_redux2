import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';


const App=() =>{
    return(
    <div>
        <Header />
        <div className="container">
           
            <h1> This is index</h1>
        </div>
    </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));

