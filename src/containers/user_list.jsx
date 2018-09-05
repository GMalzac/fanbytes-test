import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../containers/user';

import { setUsers } from '../actions';

class UserList extends Component {

  componentWillMount()  {
    this.props.setUsers();
  }

  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          return <User key={user.id} user={user} tabIndex={index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  users: state.users
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setUsers: setUsers },
 dispatch
 );
}

export default connect(mapDispatchToProps, mapDispatchToProps)(UserList);
