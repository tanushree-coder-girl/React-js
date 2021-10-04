import {useEffect} from 'react'

const ChildCallBack = ({returnComment }) => {
    //console.log(returnComment)
    useEffect(() => {
     console.log('function was called');
    }, [returnComment])
    return (
        <h1>
            {
                returnComment('yoy, react hooks')
            }
        </h1>
    )
}

export default ChildCallBack
