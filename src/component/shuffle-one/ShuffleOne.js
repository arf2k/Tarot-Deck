import React, {useState} from "react";
import CardInfo from "../../tarot-card-json";

const ShuffleOne = () => {

const [singleShuffledCard, setSingleShuffledCard] = useState("")

const FisherYatesShuffle = (CardInfo) => {
     let currentIndex = CardInfo.length,
     randNum,
     temp;
     while (--currentIndex > 0 ) {
          randNum = Math.floor(Math.random() * (currentIndex + 1));
          temp = CardInfo[randNum];
          CardInfo[randNum] = CardInfo[currentIndex];
          CardInfo[currentIndex] = temp; 
     }
     return CardInfo
}



const showShuffled = () => {
     const  arr = CardInfo
    const shuffled = FisherYatesShuffle(arr)
     setSingleShuffledCard(shuffled[0].name)
}

     return (
          <>
          <button onClick={ showShuffled}>Shuffle Deck</button>
          <h1>Your Shuffled Card:</h1>
 {singleShuffledCard}
          </>

     )

}

export default ShuffleOne