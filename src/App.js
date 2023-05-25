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

function reducer(state, action) {
  switch (action.type) {
    case "incremenet":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
  return state;
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, 0);

  function handleIncremenet() {
    dispatch({ type: "incremenet" });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <div>{state}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncremenet}>+</button>
      </div>
    </div>
  );
}
