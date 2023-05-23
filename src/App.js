import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h2>State Counter</h2>
      <StateCounter />
      <h2>Reducer Counter</h2>
      <ReducerCounter />
    </div>
  );
}

function StateCounter() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <div>{count}</div>
      <div>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInc}>+</button>
      </div>
    </div>
  );
}

function ReducerCounter() {
  const count = 0;
  return (
    <div className="counter">
      <div>{count}</div>
      <div>
        <button onClick={() => {}}>-</button>
        <button onClick={() => {}}>Reset</button>
        <button onClick={() => {}}>+</button>
      </div>
    </div>
  );
}
