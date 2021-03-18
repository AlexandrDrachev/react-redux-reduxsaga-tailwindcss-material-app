
export const initialAdminState = {
    loading: false,
    loaded: false,
    usersEntity: null,
    testBufferCounter: 0,
};

export const adminReducer = (state, action) => {
    switch (action.type) {

        case 'ADMIN_TEST_ACTION_CHANNEL_SAGA':
            return {
                ...state,
                testBufferCounter: action.payload
            };

        case 'ADMIN_GET_USERS_SAGA':
            return {
                ...state,
                usersEntity: action.payload
            };
        default:
            return {...state};
    }
};
