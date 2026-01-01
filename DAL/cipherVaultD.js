import { connect } from "../configMongodb.js";
import supabase from "../configSupabase.js"

const db = await connect()
const collectionUsers = db.collection('users')

export const registerUserD = async (username, password) => {
    try {
        const findUniquename = await collectionUsers.findOne({ username })
        if (!findUniquename) {
            const result = await collectionUsers.insertOne({ username, password, encryptedMessagesCount: 0, createdAt: new Date() })
            return result
        } else { return false }
    } catch (error) {
        console.error(`Error: `, error)
    }
};

export const readAllUsresD = async () => {
    try {
        const result = await collectionUsers.find().toArray()
        return result
    } catch (error) {
        console.error(`Error: `, error)
    }
};

export const encryptMessageD = async (objData = {}) => {
    try {
        const { data, error } = await supabase.from('Cipher_Vault').insert(objData)
        if (error) throw error
        return data
    } catch (error) {
        console.error(`Error: `, error)
    }
}