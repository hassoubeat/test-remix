import { Link, Outlet } from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";

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
