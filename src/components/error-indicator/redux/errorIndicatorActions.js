

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

export const closeErrorIndicatorAction = () => {
    return {
        type: "CLOSE_ERROR_INDICATOR_ACTION"
    };
};