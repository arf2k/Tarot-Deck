import { combineReducers } from "redux";
import FirestoreReducer from "./firestore/FirestoreReducer";
import shuffleReducer from "./shuffle/shuffleReducer";

const rootReducer = combineReducers({
     shuffle: shuffleReducer,
     firestore: FirestoreReducer
})

export default rootReducer