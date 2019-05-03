import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../UI/Logo";
import CloseIcon from "../UI/Icons/CloseOutline";
import InfoIcon from "../UI/Icons/InfoOutline";
import HeartOutlineIcon from "../UI/Icons/HeartOutline";
import MenuIcon from "../UI/Icons/MenuOutline";

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

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > svg {
    margin-left: 0.5rem;
  }
  > svg:last-child {
    margin-left: 2rem;
  }
`;

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { resetWod } = this.props;
    const { isOpen } = this.state;
    return (
      <Container>
        <Link to="/">
          <Logo orientation="horizontal" />
        </Link>
        {isOpen ? (
          <IconGroup>
            <InfoIcon width={24} height={24} fill={theme.colors.tertiary} />
            <HeartOutlineIcon
              width={24}
              height={24}
              fill={theme.colors.tertiary}
            />
            <CloseIcon
              width={32}
              height={32}
              fill={theme.colors.white}
              onClick={this.toggleMenu}
            />
          </IconGroup>
        ) : (
          <MenuIcon
            width={32}
            height={32}
            fill={theme.colors.tertiary}
            onClick={this.toggleMenu}
          />
        )}
      </Container>
    );
  }
}

export default Header;
