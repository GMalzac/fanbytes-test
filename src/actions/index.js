// TODO: add and export your own actions
export function setUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users') // triggers a GET request
   .then(response => response.json())
   .then((data) => {
    type: 'SET_USERS',
    payload: data
   })
   .catch((error) => {
   // Do something when something went wrong
   }
  ;
}
