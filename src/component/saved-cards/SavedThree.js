import React, { useSelector } from "react"

const SavedThree = ({renderSaved}) => {

     // const saved = useSelector((state) => state.saved)
     // console.log(saved)

     return(<> <h1>Saved Three component</h1> 
          {renderSaved()} </>
          )
}

export default SavedThree