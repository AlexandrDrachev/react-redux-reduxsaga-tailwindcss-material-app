

export const activeAlertIndicatorAction = (message) => {
    return {
        type: "ACTIVE_ALERT_INDICATOR_ACTION",
        payload: message
    };
};

export const activeAlertIndicatorSaga = (message) => {
    return {
        type: "ACTIVE_ALERT_INDICATOR_SAGA",
        payload: message
    };
};

export const closeAlertIndicatorAction = () => {
    return {
        type: "CLOSE_ALERT_INDICATOR_ACTION"
    };
};