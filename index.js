import Connection from './database/db.js';
import express from 'express';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use('/',Router);

const Port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(Port, () => console.log(`Server is running succesfully on Port ${Port} `));

DefaultData();