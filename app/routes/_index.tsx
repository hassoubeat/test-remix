import { Link } from "@remix-run/react";

export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Tutorial App</h1>
      <ul>
        <li>
          <Link to="/todos">/todos</Link>
        </li>
        <li>
          <Link to="/tests">/tests</Link>
        </li>
      </ul>
    </div>
  );
}
