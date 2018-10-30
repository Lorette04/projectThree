import React, { Component } from "react";
/* import axios from "axios";
 */ const jwt = require("jsonwebtoken");

class Login extends Component {
  submitLogin(e) {
    console.log("before click");

    e.preventDefault();

    console.log("after click...");

    // const token = localStorage.getItem("jwt");
    const token = jwt.sign({ foo: "bar" }, "shhhhh");
    console.log("jwt: " + token);

    var decoded = jwt.verify(token, "shhhhh");
    console.log(decoded);
    console.log(decoded.foo);
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
