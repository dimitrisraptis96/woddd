import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import Tooltip from "@material-ui/core/Tooltip";

import Logo from "../UI/Logo";
import CloseIcon from "../UI/Icons/CloseOutline";
import InfoIcon from "../UI/Icons/InfoOutline";
import HeartOutlineIcon from "../UI/Icons/HeartOutline";
import MenuIcon from "../UI/Icons/MenuOutline";
import SignOutIcon from "../UI/Icons/SignOutAlt";
import ListIcon from "../UI/Icons/ListOutline";
import SignInIcon from "../UI/Icons/SignInAlt";

import { jellyMixin } from "../../utils/mixins";
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

  background-color: ${theme.colors.primary};
  border-bottom: solid 2px ${theme.colors.secondary};

  svg:hover {
    ${jellyMixin}
    fill: white;
  }
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

  navigateTo = path => this.props.history.push(path);

  render() {
    const { logout, user } = this.props;
    const { isOpen } = this.state;
    return (
      <Container>
        <Logo orientation="horizontal" onClick={() => this.navigateTo("/")} />
        {isOpen ? (
          <IconGroup>
            <Tooltip title="My Favorites" placement="bottom">
              <HeartOutlineIcon
                width={24}
                height={24}
                fill={theme.colors.tertiary}
                onClick={() => this.navigateTo("/favorites")}
              />
            </Tooltip>
            <Tooltip title="Workouts" placement="bottom">
              <ListIcon
                width={24}
                height={24}
                fill={theme.colors.tertiary}
                onClick={() => this.navigateTo("/workouts")}
              />
            </Tooltip>
            <Tooltip title="About" placement="bottom">
              <InfoIcon
                width={24}
                height={24}
                fill={theme.colors.tertiary}
                onClick={() => this.navigateTo("/about")}
              />
            </Tooltip>
            {user ? (
              <Tooltip title="Sign Out" placement="bottom">
                <SignOutIcon
                  width={24}
                  height={24}
                  fill={theme.colors.tertiary}
                  onClick={logout}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Sign In" placement="bottom">
                <SignInIcon
                  width={24}
                  height={24}
                  fill={theme.colors.tertiary}
                  onClick={() => this.navigateTo("/login")}
                />
              </Tooltip>
            )}
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

export default withRouter(Header);
