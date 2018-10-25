import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ComponentOverview from "../../components/Overview";
import API from "../../utils/API";

const Overview = () => (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <div>
              <ComponentOverview/>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
); 

export default Overview;