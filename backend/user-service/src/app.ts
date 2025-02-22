import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.get('/',(req:Request,resp:Response)=>{
   resp.send('User Service is running!...');
})

app.use(errorMiddleware);

export default app