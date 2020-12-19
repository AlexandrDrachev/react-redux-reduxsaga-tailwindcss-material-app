import { all } from "redux-saga/effects";

import { getAuthWatcher } from "../components/auth/redux/authSaga";

import { getErrorAuthWatcher } from "../components/error-indicator/redux/errorIndicatorSaga";

export function* rootSaga() {
    yield all([
        rootSagaTest(),
        getAuthWatcher(),
        getErrorAuthWatcher()
    ]);
}

function* rootSagaTest() {
    yield console.log(`rootSaga is ready!`);
}