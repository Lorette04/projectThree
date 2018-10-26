import React from "react";

const ComponentOverview = props => (

  <div class="card">
    <h5 class="card-header">Overview</h5>
    <div class="card-body">



      <div class="row">

        <div class="col-md">
          <h1 class="card-title">Total Balance: $$</h1>
          <h5 class="card-title">Total Incomes: $$</h5>
          <h5 class="card-title">Total Expenses: -$$</h5>
          <h5 class="card-title">Total Savings: $$</h5>
        </div>
        <div class="col-md">
          <h1 class="card-title">Monthly Balance: $$</h1>
          <h5 class="card-title">Incomes: $$</h5>
          <h5 class="card-title">Expenses: -$$</h5>
          <h5 class="card-title">Savings: $$</h5>
        </div>
      </div>


      <a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
);

export default ComponentOverview;