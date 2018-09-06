import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../containers/user';

import { setUsers } from '../actions';
import { setActiveUser } from '../actions';

class UserList extends Component {

  componentWillMount()  {
    this.props.setUsers();
  }

  render() {
    let containerClasses = "user-list col-sm-4"
    if (this.props.user === this.props.activeUser) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses}>
        {this.props.users.map((user) => <p key={user.id} onClick={() => this.props.setActiveUser(user)}>{user.name}</p> )}
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  users: state.users,
  activeUser: state.user
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setUsers, setActiveUser },
   dispatch
   );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
