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
            restaurants: [],
            reviews: [],
            foodPref: "",
            location: "",
            maxChoices: 10,
            price: 2
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

        const newRoom = { ...room, participants: [...room.participants, uid] };
        const message = await setJSON<IRoom>(req.params.id, newRoom);
        socketServer.emit("USERJOIN", uid);

        res.json({ room, message });
    } catch (error) {
        next(error);
    }
};

export const updateRoomById: RequestHandler = async (req, res, next) => {
    try {
        try {
            const { room }: { room: IRoom } = req.body;
            if (!room) { res.status(400).send("Bad request"); return; }
    
            await setJSON<IRoom>(req.params.id, room);
            console.log(room.reviews.length, room.participants.length);
            if (room.reviews.length >= 1) {
                const res = new Map<string, number>();
                for (const person of room.reviews) {
                    for (const [key, val] of Object.entries(person)) {
                        const curr = res.get(key) ?? 0;
                        res.set(key, curr + val);
                    }
                }
                const sorted = Array.from(res).sort((a,b) => a[1] - b[1]);
                console.log(sorted);
                
                // const results = room.reviews.map(r)
                socketServer.emit("VOTINGDONE", sorted);
            }
            res.json({ room });
        } catch (error) {
            next(error);
        }
    } catch (error) {
        next(error);
    }
};

// export const deleteRoomById: RequestHandler = async (req, res, next) => {
//     try {

//     } catch (error) {
//         next(error);
//     }
// };
