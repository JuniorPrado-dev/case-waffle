import { UserController } from './../controllers/UserController';
import express from 'express';
import { validateRegisterInput, validateLoginInput } from '../middlewares/validationMiddleware';

const userController = new UserController();

const router = express.Router();

router.post('/register', validateRegisterInput, userController.register);
router.post('/login', validateLoginInput, userController.login);

export default router;