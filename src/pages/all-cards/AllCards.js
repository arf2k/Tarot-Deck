import React, { useState, useEffect } from "react";
import CardInfo from "../../tarot-card-json";
import SingleCard from "../../component/single-card/SingleCard";
import "../../styles/AllCards.styles.scss";

const AllCards = () => {
  const [images, setImages] = useState([]);

  const renderCards = () => {
    return CardInfo.map((card) => <SingleCard key={card.name} card={card} />);
  };

  return (
    <>
      <h1>All Cards Page</h1>
      <div className="all-cards-container">{renderCards()}</div>
    </>
  );
};

export default AllCards;
