import { prisma } from "~/utils/db.server";

export async function getTodo(id: number) {
  return prisma.todo.findUnique({ where: { id } });
}

export async function getTodos() {
  return prisma.todo.findMany();
}