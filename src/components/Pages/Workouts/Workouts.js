import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { Header1, Body, Small } from "../../UI/Typography";

import theme from "../../../utils/theme";

const { secondary } = theme.colors;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  > h1 {
    margin-bottom: 1rem;
  }
  > p {
    margin-bottom: 2rem;
  }
`;

const WodsList = styled.div`
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
  cursor: pointer;

  > p:first-child {
    margin-bottom: 0.5rem;
  }
`;

const Workouts = ({ wods, handleWod }) => {
  return (
    <Container>
      <Header1 weight="bold" color="tertiary">
        Workouts
      </Header1>
      <Body>The available workouts of Woddd app:</Body>
      <WodsList>
        {wods.map(wod => (
          <WodCard key={wod.id} onClick={() => handleWod(wod.id)}>
            <Body weight="bold" color="tertiary">
              {wod.title}
            </Body>
            <Small color="white">{wod.type}</Small>
          </WodCard>
        ))}
      </WodsList>
    </Container>
  );
};

export default Workouts;
