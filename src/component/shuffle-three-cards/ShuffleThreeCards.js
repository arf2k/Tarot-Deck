import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import SingleCard from "../single-card/SingleCard";

const ShuffleThreeCards = () => {
  const [threeCards, setThreeCards] = useState([]);

  const shuffleThree = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = [shuffled[0], shuffled[1], shuffled[2]];

    setThreeCards(three);
  };

  const renderThree = () => {
    return threeCards.map((card) => <SingleCard card={card} />);
  };

  return (
    <>
      <button onClick={shuffleThree}> Shuffle Three</button>
      {renderThree()}
    </>
  );
};

export default ShuffleThreeCards;
