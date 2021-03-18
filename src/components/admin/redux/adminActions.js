
export const adminGetUsersAction = () => {
    return {
        type: 'ADMIN_GET_USERS_ACTION',
    };
};

export const adminGetUsersSaga = (users) => {
    return {
        type: 'ADMIN_GET_USERS_SAGA',
        payload: users,
    };
};

export const adminTestActionChannelAction = () => {
    return {
        type: 'ADMIN_TEST_ACTION_CHANNEL_ACTION',
    };
};

export const adminTestActionChannelSaga = (result) => {
    return {
        type: 'ADMIN_TEST_ACTION_CHANNEL_SAGA',
        payload: result,
    };
};
