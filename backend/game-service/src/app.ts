import express, { Request, Response } from 'express';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/player', playerRoutes);

app.use(errorMiddleware);

export default app