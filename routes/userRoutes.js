import express from "express"
import { createUser, getAllUser, login } from "../Controller/userController.js"

const router = express.Router()

router.get("/getAll",getAllUser)

router.post("/create",createUser)

router.post("/login",login)

export default router