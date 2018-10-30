import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ComponentOverview from "../../components/Overview";
import API from "../../utils/API";

const Overview = () => (
  <div>
  <br/>
    <h1 align="center">Overview</h1>
<br/>

    <Container fluid>
      <Row>
        <Col size="md-12">
          
            <div>
              <ComponentOverview/>
            </div>
       
        </Col>
      </Row>
    </Container>
    </div>
    
); 

export default Overview;