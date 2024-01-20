import { Link, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getTodos } from "~/models/todo.server";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

// remix標準のスタイル適用(https://remix.run/docs/en/main/styling/css)
import styles from "~/styles/todos.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

// meta情報の設定(https://remix.run/docs/en/main/route/meta)
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Tutorial App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// 本ルートがレンダリング時に呼び出される処理、loaderという(https://remix.run/docs/en/main/route/loader)
// レンダリングに必要なデータを取ってくるのに主に利用される(mountRequest的な役割)
export const loader = async () => {
  const todos = await getTodos();
  return json(todos);
};

export default function Index() {
  return (
    <>
      <h1>/todos</h1>
      <Outlet />
      <Link to="/">back</Link>
    </>
  );
}
