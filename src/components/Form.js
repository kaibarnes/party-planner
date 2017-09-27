import React from 'react';
import { Button } from 'react-bootstrap';

export default class Form extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.refs.nameInput.value);
    this.refs.nameInput.value = "";
  }
  render(){
    return(
      <div className="Form">
        <form onSubmit={this.handleSubmit} >
          <input
            className="Form-input"
            type="text"
            ref="nameInput"
            name="currentItem"
            placeholder="Where do you want to go?"
          />
          <Button type="submit" bsStyle="success">Suggest a bar</Button>
        </form>
      </div>
    );
  }
};
