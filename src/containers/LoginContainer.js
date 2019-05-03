import React, { Component } from "react";
import { withRouter } from "react-router";

import Login from "../components/Login/Login";

class LoginContainer extends Component {
  signin = () => {
    const { signInWithFacebook } = this.props;
    signInWithFacebook()
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  render() {
    return <Login signin={this.signin} />;
  }
}

export default withRouter(LoginContainer);
