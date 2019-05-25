import React from "react";
import Container from "./Container";

const Row = props => {
  return (
    <Container {...props} direction="row">
      {props.children}
    </Container>
  );
};

export default Row;
