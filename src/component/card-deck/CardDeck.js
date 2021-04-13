import React from "react";
import "../../styles/CardDeck.styles.scss"
import SingleCard from "../single-card/SingleCard";

const CardDeck = ({card}) => {
     console.log(card)
     return (
       
          <div className="deck-container">
               <div className="card">
                    {/* <SingleCard card={card}/> */}
               </div>

          </div>
     )
}

export default CardDeck