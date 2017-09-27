import React from "react";
import { Col, Well, Button } from 'react-bootstrap';
import firebase from "../firebase";

export default class Bar extends React.Component{
  handleAddVote(itemId){
    const itemRef = firebase.database().ref(`items/${itemId}`);
    itemRef.update({
      votes: this.props.votes + 1
    });
  }
  removeItem(itemId){
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render(){
    let {id, title, votes} = this.props;
    return (
      <Col xs={12} sm={6} md={4}>
        <Well >
          <h3>{title}</h3>
          <h3>{votes}</h3>
          <Button block bsStyle="success" onClick={() => this.handleAddVote(id)}>Let's go to {title}</Button>
          <Button block bsStyle="danger" onClick={() => this.removeItem(id)}>Remove</Button>
        </Well>
      </Col>
    );
  }
};
