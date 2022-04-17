import { all, call, takeLatest } from "redux-saga/effects";

import { IRoom } from "schema";
import { FetchRoomRequest, JoinRoomRequest } from "schema/src/store/room";

import { fetchRoomSuccess, fetchRoomFailure, joinRoomSuccess, joinRoomFailure } from "../actionCreators/roomActionCreators";
import * as roomService from "../../services/roomService";
import { selectStatus, typedPut as put } from "./helpers";


function* fetchRoomWorker(action: FetchRoomRequest) {
    if (action.status !== 'REQUEST') return;
    
    try {
        const result: IRoom = yield call(roomService.fetchRoom, action.roomId);
        yield put(fetchRoomSuccess(result));
    } catch (error) {
        yield put(fetchRoomFailure((error as Error).message));
    }
}

function* joinRoomWorker(action: JoinRoomRequest) {
    if (action.status !== 'REQUEST') return;
    
    try {
        const result: IRoom = yield call(roomService.joinRoom, action.roomId, action.uid);
        yield put(joinRoomSuccess(result));
    } catch (error) {
        yield put(joinRoomFailure((error as Error).message));
    }
}

function* roomSaga() {
    yield all([
        takeLatest('FETCH_ROOM', fetchRoomWorker),
        takeLatest('JOIN_ROOM', fetchRoomWorker),
    ]);
}

export default roomSaga;
