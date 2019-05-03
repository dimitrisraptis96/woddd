import React from "react";

import Button from "../UI/Button";
import Logo from "../UI/Logo";
import FacebookOutlineIcon from "../UI/Icons/FacebookOutline";

const Login = ({ signin }) => (
  <React.Fragment>
    <Logo />
    <Button onClick={signin}>
      <FacebookOutlineIcon />
      Sign in with Facebook
    </Button>
  </React.Fragment>
);

export default Login;
