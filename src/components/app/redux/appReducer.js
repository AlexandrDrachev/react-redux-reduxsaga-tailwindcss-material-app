

export const initialAppState = {
    realData: false,
    userRole: "user",
    loading: true,
    error: false,
    messageError: null,
    language: "eng"
};

export const appReducer = (state, action) => {

    switch (action.type) {

        case "GET_USER_ROLE_ACTION":
            return {
                ...state,
                userRole: action.payload
            };
        case "ON_TOGGLE_LANGUAGE_ACTION":
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
};