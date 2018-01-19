import { doLogin } from '../../service/login/loginService';

export const DO_LOGIN = 'DO_LOGIN';

export const actions = {
    doLogin: (loginState) => {
        return {
            type: `${DO_LOGIN}`,
            payload: {
              promise: doLogin(loginState)
            }
        };
    }
};
