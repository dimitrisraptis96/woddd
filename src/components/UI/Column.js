import React from "react";
import Container from "./Container";

const Column = props => {
  return (
    <Container {...props} direction="column">
      {props.children}
    </Container>
  );
};

export default Column;
