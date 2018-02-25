const SCOPE = 'main/header';
export const FETCH_NAVIGATION_MENU = `${SCOPE}FETCH_NAVIGATION_MENU`;

export const actions = {
    fetchNavigationMenu: () => {
        return {
            type: FETCH_NAVIGATION_MENU,
            payload: {
                promise: ''
            }
        };
    }
};
