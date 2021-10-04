import {useEffect, useLayoutEffect} from 'react'

const UseLayoutEffectHook = () => {

    useEffect(() => {
      console.log('use Effect called')
    },[])

    useLayoutEffect(() => {
        console.log('use layout effect called  before than use Effect the value is')
    },[])

    return (
        <div className="mt-3">
            <h4>5. use LayoutEffect Hooks</h4>
        </div>
    )
}

export default UseLayoutEffectHook
