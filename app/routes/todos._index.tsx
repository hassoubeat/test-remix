import { Link, Form, Outlet, useRouteLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import type { Todo } from "~/models/todo.server";

// 親ルート(/todos)で読み込まれていたスタイルに加えてスタイルを適用
import styles from "~/styles/todos._index.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  // 親のloaderを呼び出してTodo一覧を取得
  const todos = useRouteLoaderData("routes/todos") as Todo[];

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
