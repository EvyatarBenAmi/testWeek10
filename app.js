import express from "express";
import { config } from "dotenv";
import  routerApi  from "./router/cipherVaultR.js"

import { readAllUsres } from "./DAL/cipherVaultD.js";

config()
const app = express();
const port = process.env.PORT;

app.use(express.json())


app.use("/api", routerApi)




app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
}) 