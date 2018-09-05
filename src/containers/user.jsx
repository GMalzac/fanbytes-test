import React, { Component} from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return(
      <div>
        <p>{this.props.user.id}</p>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.address.street}</p>
        <p>{this.props.user.address.suite}</p>
        <p>{this.props.user.address.city}</p>
        <p>{this.props.user.address.zipcode}</p>
        <p>{this.props.user.address.geo.lat}</p>
        <p>{this.props.user.address.geo.lng}</p>
        <p>{this.props.user.phone}</p>
        <p>{this.props.user.website}</p>
        <p>{this.props.user.company.name}</p>
        <p>{this.props.user.company.catchPhrase}</p>
        <p>{this.props.user.company.bs}</p>
      </div>
    )
  }
}

export default User;
