import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { publicActions } from '../../action/header/headerActions';

class Header extends Component {
    render() {
        return (
          <header>
              <Navbar>
                  <Navbar.Header>
                      <Navbar.Brand>
                          <Link to="/">test</Link>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse />
              </Navbar>
          </header>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(publicActions, dispatch) };
}

function mapStateToProps (state) {
  return {
    menu: '',
    user: ''
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
