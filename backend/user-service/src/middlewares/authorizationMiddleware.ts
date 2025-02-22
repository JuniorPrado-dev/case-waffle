import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';
import { verifyToken } from '../utils/jwtUtils';
import { User } from '../models/userModel';

// Middleware para autorizar com base na função do usuário
export const authorize = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        
        try {
          const user:User = res.locals.user
          console.log({user})
          if (user.role === requiredRole) {
            next();
          }else{
            throw new AppError('Unauthorized User!', 401);
          }
        } catch (error) {
          throw new AppError('Unauthorized User!', 401);
        }
    next();
  };
};