import express, { Request, Response } from 'express';
import cors from "cors"
// import { userRoutes } from './routes/userRoutes';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:*'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));
 app.get('/',(req:Request,resp:Response)=>{
    resp.send('User Service is running!...');
 })

app.use(express.json());

// app.use('/user', userRoutes);

export { app };