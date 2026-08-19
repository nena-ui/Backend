import express from "express"
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../Controller/todoController.js"


const router = express.Router()

router.post("/create", createTodo)

router.get("/getAll", getAllTodo)

router.put("/update/:id",updateTodo)

router.delete("/delete/:id", deleteTodo)

export default router;