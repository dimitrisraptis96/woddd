import React from "react";

const Favorites = ({ wods }) => {
  return wods.map(wod => <div key={wod}>{wod.split("-")[0]}</div>);
};

export default Favorites;
