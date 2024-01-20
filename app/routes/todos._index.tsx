import { Link, Form, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import { getTodos } from "~/models/todo.server";

export const loader = async () => {
  const todos = await getTodos();
  return json(todos);
};

// 親ルート(/todos)で読み込まれていたスタイルに加えてスタイルを適用
import styles from "~/styles/todos._index.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  const todos = useLoaderData<typeof loader>();

  return (
    <>
      <div>
        <Link to="new">new</Link>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}/edit`}>{todo.title}</Link>
            <Form
              className="delete"
              action={`${todo.id}/delete`}
              method="post"
            >
              <button type="submit">delete</button>
            </Form>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
