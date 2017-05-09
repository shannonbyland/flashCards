import React from 'react';

class FlashCard extends React.Component {
  state = {showDescription: false}

  toggleShow = () => {
    this.setState({showDescription: !this.state.showDescription})
  }

  render() {
    return (
      <div style={cardStyle} onClick={this.toggleShow}>
        <p>
          {this.state.showDescription ? this.props.newCard.description : this.props.newCard.word}
        </p>
      </div>
    )
  }
}

const cardStyle = {
    background: 'gray',
    width: '250px',
    height: '400px',
    border: '5px solid black',
    margin: '30px',
    float: 'left'
  };

export default FlashCard;
