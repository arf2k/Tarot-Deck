import React, { useState } from "react";
import SingleCard from "../single-card/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import CardInfo from "../../tarot-card-json";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import { shuffleOne } from "../../redux/shuffle/shuffleActions"; 

const ShuffleOneCard = () => {
 
const [show, setShow] = useState(false);
  

  const dispatch = useDispatch()
    const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    dispatch(shuffleOne(card));
    setShow(true);
  };
  
  const { shuffle } = useSelector((state) => state.shuffle);
  const card  = shuffle.payload

  const renderOne = () => {
    if (card) {
    return <SingleCard card={card} />;
    }
  };


  return (
    <>
    <button className="button-one" onClick={showShuffled}>
    Shuffle One
  </button>
   { shuffle ? renderOne() : null}</>
  )
 
};

export default ShuffleOneCard;
