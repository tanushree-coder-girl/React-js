import { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);

  let multicountmemo = useMemo(function multicount(){
      console.log('usememo')
    return number
  },[number])

  return (
    <div>
      <h1>The number is {number}</h1>
      <h2>{multicountmemo}</h2>
      <button onClick={() => setNumber(number+1)}>
        Use Memo Hooks Functional Component
      </button>
    </div>
  );
};

export default UseMemoHook;
