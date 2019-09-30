export default function commonReducer(state = initialState, action) {
  switch (action.type) {
          case "SET_CURRENT_USER":
          return {
            ...state,
            isUsername: !state.isUsername,
            currentUsername: action.payload
      }
      default:
        return state
  }
}

