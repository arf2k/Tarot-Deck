import React from "react";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import ShuffleOneCard from "../shuffle-one/ShuffleOneCard";

const ShuffleShow = () => {
  return (
    <>
      <ShuffleOneCard />
      <ShuffleThreeCards />
    </>
  );
};

export default ShuffleShow;
