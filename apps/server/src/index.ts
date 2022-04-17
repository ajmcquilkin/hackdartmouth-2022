import express from 'express';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import roomRouter from 'routers/roomRouter';
import yelpRouter from 'routers/yelpRouter';
import { createSocketServer, socketServer } from 'socketClient';
import { RESERVED_EVENTS } from 'socket.io/dist/socket';

// General initialization

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

app.use("/room", roomRouter);
app.use("/yelp", yelpRouter);

app.post("/", (req,res) => {
    socketServer.emit(req.body.label, req.body.message);
    res.send("OK");
});

app.use((req, res)=>{
    res.status(404).json({ message:"Page not found"});
});

// Server initialization
const server = app.listen(process.env.PORT);
console.log(`listening on: ${process.env.PORT}`);
createSocketServer(server);

export default server;
