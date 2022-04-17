// @ts-nocheck
import { all, call, take, takeLatest, spawn } from "redux-saga/effects";

import { Actions } from "schema";

import { hostStartSuccess, hostStartFailure, socketError } from "../actionCreators/socketActionCreators";
import * as socketService from "../../services/socketService";
import { selectStatus, typedPut as put } from "./helpers";

function* hostStartWorker() {
    try {
        yield call(socketService.hostStart);
        yield put(hostStartSuccess());
    } catch (error) {
        yield put(hostStartFailure((error as Error).message));
    }
}

function* channelWorker() {
    const socketChannel = socketService.createSocketChannel(socketService.socketClient);

    while (true) {
        try {
            const action: Actions = yield take(socketChannel);
            yield put(action);
        } catch (error) {
            yield put(socketError((error as Error).message));
        }
    }
}

function* roomSaga() {
    yield all([
        takeLatest(selectStatus('HOST_START'), hostStartWorker),
        spawn(channelWorker)
    ]);
}

export default roomSaga;
