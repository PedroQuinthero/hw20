// server/src/config/connection.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dev-db';

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

export default db;           // ✅ This is the key
