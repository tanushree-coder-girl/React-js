import { useState , useEffect, useRef} from 'react'

const PreviousPropsFunction = () => {
    const [counting, setcocunting] = useState(0)
    return (
        <div>
            <PropsAnotherFun count={counting} />
            <button onClick={()=>setcocunting(Math.floor(Math.random() * 100))}> Props Count </button>
        </div>
    )
}

const PropsAnotherFun = (props) => {
    const preProps = useRef()
    useEffect(() => {
        preProps.current = props.count;
    })
    const previousProps =  preProps.current;

   return (
       <>
       <h1>Current Props value is {props.count}</h1>
       <h1>Previous Props value is {previousProps}</h1>
       </>
   )
}
export default PreviousPropsFunction
