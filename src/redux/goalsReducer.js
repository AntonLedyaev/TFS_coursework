const defaultState = {
  goals: {}
}

export const goalsReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "CHANGE_GOALS":
      return ({...state, goals: action.payload})
    case "GET_GOALS":
      return ({...state, goals: action.payload})
    default:
      return state
  }
}