import { AppActionBase } from "./actions";
import { IRestaurant } from "./restaurant";

export interface IRoom {
    id: string;
    hostId: string;
    participants: string[];
    restaurants: IRestaurant[];
};

export interface IRoomReducerState {
    rooms: Record<string, IRoom>;
    currentRoom: IRoom | null;
}

export const FETCH_ROOM = 'FETCH_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';

export type FetchRoomRequest = AppActionBase<typeof FETCH_ROOM, 'REQUEST'> & { roomId: string };
export type FetchRoomSuccess = AppActionBase<typeof FETCH_ROOM, 'SUCCESS'> & { room: IRoom };
export type FetchRoomFailure = AppActionBase<typeof FETCH_ROOM, 'FAILURE'> & { message: string };

export type JoinRoomRequest = AppActionBase<typeof JOIN_ROOM, 'REQUEST'> & { roomId: string, uid: string };
export type JoinRoomSuccess = AppActionBase<typeof JOIN_ROOM, 'SUCCESS'> & { room: IRoom };
export type JoinRoomFailure = AppActionBase<typeof JOIN_ROOM, 'FAILURE'> & { message: string };

export type RoomActions = FetchRoomRequest | FetchRoomSuccess | FetchRoomFailure
    | JoinRoomRequest | JoinRoomSuccess | JoinRoomFailure;

export type RoomActionTypes = typeof FETCH_ROOM | typeof JOIN_ROOM;
