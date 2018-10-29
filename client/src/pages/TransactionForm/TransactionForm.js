import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import {InputAmount, InputDescription, SubmitBtn, IncExp , InputCategory }from "../../components/TransactionForm"

import {List, ListItem} from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
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
    if (this.state.IncExp && this.state.amount && this.state.category && this.state.description && this.state.transactions) {
      API.saveBook({
        transactions: this.state.transactions,
        IncExp: this.state.IncExp,
        amount: this.state.amount,
        category: this.state.category,
        description: this.state.description,
        date: this.state.date
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

              <h1>Transaction</h1>

            <form>
              {/* <date></date> */}
              <InputAmount
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
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
                placeholder="Description (required)"
              />
              <SubmitBtn
                disabled={!(this.state.IncExp && this.state.amount && this.state.category && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Transaction
            </SubmitBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
        
              <h1>Books On My List</h1>
          
            {this.state.transactions.length ? (
              <List>
                {this.state.transactions.map(transaction => (
                  <ListItem key={transaction._id}>
                    <Link to={"/transactions/" + transaction._id}>
                      <strong>
                        {transaction.title} by {transaction.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(transaction._id)} />
                  </ListItem>
                ))}
              </List>
             ) : (
              <h3>No Results to Display</h3>
            )} 
          </Col>
        </Row>
       
      </Container>
    );
  }
}



export default TransactionForm;

