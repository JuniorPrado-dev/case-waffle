import { NextFunction, Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { UserService } from '../services/UserService';
import { UserPayload } from '../models/userModel';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUserById = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('User id is required !', 404);
      }
      const user: UserPayload | undefined = await this.userService.getUserById(id);
      
      res.status(200).json(user);
    } catch (error) {
      next (error);
    }
  };

  getAllUsers = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const allUsers: UserPayload[] | undefined = await this.userService.getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      next( error);
    }
  };

  register = async (req: Request, res: Response, next:NextFunction) => {
    try {
      await this.userService.registerUser(req.body);
      res.status(200).json({ message: "Registered successfully" });
    } catch (error) {
      next( error)
    }
  };

  login = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const token = await this.userService.loginUser(req.body.email, req.body.password);
      if (token) {
        res.json({ token });
      } else {
        throw new AppError('Invalid credentials', 401);
      }
    } catch (error) {
      next (error);
    }
  };
}