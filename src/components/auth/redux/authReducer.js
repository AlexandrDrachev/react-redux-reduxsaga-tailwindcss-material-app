

export const initialAuthState = {
    loading: false,
    user: null,
    userRole: null
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOADING_AUTH_PAGE_ACTION":
            return {
                ...state,
                loading: action.payload
            }
        case "GET_AUTH_SAGA":
            return {
                ...state,
                user: action.payload,
                userRole: action.payload.role
            };
        case "GET_REGISTER_SAGA":
            return {
                ...state,
                user: action.payload,
                userRole: action.payload.role
            };
        default:
            return state;
    }
};