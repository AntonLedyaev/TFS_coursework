const defaultState = {
  foodInfo: [{
    Energy: 0,
    Carbs: 0,
    Proteins: 0,
    Fats: 0,
    DateID: Date.now(),
    Type: '',
  }, {
    Energy: 0,
    Carbs: 0,
    Proteins: 0,
    Fats: 0,
    DateID: Date.now(),
    Type: '',
  }, {
    Energy: 0,
    Carbs: 0,
    Proteins: 0,
    Fats: 0,
    DateID: Date.now(),
    Type: '',
  }, {
    Energy: 0,
    Carbs: 0,
    Proteins: 0,
    Fats: 0,
    DateID: 1652242433,
    Type: '',
  }]
}

export const foodInfoReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      return ({...state, foodInfo: [...state.foodInfo, action.payload]})
    case "DELETE_FOOD":
      return ({...state, foodInfo: [...state.foodInfo.filter(item => item.DateID !== action.payload)]})
    default:
      return state
  }
}