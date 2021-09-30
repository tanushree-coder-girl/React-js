import {useRef} from 'react'

const UseRefHook = () => {
    const inputRef = useRef();
    const handleInput = () => {
        console.log(inputRef);
        inputRef.current.value = 1000
        inputRef.current.focus();
        inputRef.current.style.display = 'none'
    }
    return (
        <div className='mx-5 my-5'>
            <input type="text" ref={inputRef} />
            <button onClick={()=>handleInput()}> use Ref Input Box</button>
        </div>
    )
}

export default UseRefHook
