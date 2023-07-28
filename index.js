import Connection from './database/db.js';
import express from 'express';
import dotenv from 'dotenv';
import DefaultData from './default.js';

const app = express();

dotenv.config();

const Port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(Port, () => console.log(`Server is running succesfully on Port ${Port} `));

DefaultData();