import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/login/dashboardActions';

class DeviationDetExpTable extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    var selectRowProp = {
      clickToSelect: false,
      bgColor: "rgb(238, 193, 213)"
    };

    return (
            <div>
                <BootstrapTable
                  data={this.props.data}
                  selectRow={selectRowProp}
                  striped
                  hover
                  condensed>
                    <TableHeaderColumn width="15%" dataField="weekStartDateStr" isKey dataAlign="right" dataSort>Week Start Date</TableHeaderColumn>
                    <TableHeaderColumn width="50%" dataField="esiProjectTitle" dataAlign="center">Project Title</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursSun" dataAlign="center">Sun</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursMon" dataAlign="center">Mon</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursTue" dataAlign="center">Tue</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursWed" dataAlign="center">Wed</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursThu" dataAlign="center">Thu</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursFri" dataAlign="center">Fri</TableHeaderColumn>
                    <TableHeaderColumn width="5%" dataField="hoursSat" dataAlign="center">Sat</TableHeaderColumn>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeviationDetExpTable);
