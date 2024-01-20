import { Link } from "@remix-run/react";

export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Tutorial Todo App</h1>
      <Link to="/todos">/todos</Link>
    </div>
  );
}
