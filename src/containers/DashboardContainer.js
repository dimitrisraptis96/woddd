import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Dashboard from "../components/Pages/Dashboard/Dashboard";

import { database } from "../utils/firebase";

class DashboardContainer extends Component {
  state = {
    wods: [],
    activeWod: null,
    isFetched: false,
  };

  componentDidMount() {
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
    this.setState({ activeWod: null });
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

  generate = () => {
    this.props.history.push("/wod/random");
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
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
    return <Dashboard generate={this.generate} isFetched={isFetched} />;
  }
}

export default withRouter(DashboardContainer);
