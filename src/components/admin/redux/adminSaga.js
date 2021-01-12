import { take, call, put, select, actionChannel, delay } from "redux-saga/effects";

import AdminApi from "../../../services/adminApi";
import {adminTestActionChannelSaga} from "./adminActions";

const adminApi = new AdminApi();
const { getUsers } = adminApi;

export function* adminGetUsersWatcher() {
    while (true) {
        yield take("ADMIN_GET_USERS_ACTION");
        yield call(adminGetUsersWorker);
    }
}

function* adminGetUsersWorker() {
    const realData = yield select(({ appState }) => appState.realData);
    yield call(getUsers, realData);
}

export function* adminTestActionChannelWatcher() {
    const reqChannel = yield actionChannel("ADMIN_TEST_ACTION_CHANNEL_ACTION");
    while (true) {
        yield take(reqChannel);
        yield call(adminTestActionChannelWorker);
    }
}

function* adminTestActionChannelWorker() {
    const currentValue = yield select(({ adminState }) => adminState.testBufferCounter);
    yield put(adminTestActionChannelSaga(currentValue + 1));
    yield delay(500);
}