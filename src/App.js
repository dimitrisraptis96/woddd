import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./utils/config";

import Button from "./components/UI/Button";
import Card from "./components/UI/Card";
import Logo from "./components/UI/Logo";
import Header from "./components/Header/Header";
import RefreshIcon from "./components/Icons/RefreshOutline";

import theme from "./utils/theme";
import WODS_LIST from "./utils/wods";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

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

const Tagline = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  /* color: ${props => props.theme.colors.tertiary}; */
`;

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;

  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  state = {
    wods: [],
    wod: null,
  };

  componentDidMount() {
    this.setState({ wods: this.randomize([...WODS_LIST]) });
  }

  getWod = () => {
    const { wods } = this.state;
    const wod = wods[0];
    this.setState({ wods: wods.slice(1), wod });
    return wod;
  };

  randomize = array => {
    let l = array.length,
      temp,
      index;
    while (l > 0) {
      index = Math.floor(Math.random() * l);
      l--;
      temp = array[l];
      array[l] = array[index];
      array[index] = temp;
    }

    return array;
  };

  resetWod = () => {
    this.setState({ wod: null });
  };

  saveWod = id => {
    const { wod } = this.state;
    wod.isSaved = true;
    this.setState(wod);
  };

  deleteWod = id => {
    const { wod } = this.state;
    wod.isSaved = false;
    this.setState(wod);
  };

  render() {
    const { wod } = this.state;
    const { user, signOut, signInWithFacebook } = this.props;
    console.log(process.env.REACT_APP_FIREBASE_API_KEY);

    const hasWod = wod !== null;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header resetWod={this.resetWod} />
          <Container>
            {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
            {user ? (
              <Button onClick={signOut}>Sign out</Button>
            ) : (
              <Button onClick={signInWithFacebook}>
                Sign in with Facebook
              </Button>
            )}
            {hasWod ? (
              <Card
                title={wod.title}
                type={wod.type}
                how={wod.how}
                exercises={wod.exercises}
                isSaved={wod.isSaved}
                saveWod={this.saveWod}
                deleteWod={this.deleteWod}
              />
            ) : (
              <>
                <Logo />
                <Tagline>Generate a random Wod and kill it</Tagline>
              </>
            )}
            <Button onClick={this.getWod}>
              <RefreshIcon width={16} height={16} />
              {hasWod ? "Generate Again" : "Generate"}
            </Button>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(hot(App));
