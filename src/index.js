import express from 'express';
import dotenv from "dotenv";
import router from '../routes/index';

dotenv.config();

const app = express()

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`App is listerning to ${process.env.PORT}`)
})