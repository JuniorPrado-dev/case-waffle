import { Database } from '../config/db'; // Importando a classe Database
import { AppError } from '../middlewares/errorMiddleware';
import { Access, AccessData } from '../models/AccessModel';

export class AccessRepository {
    private database: Database;

    // Construtor que recebe a instância de Database
    constructor(database: Database) {
        this.database = database;
    }
    // Método para add acess
    async registerAccess(access: AccessData): Promise<AccessData | undefined> {
        try {
            const {
                id,
                utm_campaign,
                utm_channel,
                utm_medium,
                utm_source,
                email
            } = access;

            const connection = await this.database.getInstance().connect();
            const result = await connection.query(
                `INSERT INTO access (id,
                                    utm_campaign,
                                    utm_channel,
                                    utm_medium,
                                    utm_source,
                                    email ) 
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [id, utm_campaign, utm_channel, utm_medium, utm_source,email]
            );
            connection.release();
            return result.rows[0];

        } catch (err) {
            console.error('ErrorUserRepository on register user:', err);
            throw new AppError("ErrorRepository on register Access")
        }
    }

    // Get all Access
    async getAllAccesses(): Promise<AccessData[] | undefined> {
        try {
            const connection = await this.database.getInstance().connect();

            const result = await connection.query(`SELECT * FROM access`)

            connection.release();

            return result.rows;
        } catch (err) {
            console.error('ErrorUserRepository on get all access:', err);
            throw new AppError("ErrorRepository on get all access")
        }
    }
    // Get Access by email
    async getAccessByEmail(email:string): Promise<AccessData | undefined> {
        try {
            const connection = await this.database.getInstance().connect();

            const result = await connection.query(`SELECT * FROM access WHERE email = $1`,[email])

            connection.release();

            return result.rows[0];
        } catch (err) {
            console.error('ErrorUserRepository on get all access:', err);
            throw new AppError("ErrorRepository on get all access")
        }
    }

}