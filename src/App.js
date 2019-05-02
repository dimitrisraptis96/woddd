import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route } from "react-router";

import Dashboard from "./components/Body/Dashboard/Dashboard";
import Login from "./components/Body/Login/Login";
import Wod from "./components/Body/Wod/Wod";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import theme from "./utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-family: 'Rubik', sans-serif;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header />
          <Body>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/wod/:id" component={Wod} />
          </Body>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default hot(App);
