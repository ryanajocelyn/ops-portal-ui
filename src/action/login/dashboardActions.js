import { fetchAllAccounts } from '../../service/associateService';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';

export const actions = {
    fetchAllAccounts1111: (loginState) => {
        return {
            type: `${FETCH_ACCOUNTS}`,
            payload: {
              promise: fetchAllAccounts(loginState)
            }
        };a
    }
};
