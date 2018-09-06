import React, { Component } from 'react';
import UserList from '../containers/user_list';
import User from '../containers/user';


const App = () => {
  return (
    <div className="container">
      <div className="col"><UserList /></div>
      <div className="col"><User /></div>
    </div>
  );
};

export default App;
