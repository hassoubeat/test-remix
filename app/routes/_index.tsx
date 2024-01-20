import { useLoaderData } from "@remix-run/react";
import { mountRequester } from "./enhancer";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Tutorial Todo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const { todos } = await mountRequester();
  return todos;
};

export default function Index() {
  const todos = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Tutorial Todo App</h1>
      {todos.map((todo) => (
        <div key={todo.id} >{todo.title}</div>
      ))}
    </div>
  );
}
