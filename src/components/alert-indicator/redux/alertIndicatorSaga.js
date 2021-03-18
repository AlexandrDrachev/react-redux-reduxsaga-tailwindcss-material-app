import { take, put, fork, cancel, delay } from 'redux-saga/effects';
import { activeAlertIndicatorSaga, closeAlertIndicatorAction } from './alertIndicatorActions';

export function* activeAlertIndicatorWatcher() {
    while (true) {
        const { payload } = yield take('ACTIVE_ALERT_INDICATOR_ACTION');
        const worker = yield fork(activeAlertIndicatorWorker, payload);
        yield take('CLOSE_ALERT_INDICATOR_ACTION');
        yield cancel(worker);
    }
}

function* activeAlertIndicatorWorker(message) {
    yield put(activeAlertIndicatorSaga(message));
    yield delay(3000);
    yield put(closeAlertIndicatorAction());
}
