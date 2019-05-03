import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Dashboard from "../components/Body/Dashboard/Dashboard";

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

  getWod = () => {
    const { wods } = this.state;
    const wod = wods[0];
    this.setState({ wods: wods.slice(1), wod });

    this.props.history.push(`/wod`, {
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

  logout = () => {
    this.props
      .signOut()
      .then(res => this.props.history.push("/login"))
      .catch(err => console.log("logout fail"));
  };

  render() {
    const { isFetched } = this.state;
    return (
      <Dashboard
        getWod={this.getWod}
        isFetched={isFetched}
        logout={this.logout}
      />
    );
  }
}

export default withRouter(DashboardContainer);
