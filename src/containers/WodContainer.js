import React from "react";
import { database } from "../utils/firebase";

import Wod from "../components/Pages/Wod/Wod";
import WodLoader from "../components/Pages/Wod/Wod.loader";
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
    wod: null,
    likes: [],
    isFetching: true,
  };

  componentDidcontainersunt() {
    this.getMacontainersods();
    this.fetchLikes();
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
  getMaxWods = () => {
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
          isReady: true,
        });
      });
  };

  render() {
    const { wod, likes, isFetching } = this.state;
    if (isFetching || wod === null)
      return (
        <Column>
          <p>Finding the greatest workout</p>
          <Spinner />
        </Column>
      );

    const isLiked = likes.some(likeId => likeId === wod.id);

    return (
      <Wod
        isLiked={isLiked}
        wod={wod}
        generate={this.generate}
        saveWod={() => this.saveWod(wod.id)}
        removeWod={() => this.removeWod(wod.id)}
      />
    );
  }
}

export default WodContainer;
