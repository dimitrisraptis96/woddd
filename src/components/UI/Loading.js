import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Spinner from "./Spinner";
import { Header1, Body, Small } from "./Typography";

const TipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > p:first-child {
    margin-bottom: 0.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  color: ${props => props.theme.colors.tertiary};
`;

const Title = styled(Body)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled(Body)`
  margin-bottom: 2rem;
`;

const Loading = ({ tip }) => {
  const { title, description } = tip;

  return (
    <Column>
      <TipContainer>
        <Small>Tip of the day:</Small>
        <Title weight="bold" color="tertiary">
          {title}
        </Title>
        <Description>{description}</Description>
      </TipContainer>
      <Spinner />
    </Column>
  );
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
