import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { createClient } from 'redis';

// Redis initialization

(async () => {
    const client = createClient();

    client.on("error", (err) => console.error("Redis client error:", err));
    await client.connect();

    await client.set('key', 'redis value');
    const value = await client.get('key');
    console.log(value);
})();

// General initialization

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Welcome to the backend!");
});

app.use((req,res)=>{
    res.status(404).json({ message:"Page not found"});
});

// Server initialization

const server = app.listen(process.env.PORT);
console.log(`listening on: ${process.env.PORT}`);
export default server;
