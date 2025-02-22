import { Request, Response } from 'express';
import * as userService from '../services/UserService';
import { AppError } from '../middlewares/errorMiddleware';

export class UserController {
  userService = new userService.UserService()
  register = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.registerUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      console.log("UseControllerERROR: Failed to register user. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to register user', 500);
    }
  };
  
  login = async (req: Request, res: Response) => {
    try {
      const token = await this.userService.loginUser(req.body.email, req.body.password);
      if (token) {
        res.json({ token });
      } else {
        throw new AppError('Invalid credentials', 401);
      }
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Failed to login', 500);
    }
  };
}