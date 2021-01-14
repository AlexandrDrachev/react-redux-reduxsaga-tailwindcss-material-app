export const initialAlertIndicatorState = {
    alertIndicator: false,
    alertMessage: null
};

export const alertIndicatorReducer = (state, action) => {
    switch (action.type) {
        case "CLOSE_ALERT_INDICATOR_ACTION":
            return initialAlertIndicatorState;
        case "ACTIVE_ALERT_INDICATOR_SAGA":
            return {
                ...state,
                alertIndicator: true,
                alertMessage: action.payload
            };
        default:
            return state;
    }
};