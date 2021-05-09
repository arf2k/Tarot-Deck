import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector, useDispatch } from "react-redux";
import { addThree } from "../../redux/shuffle/shuffleActions";
import { withRouter } from "react-router";
import EmptyDeck from "../empty-deck/EmptyDeck";
import MyButton from "../my-button/MyButton";
import { createThreeCardFirestoreEntry } from "../../redux/save/saveDBActions"

const ShuffleThreeCards = ({ show, history }) => {

  const { shuffle } = useSelector((state) => state.shuffle);
  const cards = shuffle.payload;

  const saved = useSelector((state) => state.shuffle.saved);
  

  const dispatch = useDispatch();
  const renderThree = () => {
    if (!show) {
      return null;
    } else {
      return cards[0].map((card) => <SingleCard card={card} />);
    }
  };

  // const saveThree = () => {
  //   dispatch(addThree([cards]));
  // };


  const createTripleEntry = () => {
    dispatch(createThreeCardFirestoreEntry(cards))
  }


  return (
    <>
      {/* {cards ? renderThree() : null} */}
      {shuffle ? renderThree() : <EmptyDeck/>}
      {cards ? <button onClick={createTripleEntry}>Save?</button> : null}

      {/* {cards ? <button onClick={saveThree}>Save?</button> : null} */}
      {saved.length > 0 ? (
        <button onClick={() => history.push("/triple")}>See saved</button>
      ) : null}
    </>
  );
};

export default withRouter(ShuffleThreeCards);
