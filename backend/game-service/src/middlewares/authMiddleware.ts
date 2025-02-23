import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';
import { AppError } from './errorMiddleware';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('Token not provided', 401);
  }
  
  const token = authHeader.split(' ')[1]; // Remove o prefixo "Bearer "
  
  try {
    const decoded = verifyToken(token);
    res.locals.user = decoded; // Armazena os dados do usuário no `res.locals`
    next();
  } catch (err) {
    throw new AppError('Invalid token', 401);
  }
};