import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/transactionAPI";

<div class="jumbotron text-center">
    <h1>All Events</h1>
</div>

<% if (success.length > 0) { %>
    <div class="alert alert-success"><%= success %></div>
<% } %>

<table class="table table-bordered table-hover table-striped">
    <thead>
        <tr>
            <th>Transactions</th>
            <th>Category</th>
            <th>description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        
        <% for (var transaction of transactions) { %>
            <tr>
                <td><%= transaction.default %></td>
                <td><%= transaction.category %></td>
                <td><%= transaction.description %></td>
                <td><%= transaction.amount %></td>
                <td><%= transaction.date %></td>
                <td>
                    <a href="/history/<%= transaction.slug %>" class="btn btn-sm btn-primary">View</a>
                    <a href="/history/<%= transaction.slug %>/edit" class="btn btn-sm btn-primary">Edit</a>
                    <a href="/history/<%= transaction.slug %>/delete" class="btn btn-sm btn-danger">Delete</a>
                </td>
            </tr>
        <% } %>

    </tbody>
</table>






const History = () => (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>History <br/>Page Under Construction </h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
); 
export default History;