import React from "react";

const ComponentOverview = props => (

  <div className="card">
    <h5 className="card-header"></h5>
    <div className="card-body">



      <div className="row">

        <div className="col-md">
          <h2 className="card-title">Total Balance: $2,000</h2>
          <h5 className="card-title">Total Incomes: $100</h5>
          <h5 className="card-title">Total Expenses: -$50</h5>
          <h5 className="card-title">Total Savings: $0</h5>
        </div>
        <div className="col-md">
          <h2 className="card-title">October Balance: $36.35</h2>
          <h5 className="card-title">Incomes: $325</h5>
          <h5 className="card-title">Expenses: -$288.65</h5>
          <h5 className="card-title">Savings: $5</h5>
        </div>
      </div>

<div>
  <br/>
  
    <h1 align="center"><a  href="http://localhost:3000/pages/History" className="btn btn-primary" >Go To History</a></h1>
    
<br/>
     </div>

    </div>
  </div>
);

export default ComponentOverview;