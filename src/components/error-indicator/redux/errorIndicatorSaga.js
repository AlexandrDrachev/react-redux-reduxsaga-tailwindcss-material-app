import { take, call, put } from 'redux-saga/effects';
import {getErrorAuthSaga, getErrorRegisterSaga} from './errorIndicatorActions';

export function* getErrorAuthWatcher() {
    while (true) {
        yield take('GET_ERROR_AUTH_ACTION');
        yield call(getErrorAuthWorker);
    }
}

export function* getErrorAuthWorker() {
    yield put(getErrorAuthSaga({
        error: true,
        titleError: 'Authorisation error!',
        messageError: 'Try again',
    }));
}

export function* getErrorRegisterWatcher() {
    while (true) {
        const { payload } = yield take('GET_ERROR_REGISTER_ACTION');
        yield call(getErrorRegisterWorker, payload);
    }
}

function* getErrorRegisterWorker(error) {
    yield put(getErrorRegisterSaga(error));
}
