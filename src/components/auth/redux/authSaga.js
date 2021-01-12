import { take, call, put, select } from "redux-saga/effects";
import {getAuthSaga, getRegisterSaga, loadingAuthPageAction} from "./authActions";
import ServiceApi from "../../../services/serviceApi";
import {getErrorAuthAction, getErrorRegisterAction} from "../../error-indicator/redux/errorIndicatorActions";
import {getUserRoleAction} from "../../app/redux/appActions";

const serviceApi = new ServiceApi();
const { getLogin, createNewUser } = serviceApi;

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
        yield put(getUserRoleAction(userAuth.role));
    } else {
        yield put(loadingAuthPageAction(false));
        yield put(getErrorAuthAction());
    }
}

export function* getRegisterWatcher() {
    while (true) {
        const { payload } = yield take("GET_REGISTER_ACTION");
        yield put(loadingAuthPageAction(true));
        yield call(getRegisterWorker, payload);
    }
}

function* getRegisterWorker(newUser) {
    console.log('newUser: ', newUser);
    const realData = yield select(({ appState }) => appState.realData);
    const resApi = yield call(createNewUser, newUser, realData);
    if (resApi.error) {
        yield put(getErrorRegisterAction(resApi));
        yield put(loadingAuthPageAction(false));
    } else {
        yield put(getRegisterSaga(resApi));
        yield put(loadingAuthPageAction(false));
    }
}

