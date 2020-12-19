import { take, call, put, select } from "redux-saga/effects";
import { getAuthSaga, loadingAuthPageAction } from "./authActions";
import ServiceApi from "../../../services/serviceApi";
import { getErrorAuthAction } from "../../error-indicator/redux/errorIndicatorActions";

const serviceApi = new ServiceApi();
const { getLogin } = serviceApi;

export function* getAuthWatcher() {
    while (true) {
        const { payload } = yield take("GET_AUTH_ACTION");
        yield put(loadingAuthPageAction(true));
        yield call(getAuthWorker, payload);
    }
}

function* getAuthWorker(user) {
    yield console.log(user);
    const realData = yield select(({ appState }) => appState.realData);
    const userAuth = yield call(getLogin, user, realData);
    console.log('userRes: ', userAuth);
    if (userAuth) {
        yield put(getAuthSaga(userAuth));
        yield put(loadingAuthPageAction(false));
    } else {
        yield put(loadingAuthPageAction(false));
        yield put(getErrorAuthAction());
    }
}

