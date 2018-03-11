import { FETCH_ACCOUNTS } from '../action/login/dashboardActions';

const initialState = {
    accounts: []
};

export default function dashboardReducer(state = initialState, action) {
  console.log('reducers: ' + action.type);
  switch (action.type) {
    default:
      return state;
  }
}
