import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import BudgetCreate from "./pages/BudgetCreate";
/* import History from "./pages/History";
 */ /* import Overview from "./pages/Overview";
 */ import WishList from "./pages/WishList";
=======
// import Budget from "./pages/Budget";
import TransactionForm from "./pages/TransactionForm";
import History from "./pages/History";
import Overview from "./pages/Overview";
import WishList from "./pages/WishList";
>>>>>>> development
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
<<<<<<< HEAD
import Home from "./components/Home";
import AuthenticatedComponent from "./components/authenticateUser";
import Login from "./components/Login";
import Create from "./components/Create";
/* import Protected from "./components/Protected";
 */
=======
// import SignIn from "./components/SignIn/SignIn.js"

>>>>>>> development
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/auth" component={AuthenticatedComponent} />
        <AuthenticatedComponent>
          <Route exact path="/Protected" /* component={Protected} */ />
        </AuthenticatedComponent>
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
<<<<<<< HEAD
        {/*         <Route exact path="/Overview" component={Overview} />
 */}{" "}
        <Route exact path="/BudgetCreate" component={BudgetCreate} />
        {/*         <Route exact path="/Budget" component={Budget} />
 */}{" "}
        <Route exact path="/WishList" component={WishList} />
        {/*         <Route exact path="/History" component={History} />
 */}{" "}
=======
        <Route exact path="/pages/Overview" component={Overview} />
        <Route exact path="/pages/TransactionForm" component={TransactionForm} />
        {/* <Route exact path="/pages/Budget" component={Budget} /> */}
        <Route exact path="/pages/WishList" component={WishList} />
        <Route exact path="/pages/History" component={History} />
>>>>>>> development
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
