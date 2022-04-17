import { Server } from 'socket.io';

let socketServer: Server = null as unknown as Server;

export const createSocketServer = (app: Express.Application) => {
    socketServer = new Server(app, { cors: { origin: '*' } });

    socketServer.on("connection", (socket) => {
        console.log("user connected");

        socket.on("HOSTSTART", () => {
            console.log('received host start');
            socketServer.emit("BROADCASTSTART");
            
            setTimeout(() => {
                socketServer.emit("USERDONE");
            }, 5000);
            
            setTimeout(() => {
                socketServer.emit("VOTINGDONE");
            }, 10000);
        });
        
        socket.onAny((event, ...args) => console.log(event, args));
        socket.on("disconnect", () => {
            console.log("user disconnected");
        })
    });
}

export { socketServer };
