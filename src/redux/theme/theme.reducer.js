// import { INITIAL_STATE } from "../initialStates"
const INITIAL_STATE = {
  isDarkTheme: false,
}

export const themeReducer = (state = INITIAL_STATE.isDarkTheme, action) => {
  switch(action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        isDarkTheme: action.payload
      }}
    
    default: return state;
  }
}
