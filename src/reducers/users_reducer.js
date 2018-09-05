import { SET_USERS } from '../actions';

export default function(state, action) {
   if (state === undefined) {
     return [];
 }

 switch (action.type) {
 case 'SET_USERS':
  return action.payload;
 default:
  return state;
 }
}
