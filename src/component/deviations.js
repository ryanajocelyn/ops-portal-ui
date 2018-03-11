import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header/header';
import LeftNavBar from './header/leftNavBar';
import LeftNavSearch from './header/leftNavSearch';
import DeviationTable from './associate/DeviationTable';
import DeviationSearch from './associate/DeviationSearch';
import { actions } from '../action/associateActions';

class Deviations extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.actions.fetchDeviations();
  }

  render() {
    const { deviations } = this.props;

    return (
        <div id="page-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Clarity Vs FG Deviations</h1>

                <DeviationSearch />

                <DeviationTable deviations= { deviations } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Deviations);
