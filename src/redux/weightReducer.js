const defaultState = {
  weight: {
    weightHistory: [],
    wantedWeight: 0,
    initialWeight: 0
  }
}

export const weightReducer = (state= defaultState, action) => {
  switch (action.type) {
    case "ADD_WEIGHT":
      return ({...state, weight: {...state.weight, weightHistory: [...state.weight.weightHistory, action.payload] }})
    case "DELETE_WEIGHT":
      return ({...state, weight: {...state.weight, weightHistory: [...state.weight.weightHistory.filter(weight => weight.id!== action.payload)]}})
    case "CHANGE_WANTED_WEIGHT":
      return ({...state, weight: {...state.weight, wantedWeight: action.payload}})
    case "CHANGE_INITIAL_WEIGHT":
      return ({...state, weight: {...state.weight, initialWeight: action.payload}})
    case "GET_WEIGHT": {
      return ({...state, weight: action.payload})
    }
    default:
      return state
  }
}