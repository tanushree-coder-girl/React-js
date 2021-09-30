import React , { forwardRef } from 'react'

const ForwardRefHookComp = (props,ref) => {
    return (
        <>
          <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef (ForwardRefHookComp);


