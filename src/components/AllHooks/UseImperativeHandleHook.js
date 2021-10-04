import {useRef} from 'react'
import ForwardRefHook from './ForwardRefHook';

const UseImperativeHandleHook = () => {
    const buttonRef = useRef(null)
    
    return (
        <div className="mt-3">
        <h4>6 .use Imperative handle or forward ref hooks  </h4>
        <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button>

        <ForwardRefHook ref={buttonRef} />

    </div>
    )
}

export default UseImperativeHandleHook
