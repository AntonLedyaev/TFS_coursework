const defaultState = {
  user: '',
  foodInfo: [],
  description: [],
  title: []
}

export const recipesReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return (action.payload)
    default:
      return state
  }
}