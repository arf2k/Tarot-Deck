import React from "react";
import "../../styles/InfoModal.styles.scss";

const InfoModal = ({ card, show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="bg" onClick={onClose}>
      <div className="modal-content">
        <h1> {card.name} </h1>
        <p> card number : {card.number}</p>
        <p>arcana: {card.arcana}</p>
        <p>suit: {card.suit}</p>
        <ul>
          {" "}
          Fortune Telling :<li>{card.fortune_telling[0]}</li>
          <li>{card.fortune_telling[1]}</li>
          <li>{card.fortune_telling[2]}</li>
        </ul>
        <ul>
          {" "}
          keywords:
          <li>{card.keywords[0]}</li>
          <li>{card.keywords[1]}</li>
          <li>{card.keywords[2]}</li>
        </ul>
        <button onClick={onClose}>Close </button>
      </div>
    </div>
    // </div>
  );
};

export default InfoModal;
