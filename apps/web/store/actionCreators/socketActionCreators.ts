import { 
    HostStartRequest, HostStartSuccess, HostStartFailure,
    UserJoin, BroadcastStart, UserDone, VotingDone, SocketError
} from "schema/src/store/socket";

export const hostStartRequest = (): HostStartRequest => ({
    type: "HOST_START",
    status: "REQUEST"
});

export const hostStartSuccess = (): HostStartSuccess => ({
    type: "HOST_START",
    status: "SUCCESS"
});

export const hostStartFailure = (message: string): HostStartFailure => ({
    type: "HOST_START",
    status: "FAILURE",
    message
});

export const userJoin = (name: string): UserJoin => ({
    type: 'USER_JOIN',
    status: 'SUCCESS',
    name
});

export const broadcastStart = (): BroadcastStart => ({
    type: 'BROADCAST_START',
    status: 'SUCCESS'
});

export const userDone = (): UserDone => ({
    type: 'USER_DONE',
    status: 'SUCCESS'
});

export const votingDone = (): VotingDone => ({
    type: 'VOTING_DONE',
    status: 'SUCCESS'
});

export const socketError = (message: string): SocketError => ({
    type: 'SOCKET_ERROR',
    status: 'FAILURE',
    message
});
