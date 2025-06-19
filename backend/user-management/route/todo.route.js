import { Router } from "express";
import todoController from "../controller/todo.controller.js";
const todoRouter = Router();

// Create Todo
todoRouter.post('/', todoController.createTodo)

// Get All Todos
todoRouter.get('/', todoController.getAllTodos)

// Get Single Todo
todoRouter.get('/:id', todoController.getTodo)

// // Update Todo
// todoRouter.put('/:id', todoController.updateTodo)


export default todoRouter;
