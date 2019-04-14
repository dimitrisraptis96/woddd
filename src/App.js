import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "./utils/theme";

import logo from "./assets/logo.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Image = styled.img`
  width: 20vmin;
`;

const Tagline = styled.p`
  font-family: "Teko", sans-serif;
  /* font-family: "Proza Libre", sans-serif; */
  font-size: 2rem;

  text-align: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Container>
            <Image src={logo} alt="logo" />
            <Tagline>WOD Generator</Tagline>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
