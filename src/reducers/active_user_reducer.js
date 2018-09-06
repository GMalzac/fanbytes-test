import { SET_ACTIVE_USER } from '../actions';

export default function (state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case SET_ACTIVE_USER:
      return action.payload;
    default:
      return state;
  }
}
