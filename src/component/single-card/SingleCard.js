import React from "react";
import imageLoader from "../../pages/all-cards/cardImages";





const SingleCard = ({card}) => {

   

return(
     <>
    
     <div className="card-container">
        <h1>  {card.name} </h1>
        <img src={process.env.PUBLIC_URL + `${card.img}`} />
       
       </div>
</>
 )

}


export default SingleCard