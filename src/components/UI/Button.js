import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "../../utils/theme";

const StyledButton = styled(Button)`
  background-color: ${theme.colors.tertiary} !important;
  color: ${theme.colors.primary} !important;
  text-transform: capitalize !important;
  border-radius: 100rem !important;
  padding: 1rem 1rem !important;
  line-height: 1 !important;
  font-weight: bold !important;
  font-size: 0.9rem !important;
  svg {
    fill: ${theme.colors.primary};
    margin-right: 0.25rem;
    width: 16px;
    height: 16px;
  }
`;

const CustomButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
