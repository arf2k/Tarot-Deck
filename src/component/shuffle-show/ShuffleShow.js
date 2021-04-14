import React from "react";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import ShuffleOneCard from "../shuffle-one/ShuffleOneCard";
import "../../styles/ShuffleShow.styles.scss"

const ShuffleShow = () => {
  return (
    <>
   <div className="shuffle-one-container">
      <ShuffleOneCard />
      </div>
       <div className="shuffle-three-container">
      <ShuffleThreeCards />
      </div>
    </>
  );
};

export default ShuffleShow;
