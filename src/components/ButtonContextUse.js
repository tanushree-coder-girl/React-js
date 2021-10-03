import React from 'react'
import { CommonContext } from "./CommonContext";

const ButtonContextUse = () => {
    return (
        <CommonContext.Consumer>
        {
            ({updateColor})=>(
                <div>
                <button onClick={()=>updateColor("yellow")}>Update Context</button>
                <button onClick={()=>updateColor("Red")}>Red Update Context</button>
                </div>
            )
        }
      </CommonContext.Consumer>
    )
}

export default ButtonContextUse
