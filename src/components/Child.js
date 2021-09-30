const Child = (props) => {
    const data = 'Hello welcome from child component'
    
    return (
        <div>
            <h1>Hello i am child</h1>
            <button onClick={()=>props.handleEvent(data)}> Child Click</button>
        </div>
    )
}

export default Child
