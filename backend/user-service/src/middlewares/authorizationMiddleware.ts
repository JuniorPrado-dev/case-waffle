import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';
import { verifyToken } from '../utils/jwtUtils';

// Middleware para autorizar com base na função do usuário
export const authorize = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
          throw new AppError('Access denied. No token provided.', 401);
        }
      
        try {
          const userPayload = verifyToken(token)
          if (userPayload.role!== requiredRole) {
            throw new AppError('Unauthorized', 403);
          }
          next();
        } catch (error) {
          throw new AppError('Invalid token.', 401);
        }
    next();
  };
};