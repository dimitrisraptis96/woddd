import React, { Component } from "react";
import styled from "styled-components";
import withFirebaseAuth from "react-with-firebase-auth";
import { withRouter } from "react-router-dom";

import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import RefreshIcon from "../../Icons/RefreshOutline";

import WODS_LIST from "../../../utils/wods";

import { firebaseAppAuth, providers, database } from "../../../utils/firebase";

const Tagline = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  /* color: ${props => props.theme.colors.tertiary}; */
`;

class Dashboard extends Component {
  state = {
    wods: [],
    wod: null,
    isFetched: false,
  };

  componentDidMount() {
    // this.setState({ wods: this.shuffle([...WODS_LIST]) });

    database
      .ref("/wods/")
      .once("value")
      .then(snapshot => {
        const wods = snapshot.val();
        this.setState({
          isFetched: true,
          wods: this.shuffle([...wods]),
        });
      });
  }

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

  getWod = () => {
    const { wods } = this.state;
    const wod = wods[0];
    this.setState({ wods: wods.slice(1), wod });

    this.props.history.push(`/wod/${wod.title}`, {
      wod,
      // save: this.saveWod,
      // remove: this.deleteWod,
      // generete: this.getWod,
    });
  };

  shuffle = array => {
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

  render() {
    const { isFetched } = this.state;
    return (
      <React.Fragment>
        <Logo />
        <Tagline>Generate a random Wod and kill it</Tagline>
        <Button onClick={this.getWod} isDisabled={!isFetched}>
          <RefreshIcon />
          Generate
        </Button>
      </React.Fragment>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(withRouter(Dashboard));
