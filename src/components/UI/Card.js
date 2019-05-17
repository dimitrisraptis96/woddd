import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { rgba } from "polished";

import DubmbellIcon from "./Icons/Dumbbell";
import HeartIcon from "./Icons/Heart";
import HeartOutlineIcon from "./Icons/HeartOutline";
import { Small, Body, Header1 } from "./Typography";

import theme from "../../utils/theme";
import { jellyMixin } from "../../utils/mixins";

const { primary, secondary, tertiary, white } = theme.colors;

const Container = styled.div`
  background-color: ${secondary};
  border-radius: 1rem;
  box-shadow: 0px 8px ${rgba(secondary, 0.5)}, 0px 16px ${rgba(secondary, 0.4)},
    0px 24px ${rgba(secondary, 0.3)};

  padding: 2rem;
  margin-bottom: ${25 + 16}px;
  text-align: left;
  min-width: 300px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    margin-bottom: 0 !important;
  }

  svg:hover {
    ${jellyMixin};
    fill: ${props => (props.isLiked ? white : tertiary)};
  }
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    fill: ${tertiary};
  }

  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  color: ${tertiary};
`;

const WorkoutUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  margin-top: 1rem;
`;

const WorkoutLi = styled.li`
  padding: 0.5rem;
`;

const How = styled.div`
  background-color: ${primary};
  border-radius: 1000rem;
  padding: 0.25rem;
  /* margin-bottom: ${25 + 16}px; */
  text-align: center;
  color: ${tertiary}
`;

const Card = ({ title, how, type, exercises, isLiked, saveWod, removeWod }) => {
  return (
    <Container>
      <Header isLiked={isLiked}>
        <Header1 color="tertiary" weight="bold">
          {title}
        </Header1>
        {isLiked ? (
          <HeartIcon
            width={24}
            fill={tertiary}
            onClick={removeWod}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <HeartOutlineIcon
            width={24}
            fill={white}
            onClick={saveWod}
            style={{ cursor: "pointer" }}
          />
        )}
      </Header>
      <Type>
        <DubmbellIcon width={16} />
        <Small color="tertiary">{type}</Small>
      </Type>
      {/* <How>{how}</How> */}
      <WorkoutUl>
        {exercises.map((exercise, index) => (
          <WorkoutLi key={index}>
            <Body align="left">{exercise}</Body>
          </WorkoutLi>
        ))}
      </WorkoutUl>
    </Container>
  );
};

Card.propTypes = {
  saveWod: PropTypes.func,
  removeWod: PropTypes.func,
  isLiked: PropTypes.bool,
  title: PropTypes.string.isRequired,
  how: PropTypes.string,
  type: PropTypes.oneOf(["For Time", "For Rounds / Reps", "For Load"]),
  exercises: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  isLiked: false,
};

export default Card;
