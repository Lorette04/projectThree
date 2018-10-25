import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./pages/Budget";
import BudgetCreate from "./pages/BudgetCreate";
import History from "./pages/History";
import Overview from "./pages/Overview";
import WishList from "./pages/WishList";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Overview" component={Overview} />
        <Route exact path="/AddTransaction" component={AddTransaction} />
        <Route exact path="/AddTransaction/:id" component={AddTransaction} />
        <Route exact path="/Budget" component={Budget} />
        <Route exact path="/WishList" component={WishList} />
        <Route exact path="/History" component={History} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
