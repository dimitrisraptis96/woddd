import React from "react";
import { database } from "../utils/firebase";
import { withRouter } from "react-router";

import Wod from "../components/Pages/Wod/Wod";
// import WodLoader from "../components/Pages/Wod/Wod.loader";
import Loading from "../components/UI/Loading";

import pickRandom from "../utils/pickRandom";
import tips from "../constants/tips";

class WodContainer extends React.Component {
  state = {
    wods: [],
    wod: null,
    isFetching: false,
    tip: pickRandom(tips),
  };

  componentDidMount() {
    const { wodId } = this.props.match.params;
    this.fetchWods();
  }

  fetchWods = () => {
    this.setState({ isFetching: true });

    database
      .ref("/wods/")
      .once("value")
      .then(snapshot => {
        const wods = snapshot.val();
        this.setState({ wods, isFetching: false }, this.generate);
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
          isFetching: false,
        });
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { wod, isFetching, tip } = this.state;

    if (isFetching || wod === null) {
      return <Loading tip={tip} />;
    }

    return (
      <Wod
        isRandom
        isLiked={false}
        isGuest={true}
        wod={wod}
        generate={this.generate}
        goBack={this.goBack}
      />
    );
  }
}

export default withRouter(WodContainer);
