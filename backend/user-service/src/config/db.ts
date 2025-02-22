import { Pool, PoolClient } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export class Database {
    private static instance: Pool;

    private constructor() {}

    public static getInstance(): Pool {
        if (!Database.instance) {
            Database.instance = new Pool({
                user: process.env.USER_DB_USER,
                host: process.env.USER_DB_HOST,
                database: process.env.USER_DB_NAME,
                password: process.env.USER_DB_PASSWORD,
                port: parseInt(process.env.USER_DB_PORT || '5432'),
                max: 10, // Número máximo de conexões no pool
                idleTimeoutMillis: 30000, // Tempo máximo que uma conexão pode ficar idle
                connectionTimeoutMillis: 2000, // Tempo máximo para tentar conectar
            });
        }

        return Database.instance;
    }
}

// Função para criar uma conexão direta (não pool)
export async function createConnection(): Promise<PoolClient> {
    const pool = Database.getInstance();
    return await pool.connect();
}

// Exemplo de uso
async function testDatabase() {
    try {
        const connection = await createConnection();
        console.log('Conexão estabelecida com sucesso!');

        // Exemplo de query
        const res = await connection.query('SELECT NOW()');
        console.log('Resultado da query:', res.rows[0]);

        // Libera a conexão de volta para o pool
        connection.release();
    } catch (error) {
        console.error('Erro ao conectar ou executar query:', error);
    }
}

// Testar a conexão
testDatabase();