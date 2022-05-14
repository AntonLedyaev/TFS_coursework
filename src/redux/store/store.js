import {createStore, combineReducers, applyMiddleware} from "redux";
import {goalsReducer} from "../goalsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../rootReducer";
import thunk from "redux-thunk";
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));