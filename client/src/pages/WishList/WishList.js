// import React, { Component } from "react";
import React from "react";
import { WishLinks , WishCards } from "../../components/WishList"
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

const WishList = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <div>
            <WishLinks />
            <WishCards />
          </div>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);


export default WishList;