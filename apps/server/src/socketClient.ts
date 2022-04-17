import { Server } from 'socket.io';

let socketServer: Server = null as unknown as Server;

export const createSocketServer = (app: Express.Application) => {
    socketServer = new Server(app, { cors: { origin: '*' } });

    socketServer.on("connection", (socket) => {
        console.log("user connected");
        socket.emit("BROADCASTSTART");
        socket.on("disconnect", () => {
            console.log("user disconnected");
        })
    });
}

export { socketServer };
