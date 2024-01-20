import { Link, Outlet } from "@remix-run/react";
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

export default function Index() {
  return (
    <>
      <h1>/todos</h1>
      <Outlet />
      <Link to="/">back</Link>
    </>
  );
}
