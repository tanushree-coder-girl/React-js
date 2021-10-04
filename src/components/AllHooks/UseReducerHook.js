import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1, is: state.is };
    case "text":
      return { count: state.count, is: !state.is };
      default:
      return state;
  }
};

const reducer2 = (state, action) => {
  if (action.type === "increament") {
    return state + 1;
  }
  if (action.type === "decreament") {
    return state + 1;
  }
  return state;
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, is: true });
  const [state2, dispatch2] = useReducer(reducer2, 0);

  return (
    <div className="mt-3">
      <h4>2 .useReducer hooks {state.count} </h4>
      {state.is && <h1> Hy</h1>}
      <button
        onClick={() => {
          dispatch({ type: "INC" });
          dispatch({ type: "text" });
        }}
      >
        Use State
      </button>

      <h3>One more useReducer Example </h3>
      <h1> Num : {state2}</h1>
      <button onClick={() => dispatch2({ type: "increament" })}>
        {" "}
        Increment
      </button>
      <button onClick={() => dispatch2({ type: "decreament" })}>
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default UseReducerHook;
