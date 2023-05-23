import "./styles.css";
import { useState, useReducer } from "react";

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

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw "unknown action type: " + action.type;
  }
}

function ReducerCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="counter">
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
}
