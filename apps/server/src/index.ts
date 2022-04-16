import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

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

const server = app.listen(process.env.PORT);
console.log(`listening on: ${process.env.PORT}`);
export default server;
