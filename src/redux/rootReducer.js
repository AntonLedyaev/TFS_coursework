import {goalsReducer} from "./goalsReducer";
import {weightReducer} from "./weightReducer";
import {combineReducers} from "redux";
import {foodInfoReducer} from "./foodInfoReducer";
import {userInfoReducer} from "./useInfoReducer";
import {recipesReducer} from "./recipesReducer";

export const rootReducer = combineReducers({
  goals: goalsReducer,
  weight: weightReducer,
  foodInfo: foodInfoReducer,
  user: userInfoReducer,
  recipes: recipesReducer
})

