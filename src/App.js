import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {


    render() {
        return (
            <div className="App">

                <Card/>
            </div>
        );
    }
}

const Card = (props) => {
    let userPic = "http://placehold.it/75";

    return (
        <div>

            <img src={userPic} alt="logo"/>
            <div style={{display: 'inline-block', mardinLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name here</div>
                <div>Company name Here</div>
            </div>
        </div>
    )
};

const CardList = (props) => {
    return (
        <div>

        </div>
    )
};

export default App;