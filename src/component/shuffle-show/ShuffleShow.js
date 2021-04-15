import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import ShuffleOneCard from "../shuffle-one/ShuffleOneCard";
import "../../styles/ShuffleShow.styles.scss";

const ShuffleShow = () => {
  const [card, setCard] = useState("");

  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    setCard(card);
  };

  const [threeCards, setThreeCards] = useState([]);

  const shuffleThree = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = [shuffled[0], shuffled[1], shuffled[2]];

    setThreeCards(three);
  };

  return (
    <>
      <div className="button-div">
        <button className="button-one" onClick={showShuffled}>Shuffle One</button>
        <button className="button-two"onClick={shuffleThree}>Shuffle Three</button>
      </div>
      <div className="shufflers">
      <div className="shuffle-one-container">
        <ShuffleOneCard card={card} />
      </div>

      <div className="shuffle-three-container">
        <ShuffleThreeCards threeCards={threeCards} />
      </div>
      </div>
    </>
  );
};

export default ShuffleShow;
