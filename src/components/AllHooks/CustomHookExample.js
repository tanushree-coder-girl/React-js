import {useState} from 'react';
import useCustomHook from './Hooks/useCustomHook'
const CustomHookExample = () => {
    const [counting, setcounting] = useState(0)
   
    //custom Hook 
    useCustomHook(counting)
    return (
        <div>
            <h1> {counting}</h1>
            <button onClick={()=>setcounting(counting+1)}>
                Custom Hook Example
            </button>
        </div>
    )
}

export default CustomHookExample;
