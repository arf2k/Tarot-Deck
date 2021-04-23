import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector } from "react-redux";

const ShuffleOneCard = () => {
 
  const { shuffle } = useSelector((state) => state.shuffle);
  const card  = shuffle.payload

  const renderOne = () => {
    if (card) {
    return <SingleCard card={card} />;
    }
  };


  return <>{shuffle ? renderOne() : null}</>;
 
};

export default ShuffleOneCard;
