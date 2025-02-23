import { Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { UserService } from '../services/UserService';
import { UserPayload } from '../models/userModel';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id){
        throw new AppError('User id is required !',404);
      }
      const user:UserPayload|undefined = await this.userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      console.log("UseControllerERROR: Failed to get all Users. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to get all users', 500);
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers:UserPayload[]|undefined = await this.userService.getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      console.log("UseControllerERROR: Failed to get all Users. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to get all users', 500);
    }
  };
  
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