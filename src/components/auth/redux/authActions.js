
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

export const getRegisterAction = (newUser) => {
    return {
        type: "GET_REGISTER_ACTION",
        payload: newUser
    };
};

export const getRegisterSaga = (newUser) => {
    return {
        type: "GET_REGISTER_SAGA",
        payload: newUser
    };
};