import express from 'express';
import * as userController from '../controllers/userController';
import { validateRegisterInput, validateLoginInput } from '../middlewares/validationMiddleware';

const router = express.Router();

router.post('/register', validateRegisterInput, userController.register);
router.post('/login', validateLoginInput, userController.login);

export default router;