import React, { Component } from "react";
import axios from "axios";
const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "shhhhh");
class Create extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  } */
  submit(e) {
    e.preventDefault();
    console.log("test");
  }
  submitCreate(e) {
    e.preventDefault();
    console.log("the buton was hit");
    // console.log(`Inside create`);
    // console.log(`props: ${this.props}`);
    const userEmail = document.getElementById("inputEmail3").value;
    const userPassword = document.getElementById("inputPassword3").value;

    /*     axios.get("/", (req, res) => {
      res.json({
        message: "welcome TEST in create"
      });
    });
 */
    axios
      .post("/api/create", {
        email: userEmail,
        password: userPassword
      })
      .then(res => {
        console.log(res);
        console.log(token);
        console.log("hello hello");
        // jwt is stored in a key called jwt, res.data is the value of jwt (key value)
        localStorage.setItem("jwt", token);
        this.props.history.push("/login");
      });
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
              onClick={this.submitCreate}
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Create;
