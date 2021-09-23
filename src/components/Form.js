import { useState } from 'react'
export default function Form() {
    const [inputValue, setInputValue] = useState();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [showData, setShowData] = useState({emailAdd:'', mypassword:''})

    // stop form from submit on button click 
    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    //show data on submit when button clicked
    const submittedData = () => {
        setShowData({
            emailAdd: email,
            mypassword : password
        })
        setpassword('')
        setemail('')
    }
    return (
        <>
            <h1> My name is : {inputValue} </h1>
            <label htmlFor="Name">Name : </label>
            {/* by usimg onChange event */}
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
            <br /><br /><br />

            {/* on click of button print value  */}
            <h1>Your email is {showData.emailAdd} and password is {showData.mypassword}</h1>
            <form onSubmit={ onSubmitForm}>
                <label htmlFor="email"> User Email</label>
                <input type="email" id="email" onChange={(e)=>setemail(e.target.value)} value={email} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                <button onClick={submittedData}>submit</button>
            </form>

        </>
    )
}
