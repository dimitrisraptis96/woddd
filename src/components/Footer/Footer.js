import React from "react";
import styled from "styled-components";

import { Small } from "../../components/UI/Typography";
import theme from "../../utils/theme";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;

  max-width: 100%;
  box-sizing: border-box;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

const A = styled.a`
  color: ${props => props.theme.colors.tertiary};
  font-weight: bold;
  font-size: 0.75rem;
  text-decoration: none;

  &:focus {
    outline-color: ${props => props.theme.colors.tertiary};
    padding: 0.25rem;
  }
`;

const Highlight = styled.span`
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: ${props => props.theme.colors.tertiary};
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = ({ baseColor }) => {
  return (
    <Container>
      <Small>
        Designed and Built by{" "}
        <A href="https://twitter.com/d__raptis">
          <Highlight>
            <b>@draptis</b>
          </Highlight>
        </A>
      </Small>
    </Container>
  );
};

export default Footer;
