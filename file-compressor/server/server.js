import cors from "cors";
import express from 'express';
import dotenv from 'dotenv';
import {connectToDatabase} from './connection.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({path:'config.env'});

connectToDatabase().then(()=>{
// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
});