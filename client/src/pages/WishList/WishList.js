// import React, { Component } from "react";
import React from "react";
import { WishLinks , WishCards } from "../../components/WishList"
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

const WishList = () => (


  <div>
  <Jumbotron>
    <h1>WishList</h1>
  </Jumbotron>
  <Container fluid>
    <Row>
      <Col size="md-12">
      
          <div>
            <WishLinks />
            <WishCards />
          </div>     

      </Col>
    </Row>
  </Container>
</div>

);


export default WishList;