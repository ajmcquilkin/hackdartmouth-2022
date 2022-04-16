import express from 'express';
import * as roomController from '../controllers/roomController';

const router = express();

router.route("/")
    .get(roomController.getAllRooms)
    .post(roomController.createRoom);

router.route("/:id")
    .get(roomController.getRoomById)
    .post(roomController.joinRoom)
    // .patch(roomController.updateRoomById)
    // .delete(roomController.deleteRoomById);

export default router;
