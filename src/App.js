import { hot } from "react-hot-loader/root";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router";

import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth, providers } from "./utils/firebase";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./containers/DashboardContainer";
import Login from "./components/Login/Login";
import Wod from "./components/Body/Wod/Wod";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Page404 from "./components/Page404";

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

class App extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };

  componentDidMount() {
    // firebaseAppAuth.onAuthStateChanged(user => user && this.setState({ user }));
    firebaseAppAuth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({ user });
      } else {
        localStorage.removeItem("user");
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { user } = this.state;
    const { signInWithFacebook, signOut } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header />
          <Body>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Dashboard}
                user={user}
                signOut={signOut}
              />
              <PrivateRoute
                exact
                path="/wod"
                component={Wod}
                user={user}
                signOut={signOut}
              />
              <Route
                path="/login"
                render={props => (
                  <Login {...props} signInWithFacebook={signInWithFacebook} />
                )}
              />
              <Route component={Page404} />
            </Switch>
          </Body>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(hot(App));
