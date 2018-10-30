import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Budget from "./pages/Budget";
import TransactionForm from "./pages/TransactionForm";
import History from "./pages/History";
import Overview from "./pages/Overview";
import WishList from "./pages/WishList";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
// import SignIn from "./components/SignIn/SignIn.js"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/pages/Overview" component={Overview} />
        <Route exact path="/pages/TransactionForm" component={TransactionForm} />
        {/* <Route exact path="/pages/Budget" component={Budget} /> */}
        <Route exact path="/pages/WishList" component={WishList} />
        <Route exact path="/pages/History" component={History} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
