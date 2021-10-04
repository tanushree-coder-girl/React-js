import { useState } from "react";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import UseImperativeHandleHook from "./UseImperativeHandleHook";
import UseContextHook from "./UseContextHook";
import UseMemoHook from "./UseMemoHook";
import UseCallBackHook from "./UseCallBackHook";

const Hooks = () => {
  const [count, setcount] = useState(0);
  const [is, setIs] = useState(true);

  const updateState = () => {
    setcount(count + 1);
    setIs(!is);
  };

  return (
    <div className="mt-3">
      <h1>All React Hooks</h1>
      <h4>1 .Usestate hooks {count} </h4>
      {is && <h1> Hy</h1>}
      <button onClick={updateState}>Use State </button>
      <UseReducerHook />

      <UseEffectHook />

      <UseRefHook/>

      <UseLayoutEffectHook />

      <UseImperativeHandleHook />

      <UseContextHook />

      <UseMemoHook/>

      <UseCallBackHook />

    </div>
  );
};

export default Hooks;
