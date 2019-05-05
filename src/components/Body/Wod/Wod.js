import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import RefreshIcon from "../../UI/Icons/RefreshOutline";

const Wod = ({ wod, saveWod, removeWod, isLiked, generate }) => {
  return (
    <React.Fragment>
      <Card
        title={wod.title}
        type={wod.type}
        how={wod.how}
        exercises={wod.exercises}
        isLiked={isLiked}
        saveWod={saveWod}
        removeWod={removeWod}
      />
      <Button onClick={generate}>
        <RefreshIcon />
        Generate Again
      </Button>
    </React.Fragment>
  );
};

export default Wod;
