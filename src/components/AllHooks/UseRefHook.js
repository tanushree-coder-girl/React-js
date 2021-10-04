import {useRef} from 'react'

const UseRefHook = () => {
    const input = useRef()
    const btnClick = () => {
        input.current.focus();
        input.current.value = ""
    }
    return (
        <div className="mt-3">
            <h4>4. Use Ref Hooks</h4>
            <input type="text" ref={input} value='name' />
            <button onClick={btnClick}> use ref</button>
        </div>
    )
}

export default UseRefHook
