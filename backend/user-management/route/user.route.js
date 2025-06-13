import { Router } from "express";
import UserController from "../controller/user.controller.js";

import { authenticate } from "../middleware/autheticate.middleware.js";
import { validate } from "../middleware/validation.js";

const userRouter = Router();

// Get All Users
userRouter.get("/", authenticate, UserController.getAllUsers);

// Get User By Id
userRouter.get("/:id", authenticate, UserController.getUserById);

// Create User
userRouter.post("/", validate, UserController.createUser);

// Update User
userRouter.put("/:id", UserController.updateUser);

// Delete User
userRouter.delete("/:id", UserController.deleteUser);

// Login User
userRouter.post("/login", UserController.loginUser);

export default userRouter;
