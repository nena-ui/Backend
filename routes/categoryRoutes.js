import express from "express"
import { createCategory, getCategory } from "../Controller/categoryController.js"

const router = express.Router()

router.post("/create",createCategory)

router.get("/getAll",getCategory)

export default router
