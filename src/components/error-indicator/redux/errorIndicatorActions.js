

export const closeErrorIndicatorAction = () => {
    return {
        type: "CLOSE_ERROR_INDICATOR_ACTION"
    };
};

export const getErrorAuthAction = () => {
    return {
        type: "GET_ERROR_AUTH_ACTION"
    };
};

export const getErrorAuthSaga = (error) => {
    return {
        type: "GET_ERROR_AUTH_SAGA",
        payload: error
    };
};

export const getErrorRegisterAction = (error) => {
    return {
        type: "GET_ERROR_REGISTER_ACTION",
        payload: error
    };
};

export const getErrorRegisterSaga = (error) => {
    return {
        type: "GET_ERROR_REGISTER_SAGA",
        payload: error
    };
};