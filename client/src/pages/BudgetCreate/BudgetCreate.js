import React, { Component } from "react";
import ExpIncBox from "../../components/BudgetForm";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class BudgetCreate extends Component {
    state = {
        income: true,
        expense: false,
        date: [],
        category: "",
        description: "",
        price: "",

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
                                disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Income
                            </expIncBox>
                            <expIncBox
                                disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Expense
              </expIncBox>
                            <input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
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
                            <h1>Books On My List</h1>
                        </Jumbotron>
                        {this.state.books.length ? (
                            <list>
                                {this.state.books.map(book => (
                                    <listItem key={book._id}>
                                        <link to={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </link>
                                        <deleteBtn onClick={() => this.deleteBook(book._id)} />
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
    };
}

export default BudgetCreate;