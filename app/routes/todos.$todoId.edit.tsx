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
    done: formData.get("done") === "complete"
  });

  return await redirect("/todos");
};

export default function EditTodos() {
  const todo = useLoaderData<typeof loader>();

  return (
    <Form method="post">
      <div>
        <div>title</div>
        <input type="text" defaultValue={todo.title} id="title" name="title" />
      </div>
      <div>
        <span>not complete</span>
        <input type="radio" value="not_complete" id="not-done" defaultChecked={!todo.done} name="done" />
        <span>complete</span>
        <input type="radio" value="complete" id="done" defaultChecked={todo.done} name="done" />
      </div>
      <button type="submit">update</button>
    </Form>
  );
}
