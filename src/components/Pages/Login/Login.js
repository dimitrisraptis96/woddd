import React from "react";

import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import { Body } from "../../UI/Typography";
import FacebookOutlineIcon from "../../UI/Icons/FacebookOutline";

const Login = ({ signin }) => (
  <React.Fragment>
    <Logo />
    <Body />
    <Button onClick={signin}>
      <FacebookOutlineIcon />
      Sign in with Facebook
    </Button>
  </React.Fragment>
);

export default Login;
