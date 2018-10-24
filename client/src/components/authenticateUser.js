import React, { Component } from "react";
/* import { getJWT } from "./helpers/jwt";
 */ import { withRouter } from "react-router-dom";
import axios from "axios";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*     const jwt = getJWT();
 */ /* function tokenSuccess(err, response) {
      if (err) {
        throw err;
      }
      window.sessionStorage.accessToken = response.body.access_token;
    }
    tokenSuccess(); */

    axios({
      url: "/api/posts",
      method: "POST",
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIn0sImlhdCI6MTU0MDQwNzI2NH0.I-d7WKzBfvJFfAdtsQ_2AJyLJ_jPMWDNB7v25N4vkvc"
      }
    });
    // set

    /* if (!jwt) {
      this.props.history.push("/Login");
    } */

    /* axios
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
      ); */
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
