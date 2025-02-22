import { User, UserData } from '../models/userModel';
import { Database } from '../config/db'; // Importando a classe Database
import { IdGenerator } from '../utils/idGenerator';

export class UserRepository {
    // Método para criar um usuário
    async createUser(user: User): Promise<User | undefined> {
        try {
            const { name, password, email, role } = user;
            const id = IdGenerator.generateId();

            // Obtém uma conexão do pool
            const connection = await Database.getInstance().connect();

            // Executa a query para inserir o usuário
            const result = await connection.query(
                `INSERT INTO users (id, name, password, email, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [id, name, password, email, role]
            );

            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna o usuário criado
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao criar usuário:', err);
        }
    }

    // Método para encontrar um usuário pelo email
    async findUserByEmail(email: string): Promise<UserData | null> {
        try {
            // Obtém uma conexão do pool
            const connection = await Database.getInstance().connect();

            // Executa a query para buscar o usuário pelo email
            const result = await connection.query(
                `SELECT * FROM users WHERE email = $1`,
                [email]
            );

            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna o usuário encontrado ou null
            return result.rows[0] || null;
        } catch (err) {
            console.error('Erro ao buscar usuário por email:', err);
            return null;
        }
    }
}