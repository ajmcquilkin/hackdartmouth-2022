import express from 'express';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import roomRouter from 'routers/roomRouter';
import yelpRouter from 'routers/yelpRouter';
import { createSocketServer, socketServer } from 'socketClient';

// General initialization

dotenv.config();

const app = express();
createSocketServer(app);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

app.use("/room", roomRouter);
app.use("/yelp", yelpRouter);

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
