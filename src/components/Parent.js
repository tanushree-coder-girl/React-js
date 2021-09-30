import React from 'react'
import Child from './Child';
const Parent = () => {
    const handleEvent = (receiveData)=> {
        alert(receiveData)
    }
    return (
        <div>
            <h1>Hello i am parnet</h1>
            <Child handleEvent={handleEvent} />
        </div>
    )
}

export default Parent
