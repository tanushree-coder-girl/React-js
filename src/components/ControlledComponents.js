import {useState} from 'react'

const ControlledComponents = () => {
    const [inputField, setinputField] = useState()
    const [email, setEmail] = useState();
    return (
        <div>
            <h1>Value of input is : {inputField} and email : {email}</h1>
            <input type="text" value={inputField} onChange={(e)=>setinputField(e.target.value)} />
            <input type="email" defaultValue='xyz@gmail.com' onChange={(e)=>setEmail(e.target.value)} />

        </div>
    )
}

export default ControlledComponents
