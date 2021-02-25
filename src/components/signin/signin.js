import React from "react";

import "./signin.scss";

import FormInput from "../forminput/forminput";
import CustomButton from "../custom-button/custom-button";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="Password"
            value={this.state.password}
            required
          ></FormInput>
          <CustomButton type="submit" value="submit form">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
