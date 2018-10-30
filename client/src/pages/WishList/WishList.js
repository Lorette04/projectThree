// import React, { Component } from "react";
import React from "react";
import { WishLinks , WishCards } from "../../components/WishList"
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

const WishList = () => (


  <div>
<br/><br/>
    <h1 align="center">WishList</h1>
<br/><br/>

  <Container fluid>
    <Row>
      <Col size="md-12">
      
          <div>
            <WishLinks />
            <br/><br/>
            <WishCards />
          </div>     

      </Col>
    </Row>
  </Container>
</div>

);


export default WishList;