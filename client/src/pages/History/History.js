import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import CompHistory from "../../components/History"
import API from "../../utils/transactionAPI";

<div class="jumbotron text-center">
    <h1>All Events</h1>
</div>


const History = () => (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <CompHistory/>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
); 
export default History;