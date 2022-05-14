const defaultState = {
  user: ""
}

export const userInfoReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return ({...state, user: action.payload})
    default:
      return state
  }
}