// src/introduction/03-task-manager/db.ts
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
export default pool;
