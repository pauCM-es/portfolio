import store from '../store';
const { dispatch } = store;

export const toggleTheme = (data) => {
  dispatch({
    type: 'TOGGLE_THEME',
    payload: data,
  })
}
export const changeBgColors = (lightColor,darkColor) => {
  dispatch({
    type: 'CHANGE_COLOR',
    payload: lightColor,
    payload2: darkColor
  })
}