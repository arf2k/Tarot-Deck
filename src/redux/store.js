import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk"; 


// const middlewares = [logger, thunk];

export const store = createStore(rootReducer, (applyMiddleware(logger, thunk)));

