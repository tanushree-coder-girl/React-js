import React from 'react'
import {withRouter} from 'react-router-dom'
const User = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            <h1>User {props.match.params.name}</h1>
        </div>
    )
}

export default withRouter(User)
