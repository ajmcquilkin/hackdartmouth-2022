// @ts-nocheck
import io, { Socket } from 'socket.io-client';
import { eventChannel, EventChannel } from 'redux-saga';

import { Actions } from 'schema';
import { 
    SocketEvents, HostStartEvent, 
    UserJoinLobbyEvent, BroadcastStartEvent, UserDoneEvent, VotingDoneEvent,
    UserJoinLobbyPayload, BroadcastStartPayload, UserDonePayload, VotingDonePayload
} from 'schema/src/sockets';

import { broadcastStart, userDone, userJoin, votingDone } from '../store/actionCreators/socketActionCreators';

const socketClient = io('URL');

export const hostStart = () => {
    socketClient.emit(HostStartEvent, "");
};

export type ChannelCreator<T = unknown> = (socket: Socket) => EventChannel<T>;

export const createSocketChannel: ChannelCreator<Actions> = (socket) => eventChannel(
    (pushToChannel) => {
        const userJoinHandler = (payload: UserJoinLobbyPayload) => {
            pushToChannel(userJoin(payload));
        };

        const broadcastStartHandler = (payload: BroadcastStartPayload) => {
            pushToChannel(broadcastStart());
        };

        const userDoneHandler = (payload: UserDonePayload) => {
            pushToChannel(userDone());
        };

        const votingDoneHandler = (payload: VotingDonePayload) => {
            pushToChannel(votingDone());
        };

        socket.on<SocketEvents>(UserJoinLobbyEvent, userJoinHandler);
        socket.on<SocketEvents>(BroadcastStartEvent, broadcastStartHandler);
        socket.on<SocketEvents>(UserDoneEvent, userDoneHandler);
        socket.on<SocketEvents>(VotingDoneEvent, votingDoneHandler);
    }
);

export { socketClient };
