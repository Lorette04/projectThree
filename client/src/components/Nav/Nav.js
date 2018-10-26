import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><strong>Manage Your Money</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/pages/Overview">Overview <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pages/TransactionForm">Add Transactions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pages/History">History</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pages/WishList"> WishList</Link>
      </li>
    </ul>
  </div>
</nav>
  );
 

export default Nav;
