import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import RefreshIcon from "../../UI/Icons/RefreshOutline";
import { Header1, Body } from "../../UI/Typography";
import styled from "styled-components";

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

const Wod = ({ wod, saveWod, removeWod, isLiked, generate }) => {
  return (
    <Container>
      <Header1 weight="bold">Random WOD</Header1>
      <Card
        title={wod.title}
        type={wod.type}
        how={wod.how}
        exercises={wod.exercises}
        isLiked={isLiked}
        saveWod={saveWod}
        removeWod={removeWod}
      />
      <Button onClick={generate}>
        <RefreshIcon />
        Generate Again
      </Button>
    </Container>
  );
};

export default Wod;
