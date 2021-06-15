import React from "react";
import EmptyDeck from "../../component/empty-deck/EmptyDeck";
import ShuffleThreeCards from "../../component/shuffle-three-cards/ShuffleThreeCards";
import {shuffleThrees} from "../../component/shuffle-show/ShuffleShow"

const Homepage = ({currentUser, shuffleThrees}) => {
     
     
     
     
     return (
          <>
          <h1>Homepage</h1>
          {currentUser? <h1>Hi {currentUser.displayName}!!</h1> : null}
          
          <h1>FUN LANDING STUFF</h1>
          {/* <EmptyDeck/> */}
          {shuffleThrees()}

          </>
     )
}

export default Homepage