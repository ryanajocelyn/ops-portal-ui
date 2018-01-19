import { doLogin } from '../../service/login/loginService';

export const DO_LOGIN = 'DO_LOGIN';

export const actions = {
    doLogin: (loginState) => {
        console.log('login action do login');
        return {
            type: `${DO_LOGIN}`,
            payload: {
              promise: doLogin(loginState)
            }
        };
    }
};
