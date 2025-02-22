import { Request, Response } from 'express';
import * as userService from '../services/UserService';
import { AppError } from '../middlewares/errorMiddleware';
import { User } from '../models/userModel';

export class UserController {
  userService = new userService.UserService()
  register = async (req: Request, res: Response) => {
    try {
      const newUser: User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }
      const user = await this.userService.registerUser(req.body);
      console.log({ user });
      res.send(user);
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