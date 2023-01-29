import store from '../store';
const { dispatch } = store;

export const toggleTheme = (data) => {
  dispatch({
    type: 'TOGGLE_THEME',
    payload: data,
  })
}