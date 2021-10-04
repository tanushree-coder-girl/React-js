import {useState, createContext} from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null);

const UseContextHook = () => {
    const [user, setuser] = useState('')
    return (
        <AppContext.Provider value={{user, setuser}}>
        <div className="mt-3">
            <h4>7 .Use Context hooks  </h4>
            <Login/>
            <User/>
        </div>
        </AppContext.Provider>
    )
}

export default UseContextHook
