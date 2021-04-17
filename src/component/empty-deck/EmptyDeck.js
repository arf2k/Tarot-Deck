import React from "react";
import "../../styles/EmptyDeck.styles.scss";

const EmptyDeck = () => {
  return (
    <div className="empty-deck-container">
      <div className="empty-card"></div>
      <div className="empty-card"></div>
      <div className="empty-card"></div>
    </div>
  );
};

export default EmptyDeck;
