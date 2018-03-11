import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/login/dashboardActions';
import DeviationDetailModal from './DeviationDetailModal';

class DeviationTable extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          showDetails: false,
          selectedRow: null,
          deviations: []
      };

      this.handleRowSelect = this.handleRowSelect.bind(this);
      this.handleDeviations = this.handleDeviations.bind(this);
  }

  handleRowSelect(row) {
      console.log('Row Selected');
      this.setState({
          showDetails: true,
          selectedRow: row
      });
  }

  componentWillMount() {
      this.setState ({deviations: this.props.deviations });
  }

  handleDeviations() {
      if (this.state.deviations) {
        const deviationsTmp =
            this.state.deviations.filter(d => d.hasDeviation);

        console.log(deviationsTmp.length);
        this.setState({deviations: deviationsTmp });
      }
  }

  render() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    const detailsClose = () => this.setState({showDetails: false});

    var options = {
        onRowClick: this.handleRowSelect
    };

    return (
            <div>
                <Button type="submit" bsStyle="primary" onClick={this.handleDeviations}>Has Deviations</Button>

                <br />
                <BootstrapTable
                  data={this.state.deviations}
                  options={options}
                  striped
                  hover
                  condensed
                  pagination
                  insertRow
                  deleteRow
                  search>
                    <TableHeaderColumn dataField="associateId" isKey dataAlign="right" dataSort width="10%">Associate Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="associateName" dataSort width="30%">Associate Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="clarityBillableHours" dataAlign="center" width="6%">Clarity Billable Hours</TableHeaderColumn>
                    <TableHeaderColumn dataField="clarityUnpaidHours" dataAlign="center" width="6%">Clarity Non-Billable Hours</TableHeaderColumn>
                    <TableHeaderColumn dataField="fgBillableHours" dataAlign="center" width="7%">FG Billable Hours</TableHeaderColumn>
                    <TableHeaderColumn dataField="minimumBillableHours" dataAlign="center" width="7%">Min Billable Hours</TableHeaderColumn>
                    <TableHeaderColumn dataField="fgClarityDeviation" dataAlign="center" width="7%">FG-Clarity Deviation</TableHeaderColumn>
                    <TableHeaderColumn dataField="fgMinBillableDeviation" dataAlign="center" width="7%">FG-Min Billable Deviation</TableHeaderColumn>
                    <TableHeaderColumn dataField="deviationReason" dataAlign="center" width="20%">Deviation Reason</TableHeaderColumn>
                </BootstrapTable>

                <DeviationDetailModal show={this.state.showDetails} onHide={detailsClose}
                          selectedRow={this.state.selectedRow}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeviationTable);
