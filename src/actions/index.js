// TODO: add and export your own actions
export const SET_USERS = 'SET_USERS';

export function setUsers() {
  const promise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

  return {
    type: 'SET_USERS',
    payload: promise
  };
}
