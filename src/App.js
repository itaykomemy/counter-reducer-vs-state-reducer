import "./styles.css";
import { useReducer } from "react";

export default function App() {
  return (
    <div className="App">
      <h2>Reducer Counter</h2>
      <ReducerCounter />
    </div>
  );
}

function ReducerCounter() {
  function handleIncremenet() {}
  function handleDecrement() {}
  function handleReset() {}

  return (
    <div className="counter">
      <div>n/a</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncremenet}>+</button>
      </div>
    </div>
  );
}
