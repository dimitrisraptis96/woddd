import React from "react";
import styled from "styled-components";

import Logo from "../UI/Logo";
import MenuIcon from "../Icons/MenuOutline";
import theme from "../../utils/theme";

const Container = styled.div`
  box-sizing: border-box;
  min-width: 100%;
  max-width: 100%;
  height: 80px;

  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.colors.secondary};
`;

const StyledMenuIcon = styled(MenuIcon)`
  fill: ${theme.colors.tertiary};
`;

const Header = ({ resetWod }) => {
  return (
    <Container>
      <Logo orientation="horizontal" resetWod={resetWod} />
      <StyledMenuIcon width={32} height={32} />
    </Container>
  );
};

export default Header;
