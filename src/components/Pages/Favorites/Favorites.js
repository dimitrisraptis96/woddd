import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { Header1, Body } from "../../UI/Typography";
import Card from "../../UI/Card";

import theme from "../../../utils/theme";
const { secondary } = theme.colors;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const WodsList = styled.div`
  --num-of-cards: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 28rem) {
    flex: 0 1 100%;
    min-width: 100%;
  }
  @media (min-width: 60rem) {
    width: ${5 * 16 + 6 * 150}px;
    min-width: ${5 * 16 + 6 * 150}px;
    max-width: ${5 * 16 + 6 * 150}px;
  }

  color: ${props => props.theme.colors.tertiary};
  font-weight: bold;

  margin: 0;
  padding: 0;
`;

const WodCard = styled.div`
  box-sizing: border-box;
  background-color: ${secondary};
  border-radius: 1rem;
  box-shadow: 0px 8px ${rgba(secondary, 0.5)}, 0px 16px ${rgba(secondary, 0.4)},
    0px 24px ${rgba(secondary, 0.3)};

  text-align: center;

  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: ${25 + 16}px;

  width: 150px;
`;

const Favorites = ({ wods, handleWod }) => {
  return (
    <Container>
      <Header1 weight="bold" color="tertiary">
        Favorites
      </Header1>
      <Body>Find and manage your saved wods.</Body>
      <WodsList>
        {wods.map(wod => (
          <WodCard
            key={wod}
            onClick={() => handleWod(wod)}
            style={{ cursor: "pointer" }}
          >
            {wod.split("-")[0]}
          </WodCard>
        ))}
      </WodsList>
    </Container>
  );
};

export default Favorites;
