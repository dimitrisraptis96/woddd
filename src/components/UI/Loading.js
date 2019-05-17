import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Spinner from "./Spinner";
import { Header1, Body } from "./Typography";

import tips from "../../constants/tips";
import pickRandom from "../../utils/pickRandom";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;

  h1 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 2rem;
  }

  color: ${props => props.theme.colors.tertiary};
`;

const Loading = ({}) => {
  const tip = pickRandom(tips);
  const { title, description } = tip;

  return (
    <Column>
      <Header1 weight="bold" color="tertiary">
        {title}
      </Header1>
      <Body>{description}</Body>
      <Spinner />
    </Column>
  );
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
