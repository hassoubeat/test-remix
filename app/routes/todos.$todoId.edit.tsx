import { Form, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getTodo, updateTodo } from "~/models/todo.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const todo = await getTodo(Number(params.todoId));
  if (!todo) throw Error("not found");
  return json(todo);
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();

  await updateTodo({
    id: Number(params.todoId),
    title: String(formData.get("title")),
    done: formData.get("done") === "完了"
  });

  return await redirect("/todos");
};

export default function EditTodos() {
  const todo = useLoaderData<typeof loader>();

  return (
    <Form method="post" className="flex items-end space-x-4 bg-cyan-200">
      <div>
        <div>タイトル</div>
        <input type="text" defaultValue={todo.title} id="title" name="title" />
      </div>
      <div>
        <span>未了</span>
        <input type="radio" value="未了" id="not-done" defaultChecked={!todo.done} name="done" />
        <span>完了</span>
        <input type="radio" value="完了" id="done" defaultChecked={todo.done} name="done" />
      </div>
      <button type="submit">更新</button>
    </Form>
  );
}
