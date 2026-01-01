import { registerUserD, encryptMessageD } from "../DAL/cipherVaultD.js";


export const registerUserC = async (req, res) => {
    try {
        const { username, password } = req.body
        const result = await registerUserD(username, password)
        if (result.acknowledged) {
            return res.status(201).send({ "id": result.insertedId, username })
        } else { res.send(`Error: Invalid username `) }
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const encryptMessageC = async (req, res) => {
    try {
        const { username, message, cipherType } = req.body
        const encryptedText = [message.toUpperCase].revers()
        const newEncryptMessage = {
            username,
            cipherType,
            encryptedText
        }
        const result = await encryptMessageD(newEncryptMessage)
        res.send(result)
    } catch (error) {
        res.send(`Error: `, error)
    }
}