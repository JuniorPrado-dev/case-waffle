import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { AppError } from '../middlewares/errorMiddleware';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError('Failed to register user', 500);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await userService.loginUser(req.body.email, req.body.password);
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