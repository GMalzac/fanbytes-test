import React, { Component } from 'react';
import UserList from '../containers/user_list';
import User from '../containers/user';

const App = () => {
  return (
    <div className="app">
      <UserList />
      <User />
    </div>
  );
};

export default App;
