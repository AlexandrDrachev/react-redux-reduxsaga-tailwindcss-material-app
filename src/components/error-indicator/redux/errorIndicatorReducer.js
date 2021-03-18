
export const initialErrorIndicatorState = {
    error: false,
    messageError: null,
    titleError: null,
};

export const errorIndicatorReducer = (state, action) => {
    switch (action.type) {

        case 'CLOSE_ERROR_INDICATOR_ACTION':
            return {
                error: false,
                messageError: null,
                titleError: null,
            };

        case 'GET_ERROR_AUTH_SAGA':
            return action.payload;

        case 'GET_ERROR_REGISTER_SAGA':
            return action.payload;

        default:
            return state;
    }
};
