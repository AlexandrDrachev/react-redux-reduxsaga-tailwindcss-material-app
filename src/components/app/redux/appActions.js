

export const getUserRoleAction = (role) => {
    return {
        type: "GET_USER_ROLE_ACTION",
        payload: role
    };
};

export const onToggleLanguageAction = (lang) => {
    return {
        type: "ON_TOGGLE_LANGUAGE_ACTION",
        payload: lang
    };
};