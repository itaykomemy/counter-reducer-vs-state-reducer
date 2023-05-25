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
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
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
      <div>{state.count}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncremenet}>+</button>
      </div>
    </div>
  );
}
