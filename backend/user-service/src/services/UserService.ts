import { User, UserData, UserPayload } from '../models/userModel';
import { hashPassword, comparePasswords } from '../utils/passwordUtils';
import { generateToken } from '../utils/jwtUtils';
import { AppError } from '../middlewares/errorMiddleware';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  userRepository = new UserRepository()
  registerUser = async (user: User): Promise<User | undefined> => {
    try {
      const existingUser = await this.userRepository.findUserByEmail(user.email);
      if (existingUser) {
        throw new AppError('User already exists', 400);
      }

      user.password = await hashPassword(user.password);
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw new AppError("ErrorUserService on creating user", 400)
    }
  };

  loginUser = async (email: string, password: string): Promise<string | null> => {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    const userPayload: UserPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }
    return generateToken(userPayload);
  };
}