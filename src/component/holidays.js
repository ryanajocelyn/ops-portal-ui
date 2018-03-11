import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header/header';
import HolidaysTable from './associate/HolidaysTable';
import { actions } from '../action/associateActions';

class Holidays extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  componentDidMount() {
      this.props.actions.fetchHolidays();
  }

  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
  }

  render() {
    const { holidays } = this.props;

    return (
          <div id="page-wrapper">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">Holidays</h1>

                  <HolidaysTable holidays= { holidays } />
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
  const { holidays } = state.associateReducer;
  return { holidays };
}

export default connect(mapStateToProps, mapDispatchToProps)(Holidays);
