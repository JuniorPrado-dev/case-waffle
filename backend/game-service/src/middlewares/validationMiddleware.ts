import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';

export const validateRegisterInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  
  if ( !email ) {
    throw new AppError('Email is required', 400);
  }
  next();
};

// export const validateLoginInput = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     throw new AppError('Email and password are required', 400);
//   }

//   next();
// };