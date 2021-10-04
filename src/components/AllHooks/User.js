import {useContext} from 'react'
import { AppContext } from './UseContextHook'
const User = () => {
    const {user} = useContext(AppContext)
    return (
        <div>
            <h1>User : {user}</h1>
        </div>
    )
}

export default User
