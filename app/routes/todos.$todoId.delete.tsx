import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { deleteTodo } from "~/models/todo.server";

// 削除画面は不要なので削除のactionだけ定義している
export const action = async ({ params }: ActionFunctionArgs) => {
  await deleteTodo(Number(params.todoId));

  // 呼び出し元に帰らないと/todos/:todoId/delete画面に居続ける(レイアウトが定義されていないため何も表示されない)
  return await redirect("/todos");
};