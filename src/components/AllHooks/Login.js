import {useContext} from 'react'
import { AppContext } from './UseContextHook'
const Login = () => {
    const {setuser} = useContext(AppContext)
    return (
        <div>
          <input type="text" onChange={(e)=>{setuser(e.target.value)}} />
        </div>
    )
}

export default Login
