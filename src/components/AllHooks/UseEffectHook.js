import axios from 'axios'
import {useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [data, setdata] = useState('')
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/todos/1')
       .then((response)=>{
        setdata(response.data.title)
        console.log('Api Was Called');
       })
    }, [])

    return (
        <div className="mt-3">
            <h4>3 .UseEffect hooks  </h4>
            <h1> {data}</h1>
        </div>
    )
}

export default UseEffectHook
