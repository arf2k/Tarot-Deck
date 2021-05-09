import { combineReducers } from "redux";
import saveDBReducer from "./save/saveDBReducer";
import shuffleReducer from "./shuffle/shuffleReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
     shuffle: shuffleReducer,
     save: saveDBReducer,
     firestore: firestoreReducer,
     auth: firebaseReducer
})

export default rootReducer