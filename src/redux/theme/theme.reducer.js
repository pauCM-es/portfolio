// import { INITIAL_STATE } from "../initialStates"
const INITIAL_STATE = {
  isDarkTheme: false,
  lightPrimaryColor: '#85aeb1',
  darkPrimaryColor: '#81d3d8'
}

export const themeReducer = (state = INITIAL_STATE, action) => {
  const check = {
    TOGGLE_THEME: {
      ...state,
      isDarkTheme: action.payload
    },
    CHANGE_COLOR: {
      ...state,
      lightPrimaryColor: action.payload,
      darkPrimaryColor: action.payload2 
    }
  }

  return check[action.type] || {...state}

}
