import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import {InputAmount, InputDescription, SubmitBtn , InputCategory }from "../../components/TransactionForm"
import TransactionAPI from "../../utils/transactionAPI"
import {List, ListItem} from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";



class TransactionForm extends Component {

  state = {
  transactions: [],
    // radio: "option1",
    amount: "",
    category: "",
    description: "",
    
  }

  componentDidMount() {
    this.loadTransaction();
  }

  loadTransaction = () => {
    TransactionAPI.getTransactions()
      .then(res =>{
console.log(res.data)
        this.setState({ transactions: res.data, amount: "", category: "", description: "" })}
      )
      .catch(err => console.log(err));
  };

  handleOption=(event) =>{
  
    this.setState({
      radio: event.target.value
    })
    console.log(this.state.radio);
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if ( this.state.amount && this.state.category && this.state.description ) {
      TransactionAPI.saveTransaction({
        
        IncExp: this.state.radio,
        amount: this.state.amount,
        category: this.state.category,
        description: this.state.description,
      
      })
        .then(res => this.loadTransaction())
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
            <div>
        <div className="form-check">
          <input onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
          <label className="form-check-label" for="exampleRadios1">
            Income
          </label>
        </div>
        <div className="form-check">
          <input  onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
          <label className="form-check-label" for="exampleRadios2">
            Expense
          </label>
        </div>

      </div>

      
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
                // disabled={!(this.state.transaction && this.state.IncExp && this.state.amount && this.state.category && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Transaction
            </SubmitBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
        
              <h1>Recent Activities </h1>
          
            {this.state.transactions.length ? (
              <List>
                {this.state.transactions.map(transaction => (
                  <ListItem key={transaction._id}>
                    <Link to={"/transactions/" + transaction._id}>
                      <strong>
                     {transaction.radio} by {transaction.amount} by {transaction.category} by {transaction.description}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTransaction(transaction._id)} />
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

