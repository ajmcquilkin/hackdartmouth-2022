// @ts-nocheck
import io, { Socket } from 'socket.io-client';
import { eventChannel, EventChannel } from 'redux-saga';

import { Actions } from 'schema';

import { broadcastStart, userDone, userJoin, votingDone } from '../store/actionCreators/socketActionCreators';
import { ROOT_URL } from '.';

const socketClient = io(`${ROOT_URL}`);

export const hostStart = () => {
    socketClient.emit("HOSTSTART", "");
};

export type ChannelCreator<T = unknown> = (socket: Socket) => EventChannel<T>;

export const createSocketChannel: ChannelCreator<Actions> = (socket) => eventChannel(
    (pushToChannel) => {
        const userJoinHandler = (payload: string) => {
            pushToChannel(userJoin(payload));
        };

        const broadcastStartHandler = () => {
            pushToChannel(broadcastStart());
        };

        const userDoneHandler = () => {
            pushToChannel(userDone());
        };

        const votingDoneHandler = () => {
            pushToChannel(votingDone());
        };

        socket.on<SocketEvents>("USERJOIN", userJoinHandler);
        socket.on<SocketEvents>("BROADCASTSTART", broadcastStartHandler);
        socket.on<SocketEvents>("USERDONE", userDoneHandler);
        socket.on<SocketEvents>("VOTINGDONE", votingDoneHandler);

        return () => {
            socket.off<SocketEvents>("USERJOIN", userJoinHandler);
            socket.off<SocketEvents>("BROADCASTSTART", broadcastStartHandler);
            socket.off<SocketEvents>("USERDONE", userDoneHandler);
            socket.off<SocketEvents>("VOTINGDONE", votingDoneHandler);
        };
    }
);

export { socketClient };
