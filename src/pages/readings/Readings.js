import React from "react";
import ShuffleShow from "../../component/shuffle-show/ShuffleShow";
import "../../styles/Readings.styles.scss"

const Readings = () => {
     return (
          <>
          <h1>Readings page </h1>
          <div className="reading-page-container">
          <ShuffleShow/>
          </div>
          </>
     )
}

export default Readings