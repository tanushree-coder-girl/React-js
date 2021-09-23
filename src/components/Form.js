import {useState} from 'react'
export default function Form() {
    const [inputValue, setInputValue] = useState();
    return (
        <>
            <h1> My name is : {inputValue} </h1>
            <label htmlFor="Name">Name : </label>
            {/* by usimg onChange event */}
            <input type="text" onChange={ (event)=>setInputValue(event.target.value)} value={inputValue} />
          
        </>
    )
}
