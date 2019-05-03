import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { rgba } from "polished";

import DubmbellIcon from "./Icons/Dumbbell";
import HeartIcon from "./Icons/Heart";
import HeartOutlineIcon from "./Icons/HeartOutline";
import theme from "../../utils/theme";

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

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;
  color: ${tertiary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-size: 1rem;
  line-height: 1.75;
  color: ${white};
`;

const How = styled.div`
  background-color: ${primary};
  border-radius: 1000rem;
  padding: 0.25rem;
  /* margin-bottom: ${25 + 16}px; */
  text-align: center;
  color: ${tertiary}
`;

const Card = ({ title, how, type, exercises, isSaved, saveWod, deleteWod }) => {
  return (
    <Container>
      <Title>
        {title}
        {isSaved ? (
          <HeartIcon width={24} fill={tertiary} onClick={deleteWod} />
        ) : (
          <HeartOutlineIcon width={24} fill={white} onClick={saveWod} />
        )}
      </Title>
      <Type>
        <DubmbellIcon width={16} />
        {type}
      </Type>
      {/* <How>{how}</How> */}
      <WorkoutUl>
        {exercises.map((exercise, index) => (
          <WorkoutLi key={index}>{exercise}</WorkoutLi>
        ))}
      </WorkoutUl>
    </Container>
  );
};

Card.propTypes = {
  saveWod: PropTypes.func,
  deleteWod: PropTypes.func,
  isSaved: PropTypes.bool,
  title: PropTypes.string.isRequired,
  how: PropTypes.string,
  type: PropTypes.oneOf(["For Time", "For Rounds / Reps", "For Load"]),
  exercises: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  isSaved: false,
};

export default Card;
