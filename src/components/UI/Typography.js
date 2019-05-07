import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../utils/theme";

export const Body = styled.p`
  font-family: Rubik;
  font-size: 16px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: ${theme.colors.white};
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
  color: "primary",
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
  color: ${theme.colors.tertiary};
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
  color: "primary",
  align: "center",
};
