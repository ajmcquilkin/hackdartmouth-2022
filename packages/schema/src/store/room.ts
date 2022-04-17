import { AppActionBase } from "./actions";
import { IRestaurant } from "./restaurant";

export interface IRoom {
    id: string;
    hostId: string;
    participants: string[];
    reviews: Record<string, number>[];
    restaurants: IRestaurant[];
    location: string;
    foodPref: string;
    maxChoices: number;
    price: number;
    started?: boolean;
    done?: boolean;
    results?: boolean;
};

export interface IRoomReducerState {
    rooms: Record<string, IRoom>;
    currentRoom: IRoom | null;
}

export const CREATE_ROOM = 'CREATE_ROOM';
export const UPDATE_ROOM = 'UPDATE_ROOM';
export const FETCH_ROOM = 'FETCH_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';

export type CreateRoomRequest = AppActionBase<typeof CREATE_ROOM, 'REQUEST'> & { hostId: string };
export type CreateRoomSuccess = AppActionBase<typeof CREATE_ROOM, 'SUCCESS'> & { room: IRoom };
export type CreateRoomFailure = AppActionBase<typeof CREATE_ROOM, 'FAILURE'> & { message: string };

export type UpdateRoomRequest = AppActionBase<typeof UPDATE_ROOM, 'REQUEST'> & { room: IRoom };
export type UpdateRoomSuccess = AppActionBase<typeof UPDATE_ROOM, 'SUCCESS'> & { room: IRoom };
export type UpdateRoomFailure = AppActionBase<typeof UPDATE_ROOM, 'FAILURE'> & { message: string };

export type FetchRoomRequest = AppActionBase<typeof FETCH_ROOM, 'REQUEST'> & { roomId: string };
export type FetchRoomSuccess = AppActionBase<typeof FETCH_ROOM, 'SUCCESS'> & { room: IRoom };
export type FetchRoomFailure = AppActionBase<typeof FETCH_ROOM, 'FAILURE'> & { message: string };

export type JoinRoomRequest = AppActionBase<typeof JOIN_ROOM, 'REQUEST'> & { roomId: string, uid: string };
export type JoinRoomSuccess = AppActionBase<typeof JOIN_ROOM, 'SUCCESS'> & { room: IRoom };
export type JoinRoomFailure = AppActionBase<typeof JOIN_ROOM, 'FAILURE'> & { message: string };

export type RoomActions = CreateRoomRequest | CreateRoomSuccess | CreateRoomFailure
    | UpdateRoomRequest | UpdateRoomSuccess | UpdateRoomFailure
    | FetchRoomRequest | FetchRoomSuccess | FetchRoomFailure
    | JoinRoomRequest | JoinRoomSuccess | JoinRoomFailure;

export type RoomActionTypes = typeof CREATE_ROOM | typeof UPDATE_ROOM | typeof FETCH_ROOM | typeof JOIN_ROOM;
