import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';

export const validateRegisterInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, id_post } = req.body;
  
  if ( !email || !id_post ) {
    throw new AppError('Email and Id Post are required', 400);
  }
  next();
};
