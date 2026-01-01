import { config } from "dotenv"
import { MongoClient, Db } from "mongodb"
config()

const client = new MongoClient(process.env.DB_CONECTION)

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("cipher_vault");
            console.log("Connected to MongoDB");
        }
        return db;
    } catch (err) {
        console.error(err);
    }
};