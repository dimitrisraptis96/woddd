import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Workouts from "../components/Pages/Workouts/Workouts";

import { database } from "../utils/firebase";

class WorkoutsContainer extends Component {
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

  handleWod = id => {
    this.props.history.push(`/wod/${id}`);
  };

  render() {
    const { wods } = this.state;
    return <Workouts wods={wods} handleWod={this.handleWod} />;
  }
}

export default withRouter(WorkoutsContainer);
