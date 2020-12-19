import { take, call, put } from "redux-saga/effects";
import { getErrorAuthSaga } from "./errorIndicatorActions";

export function* getErrorAuthWatcher() {
    while (true) {
        yield take("GET_ERROR_AUTH_ACTION");
        yield call(getErrorAuthWorker);
    }
}

export function* getErrorAuthWorker() {
    yield put(getErrorAuthSaga({
        error: true,
        titleError: "Authorisation error!",
        messageError: "Try again",
    }));
}