import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector, useDispatch } from "react-redux";
import { addThree } from "../../redux/shuffle/shuffleActions";
import SavedThree from "../saved-cards/SavedThree"

const ShuffleThreeCards = () => {
  const { shuffle } = useSelector((state) => state.shuffle)
  const cards = shuffle.payload


  const saved = useSelector((state) => state.shuffle.saved)
let nestedArrs = saved.map(nested => nested.map(element => element[0].map(nest => nest)))




let deeperNest = (nestedArrs.map(nest => nest[0]))
let evenDeeper = (deeperNest.map(deep => deep))

const renderSaved = () => {
  if (saved) {
    return (evenDeeper.map(card => <li style={{color: "white"}}>{card.name}</li>))

  }
}



  const dispatch = useDispatch()
  const renderThree = () => {
    if (!cards) {
    return null
  } else {
      return cards[0].map((card) => <SingleCard card={card} />);
    } 
  
  };

  const saveThree = () => {
    const saved = dispatch(addThree([cards]))
 
}



  

  

  return <>{cards? renderThree() : null } 
  {cards? <button onClick={saveThree}>Save?</button> : null}
 <SavedThree renderSaved ={renderSaved}/>
</>
};

export default ShuffleThreeCards;
