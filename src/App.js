import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        cards: [
            {
                name: "Timothy",
                avatar_url: "https://avatars3.githubusercontent.com/u/7410132?v=4",
                company: "Liberty"
            },
            {
                name: "Matthew Mohrman",
                avatar_url: "https://avatars3.githubusercontent.com/u/2709?v=4",
                company: "Slalom"
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <Form/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatar_url} alt="logo"/>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    )
};


class Form extends Component {
    state = {userName: ''};

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName, "Test from handle Submit");
        // ajax - (fetch or axios library)
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(response => {
            console.log(response);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.userName}
                       onChange={(event) => this.setState({userName: event.target.value})}
                       /*ref={(input) => this.userNameInput = input}*/
                       placeholder="Github username" required
                />
                <button type="submit">Add Card</button>
            </form>
        );
    }
}


export default App;
