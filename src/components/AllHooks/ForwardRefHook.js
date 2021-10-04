import { forwardRef, useState, useImperativeHandle } from "react";

const ForwardRefHook = (props, ref) => {
    const [toggle, settoggle] = useState(false)

    useImperativeHandle(ref,() => ({
        alterToggle (){
            settoggle(!toggle);
        },
    }));

    return (
        <>
            <button> Button From Child </button>
            { toggle && <h1> Toggle </h1> }
        </>
    )
}

export default forwardRef(ForwardRefHook);