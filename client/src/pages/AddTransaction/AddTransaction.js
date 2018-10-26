import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import CompTransactionForm from "../../components/TransactionForm"
import API from "../../utils/API";

const TransactionForm = () => (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <CompTransactionForm/>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
); 

export default AddTransaction;