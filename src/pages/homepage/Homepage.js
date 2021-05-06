import React from "react";
import EmptyDeck from "../../component/empty-deck/EmptyDeck";

const Homepage = ({currentUser}) => {
     return (
          <>
          <h1>Homepage</h1>
          {currentUser? <h1>Hi {currentUser.displayName}!!</h1> : null}
          
          <h1>FUN LANDING STUFF</h1>
          <EmptyDeck/>
          </>
     )
}

export default Homepage