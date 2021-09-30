import { useRef } from "react";
import ForwardRefHookComp from "./ForwardRefHookComp";

const ForwardRefHook = () => {
  const inputRef = useRef();

  const handleInput = () => {
    //  console.log(inputRef);
    inputRef.current.value = 1000;
  };

  return (
    <div className="mx-5 my-5">
      <ForwardRefHookComp ref={inputRef}/>
      <button onClick={() => handleInput()}> Forward Ref Input Box</button>
    </div>
  );
};

export default ForwardRefHook;
