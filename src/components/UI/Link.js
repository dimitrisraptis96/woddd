import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const A = styled.a`
  color: ${props => props.theme.colors.tertiary};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;

  &:focus {
    outline-color: ${props => props.theme.colors.tertiary};
    padding: 0.25rem;
  }
`;

const Highlight = styled.span`
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: ${props => props.theme.colors.tertiary};
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Link = ({ href, children }) => {
  return (
    <A href={href} target="_blank" rel="noopener noreferrer">
      <Highlight>
        <b>{children}</b>
      </Highlight>
    </A>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  href: "",
  children: null,
};

export default Link;
