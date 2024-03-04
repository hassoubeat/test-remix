import { json } from "@remix-run/node";
import { getTodo, updateTodo, deleteTodo } from "~/models/todo.server";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

// リソースルートのエンドポイント(https://remix.run/docs/en/main/guides/resource-routes)
// デフォルトコンポーネントをエクスポートしない場合は、html以外のjson, pdfなどを返却するリソースルートとして扱われる
// /todos.jsonにアクセスすると、json形式でtodoの一覧が取得できる
// 
// TODO取得: curl http://localhost:3000/todos/$todoId.json
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const todo = await getTodo(Number(params.todoId));
  if (!todo) throw Error("not found");
  return json(todo, 200);
};

// GET以外のメソッドを処理したい時はactionをエクスポート
// 
// TODO更新: curl -X PUT -H "Content-Type: application/json" -d '{"title":"xxx", "done":"complete"}' http://localhost:3000/todos/$todoId.json
// TODO削除: curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/todos/$todoId.json
export const action = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  switch (request.method) {
    case "PUT": {
      const payload = await request.json();
      const todo = await updateTodo({
        id: Number(params.todoId),
        title: String(payload.title),
        done: payload.done === "complete"
      });
      return json(todo, 204);
    }
    case "DELETE": {
      await deleteTodo(Number(params.todoId));
      return json({}, 204);
    }
  }
};