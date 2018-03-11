import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../action/associateActions';

class MarginWorkbook extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div id="page-wrapper">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">Margin Workbook</h1>

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

export default connect(mapStateToProps, mapDispatchToProps)(MarginWorkbook);
