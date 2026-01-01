import express from "express"
import {registerUserC,encryptMessageC} from "../cntrl/cipherVaultC.js"
import { validateUser } from "../middlewares/validates.js"


const router = express.Router();


router.post("/auth/register",registerUserC);
router.post("/messages/encrypt",validateUser,encryptMessageC);



export default router