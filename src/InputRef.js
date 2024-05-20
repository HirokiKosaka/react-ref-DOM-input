import { useRef, useState } from "react";
import "./App.css";

export const InputRef = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()
  return (
    <>
      <h1>Input Ref</h1>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => {inputRef.current.focus()}}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
