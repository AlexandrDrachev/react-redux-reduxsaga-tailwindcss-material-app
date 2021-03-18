import { all } from 'redux-saga/effects';

import { getAuthWatcher, getRegisterWatcher } from '../components/auth/redux/authSaga';
import { getErrorAuthWatcher, getErrorRegisterWatcher } from '../components/error-indicator/redux/errorIndicatorSaga';
import { adminGetUsersWatcher, adminTestActionChannelWatcher } from '../components/admin/redux/adminSaga';
import { activeAlertIndicatorWatcher } from '../components/alert-indicator/redux/alertIndicatorSaga';

export function* rootSaga() {
    yield all([
        rootSagaTest(),
        getAuthWatcher(),
        getErrorAuthWatcher(),
        getRegisterWatcher(),
        getErrorRegisterWatcher(),
        adminGetUsersWatcher(),
        adminTestActionChannelWatcher(),
        activeAlertIndicatorWatcher(),
    ]);
}

function* rootSagaTest() {
    yield console.log(`rootSaga is ready!`);
}