const INITIAL_STATE = {}


const FirestoreReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case "CREATE_ENTRY":
               console.log("created entry", action.entry)
     }  
     return state
}

export default FirestoreReducer