import { Database } from '../config/db'; // Importando a classe Database
import { IdGenerator } from '../utils/idGenerator';
import { AppError } from '../middlewares/errorMiddleware';
import { Player, PlayerData, PlayerUpdate } from '../models/playerModel';

export class PlayerRepository {
    private database: Database;

    // Construtor que recebe a instância de Database
    constructor(database: Database) {
        this.database = database;
    }
    // Método para criar um usuário
    async createPlayer(player: PlayerData): Promise<PlayerData | undefined> {
        try {
            const {
                id,
                email,
                last_check_date = Date.now(),
                scores,
            } = player;
            // Obtém uma conexão do pool
            const connection = await this.database.getInstance().connect();

            // Executa a query para inserir o jogado
            const result = await connection.query(
                `INSERT INTO players (
                id, 
                email,
                last_check_date, scores) 
                VALUES ($1, $2, $3, $4) RETURNING *`,
                [id, email, last_check_date, scores]
            );
            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna o player criado
            return result.rows[0];
        } catch (err) {
            console.error('ErrorUserRepository on register user:', err);
            throw new AppError("ErrorRepository on register player")
        }
    }
    //get all players
    async getAllPlayers(): Promise<PlayerData[] | undefined> {
        try {
            // Obtém uma conexão do pool
            const connection = await this.database.getInstance().connect();

            // Executa a query para buscar todos os jogadores
            const result = await connection.query(`SELECT * FROM players`)

            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna os usuários encontrados
            return result.rows;
        } catch (err) {
            console.error('ErrorUserRepository on get all players:', err);
            throw new AppError("ErrorRepository on get all players")
        }
    }
    // Get Player by Id
    async getPlayerById(id: string): Promise<Player | undefined> {
        try {
            // Obtém uma conexão do pool
            const connection = await this.database.getInstance().connect();

            // Executa a query para buscar todos os usuários
            const result = await connection.query(`SELECT * FROM players WHERE id = $1`, [id])

            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna os usuários encontrados
            return result.rows[0];
        } catch (err) {
            console.error('ErrorUserRepository on get user by id', err);
            throw new AppError("ErrorRepository on get user by id", 400)
        }
    }

    // find player by email
    async findPlayerByEmail(email: string): Promise<PlayerData | null> {
        try {
            // Obtém uma conexão do pool
            const connection = await this.database.getInstance().connect();

            // Executa a query para buscar o usuário pelo email
            const result = await connection.query(`SELECT * FROM players WHERE email = $1`, [email])
            
            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna o usuário encontrado ou null
            return result.rows[0] || null;
        } catch (err) {
            console.error('Error on search player by email:', err);
            throw new AppError("ErrorRepository on search user");
        }
    }

    async updatePlayerByEmail(updatePlayer: PlayerUpdate): Promise<PlayerData | undefined> {
        try {
            // Obtém uma conexão do pool
            const connection = await this.database.getInstance().connect();

            const {
                email,
                last_check_date,
                scores,
            } = updatePlayer;

            // Executa a query 
            const result = await connection.query(
                `UPDATE players
                 SET email = $1,
                     last_check_date = $2, 
                     scores = $3
                 WHERE email = $1
                 RETURNING *`,
                [email, last_check_date, scores]
            );
            // Libera a conexão de volta para o pool
            connection.release();

            // Retorna o usuário encontrado ou null
            return result.rows[0] || null;
        } catch (err) {
            console.error('Error update players by email:', err);
            throw new AppError("ErrorRepository on update player: ", 500);
        }
    }
}