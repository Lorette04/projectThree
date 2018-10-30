import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import CompHistory from "../../components/History"
import API from "../../utils/transactionAPI";

<div class="jumbotron text-center">
    <h1>All Events</h1>
</div>


const History = () => (

<div>
  <Container fluid>

    <Row>
      <Col size="md-12">
 <h1>September</h1>
        <CompHistory/>
         
      </Col>
    </Row>


    <Row>
      <Col size="md-12">
      <h1>October</h1>
        <CompHistory/>
         
      </Col>
    </Row>

    </Container>
  </div>
); 
export default History;