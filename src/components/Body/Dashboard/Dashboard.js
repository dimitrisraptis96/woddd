import React from "react";
import styled from "styled-components";

import Button from "../../UI/Button";
import Logo from "../../UI/Logo";

import RefreshIcon from "../../UI/Icons/RefreshOutline";

const Tagline = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  /* color: ${props => props.theme.colors.tertiary}; */
`;

const Dashboard = ({ getWod, isFetched, logout }) => {
  return (
    <React.Fragment>
      <Logo />
      <Tagline>Generate a random Wod and kill it</Tagline>
      <Button onClick={getWod} isDisabled={!isFetched}>
        <RefreshIcon />
        Generate
      </Button>
      <Button onClick={logout}>
        {/* <RefreshIcon /> */}
        Logout
      </Button>
    </React.Fragment>
  );
};

export default Dashboard;
