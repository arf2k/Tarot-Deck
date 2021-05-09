import React, {useState} from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/SavedThree.styles.scss"


const SavedOne = ({state}) => {

     const id = props.match.params.id
     const saved = useSelector((state => state.firestore.ordered.single_shuffle))

     const [showSavedCards, setShowSavedCards] = useState(false)


     // const renderSavedOne = () => {
     //      if(saved){
     //           return saved.map(card => <SingleCard card={card}/>)
     //      }
        
     // }
     

//   const showSaved = (e) => {
//      setShowSavedCards(true)
//      renderSavedOne()
//    }






return(
     <>
        {/* {saved ? (
        <button onClick={() => showSaved}>See saved</button>
      ) : null} */}
     <div className="saved-container">{renderSavedOne()}</div>
   </>
)

}

export default firestoreConnect([
     { collection: "single_shuffle" }
])(SavedOne)