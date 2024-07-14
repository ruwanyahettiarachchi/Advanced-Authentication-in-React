import express from 'express';

const app = express();

app.listen(300, ()=>{
    console.log("Server listening on port 3000");
});