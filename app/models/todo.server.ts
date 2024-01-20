import { prisma } from "~/utils/db.server";

export type Todo = {
  id?: number,
  title: string,
  done: boolean,
}

export async function getTodo(id: number) {
  return prisma.todo.findUnique({ where: { id } });
}

export async function getTodos() {
  return prisma.todo.findMany();
}

export async function createTodo(title: string) {
  return prisma.todo.create({ data: { title, done: false } });
}

export async function updateTodo(todo: Todo) {
  return prisma.todo.update({
    where: { id: todo.id },
    data: { title: todo.title, done: todo.done },
  });
}