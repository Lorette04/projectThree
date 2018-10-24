import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const userEmail = document.getElementById("inputEmail3").value;
    const userPassword = document.getElementById("inputPassword3").value;
    axios
      .post("/getToken", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("cool-jwt", res.data);
        this.props.history.push("/Protected");
      });
  }
  // defined here to be used later in onChange() method
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /*  submitCreate() {
    e.preventDefault;
    
  } */

  render() {
    return (
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button
              type="submit"
              class="btn btn-primary"
              onSubmit={this.submitCreate}
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
