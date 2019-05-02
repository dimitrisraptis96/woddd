import React, { Component } from "react";
import { Redirect } from "react-router";

import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth, providers } from "../../../utils/firebase";

import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import FacebookOutlineIcon from "../../Icons/FacebookOutline";

class Login extends Component {
  render() {
    const { user, signInWithFacebook } = this.props;

    if (user) {
      return <Redirect to={"/"} />;
    }

    return (
      <React.Fragment>
        <Logo />
        <Button onClick={signInWithFacebook}>
          <FacebookOutlineIcon />
          Sign in with Facebook
        </Button>
      </React.Fragment>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
