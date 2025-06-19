/**
 * todo list model
 *
 * data:
 * 1. title
 * 2. description
 * 3. isCompleted
 * 4. createdAt
 * 5. updatedAt
 * 6. userId
 */

import { model, Schema, Types } from "mongoose";

const todoSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel = model("Todo", todoSchema);

export default TodoModel;
