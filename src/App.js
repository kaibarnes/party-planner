import React, { Component } from 'react';
import firebase from "./firebase.js";

import './App.css';

import Form from "./components/Form";
import Bar from "./components/Bar";

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  handleSubmit(barName){
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: barName,
      votes: 0
    }
    itemsRef.push(item);
  }
  componentDidMount(){
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items){
        newState.push({
          id: item,
          title: items[item].title,
          votes: items[item].votes
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Where to Drink?</h1>
        <div className="App-body">
          <Form onSubmit={this.handleSubmit}/>
            {this.state.items.map((item) => {
              return (
                <Bar
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  votes={item.votes}
                  onAddVote={this.handleAddVote}
                />
              );
            })}
        </div>
      </div>
    );
  }
};

export default App;
