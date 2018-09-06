export const SET_USERS = 'SET_USERS';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export function setUsers() {
  const promise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

  return {
    type: 'SET_USERS',
    payload: promise
  };
}

export function setActiveUser(user) {
  return {
    type: SET_ACTIVE_USER,
    payload: user
  }
}
