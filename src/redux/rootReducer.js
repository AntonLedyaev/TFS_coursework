import {goalsReducer} from "./goalsReducer";
import {weightReducer} from "./weightReducer";
import {combineReducers} from "redux";
import {foodInfoReducer} from "./foodInfoReducer";

export const rootReducer = combineReducers({
  goals: goalsReducer,
  weight: weightReducer,
  foodInfo: foodInfoReducer
})

