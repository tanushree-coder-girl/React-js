import { useState } from 'react'

const ComplexForm = () => {
    const [formData, setformData] = useState({
            fname:'',
            lname:'',
            email:''
        })

    const [details, setdetails] = useState({firstname :'', lastname :'', emailAdd : ''});

    const inputHandler = (event)=> {
       //console.log(event);
        const { name } = event.target;
        const { value } = event.target;
        setformData((previousValue)=>{
            if(name === 'fname'){
                return (
                {
                    fname : value,
                    lname : previousValue.lname,
                    email : previousValue.email
                }
                )
            }else if(name === 'lname'){
                return (
                    {
                        fname : previousValue.fname,
                        lname : value,
                        email : previousValue.email
                    }
                    )
            }else{
                return (
                    {
                        fname : previousValue.fname,
                        lname : previousValue.lname,
                        email : value
                    }
                    )
            }
        });
    }

    const showData = () => {
        setdetails({
            firstname : formData.fname,
            lastname : formData.lname,
            emailAdd : formData.email
        });
    }
    return (
        <>
        <h1>Complex form with multiple columns</h1>
        <h2>Fname : {details.firstname} , Lname: {details.lastname} , email : {details.emailAdd} </h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label htmlFor="fname">FirstName</label>
                <input type="text" name="fname" id="fname" onChange={inputHandler} value={formData.fname}/>
            </div>
            <div>
                <label htmlFor="lname">LastName</label>
                <input type="text" name="lname" id="lname"  onChange={inputHandler} value={formData.lname}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={inputHandler} value={formData.email}/>
            </div>
            <input type="submit" value="Submit Form" onClick={showData} />
        </form>
        </>
    )
}

export default ComplexForm
