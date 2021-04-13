import React, { useState } from "react";
import CardInfo from "../../tarot-card-json";
import CardDeck from "../card-deck/CardDeck";
import SingleCard from "../single-card/SingleCard";

const ShuffleOne = () => {
  const [card, setCard] = useState("");
  const [singleShuffledCardImg, setSingleShuffledCardImg] = useState("");


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

  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
     const card = shuffled[0]
     setCard({card})
     console.log("shuffled")
  };

 
  return (
    <>
      <button onClick={showShuffled}>Shuffle Deck</button>
      <h1>Your Shuffled Card:</h1>
      {/* {card} */}
      {card? <SingleCard  card = {card}/> : "Click to Shuffle Deck"}
    </>
  );
};

export default ShuffleOne;
