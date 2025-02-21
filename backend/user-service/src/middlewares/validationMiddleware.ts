import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';

export const validateRegisterInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    throw new AppError('All fields are required', 400);
  }

  if (password.length < 6) {
    throw new AppError('Password must be at least 6 characters', 400);
  }

  next();
};

export const validateLoginInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Email and password are required', 400);
  }

  next();
};