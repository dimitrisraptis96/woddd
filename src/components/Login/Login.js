import React, { Component } from "react";
import { withRouter } from "react-router";

import Button from "../UI/Button";
import Logo from "../UI/Logo";
import FacebookOutlineIcon from "../UI/Icons/FacebookOutline";

class Login extends Component {
  signin = () => {
    const { signInWithFacebook } = this.props;
    signInWithFacebook()
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Logo />
        <Button onClick={this.signin}>
          <FacebookOutlineIcon />
          Sign in with Facebook
        </Button>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
