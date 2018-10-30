import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import BudgetCreate from "./pages/BudgetCreate";
 */ /* import History from "./pages/History";
 */ /* import Overview from "./pages/Overview";
 */ import WishList from "./pages/WishList";
/* import Books from "./pages/Books"; */
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import SignIn from "./components/SignIn/SignIn.js"
import Create from "./components/Create";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create" component={Create} />
        {/*   <Route exact path="/auth" component={AuthenticatedComponent} />
        <AuthenticatedComponent> */}
        <Route exact path="/Protected" /* component={Protected} */ />
        {/*  </AuthenticatedComponent> */}
        {/*         <Route exact path="/books" component={Books} />
 */}{" "}
        <Route exact path="/books/:id" component={Detail} />
        {/*         <Route exact path="/pages/Overview" component={Overview} />
 */}{" "}
        {/*  <Route
          exact
          path="/pages/TransactionForm"
          component={TransactionForm}
        /> */}
        {/* <Route exact path="/pages/Budget" component={Budget} /> */}
        <Route exact path="/pages/WishList" component={WishList} />
        <Route exact path="/pages/History" component={History} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
