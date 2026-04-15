import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0);
  return (
    <div className="counter">
      <h2>Cups Order : {count}</h2>
      <p>This is a simple counter component.</p>
        <button onClick={() => setCount(count + 1)}>More order</button>
    </div>
  );
}