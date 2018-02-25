import { fetchAssociates } from '../service/associateService';

export const FETCH_ASSOCIATES = 'FETCH_ASSOCIATES';

export const actions = {
    fetchAssociates: (loginState) => {
        return {
            type: `${FETCH_ASSOCIATES}`,
            payload: {
              promise: fetchAssociates(loginState)
            }
        };
    }
};
