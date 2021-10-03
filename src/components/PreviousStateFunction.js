import React, { useState } from 'react'

const PreviousStateFunction = () => {
    const [random, setRandom] = useState(0);
    const updateCounter = () => {
        let rand = Math.floor(Math.random() * 100);
        setRandom ((previousState)=>{
            console.log('the previous state is '+ previousState)
            return rand;
        })
    }
    return (
        <div>
            <h1>Get PreviousState in functional components</h1>
            <h1> {random} </h1>
            <button onClick={()=>updateCounter()}> Random Numbers</button>
        </div>
    )
}

export default PreviousStateFunction;
