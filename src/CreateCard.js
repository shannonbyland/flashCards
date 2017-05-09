import React from 'react'


class CreateCard extends React.Component {



  submit = (e) => {
    e.preventDefault()
    let word = this.refs.word.value;
    let description = this.refs.description.value;
    let card = { word, description }
    this.props.addCard(card);
    this.refs.cardForm.reset();
  }


render () {
  return (
    <div>
     <h1>Flash Cards!</h1>
      <form ref="cardForm">
        <input
          id="word"
          ref='word'
          required
          placeholder="Word"
          onChange={this.handleChange}
        />
        <input
          id="description"
          ref='description'
          required
          placeholder="Description"
          onChange={this.handleChange}
        />
          <button onClick={this.submit}>Submit</button>
      </form>
    </div>
  );
 }
}


export default CreateCard;
