import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector, useDispatch } from "react-redux";
import { addThree } from "../../redux/shuffle/shuffleActions";
import SavedThree from "../saved-cards/SavedThree"
import { withRouter } from "react-router";

const ShuffleThreeCards = ({history}) => {
  const { shuffle } = useSelector((state) => state.shuffle)
  const cards = shuffle.payload


  const saved = useSelector((state) => state.shuffle.saved)




  const dispatch = useDispatch()
  const renderThree = () => {
    if (!cards) {
    return null
  } else {
      return cards[0].map((card) => <SingleCard card={card} />);
    } 
  
  };

  const saveThree = () => {
 dispatch(addThree([cards]))
 
}



  

  

  return <>{cards? renderThree() : null } 
  {cards? <button onClick={saveThree}>Save?</button> : null}
 {saved.length > 0 ? <button onClick={() => history.push("/triple")}>See saved</button> : null } 
</>
};

export default withRouter(ShuffleThreeCards);
