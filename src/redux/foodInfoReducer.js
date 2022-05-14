const defaultState = {
  foodInfo: []
}

export const foodInfoReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      return ({...state, foodInfo: [...state.foodInfo, action.payload]})
    case "DELETE_FOOD":
      return ({...state, foodInfo: [...state.foodInfo.filter(item => item.DateID !== action.payload)]})
    case "GET_FOOD":
      return ({...state, foodInfo: action.payload})
    default:
      return state
  }
}