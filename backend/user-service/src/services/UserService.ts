import { User, UserData, UserPayload } from '../models/userModel';
import { hashPassword, comparePasswords } from '../utils/passwordUtils';
import { generateToken } from '../utils/jwtUtils';
import { AppError } from '../middlewares/errorMiddleware';
import { UserRepository } from '../repositories/UserRepository';
import { IdGenerator } from '../utils/idGenerator';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getUserById = async (id: string): Promise<UserPayload | undefined> => {
    try {
      const response: UserData | undefined = await this.userRepository.getUserById(id);
      if (!response) {
        throw new AppError('User not found', 404);
      } else {
        const user: UserPayload = {
          id: response.id,
          name: response.name,
          email: response.email,
          role: response.role
        }
        return user;
      }
    } catch (error) {
      console.log("ErrorUserService ongetUserById", error)
      throw new AppError("ErrorUserService ongetUserById", 400)
    }
  };

  getAllUsers = async (): Promise<UserPayload[] | undefined> => {
    try {
      const allUsersData: UserData[] | undefined = await this.userRepository.getAllUsers();
      if (!allUsersData || allUsersData.length === 0) {
        throw new AppError('Users not found', 404);
      } else {
        const allUsers: UserPayload[] = allUsersData.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        })
        return allUsers;
      }
    } catch (error) {
      console.log("ErrorUserService on getAllUsers", error)
      throw new AppError("ErrorUserService on getAllUsers", 400)
    }
  };

  registerUser = async (user: User): Promise<User | undefined> => {
    try {
      const existingUser = await this.userRepository.findUserByEmail(user.email);
      if (existingUser) {
        throw new AppError('User already exists', 400);
      }

      const id = IdGenerator.generateId();  
      user.password = await hashPassword(user.password);
      return await this.userRepository.createUser({id,...user});
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