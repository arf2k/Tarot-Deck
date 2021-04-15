import React from "react";

import SingleCard from "../single-card/SingleCard";

const ShuffleOneCard = ({card}) => {


  const renderOne = () => {
    return <SingleCard card={card} />;
  };

  return (
    <>
      {card ? renderOne() : null}
    </>
  );
};

export default ShuffleOneCard;
