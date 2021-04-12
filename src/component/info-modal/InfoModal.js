import React from "react";
import "../../styles/InfoModal.styles.scss"

const InfoModal = ({card}) => {
return (
     <div className="modal-container">
     <div className="modal-content">
    <h1> {card.name} </h1>
    <p> card number : {card.number}</p>
    <p>arcana: {card.arcana}</p>
<p>suit: {card.suit}</p>
<ul> Fortune Telling :
     
     <l1>{card.fortune_telling[0]}</l1>

     <l1>{card.fortune_telling[1]}</l1>

     <l1>{card.fortune_telling[2]}</l1>
</ul>
<ul> keywords: 
<l1>{card.keywords[0]}</l1>

<l1>{card.keywords[1]}</l1>

<l1>{card.keywords[2]}</l1>

</ul>
     </div>
     </div>

)

}

export default InfoModal