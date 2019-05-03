import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RingIcon from "./Icons/Ring";
import theme from "../../utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? `row;` : `column;`)};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  margin: 0;
  ${props =>
    props.isHorizontal
      ? `
        font-size: 1.5rem;
        margin-left: 0.5rem;
      `
      : `
        font-size: 3rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      `};
  /* font-weight: bold; */
  text-align: center;
  color: ${props => props.theme.colors.tertiary};
`;

const Logo = ({ orientation, resetWod }) => {
  const isHorizontal = orientation === "horizontal";
  const width = isHorizontal ? 32 : 96;
  return (
    <Container isHorizontal={isHorizontal} onClick={resetWod}>
      <RingIcon color={theme.colors.tertiary} width={width} />
      <Text isHorizontal={isHorizontal}>Woddd</Text>
    </Container>
  );
};

Logo.propTypes = {
  orientaion: PropTypes.oneOf(["horizontal", "vertical"]),
};

Logo.defaultProps = {
  orientaion: "vertical",
};

export default Logo;
