import React, { useState } from "react";
import CardInfo from "../../tarot-card-json";
import SingleCard from "../single-card/SingleCard";

const ShuffleShow = () => {
  const [card, setCard] = useState("");
  const [threeCards, setThreeCards] = useState([]);

  const FisherYatesShuffle = (CardInfo) => {
    let currentIndex = CardInfo.length,
      randNum,
      temp;
    while (--currentIndex > 0) {
      randNum = Math.floor(Math.random() * (currentIndex + 1));
      temp = CardInfo[randNum];
      CardInfo[randNum] = CardInfo[currentIndex];
      CardInfo[currentIndex] = temp;
    }
    return CardInfo;
  };

  const shuffleThree = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = Array(shuffled[0], shuffled[1], shuffled[2]);

    setThreeCards(three);
  };

  const renderThree = () => {
    return threeCards.map((card) => <SingleCard card={card} />);
  };

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
      <button onClick={shuffleThree}> Shuffle Three</button>
      {renderThree()}
      <button onClick={showShuffled}>Shuffle One</button>
      {card ? renderOne() : null}
    </>
  );
};

export default ShuffleShow;
