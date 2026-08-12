import { createBlog, getAllBlog, UpdateBlog } from "../Controller/blogController.js";
import express from "express"

const router = express.Router()

router.get("/getAll",getAllBlog)

router.post("/create",createBlog)

router.put("/update/:id",UpdateBlog)

export default router
