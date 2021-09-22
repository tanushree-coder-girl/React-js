import React from 'react'

const Events = () => {
    const clickMe = () => {
        alert('clicked me')
    }
    const clickMe2 = () => {
        alert('clicked me2')
    }
    return (
        <div>
        <h1>Events :</h1>
            <button onClick={()=>alert('button is clicked')}> Click Me </button>
            <button onClick={()=>clickMe()}> Click Me </button>
            <button onClick={ clickMe2 }> Click Me </button>

        </div>
    )
}

export default Events
