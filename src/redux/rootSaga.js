import { all } from "redux-saga/effects";

import { getAuthWatcher, getRegisterWatcher } from "../components/auth/redux/authSaga";

import { getErrorAuthWatcher, getErrorRegisterWatcher } from "../components/error-indicator/redux/errorIndicatorSaga";

export function* rootSaga() {
    yield all([
        rootSagaTest(),
        getAuthWatcher(),
        getErrorAuthWatcher(),
        getRegisterWatcher(),
        getErrorRegisterWatcher()
    ]);
}

function* rootSagaTest() {
    yield console.log(`rootSaga is ready!`);
}