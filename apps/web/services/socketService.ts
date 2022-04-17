import { Socket } from 'socket.io-client';
import { eventChannel, EventChannel } from 'redux-saga';

import { Actions } from 'schema';

import { broadcastStart, userDone, userJoin, votingDone } from '../store/actionCreators/socketActionCreators';

export const hostStart = (socket: Socket, roomId: string) => {
    socket.emit("HOSTSTART", roomId);
};

export type ChannelCreator<T = unknown> = (socket: Socket) => EventChannel<T>;

export const createSocketChannel: ChannelCreator<Actions> = (socket) => eventChannel(
    (pushToChannel) => {
        const userJoinHandler = (payload: string) => {
            console.log("user join");
            pushToChannel(userJoin(payload));
        };

        const broadcastStartHandler = () => {
            console.log("broadcast start", broadcastStart());
            pushToChannel(broadcastStart());
        };

        const userDoneHandler = () => {
            console.log("user done");
            pushToChannel(userDone());
        };

        const votingDoneHandler = () => {
            console.log("voting done");
            pushToChannel(votingDone());
        };

        socket.on("USERJOIN", userJoinHandler);
        socket.on("BROADCASTSTART", broadcastStartHandler);
        socket.on("USERDONE", userDoneHandler);
        socket.on("VOTINGDONE", votingDoneHandler);

        return () => {
            socket.off("USERJOIN", userJoinHandler);
            socket.off("BROADCASTSTART", broadcastStartHandler);
            socket.off("USERDONE", userDoneHandler);
            socket.off("VOTINGDONE", votingDoneHandler);
        };
    }
);
