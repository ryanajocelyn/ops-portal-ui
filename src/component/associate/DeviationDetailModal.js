import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DeviationDetailTable from './DeviationDetailTable';

import { actions } from '../../action/associateActions';

class DeviationDetailModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var associateName = '';
    var deviationDetails = [];
    if (this.props.selectedRow) {
        var { associate } = this.props.selectedRow;

        if (associate) { associateName = associate.associateName };
        deviationDetails = this.props.selectedRow.deviationDetails;
    }

    return (
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Deviation Details for {associateName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Heading</h4>

                <DeviationDetailTable deviationDetails= {deviationDetails} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators( actions, dispatch)
  };
}

function mapStateToProps (state) {
  console.log('deviation model props')
  const { accounts } = state.associateReducer;
  return { accounts };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviationDetailModal);
