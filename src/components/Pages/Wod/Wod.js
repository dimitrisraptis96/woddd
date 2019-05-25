import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import RefreshIcon from "../../UI/Icons/RefreshOutline";
import { Header1, Body } from "../../UI/Typography";
import ArrowBackOutline from "../../UI/Icons/ArrowBackOutline";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  h1 {
    margin-bottom: 1rem;
  }
`;

const GoBackDiv = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 1rem;

  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.white};
    margin-right: 0.5rem;
  }
`;

const Wod = ({
  wod,
  saveWod,
  removeWod,
  isLiked,
  generate,
  isRandom,
  goBack,
  isGuest,
}) => {
  return (
    <Container>
      {/* <Header1 weight="bold">Random WOD</Header1> */}
      {!isRandom && (
        <GoBackDiv onClick={goBack}>
          <ArrowBackOutline />
          <Body color="white">Back</Body>
        </GoBackDiv>
      )}
      <Card
        isGuest={isGuest}
        title={wod.title}
        type={wod.type}
        how={wod.how}
        exercises={wod.exercises}
        isLiked={isLiked}
        saveWod={saveWod}
        removeWod={removeWod}
      />
      {isRandom && (
        <Button onClick={generate}>
          <RefreshIcon />
          Generate Again
        </Button>
      )}
    </Container>
  );
};

Wod.propTypes = {
  wod: PropTypes.object,
  saveWod: PropTypes.func,
  removeWod: PropTypes.func,
  generate: PropTypes.func,
  goBack: PropTypes.func,
  isLiked: PropTypes.bool,
  isRandom: PropTypes.bool,
  isGuest: PropTypes.bool,
};

Wod.defaultProps = {
  wod: {},
  saveWod: () => {},
  removeWod: () => {},
  generate: () => {},
  goBack: () => {},
  isLiked: false,
  isRandom: false,
  isGuest: false,
};

export default Wod;
