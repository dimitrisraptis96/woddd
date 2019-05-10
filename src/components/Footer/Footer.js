import React from "react";
import styled from "styled-components";
import { Small } from "../../components/UI/Typography";

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

const Footer = ({ baseColor }) => {
  return (
    <Container>
      <Small>
        Designed and Built by{" "}
        <A href="https://twitter.com/d__raptis">
          <b>@draptis</b>
        </A>
      </Small>
    </Container>
  );
};

export default Footer;
