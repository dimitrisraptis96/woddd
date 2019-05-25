import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../../UI/Button";
import Column from "../../UI/Column";
import Logo from "../../UI/Logo";
import { Body } from "../../UI/Typography";
import FacebookOutlineIcon from "../../UI/Icons/FacebookOutline";

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: red;
  }
`;

const Login = ({ signin }) => (
  <React.Fragment>
    <Logo />
    <Body style={{ marginBottom: "2rem" }}>
      Generate a random Wod and kill it!
    </Body>
    <Column>
      <Button onClick={signin}>
        <FacebookOutlineIcon />
        Sign in with Facebook
      </Button>
      <Body color="secondary">or</Body>
      <StyledLink to="/guest">Continue as Guest</StyledLink>
    </Column>
  </React.Fragment>
);

export default Login;
