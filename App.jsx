import { useState } from "react";
import "./App.css"; // import styles

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="app">
      {/* Counter */}
      <div className="card">
        <h2>Counter</h2>
        <p className="count">Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      {/* Text Preview */}
      <div className="card">
        <h2>Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p className="preview">Preview: {text}</p>
      </div>
    </div>
  );
}
