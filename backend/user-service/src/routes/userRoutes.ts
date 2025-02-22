import { UserController } from './../controllers/UserController';
import express, { Request, Response } from 'express';
import { validateRegisterInput, validateLoginInput } from '../middlewares/validationMiddleware';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';

const userController = new UserController();

const router = express.Router();
router.get('/test',(req:Request,resp:Response)=>{
    resp.send('User Service is running!...');
 })
router.post('/register', validateRegisterInput, userController.register);
router.post('/login', validateLoginInput, userController.login);
router.get('/', authenticate,authorize("admin"), userController.getAllUsers);
export default router;