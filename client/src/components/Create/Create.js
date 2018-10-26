import React, { Component } from "react";
import axios from "axios";

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
    /* const userEmail = document.getElementById("inputEmail3").value;
    const userPassword = document.getElementById("inputPassword3").value;
    axios
      .post("/getToken", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("cool-jwt", res.data);
        this.props.history.push("/Protected");
      }); */
  }
  // defined here to be used later in onChange() method
  /*   change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  } */

  submitCreate(e) {
    e.preventDefault();
    // console.log(`Inside create`);
    // console.log(`props: ${this.props}`);
    const userEmail = document.getElementById("inputEmail3").value;
    const userPassword = document.getElementById("inputPassword3").value;
    axios
      .post("/api/createAcc", {
        email: userEmail,
        password: userPassword
      })
      .then(res => {
        console.log(res);
        // jwt is stored in a key called jwt, res.data is the value of jwt (key value)
        localStorage.setItem("jwt", res.data);
        /*         this.props.history.push("/Protected");
 */
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