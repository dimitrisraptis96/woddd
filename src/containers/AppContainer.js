import { hot } from "react-hot-loader/root";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route, Switch, withRouter } from "react-router";

import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth, providers } from "../utils/firebase";

import About from "./AboutContainer";
import Dashboard from "./DashboardContainer";
import Favorites from "./FavoritesContainer";
import Login from "./LoginContainer";
import Wod from "./WodContainer";

import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header/Header";
import Layout from "../components/UI/Layout";
import Page404 from "../components/Page404";

import theme from "../utils/theme";

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

  logout = () => {
    this.props
      .signOut()
      .then(res => this.props.history.push("/login"))
      .catch(err => console.log(err));
  };

  render() {
    const { user } = this.state;
    const { signInWithFacebook } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header logout={this.logout} />
          <Layout>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} user={user} />
              <PrivateRoute
                exact
                path="/favorites"
                component={Favorites}
                user={user}
              />
              <PrivateRoute exact path="/about" component={About} user={user} />
              <PrivateRoute exact path="/wod" component={Wod} user={user} />
              <Route
                path="/login"
                render={props => (
                  <Login {...props} signInWithFacebook={signInWithFacebook} />
                )}
              />
              <Route component={Page404} />
            </Switch>
          </Layout>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(withRouter(hot(App)));
