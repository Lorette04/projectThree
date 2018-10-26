import React, { Component } from "react";
/* import ExpIncBox from "../../components/BudgetForm";
 */ import {
  Col,
  Row,
  Container
} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/transactionAPI";

class BudgetCreate extends Component {
  state = {
    default: true,
    amount: [],
    category: "",
    description: "",
    date: Date
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const that = this.state;
    if (that.default && that.amount && that.category && that.date) {
      API.saveTransaction({
        default: this.state.default,
        amount: this.state.amount,
        category: this.state.category,
        description: this.state.description,
        date: this.state.date
      })
        .then(res => this.loadTransactions())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Add an Income or Expense in my Budget</h1>
            </Jumbotron>
            <form>
              <expIncBox
                enabled={this.state.default}
                onClick={this.handleFormSubmit}
              >
                Income
              </expIncBox>
              <expIncBox
                disabled={!this.state.default}
                onClick={this.handleFormSubmit}
              >
                Expense
              </expIncBox>
              <input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <textArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <formBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </formBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Last transactions</h1>
            </Jumbotron>
            {this.state.default.true ? (
              <list>
                {this.state.default.map(transaction => (
                  <listItem key={transaction._id}>
                    <link to={"/history/" + transaction._id}>
                      <strong>
                        {transaction.category} - {transaction.amount} -{" "}
                        {transaction.date}
                      </strong>
                    </link>
                    <deleteBtn
                      onClick={() => this.deleteTransaction(transaction._id)}
                    />
                  </listItem>
                ))}
              </list>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BudgetCreate;
