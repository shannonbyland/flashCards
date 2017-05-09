import React, { Component } from 'react';
import './App.css';
import CreateCard from './CreateCard'
import FlashCard from './FlashCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  addCard = (card) => {
    this.setState({items:[card, ...this.state.items]})
  }


  render() {
    //loop over the array, and for every item, render a flash card
    const flashCard = this.state.items.map((newCard, i) => {
      return (<FlashCard key={i} newCard={newCard} />)
    });
    //use map() to loop over the array and pass down the props
    return (
      <div className="App">
        <CreateCard addCard={this.addCard} />
        {flashCard}
      </div>
    );
  }

  show = (productId) => {
    this.setState({ showFront: true })
  }
}


export default App;
