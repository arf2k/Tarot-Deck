import React from "react";
import ShuffleOneCard from "../../component/shuffle-one/ShuffleOneCard";

const ReadingsSingle = ({showShuffled}) => {



  return (
     <>
     <h1>Readings Single</h1>
          <button className="button-one" onClick={showShuffled}>
          Shuffle One
        </button>
     <ShuffleOneCard/>
     </>
  )


}

export default ReadingsSingle