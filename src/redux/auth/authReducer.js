const INITIAL_STATE = {
     authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case "LOGIN_SUCCESS":
               console.log("login success")
               return {
                    ...state,
                    authError: null
               }
          case "LOGIN_FAILURE":
               console.log("login failure")
               return {
               ...state,
               authError: "Login failed"
               }
               default: 
               return state
     }

     return state
}

export default authReducer