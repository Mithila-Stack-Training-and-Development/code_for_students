import { Types } from "mongoose";
import TodoModel from "../model/todo.model.js";
import { toTodoInDetail, toTodoInList } from "../dto/todo.dto.js";

const todoController = {
  createTodo: async (req, res) => {
    try {
      const { title, description } = req.body;
      const userId = req.user.id;

      //   Create Todo
      const todo = await TodoModel.create({
        userId,
        title,
        description,
      });

      //   if todo is created successfully
      if (!todo) {
        return res
          .status(400)
          .json({ status: "error", message: "Todo not created" });
      }

      return res.status(201).json({
        status: "success",
        message: "Todo created successfully",
        todo,
      });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  },

  getAllTodos: async (req, res) => {
    try {
      const todos = await TodoModel.find({
        userId: new Types.ObjectId(req.user.id),
      });

      if (!todos) {
        return res
          .status(400)
          .json({ status: "error", message: "No todos found" });
      }

      return res.status(200).json({ status: "success", todos });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  },

  getTodo: async (req, res) => {
    try {
      const { id } = req.params;

      const todo = await TodoModel.findOne({
        _id: id,
        userId: req.user.id,
      }).populate({
        path: "userId",
      });

      if (!todo) {
        return res
          .status(400)
          .json({ status: "error", message: "Todo not found" });
      }

      return res.status(200).json({
        status: "success",
        todo: toTodoInDetail(todo),
      });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  },
};

export default todoController;
