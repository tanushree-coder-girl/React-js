import Dashboard from "./Dashboard";
import { useState } from "react";
const ShortCircuit = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return (
        <div>
            <h1>Short Circuit Evaluation </h1>
            {
                 isLoggedIn && <Dashboard />
            }
            <button onClick={()=>setisLoggedIn(!isLoggedIn)}>Login</button>

            {
                isLoggedIn || 'Kindly login'
            }
        </div>
    )
}

export default ShortCircuit;
