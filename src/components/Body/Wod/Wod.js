import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import RefreshIcon from "../../UI/Icons/RefreshOutline";

const Wod = props => {
  const { wod, save, remove, generate } = props.location.state;

  return (
    <React.Fragment>
      <Card
        title={wod.title}
        type={wod.type}
        how={wod.how}
        exercises={wod.exercises}
        isSaved={wod.isSaved}
        // saveWod={save}
        // deleteWod={remove}
      />
      <Button
      // onClick={generate}
      >
        <RefreshIcon />
        Generate Again
      </Button>
    </React.Fragment>
  );
};

export default Wod;
