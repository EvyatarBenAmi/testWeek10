import { readAllUsresD } from "../DAL/cipherVaultD.js"

export const validateUser = async (req, res, next) => {
    try {
        const data = await readAllUsresD()
        const { username, password } = req.body
        const user = data.find(value => value.username === username && value.password == password)
        user ? next() : res.status(401).send(`Invalid user!`)
    } catch (error) {
        res.send(`Error: `, error)
    }
};