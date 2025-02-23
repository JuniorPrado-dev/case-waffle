import express, { Request, Response } from 'express';
import { validateRegisterInput} from '../middlewares/validationMiddleware';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';
import { Database } from '../config/db';
import { PlayerRepository } from '../repositories/PlayerRepository';
import { PlayerService } from '../services/PlayerService';
import { PlayerController } from '../controllers/PlayerController';

const dataBase = new Database();
const playerRepository = new PlayerRepository(dataBase);
const playerService = new PlayerService(playerRepository);
const playerController = new PlayerController(playerService);

const router = express.Router();
router.get('/test',(req:Request,resp:Response)=>{
    resp.send({message:'Player Service is running!'});
 })
router.post('/register', validateRegisterInput, playerController.register);

// router.get('/', authenticate,authorize("admin"), playerController.getAllUsers);
// router.get('/:id', authenticate,authorize("admin"), userController.getUserById);
export default router;