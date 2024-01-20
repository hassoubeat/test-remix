import { Link } from "@remix-run/react";
import { useState, useCallback } from "react";

// 普通にReactの処理も書ける
const useEnhancer = () => {
  const [text, setText] = useState("");
  const changeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, [setText]);

  return {
    text,
    changeText
  }
}

export default function Index() {
  const { text, changeText } = useEnhancer();

  return (
    <>
      <h1>React On Remix</h1>
      <div> useState text: {text} </div>
      <input type="text" onChange={changeText} value={text} />
      <div>
        <Link to="/">back</Link>
      </div>
    </>
  );
}
