import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import Button from "../../UI/Button";
import Logo from "../../UI/Logo";

import RefreshIcon from "../../UI/Icons/RefreshOutline";

const Tagline = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
`;

const Dashboard = ({ history }) => {
  return (
    <React.Fragment>
      <Logo />
      <Tagline>Generate a random Wod and kill it!</Tagline>
      <Button onClick={() => history.push("/guest/random")}>
        <RefreshIcon />
        Generate
      </Button>
    </React.Fragment>
  );
};

export default withRouter(Dashboard);
