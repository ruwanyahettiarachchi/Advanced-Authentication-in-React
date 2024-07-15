import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to the DB');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(300, ()=>{
    console.log("Server listening on port 3000");
});