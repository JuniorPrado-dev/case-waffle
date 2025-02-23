import express, { Request, Response } from 'express';
import { validateRegisterInput } from '../middlewares/validationMiddleware';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';
import { Database } from '../config/db';
import { PlayerRepository } from '../repositories/PlayerRepository';
import { PlayerService } from '../services/PlayerService';
import { PlayerController } from '../controllers/PlayerController';
import { AccessController } from '../controllers/AccessController';
import { AccessService } from '../services/AccessService';
import { AccessRepository } from '../repositories/AccessRepository';

const dataBase = new Database();
const playerRepository = new PlayerRepository(dataBase);
const playerService = new PlayerService(playerRepository);
const playerController = new PlayerController(playerService);
const accessRepository = new AccessRepository(dataBase);
const accessService = new AccessService(accessRepository,playerService,playerRepository);
const accessController = new AccessController(accessService);

const router = express.Router();
router.get('/test', (req: Request, resp: Response) => {
    resp.send({ message: 'Player Service is running!' });
})
router.get('/', authenticate, authorize("admin"), accessController.getAllAccess);
router.post('/', authenticate,authorize("admin"),validateRegisterInput, accessController.newRegister);
router.post('/update', authenticate, playerController.updatePayer);

export default router;