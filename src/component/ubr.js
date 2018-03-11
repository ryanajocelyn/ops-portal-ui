import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header/header';
import LeftNavBar from './header/leftNavBar';
import LeftNavSearch from './header/leftNavSearch';
import UBRTable from './associate/UBRTable';
import { actions } from '../action/associateActions';

class UBR extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      //this.props.actions.fetchAssociates();
  }

  render() {
    const { associates } = this.props;

    return (
          <div id="page-wrapper">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">Unbilled Revenue</h1>

                  <UBRTable />
              </div>
          </div>
          </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators( actions, dispatch)
  };
}

function mapStateToProps (state) {
  const { loginResponse } = state.loginReducer;
  return { loginResponse };
}

export default connect(mapStateToProps, mapDispatchToProps)(UBR);
