import { User, UserData } from '../models/userModel';
import { pool } from '../config/db';
import { IdGenerator } from '../utils/idGenerator';

export const createUser = async (user: User): Promise<User> => {
    const { name, password, email, role } = user;
    const id=IdGenerator.generateId()
    
    const result = await pool.query(
        `INSERT INTO users (id, name, password, email,role) VALUES (${id}, ${name}, ${password}, ${email}, ${role}) RETURNING *`
    );
    
    return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<UserData | null> => {
    const result = await pool.query(`SELECT * FROM users WHERE email = ${email}`, [email]);
    return result.rows[0] || null;
};