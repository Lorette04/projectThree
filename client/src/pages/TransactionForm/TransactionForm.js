import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import {InputAmount, InputDescription, SubmitBtn, IncExp , InputCategory }from "../../components/TransactionForm"

import API from "../../utils/API";



class TransactionForm extends Component {

  state = {
  transactions: []
    // IncExp: [],
    // amount: "",
    // category: "",
    // description: "",
    // date: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.IncExp && this.state.amount && this.state.category && this.state.description) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Transaction</h1>
            </Jumbotron>
            <form>
              <InputAmount
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="amount (required)"
              />
              <InputCategory
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <InputDescription
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (required)"
              />
              <SubmitBtn
                disabled={!(this.state.IncExp && this.state.amount && this.state.category && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Transaction
            </SubmitBtn>
            </form>


          </Col>
        </Row>
      </Container>
    );
  }
}



export default TransactionForm;

