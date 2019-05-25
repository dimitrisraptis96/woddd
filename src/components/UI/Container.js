import PropTypes from "prop-types";
import styled from "styled-components";
import {
  spacingVerticalMixin,
  spacingHorizontalMixin,
} from "../../utils/mixins";

const Container = styled.div`
  width: ${props => props.width};
  box-sizing: border-box;

  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};

  ${props =>
    props.direction === "row" ? spacingHorizontalMixin : spacingVerticalMixin};

  padding: ${props => props.padding}rem;
  padding-top: ${props => props.paddingTop}rem;
  padding-bottom: ${props => props.paddingBottom}rem;
  padding-left: ${props => props.paddingLeft}rem;
  padding-right: ${props => props.paddingRight}rem;
`;

Container.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  spacing: PropTypes.number,
  padding: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,
  width: PropTypes.string,
};

Container.defaultProps = {
  direction: "row",
  justify: "center",
  alignItems: "center",
  spacing: 1,
  padding: 0,
  paddingTop: -1,
  paddingBottom: -1,
  paddingRight: -1,
  paddingLeft: -1,
  width: "100%",
};

export default Container;
