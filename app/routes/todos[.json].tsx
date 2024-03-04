import { json } from "@remix-run/node";
import { getTodos, createTodo } from "~/models/todo.server";

import type { ActionFunctionArgs } from "@remix-run/node";

// リソースルートのエンドポイント(https://remix.run/docs/en/main/guides/resource-routes)
// デフォルトコンポーネントをエクスポートしない場合は、html以外のjson, pdfなどを返却するリソースルートとして扱われる
// /todos.jsonにアクセスすると、json形式でtodoの一覧が取得できる
// 
// TODO一覧取得: curl http://localhost:3000/todos.json
export const loader = async () => {
  const todos = await getTodos();
  return json(todos, 200);
};

// GET以外のメソッドを処理したい時はactionをエクスポート
// 
// TODO新規登録: curl -X POST -H "Content-Type: application/json" -d '{"title":"xxx"}' http://localhost:3000/todos.json
export const action = async ({
  request,
}: ActionFunctionArgs) => {
  switch (request.method) {
    case "POST": {
      const payload = await request.json();
      const todo = await createTodo(payload.title);
      return json(todo, 204);
    }
  }
};