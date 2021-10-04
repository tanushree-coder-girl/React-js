import { useState, useMemo } from "react";

const UseMemoHook = () => {
    const random = useMemo(() =>  Math.random()*100, [])
    return (
        <div className='mt-3'>
            <h4>8 .use Memo hooks </h4>
           <h1>{random}</h1>
        </div>
    )
}

export default UseMemoHook
