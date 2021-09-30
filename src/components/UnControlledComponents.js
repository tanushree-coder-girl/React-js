import {useRef} from 'react'

const UnControlledComponents = () => {
    const inputRef = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        let email = document.getElementById('emailId').value;
        console.log(email);
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" ref={inputRef} />
            <input type="email" id='emailId' />
            <input type="submit" value="Login" />
        </form>
    )
}

export default UnControlledComponents
