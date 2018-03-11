import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from 'react-dazzle';

import Login from './Login';
import NotificationTable from '../chart/NotificationTable';
import NBLStatWidget from '../chart/NBLStatWidget';
//import BarChart from '../chart/barchart';
import { actions } from '../../action/login/dashboardActions';

class OpsDashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      widgets: {
        NotificationWidget: {
          type: NotificationTable,
          title: 'Notifications',
        }, NBLStatWidget: {
          type: NBLStatWidget,
          title: 'Non-Billable',
        }
      },
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-3',
            widgets: [{key: 'NBLStatWidget'}],
          }, {
            className: 'col-md-3',
            widgets: [{key: 'NBLStatWidget'}],
          }, {
            className: 'col-md-3',
            widgets: [{key: 'NBLStatWidget'}],
          }, {
            className: 'col-md-3',
            widgets: [{key: 'NBLStatWidget'}],
          }],
        }, {
          columns: [{
            className: 'col-md-8',
            widgets: [{key: 'NotificationWidget'}],
          }, {
            className: 'col-md-4',
            widgets: [{key: 'NotificationWidget'}],
          }],
        }],
      }
    };
  }

  render() {
    return (
        <div id="page-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>

                <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(OpsDashboard);
