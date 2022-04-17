import { 
    FetchRoomRequest, FetchRoomSuccess, FetchRoomFailure,
    JoinRoomRequest, JoinRoomSuccess, JoinRoomFailure,
    CreateRoomRequest, CreateRoomSuccess, CreateRoomFailure
} from "schema/src/store/room";

import { IRoom } from "schema";

export const createRoomRequest = (hostId: string): CreateRoomRequest => ({
    type: "CREATE_ROOM",
    status: "REQUEST",
    hostId
});

export const createRoomSuccess = (room: IRoom): CreateRoomSuccess => ({
    type: "CREATE_ROOM",
    status: "SUCCESS",
    room,
});

export const createRoomFailure = (message: string): CreateRoomFailure => ({
    type: "CREATE_ROOM",
    status: "FAILURE",
    message
});

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
