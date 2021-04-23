import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import ShuffleOneCard from "../shuffle-one/ShuffleOneCard";
import "../../styles/ShuffleShow.styles.scss";
import EmptyDeck from "../empty-deck/EmptyDeck";
import { useDispatch } from "react-redux";
import { shuffleOne, shuffleThree } from "../../redux/shuffle/shuffleActions";
import { withRouter } from "react-router-dom";


const ShuffleShow = ({history}) => {
  // const [card, setCard] = useState("");
  // const [threeCards, setThreeCards] = useState([]);
  const [show, setShow] = useState(false);

// const [oneShow, setOneShow ] = useState(false)
// const [threeShow, setThreeShow] = useState(false)

  const dispatch = useDispatch();

  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    // setCard(card);
    dispatch(shuffleOne(card));
    setShow(true);
    // setOneShow(true)
    // setThreeShow(false)
  };

  const shuffleThrees = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = [shuffled[0], shuffled[1], shuffled[2]];
    // setThreeCards(three);
    dispatch(shuffleThree([three]))
    setShow(true);
    // setThreeShow(true)
    // setOneShow(false)
  };



  return (
    <>
      <div className="button-div">
        {/* <button className="button-one" onClick={showShuffled}>
          Shuffle One
        </button> */}
          <button className="button-one" onClick={ 
        () => showShuffled,
        () => history.push("/single")}>
          Shuffle One
        </button>
        <button className="button-two" onClick={shuffleThrees}>
          Shuffle Three
        </button>
        {/* <button className="button-one" onClick={() => history.push("/triple")}>
          Shuffle Three
        </button> */}
      </div>
      <div className="shufflers">
        {!show ? <EmptyDeck /> : null}
        <div className="shuffle-one-container">
          <ShuffleOneCard showShuffled={showShuffled}/>
    
        </div>
        <div className="shuffle-three-container">
        <ShuffleThreeCards />

        </div>
      </div>
    </>
  );
};

export default withRouter(ShuffleShow);
