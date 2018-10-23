import React, { Component } from "react";
import { getJWT } from "./helpers/jwt";
import { withRouter } from "react-router-dom";
import axios from "axios";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const jwt = getJWT();

    if (!jwt) {
      this.props.history.push("/Login");
    }

    axios
      .get("/getUser/", { headers: { Authorization: `Bearer ${jwt}` } })
      .then(res =>
        res
          .setState({
            user: res.data
          })
          .catch(err => {
            localStorage.removeItem("cool-jwt");
            this.props.history.push("/Login");
          })
      );
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticatedComponent);
