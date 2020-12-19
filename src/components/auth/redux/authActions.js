
export const loadingAuthPageAction = (bool) => {
    return {
        type: "LOADING_AUTH_PAGE_ACTION",
        payload: bool
    };
};

export const getAuthAction = (user) => {
    return {
        type: "GET_AUTH_ACTION",
        payload: user
    };
};

export const getAuthSaga = (user) => {
    return {
        type: "GET_AUTH_SAGA",
        payload: user
    };
};