import express, { Request, Response } from 'express';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes';
import accessRoutes from './routes/acessRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/player', playerRoutes);
app.use('/access', accessRoutes);
app.get('/', (req: Request, resp: Response) => {
    resp.send({ message: 'Game Service is running!' });
})

app.use(errorMiddleware);

export default app