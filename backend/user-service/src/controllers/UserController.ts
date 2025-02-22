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
      res.status(200).send({
        status: 'success',
        message: 'User registration successful'
      });
    } catch (error) {
      console.log("UseControllerERROR: Failed to register user. ", error);
      if (error instanceof AppError) {
        res.status(error.statusCode||400).send({
          status: 'error',
          message: error.message
        });
      }
      res.status(400).send({
        status: 'error',
        message: 'Failed to register user'
      });
    }
  };
  
  login = async (req: Request, res: Response) => {
    try {
      const token = await this.userService.loginUser(req.body.email, req.body.password);
      if (token) {
        res.status(200).send({token: token });
      } else {
        res.send
        throw new AppError('Invalid credentials', 401);
      }
    } catch (error) {
      console.log("UseControllerERROR: Failed to login. ", error);
      if (error instanceof AppError) {
        res.status(error.statusCode||400).send({
          status: 'error',
          message: error.message
        });
      }
      res.status(400).send({
        status: 'error',
        message: 'Failed to register user'
      });
    }
  };
}