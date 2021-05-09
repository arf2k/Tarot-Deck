import { combineReducers } from "redux";
import FirebaseReducer from "./firestore/FirebaseReducer";
import shuffleReducer from "./shuffle/shuffleReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
     shuffle: shuffleReducer,
     firebase: FirebaseReducer,
     firestore: firestoreReducer,
})

export default rootReducer