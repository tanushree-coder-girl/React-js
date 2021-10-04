import {useState, useCallback} from "react";
import ChildCallBack from './ChildCallBack'
const UseCallBackHook = () => {
    const [toggle, settoggle] = useState(false)
    let [data, setdata] = useState('welcome in react hooks')

    let returnComment = useCallback(
        (name) => {
            return data = name
        },
        [data],
    )

    // const returnComment = (name) =>{
    //     return data = name;
    // }
  return (
    <div className="mt-3 mb-5">
      <h4>9 .use call Back hooks </h4>
      <ChildCallBack returnComment={returnComment}/>
      <button onClick={()=>{settoggle(!toggle)}}>Toggle</button>
      { toggle && <h1> Showing </h1>}
    </div>
  );
};

export default UseCallBackHook;
