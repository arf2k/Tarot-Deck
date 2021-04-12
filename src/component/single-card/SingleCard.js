import React from "react";

const SingleCard = ({ card }) => {
  return (
    <>
      <div className="card-container">
        <h1> {card.name} </h1>
        <div className="card-image">
          <img
            src={process.env.PUBLIC_URL + `${card.img}`}
            style={{ border: "solid", boxShadow: "5px 10px 8px #888888" }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleCard;
