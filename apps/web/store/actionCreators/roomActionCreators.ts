import { 
    FetchRoomRequest, FetchRoomSuccess, FetchRoomFailure,
    JoinRoomRequest, JoinRoomSuccess, JoinRoomFailure
} from "schema/src/store/room";

import { IRoom } from "schema";

export const fetchRoomRequest = (roomId: string): FetchRoomRequest => ({
    type: "FETCH_ROOM",
    status: "REQUEST",
    roomId
});

export const fetchRoomSuccess = (room: IRoom): FetchRoomSuccess => ({
    type: "FETCH_ROOM",
    status: "SUCCESS",
    room
});

export const fetchRoomFailure = (message: string): FetchRoomFailure => ({
    type: "FETCH_ROOM",
    status: "FAILURE",
    message
});

export const joinRoomRequest = (roomId: string, uid: string): JoinRoomRequest => ({
    type: "JOIN_ROOM",
    status: "REQUEST",
    roomId,
    uid
});

export const joinRoomSuccess = (room: IRoom): JoinRoomSuccess => ({
    type: "JOIN_ROOM",
    status: "SUCCESS",
    room
});

export const joinRoomFailure = (message: string): JoinRoomFailure => ({
    type: "JOIN_ROOM",
    status: "FAILURE",
    message
});
