import { AppActionBase } from "./actions";

export const HOST_START = 'HOST_START';
export const USER_JOIN = 'USER_JOIN';
export const BROADCAST_START = 'BROADCAST_START';
export const USER_DONE = 'USER_DONE';
export const VOTING_DONE = 'VOTING_DONE';
export const SOCKET_ERROR = 'SOCKET_ERROR';

export type HostStartRequest = AppActionBase<typeof HOST_START, 'REQUEST'> & { roomId: string };
export type HostStartSuccess = AppActionBase<typeof HOST_START, 'SUCCESS'> & {};
export type HostStartFailure = AppActionBase<typeof HOST_START, 'FAILURE'> & { message: string };

export type UserJoin = AppActionBase<typeof USER_JOIN, 'SUCCESS'> & { name: string };
export type BroadcastStart = AppActionBase<typeof BROADCAST_START, 'SUCCESS'> & {};
export type UserDone = AppActionBase<typeof USER_DONE, 'SUCCESS'> & {};
export type VotingDone = AppActionBase<typeof VOTING_DONE, 'SUCCESS'> & {};

export type SocketError = AppActionBase<typeof SOCKET_ERROR, 'FAILURE'> & { message: string };

export type SocketActions = HostStartRequest | HostStartSuccess | HostStartFailure
    | UserJoin | BroadcastStart | UserDone | VotingDone | SocketError;

export type SocketActionTypes = typeof HOST_START | typeof USER_JOIN | typeof BROADCAST_START | typeof USER_DONE
    | typeof VOTING_DONE | typeof SOCKET_ERROR;
