import { combineReducers } from "redux";
import shuffleReducer from "./shuffle/shuffleReducer";

const rootReducer = combineReducers({
     shuffle: shuffleReducer
})

export default rootReducer