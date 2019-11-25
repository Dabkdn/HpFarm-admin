import { TOGGLE_TEMP } from '../actionTypes';

export default function toggleTemp() {
  return dispatch => {
    dispatch({
      type: TOGGLE_TEMP
    });
  };
}