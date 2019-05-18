import React from "react";
import styled from "styled-components";

import Link from "../UI/Link";
import { Small } from "../UI/Typography";

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

const Footer = ({}) => {
  return (
    <Container>
      <Small>
        Designed and Built by{" "}
        <Link href="https://twitter.com/d__raptis">@draptis</Link>
      </Small>
    </Container>
  );
};

export default Footer;
