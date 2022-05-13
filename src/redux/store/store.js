import {createStore, combineReducers} from "redux";
import {goalsReducer} from "../goalsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../rootReducer";

export const store = createStore(rootReducer, composeWithDevTools());