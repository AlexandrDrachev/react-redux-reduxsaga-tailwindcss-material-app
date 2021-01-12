import { errorIndicatorReducer, initialErrorIndicatorState } from "../components/error-indicator/redux/errorIndicatorReducer";
import { appReducer, initialAppState } from "../components/app/redux/appReducer";
import { authReducer, initialAuthState } from "../components/auth/redux/authReducer";
import { adminReducer, initialAdminState } from "../components/admin/redux/adminReducer";

const initialState = {
    testField: "rootReducer is ready!",
    errorIndicatorState: initialErrorIndicatorState,
    appState: initialAppState,
    authState: initialAuthState,
    adminState: initialAdminState
};

const rootReducer = (state = initialState, action) => {

    const { errorIndicatorState, appState, authState, adminState } = state;
    console.log("action.type: ", action.type);
    console.log("action.payload: ", action.payload);

    return {
        errorIndicatorState: errorIndicatorReducer(errorIndicatorState, action),
        appState: appReducer(appState, action),
        authState: authReducer(authState, action),
        adminState: adminReducer(adminState, action)
    };
};

export default rootReducer;