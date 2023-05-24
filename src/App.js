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

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <div>{count}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

function ReducerCounter() {
  function handleIncrement() {}

  function handleDecrement() {}

  function handleReset() {}

  return (
    <div className="counter">
      <div>N/A</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}
