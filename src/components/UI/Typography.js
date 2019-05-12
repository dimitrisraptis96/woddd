import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../utils/theme";

function getColor(color) {
  switch (color) {
    case "primary":
      return theme.colors.primary;
    case "secondary":
      return theme.colors.secondary;
    case "tertiary":
      return theme.colors.tertiary;
    case "white":
      return theme.colors.white;
    default:
      return theme.colors.white;
  }
}

export const Body = styled.p`
  font-family: Rubik;
  font-size: 16px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: ${props => getColor(props.color)};
  margin: 0;
`;

Body.propTypes = {
  weight: PropTypes.oneOf(["normal", "bold", "italic"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "error",
    "warning",
    "info",
  ]),
  align: PropTypes.oneOf(["center", "left", "center", "justify"]),
};

Body.defaultProps = {
  weight: "normal",
  color: "white",
  align: "center",
};

export const Small = styled.p`
  font-family: Rubik;
  font-size: 12px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: ${props => getColor(props.color)};
  margin: 0;
`;

Small.propTypes = {
  weight: PropTypes.oneOf(["normal", "bold", "italic"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "error",
    "warning",
    "info",
  ]),
  align: PropTypes.oneOf(["center", "left", "center", "justify"]),
};

Small.defaultProps = {
  weight: "normal",
  color: "white",
  align: "center",
};

export const Header1 = styled.h1`
  font-family: Rubik;
  font-size: 34.2px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: ${props => getColor(props.color)};
  margin: 0;
`;

Header1.propTypes = {
  weight: PropTypes.oneOf(["normal", "bold", "italic"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "error",
    "warning",
    "info",
  ]),
  align: PropTypes.oneOf(["center", "left", "center", "justify"]),
};

Header1.defaultProps = {
  weight: "normal",
  color: "white",
  align: "center",
};
