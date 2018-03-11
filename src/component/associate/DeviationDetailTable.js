import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DeviationDetExpTable from './DeviationDetExpTable';

import { actions } from '../../action/login/dashboardActions';

class DeviationDetailTable extends React.Component {
  constructor(props) {
      super(props);
  }

  enumFormatter(cell, row, enumObject) {
    if (cell) {
        return `Approved`;
    } else {
        return 'Not Approved'
    }
  }

  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return (
      <DeviationDetExpTable data={ row.subDetails } />
    );
  }

  render() {
    var selectRowProp = {
      clickToSelect: false,
      bgColor: "rgb(238, 193, 213)"
    };

    return (
            <div>
                <BootstrapTable
                  data={this.props.deviationDetails}
                  selectRow={selectRowProp}
                  expandableRow={ this.isExpandableRow }
                  expandComponent={ this.expandComponent }
                  striped
                  hover
                  condensed
                  pagination
                  search>
                    <TableHeaderColumn width="15%" dataField="weekStartDateStr" isKey dataAlign="right" dataSort>Week Start Date</TableHeaderColumn>
                    <TableHeaderColumn width="14%" dataField="hoursTotal" dataAlign="center">Clarity Billable</TableHeaderColumn>
                    <TableHeaderColumn width="14%" dataField="clarityUnapproved" dataAlign="center">Un Approved</TableHeaderColumn>
                    <TableHeaderColumn width="14%" dataField="clarityNonBillable" dataAlign="center">Un Paid</TableHeaderColumn>
                    <TableHeaderColumn width="14%" dataField="fieldGlassBillableHours" dataAlign="center">FG Hours</TableHeaderColumn>
                    <TableHeaderColumn width="14%" dataField="clarityApproved" dataAlign="center" dataFormat={ this.enumFormatter }>Clarity Approved</TableHeaderColumn>
                    <TableHeaderColumn width="15%" dataField="fgTerminationDate" dataAlign="center">FG End Date</TableHeaderColumn>
                </BootstrapTable>
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
  const { deviations } = state.associateReducer;
  return { deviations };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviationDetailTable);
