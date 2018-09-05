import React, { Component } from 'react';

import UserList from '../containers/user_list';


// class App extends Component {
//   render () {
//     return (
//       <div className="row">
//         <UserList />
//       </div>
//     );
//   }
// }

// export default App;

// From boiler plate

const App = () => {
  return (
    <div className="root">
      <UserList />
    </div>
  );
};

export default App;
