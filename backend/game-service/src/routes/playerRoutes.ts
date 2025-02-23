import express, { Request, Response } from 'express';
import { validateRegisterInput, validateUpdate } from '../middlewares/validationMiddleware';
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
router.get('/', authenticate, authorize("admin"), playerController.getAllPlayers);
router.get('/:email', authenticate, playerController.getPlayerByEmail);
router.put('/update', authenticate,validateUpdate, playerController.updatePlayer);

export default router;