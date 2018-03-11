import { fetchAssociates,
          fetchClarityFgDeviations,
          fetchAllAccounts,
          fetchHolidays, insertHoliday, fetchUBRDetails } from '../service/associateService';

export const FETCH_ASSOCIATES = 'FETCH_ASSOCIATES';
export const FETCH_DEVIATIONS = 'FETCH_DEVIATIONS';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const INSERT_HOLIDAY = 'INSERT_HOLIDAY';
export const FETCH_HOLIDAYS = 'FETCH_HOLIDAYS';
export const FETCH_UBR = 'FETCH_UBR';

export const actions = {
    fetchAssociates: (loginState) => {
        return {
            type: `${FETCH_ASSOCIATES}`,
            payload: {
              promise: fetchAssociates(loginState)
            }
        };
    },

    fetchDeviations: (loginState) => {
        return {
            type: `${FETCH_DEVIATIONS}`,
            payload: {
              promise: fetchClarityFgDeviations(loginState)
            }
        };
    },

    fetchAllAccounts: (loginState) => {
        return {
            type: `${FETCH_ACCOUNTS}`,
            payload: {
              promise: fetchAllAccounts(loginState)
            }
        };
    },

    insertHoliday: (holiday) => {
        return {
            type: `${INSERT_HOLIDAY}`,
            payload: {
              promise: insertHoliday(holiday)
            }
        };
    },

    fetchHolidays: (holiday) => {
        return {
            type: `${FETCH_HOLIDAYS}`,
            payload: {
              promise: fetchHolidays(holiday)
            }
        };
    },

    fetchUBRDetails: (month) => {
        return {
            type: `${FETCH_UBR}`,
            payload: {
              promise: fetchUBRDetails(month)
            }
        };
    }
};
