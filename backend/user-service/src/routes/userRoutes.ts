import { UserController } from './../controllers/UserController';
import express, { Request, Response } from 'express';
import { validateRegisterInput, validateLoginInput } from '../middlewares/validationMiddleware';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';
import { Database } from '../config/db';

const dataBase = new Database();
const userRepository = new UserRepository(dataBase);
const useService = new UserService(userRepository);
const userController = new UserController(useService);

const router = express.Router();
router.get('/test',(req:Request,resp:Response)=>{
    resp.send({message:'User Service is running!'});
 })
router.post('/register', validateRegisterInput, userController.register);
router.post('/login', validateLoginInput, userController.login);
router.get('/', authenticate,authorize("admin"), userController.getAllUsers);
router.get('/:id', authenticate,authorize("admin"), userController.getUserById);
export default router;