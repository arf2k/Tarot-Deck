const INITIAL_STATE = {}


const FirebaseReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case "CREATE_SINGLE_ENTRY":
               console.log("created single card entry", action.entry);
               return state;
               case "CREATE_TRIPLE_ENTRY":
                    console.log("created triple entry", action.entry)
                    return state
               case "CREATE_PROJECT_ERROR":
                    console.log("create project error", action.err)
                    return state
                    default: 
                    return state
     }  

}

export default FirebaseReducer