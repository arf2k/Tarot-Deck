import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import ShuffleOneCard from "../shuffle-one/ShuffleOneCard";
import "../../styles/ShuffleShow.styles.scss";
import EmptyDeck from "../empty-deck/EmptyDeck";

const ShuffleShow = () => {
  const [card, setCard] = useState("");
  const [threeCards, setThreeCards] = useState([]);
  const [show, setShow] = useState(false);

  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    setCard(card);
    setShow(true);
  };

  const shuffleThree = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = [shuffled[0], shuffled[1], shuffled[2]];
    setThreeCards(three);
    setShow(true);
  };

  return (
    <>
      <div className="button-div">
        <button className="button-one" onClick={showShuffled}>
          Shuffle One
        </button>
        <button className="button-two" onClick={shuffleThree}>
          Shuffle Three
        </button>
      </div>
      <div className="shufflers">
        {!show ? <EmptyDeck /> : null}
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
