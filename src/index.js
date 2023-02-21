import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`App is listerning to ${process.env.PORT}`)
})