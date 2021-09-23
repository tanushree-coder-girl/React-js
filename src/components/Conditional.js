import { useState } from 'react'

const Conditional = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [age, setage] = useState(18)
    const [toggle, setToggle] = useState(false) 

    //  if(isLoggedIn){
    //      return ( <h1> Welcome To Dashboard </h1>);
    //  }else{
    //     return ( <h1> kindly login </h1>);
    //  }


    return (
        <div>
            {
                isLoggedIn ?
                    <h1> Welcome To Dashboard </h1>
                    : <h1> kindly login </h1>
            }


            {/* if else if condition */}
            {
                age>=0 && age<13 ? <h1> you are a child</h1> :   age>=14 && age<20 ? <h1>you are Teenager</h1>  : <h1> You are an adult </h1>
            }


            {/* Show hide element on button click */}
            {
                toggle ?  <h1> My Message is for You : abc </h1> : ''
            }
           
            <button onClick={()=>setToggle(!toggle)}> Toggle Button</button>
        </div>
    );

}

export default Conditional;
