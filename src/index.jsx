// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import usersReducer from './reducers/users_reducer';
import activeUserReducer from './reducers/active_user_reducer'

// State and reducers
const reducers = combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer
});

const middlewares = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
