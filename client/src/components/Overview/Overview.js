import React from "react";

const ComponentOverview = props => (

  <div className="card">
    <h5 className="card-header">Overview</h5>
    <div className="card-body">



      <div className="row">

        <div className="col-md">
          <h1 className="card-title">Total Balance: $$</h1>
          <h5 className="card-title">Total Incomes: $$</h5>
          <h5 className="card-title">Total Expenses: -$$</h5>
          <h5 className="card-title">Total Savings: $$</h5>
        </div>
        <div className="col-md">
          <h1 className="card-title">Monthly Balance: $$</h1>
          <h5 className="card-title">Incomes: $$</h5>
          <h5 className="card-title">Expenses: -$$</h5>
          <h5 className="card-title">Savings: $$</h5>
        </div>
      </div>


      <a href="" className="btn btn-primary">Go To History</a>

    </div>
  </div>
);

export default ComponentOverview;