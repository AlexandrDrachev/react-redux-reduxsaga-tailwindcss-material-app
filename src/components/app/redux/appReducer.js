

export const initialAppState = {
    realData: false,
    userRole: "user",
    loading: true,
    error: false,
    messageError: null
};

export const appReducer = (state, action) => {

    switch (action.type) {

        case "GET_USER_ROLE_ACTION":
            return {
                ...state,
                userRole: action.payload
            };
        default:
            return state;
    }
};