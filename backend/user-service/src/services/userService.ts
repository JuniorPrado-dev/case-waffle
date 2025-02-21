import { User, UserData, UserPayload } from '../models/userModel';
import * as userRepository from '../repositories/userRepository';
import { hashPassword, comparePasswords } from '../utils/passwordUtils';
import { generateToken } from '../utils/jwtUtils';
import { AppError } from '../middlewares/errorMiddleware';

export const registerUser = async (user: User): Promise<User> => {
  const existingUser = await userRepository.findUserByEmail(user.email);
  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  user.password = await hashPassword(user.password);
  return await userRepository.createUser(user);
};

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new AppError('User not found', 404);
  }

  const isPasswordValid = await comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', 401);
  }

  const userPayload:UserPayload={
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
  return generateToken(userPayload);
};