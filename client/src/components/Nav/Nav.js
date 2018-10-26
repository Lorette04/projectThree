import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
<<<<<<< HEAD
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="">
      <strong>Manage Your Money</strong>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/pages/Overview">
            Overview <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/BudgetCreate">
            Add Transactions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/History">
            History
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            WishList
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
=======
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
        <Link className="nav-link" to="/pages/Budget">Add Transactions</Link>
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
 
>>>>>>> development

export default Nav;
