import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getTodos } from "~/models/todo.server";

export const loader = async () => {
  const todos = await getTodos();
  return json(todos);
};

export default function Index() {
  const todos = useLoaderData<typeof loader>();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link to={`${todo.id}/edit`}>{todo.title}</Link>
        </li>
      ))}
      <Outlet />
    </ul>
  );
}
