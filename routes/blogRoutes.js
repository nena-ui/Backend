import { createBlog, getAllBlog, UpdateBlog } from "../Controller/blogController.js";
import express from "express"
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/getAll",verifyToken, getAllBlog)

router.post("/create",createBlog)

router.put("/update/:id",UpdateBlog)

export default router
