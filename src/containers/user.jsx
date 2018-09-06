import React, { Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectUser } from "../actions";

class User extends Component {

  render() {
    // const props = this.props;
    let name, email
    if (this.props.activeUser) {
      name = this.props.activeUser.name
      email = this.props.activeUser.email
    }

    return(
      <div className="active-user">
        <p>{name}</p>
        <p>{email}</p>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser
  };
}

export default connect(mapStateToProps)(User);

       // <p>{this.props.user.address.street}</p>
       // <p>{this.props.user.address.suite}</p>
       // <p>{this.props.user.address.city}</p>
       // <p>{this.props.user.address.zipcode}</p>
       //  <p>{this.props.user.address.geo.lat}</p>
       //  <p>{this.props.user.address.geo.lng}</p>
       //  <p>{this.props.user.phone}</p>
       //  <p>{this.props.user.website}</p>
       //  <p>{this.props.user.company.name}</p>
       //  <p>{this.props.user.company.catchPhrase}</p>
       //  <p>{this.props.user.company.bs}</p>
