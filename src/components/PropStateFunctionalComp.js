import React, {useState} from 'react';
const Cards = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>name : {props.name} </h1>
            <h2>Email : {props.email}</h2>

             {/* State in functional components */}
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}> Update Num</button>
        </div>
    )
}

export default Cards
