import { errorIndicatorReducer, initialErrorIndicatorState } from "../components/error-indicator/redux/errorIndicatorReducer";
import { appReducer, initialAppState } from "../components/app/redux/appReducer";
import { authReducer, initialAuthState } from "../components/auth/redux/authReducer";

const initialState = {
    testField: "rootReducer is ready!",
    errorIndicatorState: initialErrorIndicatorState,
    appState: initialAppState,
    authState: initialAuthState
};

const rootReducer = (state = initialState, action) => {

    const { errorIndicatorState, appState, authState } = state;
    console.log("action.type: ", action.type);
    console.log("action.payload: ", action.payload);

    return {
        errorIndicatorState: errorIndicatorReducer(errorIndicatorState, action),
        appState: appReducer(appState, action),
        authState: authReducer(authState, action)
    };
};

export default rootReducer;