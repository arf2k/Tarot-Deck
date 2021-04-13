import React, {useState} from "react";
import "../../styles/CardDeck.styles.scss"
import InfoModal from "../info-modal/InfoModal";


const CardDeck = ({card}) => {


     const [show, setShow] = useState(false);

     const showModal = () => {
       setShow(true);
     };
   
     const onClose = () => {
       setShow(false);
     };

     console.log(card)
     
     
     return (
       
          <div className="deck-container">
               <div className="card">
               <h1> {card.card.name} </h1>
               <div className={"card-img"}>

          <img
            className="card-img"
            alt={card.name}
            src={process.env.PUBLIC_URL + `${card.card.img}`}
            onClick={() => showModal(card.card.name)}
            on
          />


        </div>
      </div>
      <InfoModal card={card} show={show} onClose={onClose} />
               </div>

        
     )
}

export default CardDeck