import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  user: process.env.USER_DB_USER,
  host: process.env.USER_DB_HOST,
  database: process.env.USER_DB_NAME,
  password: process.env.USER_DB_PASSWORD,
  port: parseInt(process.env.USER_DB_PORT || '5432'),
});