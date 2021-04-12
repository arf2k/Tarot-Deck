import React, {useState} from "react";
import "../../styles/SingleCard.styles.scss"
import InfoModal from "../info-modal/InfoModal";

const SingleCard = ({ card }) => {
  
  const [active, setActive] = useState(false)

  const toggle = () => {

   setActive(!active)
   console.log( card.name, "active")
  }
  
  // const openModal = () => {
  //   console.log("opening modal for", card.name)
    
  // }

  return (
    <>
      <div className="card-container">
        <h1> {card.name} </h1>
        <div className={"card-img"}>
          <img className="card-img"
            alt={card.name}
            src={process.env.PUBLIC_URL + `${card.img}`}
            onClick={ () => toggle(card.name)  }
         
          />
           
        </div>
      </div>
      {active ? <InfoModal card={card}/> : null}
    </>
  );
};

export default SingleCard;
