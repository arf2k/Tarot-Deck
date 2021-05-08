import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import thunk from "redux-thunk"; 
import { config } from "../component/firebase/Firebase.utils"; 


// const middlewares = [logger, thunk];

export const store = createStore(rootReducer, 
     compose (
     (applyMiddleware(logger, thunk.withExtraArgument({ getFirebase, getFirestore} )))),
     reduxFirestore(config),
     reactReduxFirebase(config)
)

