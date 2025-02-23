import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';
import { PlayerUpdate } from '../models/playerModel';

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
export const validateUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, scores }:PlayerUpdate = req.body;
  
  if ( !email || !scores ) {
    throw new AppError('Email and scores and are required', 400);
  }
  next();
};
