import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { validateRegisterInput, validateLoginInput } from './middlewares/validationMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

app.get('/',(req:Request,resp:Response)=>{
   resp.send('User Service is running!...');
})
// Middleware de tratamento de erros
app.use(errorMiddleware);

const PORT = process.env.USER_DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});