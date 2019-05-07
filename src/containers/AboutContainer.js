import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import About from "../components/Pages/About/About";

import { database } from "../utils/firebase";

class AboutContainer extends Component {
  state = {
    wods: [],
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
          wods,
        });
      });
  }

  render() {
    const { wods } = this.state;
    return <About wods={wods} />;
  }
}

export default withRouter(AboutContainer);
