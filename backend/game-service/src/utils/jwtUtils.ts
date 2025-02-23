import jwt from 'jsonwebtoken';
import { UserPayload } from '../models/playerModel';

// Chave secreta para assinar e verificar tokens
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Gera um token JWT
export const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '10h' }); // Token expira em 1 hora
};

// Verifica e extrai os dados do token
export const verifyToken = (token: string): UserPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
};