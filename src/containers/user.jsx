import React, { Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectUser } from "../actions";

class User extends Component {

  render() {
    // const props = this.props;
    let name, email, address_street, address_suite, address_city, address_zip, address_lat, address_long, phone, website, company_name, company_cp, company_bs
    if (this.props.activeUser) {
      name = this.props.activeUser.name
      email = this.props.activeUser.email
      address_street = this.props.activeUser.address.street
      address_suite = this.props.activeUser.address.suite
      address_city = this.props.activeUser.address.city
      address_zip = this.props.activeUser.address.zipcode
      address_lat = this.props.activeUser.address.geo.lat
      address_long = this.props.activeUser.address.geo.lng
      phone = this.props.activeUser.phone
      website = this.props.activeUser.website
      company_name = this.props.activeUser.company.name
      company_cp = this.props.activeUser.company.catchPhrase
      company_bs = this.props.activeUser.company.bs
    }

    return(
      <div className="active-user col-xs-12">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2><i className="fas fa-user"></i> ID</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <h2><i className="fas fa-building"></i> Company</h2>
            <p>Name: {company_name}</p>
            <p>Catchphrase: {company_cp}</p>
            <p>BS: {company_bs}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2><i className="fas fa-map-marker-alt"></i> Address</h2>
            <p>Street: {address_street}</p>
            <p>Suite: {address_suite}</p>
            <p>City: {address_city}</p>
            <p>ZIP: {address_zip}</p>
            <p>Lat: {address_lat}</p>
            <p>Long: {address_long}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
          </div>
          <div className="col-xs-12 col-sm-6">
          </div>

        </div>
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
