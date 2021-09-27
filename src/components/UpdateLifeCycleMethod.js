import React, { Component } from 'react'

export default class UpdateLifeCycleMethod extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    //    shouldComponentUpdate (){
    //        console.log('shouldcomponetupdate: updating Phas' + this.state.count)
    //        return false;
    //    }

   getSnapshotBeforeUpdate (prevprops , prevState) {
       console.log("getSnapshot Before Update is : " +prevState.count);
   }
    componentDidUpdate(prevprops , prevstate) {
        console.log('component did updateed : updating phase' + prevstate.count);
    }

    render() {
        console.log('render : updating phase')
        return (
            <>
                <h1> {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> Update lifecycle method</button>
            </>
        )
    }
}
