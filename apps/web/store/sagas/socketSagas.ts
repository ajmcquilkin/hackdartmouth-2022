import { all, call, take, takeLatest, spawn, fork, cancel } from "redux-saga/effects";

import { Actions } from "schema";
import { io, Socket } from "socket.io-client";

import { hostStartSuccess, hostStartFailure, socketError } from "../actionCreators/socketActionCreators";
import * as socketService from "../../services/socketService";
import { selectStatus, typedPut as put } from "./helpers";
import { HostStartRequest } from "schema/src/store/socket";
import { ROOT_URL } from "../../services";

const createSocket = (address: string) => io(address);

function* hostStartWorker(action: HostStartRequest, socket: Socket) {
    if (action.status !== 'REQUEST') return;

    try {
        yield call(socketService.hostStart, socket, action.roomId);
        console.log("start saga after")
        yield put(hostStartSuccess());
    } catch (error) {
        yield put(hostStartFailure((error as Error).message));
    }
}

function* socketChannelHandler(socket: Socket) {
    // @ts-ignore
    const socketChannel = yield call(socketService.createSocketChannel, socket);

    while (true) {
        try {
            const action: Actions = yield take(socketChannel);
            console.log('received action', action);
            yield put(action);
        } catch (error) {
            console.error('socket channel', error);
            yield put(socketError((error as Error).message));
        }
    }
}

function* socketSaga() {
    const socket: Socket = yield call(createSocket, `${ROOT_URL}`);

    // @ts-ignore
    yield fork(socketChannelHandler, socket);
    
    yield all([
        takeLatest(
            "HOST_START",
            (action: HostStartRequest) => hostStartWorker(action, socket)
        ),
    ]);
}

export default socketSaga;
