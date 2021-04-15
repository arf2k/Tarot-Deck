import React from "react";

import SingleCard from "../single-card/SingleCard";

const ShuffleThreeCards = ({ threeCards }) => {
  const renderThree = () => {
    return threeCards.map((card) => <SingleCard card={card} />);
  };

  return <>{renderThree()}</>;
};

export default ShuffleThreeCards;
