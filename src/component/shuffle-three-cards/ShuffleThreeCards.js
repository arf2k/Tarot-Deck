import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector } from "react-redux";

const ShuffleThreeCards = ({}) => {
  const { shuffle } = useSelector((state) => state.shuffle);
  const cards = shuffle.payload;

  const renderThree = () => {
    if (cards) {
      return cards[0].map((card) => <SingleCard card={card} />);
    }
  };

  return <>{renderThree()}</>;
};

export default ShuffleThreeCards;
