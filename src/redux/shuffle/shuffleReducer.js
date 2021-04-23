import { shuffleOne, shuffleThree } from "./shuffleActions";
import ShuffleActionTypes from "./shuffleTypes";

const INITIAL_STATE = {
     shuffle : []
}

const shuffleReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
          case ShuffleActionTypes.SHUFFLE_ONE:
               return {
                    ...state,
                    shuffle: shuffleOne(action.payload) 
                    }
               case ShuffleActionTypes.SHUFFLE_THREE: 
               return {
                    ...state,
                   shuffle: shuffleThree(action.payload)
               }
               default:
                    return state;
     }
}


export default shuffleReducer;