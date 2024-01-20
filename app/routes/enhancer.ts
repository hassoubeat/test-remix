import { json } from "@remix-run/node";
import { getTodos } from "~/models/todo.server";

export const mountRequester = async () => {
  const todos = await getTodos();
  return  { todos: json(todos) };
};