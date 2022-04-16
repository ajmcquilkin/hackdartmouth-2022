import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import roomRouter from 'routers/roomRouter'

// General initialization

dotenv.config();

const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

app.use("/room", roomRouter);

app.use((req, res)=>{
    res.status(404).json({ message:"Page not found"});
});

// Socket initialization

socketServer.on("connection", (socket) => {
    console.log("user connected");
});

// Server initialization

const server = app.listen(process.env.PORT);
console.log(`listening on: ${process.env.PORT}`);
export default server;
