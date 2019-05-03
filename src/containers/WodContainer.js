import React from "react";
import { database } from "../utils/firebase";

import Wod from "../components/Body/Wod/Wod";

class WodContainer extends React.Component {
  state = {
    wod: null,
  };

  componentDidMount() {
    this.getMaxWods();
  }

  getMaxWods = () => {
    database
      .ref("/wods/")
      .once("value")
      .then(snapshot => {
        const wods = snapshot.val();
        const max = wods.length;

        this.setState({ wods }, this.generate);
      });
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  generate = () => {
    const max = this.state.wods.length;

    const randomNumber = this.getRandomInt(max);

    database
      .ref(`/wods/${randomNumber}`)
      .once("value")
      .then(snapshot => {
        const wod = snapshot.val();
        this.setState({
          wod,
        });
      });
  };

  render() {
    const { wod } = this.state;
    if (wod === null) return <div>Loading</div>;

    console.log(wod);

    return <Wod wod={wod} generate={this.generate} />;
  }
}

export default WodContainer;
