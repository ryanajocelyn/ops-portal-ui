import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { actions } from '../../action/header/headerActions';

class Header extends Component {
    render() {
        return (
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/">Operations Portal</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mapStateToProps (state) {
  return {
    menu: '',
    user: ''
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
