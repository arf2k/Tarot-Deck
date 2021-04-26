import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { showShuffled } from "../shuffle-show/ShuffleShow";

const ShuffleOneCard = () => {
 
  // const { shuffle } = useSelector((state) => state.shuffle);
  // const card  = shuffle.payload

  // const renderOne = () => {
  //   if (card) {
  //   return <SingleCard card={card} />;
  //   }
  // };


  // return (
  //   <>
  //   <button className="button-one" onClick={showShuffled}>
  //   Shuffle One
  // </button>
  //  { shuffle ? renderOne() : null}</>
  // )
 
};

export default ShuffleOneCard;
