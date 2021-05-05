import React from "react";

const Homepage = ({currentUser}) => {
     return (
          <>
          <h1>Homepage</h1>
          {/* {console.log(currentUser)} */}
          {currentUser? <h1>Hi {currentUser.displayName}!!</h1> : null}
          
          <h1>FUN LANDING STUFF</h1>
          </>
     )
}

export default Homepage