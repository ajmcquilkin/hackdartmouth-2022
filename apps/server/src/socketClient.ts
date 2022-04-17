import { Server } from 'socket.io';
import { createServer } from 'http';

let socketServer: Server = null as unknown as Server;

export const createSocketServer = (app: Express.Application) => {
    const httpServer = createServer(app);
    socketServer = new Server(httpServer);
}

export { socketServer };
