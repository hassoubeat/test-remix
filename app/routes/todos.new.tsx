import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { createTodo } from "~/models/todo.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  await createTodo(String(formData.get("title")));

  return await redirect("/todos");
};

export default function CreateTodos() {

  return (
    <Form method="post">
      <div>
        <div>title</div>
        <input type="text" name="title" id="title" />
      </div>
      <button type="submit">create</button>
    </Form>
  );
}
