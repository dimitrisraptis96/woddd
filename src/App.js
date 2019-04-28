import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";

import theme from "./utils/theme";
import wods from "./utils/wods";
import RefreshIcon from "./components/Icons/RefreshOutline";
import logo from "./assets/logo.png";

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

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const Tagline = styled.p`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const Category = styled.div`
  font-size: 0.8rem;
`;

const Li = styled.li`
  font-size: 1rem;
  line-height: 2;
`;

const StyledButton = styled(Button)`
  background-color: rgba(0, 98, 90, 1) !important;
  color: white !important;
  text-transform: capitalize !important;
  border-radius: 100rem !important;
  padding: 1rem 2rem !important;
  svg {
    fill: white;
    margin-right: 0.25rem;
  }
`;

const Card = styled.div`
  background-color: rgba(0, 98, 90, 1);
  border-radius: 1rem;
  box-shadow: 0px 5px rgba(0, 98, 90, 0.4), 0px 10px rgba(0, 98, 90, 0.3),
    0px 15px rgba(0, 98, 90, 0.2), 0px 20px rgba(0, 98, 90, 0.1),
    0px 25px rgba(0, 98, 90, 0.05);

  padding: 2rem;
  margin-bottom: ${25 + 16}px;
  text-align: left;
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
  state = {
    wods: this.randomize(wods),
    wod: null,
  };

  getWod = () => {
    const { wods } = this.state;
    const wod = wods[0];
    this.setState({ wods: wods.slice(1), wod });
    return wod;
  };

  randomize(array) {
    var l = array.length,
      temp,
      index;
    while (l > 0) {
      index = Math.floor(Math.random() * l);
      l--;
      temp = array[l];
      array[l] = array[index];
      array[index] = temp;
    }
    console.log(array);

    return array;
  }

  render() {
    const { wod } = this.state;

    const hasWod = wod !== null;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Container>
            <Image src={logo} alt="logo" />
            {hasWod ? (
              <Card>
                <Title>{wod.title}</Title>
                <Category>{wod.category}</Category>
                <ul>
                  {wod.workout.map(exercise => (
                    <Li>{exercise}</Li>
                  ))}
                </ul>
              </Card>
            ) : (
              <Logo>
                <Hero>Woood</Hero>
                <Tagline>Generate a random Wod and kill it</Tagline>
              </Logo>
            )}
            <StyledButton variant="contained" onClick={() => this.getWod()}>
              <RefreshIcon width={14} height={14} />
              {hasWod ? "Generate Again" : "Generate"}
            </StyledButton>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default hot(App);
