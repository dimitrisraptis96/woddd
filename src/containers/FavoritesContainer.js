import React from "react";
import { database } from "../utils/firebase";

import Favorites from "../components/Body/Favorites/Favorites";

class FavoritesContainer extends React.Component {
  state = {
    likes: [],
  };

  componentDidMount() {
    this.fetchLikes();
  }

  fetchLikes = () => {
    const { user } = this.props;
    const userId = user.uid;

    database
      .ref("/users/" + userId)
      .once("value")
      .then(snapshot => {
        const profile = snapshot.val();
        if (profile !== null && profile.hasOwnProperty("likes")) {
          const likes = profile.likes;
          this.setState({ likes });
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

  render() {
    const { likes } = this.state;

    return <Favorites wods={likes} />;
  }
}

export default FavoritesContainer;
