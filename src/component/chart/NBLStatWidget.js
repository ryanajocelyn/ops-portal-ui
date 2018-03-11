import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StatWidget from './StatWidget';

import { actions } from '../../action/associateActions';

class NBLStatWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div>
                <StatWidget
                    style="panel-primary"
                    icon="fa fa-comments fa-5x"
                    count="26"
                    headerText="New Comments!"
                    footerText="View Details"
                    linkTo="/"
                    />
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
  const { ubrAssociates } = state.associateReducer;
  return { ubrAssociates };
}

export default connect(mapStateToProps, mapDispatchToProps)(NBLStatWidget);
