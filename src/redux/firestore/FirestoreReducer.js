const INITIAL_STATE = {}


const FirestoreReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case "CREATE_ENTRY":
               console.log("created entry", action.entry);
               return state;
               case "CREATE_PROJECT_ERROR":
                    console.log("create project error", action.err)
                    return state
                    default: 
                    return state
     }  

}

export default FirestoreReducer