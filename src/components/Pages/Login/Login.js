import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { rgba } from "polished";

import Button from "../../UI/Button";
import Column from "../../UI/Column";
import Logo from "../../UI/Logo";
import { Body } from "../../UI/Typography";
import FacebookOutlineIcon from "../../UI/Icons/FacebookOutline";
import ShieldCheckIcon from "../../UI/Icons/ShieldCheck";

import { jellyMixin } from "../../../utils/mixins";
import theme from "../../../utils/theme";

const { tertiary } = theme.colors;

const StyledLink = styled(Link)`
  color: ${rgba(tertiary, 0.6)};

  &:hover {
    color: ${tertiary};
    svg {
      fill: ${tertiary};
    }
    ${jellyMixin}
  }

  svg {
    fill: ${tertiary};
    margin-right: 0.25rem;
    width: 16px;
    height: 16px;
  }
`;

const Login = ({ signin }) => (
  <React.Fragment>
    <Logo />
    <Body style={{ marginBottom: "2rem" }}>
      Generate a random Wod and kill it!
    </Body>
    <Column spacing={0.5}>
      <Button onClick={signin}>
        <FacebookOutlineIcon />
        Sign in with Facebook
      </Button>
      <Body color="secondary">or</Body>
      <StyledLink to="/guest">
        {/* <ShieldCheckIcon /> */}
        Continue as Guest
      </StyledLink>
    </Column>
  </React.Fragment>
);

export default Login;
