import React, { Component } from "react";
import axios from "axios";
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Col,
  Checkbox,
  Button
} from "react-bootstrap";

class Login extends Component {
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

  render() {
    return (
      <div>
        {/*  <form onSubmit={e => this.submit(e)}>
          <label>email:</label>
          <input
            type="text"
            name="email"
            onChange={e => this.change(e)}
            value={this.state.email}
          />
          <label>password:</label>
          <input
            type="password"
            name="password"
            onChange={e => this.change(e)}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form> */}
        <Form horizontal>
          <FormGroup
            controlId="formHorizontalEmail"
            onSubmit={e => this.submit(e)}
            value={this.state.email}
          >
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                placeholder="Email"
                onChange={e => this.change(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={e => this.change(e)}
                value={this.state.password}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
        ;
      </div>
    );
  }
}

export default Login;
