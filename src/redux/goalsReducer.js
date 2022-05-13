const defaultState = {
  goals: {
    calories: 2500,
    fats: 80,
    carbs: 250,
    proteins: 120
  }
}

export const goalsReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "CHANGE_GOALS":
      return ({goals: action.payload})
    default:
      return state
  }
}