import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import SingleCard from "../single-card/SingleCard";

const ShuffleOneCard = () => {
  const [card, setCard] = useState("");

  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    setCard(card);
  };

  const renderOne = () => {
    return <SingleCard card={card} />;
  };

  return (
    <>
      <button onClick={showShuffled}>Shuffle One</button>
      {card ? renderOne() : null}
    </>
  );
};

export default ShuffleOneCard;
