import React from "react";
import { database } from "../utils/firebase";
import { withRouter } from "react-router";

import Wod from "../components/Pages/Wod/Wod";
// import WodLoader from "../components/Pages/Wod/Wod.loader";
import Spinner from "../components/UI/Spinner";

import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.tertiary};
`;
class WodContainer extends React.Component {
  state = {
    wods: [],
    wod: null,
    likes: [],
    isFetching: true,
  };

  componentDidMount() {
    const { wodId } = this.props.match.params;
    const isRandom = wodId === "random";

    if (isRandom) {
      this.fetchWods();
    } else {
      this.fetchWodById(wodId.replace("%20", " "));
    }

    this.fetchLikes();
    this.setState({ isRandom });
  }

  fetchLikes = () => {
    const { user } = this.props;
    const userId = user.uid;

    this.setState({ isFetching: true });

    database
      .ref("/users/" + userId)
      .once("value")
      .then(snapshot => {
        const profile = snapshot.val();
        if (profile !== null && profile.hasOwnProperty("likes")) {
          const likes = profile.likes;
          this.setState({
            likes,
            isFetching: false,
          });
        } else {
          // create likes entity
          database
            .ref(`users/${userId}`)
            .set({
              likes: [],
            })
            .then(() => this.fetchLikes());
        }
      });
  };

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

  saveWod = wodId => {
    const { likes } = this.state;
    const { user } = this.props;
    const userId = user.uid;

    const updatedLikes = [...likes, wodId];

    database
      .ref("users")
      .child(userId)
      .update({
        likes: updatedLikes,
      });

    this.setState({ likes: updatedLikes });
  };

  removeWod = wodId => {
    const { likes } = this.state;
    const { user } = this.props;
    const userId = user.uid;

    const removeIndex = likes.findIndex(likeId => likeId === wodId);
    const updatedLikes = [...likes];
    updatedLikes.splice(removeIndex, 1);

    database
      .ref("users")
      .child(userId)
      .update({
        likes: updatedLikes,
      });

    this.setState({ likes: updatedLikes });
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  fetchWodById = id => {
    this.setState({ isFetching: true });
    console.log(id);

    database
      .ref("/wods")
      .orderByChild("id")
      .equalTo(id)
      .on("value", snapshot => {
        const data = snapshot.val();

        let wod = null;
        if (typeof data === "object") {
          wod = Object.keys(data).map(key => data[key])[0];
        } else {
          wod = data[0];
        }

        this.setState({ wod, isFetching: false });
      });
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
    const { wod, likes, isFetching, isRandom } = this.state;
    if (isFetching || wod === null)
      return (
        <Column>
          <p>Always warm up before excersing</p>
          <Spinner />
        </Column>
      );

    const isLiked = likes.some(likeId => likeId === wod.id);

    return (
      <Wod
        isRandom={isRandom}
        isLiked={isLiked}
        wod={wod}
        generate={this.generate}
        saveWod={() => this.saveWod(wod.id)}
        removeWod={() => this.removeWod(wod.id)}
        goBack={this.goBack}
      />
    );
  }
}

export default withRouter(WodContainer);
