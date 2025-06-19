import { toUserInDetail, toUserInList } from "./user.dto.js";

export const toTodoInList = (todo) => {
  if (!todo) return null;
  return {
    id: todo._id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  };
};

export const toTodoInDetail = (todo) => {
  const baseDto = toTodoInList(todo);
  if (!baseDto) return null;
  return {
    ...baseDto,
    user: toUserInList(todo.userId),
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  };
};