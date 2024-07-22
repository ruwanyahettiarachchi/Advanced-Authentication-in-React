import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to the DB');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});