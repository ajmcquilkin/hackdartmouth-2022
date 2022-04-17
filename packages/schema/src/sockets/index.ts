export const UserJoinLobbyEvent = 'USERJOIN';
export type UserJoinLobbyPayload = string;

export const HostStartEvent = 'HOSTSTART';
export type HostStartPayload = null;

export const BroadcastStartEvent = 'START';
export type BroadcastStartPayload = null;

export const UserDoneEvent = 'USERDONE';
export type UserDonePayload = null;

export const VotingDoneEvent = 'VOTINGDONE';
export type VotingDonePayload = null;

export type SocketEvents = typeof UserJoinLobbyEvent | typeof HostStartEvent | typeof BroadcastStartEvent | typeof UserDoneEvent | typeof VotingDoneEvent;
export type SocketPayloads = UserJoinLobbyPayload | HostStartPayload | BroadcastStartPayload | UserDonePayload | VotingDonePayload;
