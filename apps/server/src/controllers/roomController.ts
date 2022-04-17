import { RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { IRoom, IRestaurant } from 'schema';

import { getJSON, setJSON } from '../redisClient';

import { socketServer } from 'socketClient';
import "schema";

// export const getAllRooms: RequestHandler = async (req, res, next) => {
//     try {
//         await redisClient.connect();
        
//         const TEST_KEY = "test_key"
//         await setJSON(TEST_KEY, { node: 4303 });
//         const value = await getJSON<any>(TEST_KEY);
        
//         res.json(value);
//     } catch (error) {
//         next(error);
//     }
// };

export const createRoom: RequestHandler = async (req, res, next) => {
    try {
        const roomId = uuid();
        const { hostId } = req.body;
        if (!hostId) { res.status(400).json({ message: "Bad request"}); return; }

        const room: IRoom = {
            id: roomId,
            hostId: hostId,
            participants: [],
            restaurants: []
        };

        await setJSON<IRoom>(roomId, room);
        res.json({ room });
    } catch (error) {
        next(error);
    }
};

export const getRoomById: RequestHandler = async (req, res, next) => {
    try {
        const room = await getJSON<IRoom>(req.params.id);
        res.json({ room });
    } catch (error) {
        next(error);
    }
};

export const joinRoom: RequestHandler = async (req, res, next) => {
    try {
        const { uid } = req.body;
        if (!uid) { res.status(400).send("missing uid"); return; }

        const room = await getJSON<IRoom>(req.params.id);

        let message = "NO CHANGE";
        if (!room.participants.includes(uid)) {
            message = await setJSON<IRoom>(req.params.id, { ...room, participants: [...room.participants, uid] });
            socketServer.emit("HOSTSTART", uid);
        }

        res.json({ room, message });
    } catch (error) {
        next(error);
    }
};

// export const updateRoomById: RequestHandler = async (req, res, next) => {
//     try {

//     } catch (error) {
//         next(error);
//     }
// };

// export const deleteRoomById: RequestHandler = async (req, res, next) => {
//     try {

//     } catch (error) {
//         next(error);
//     }
// };
