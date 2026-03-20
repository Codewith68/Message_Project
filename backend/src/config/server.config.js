import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DEV_DB_URI = process.env.DEV_DB_URI || 'localhost';
export const PROD_DB_URI = process.env.PROD_DB_URI || 'production';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';

